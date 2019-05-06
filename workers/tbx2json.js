const program = require("commander")
const XmlStream = require("xml-stream")
const packageJson = require("./package.json")

/*
	Outputs following JSON
	[
		{
			termid: string,			// "IATE-14"
			language: string,		// "de"
			term: string,			  // "Anlage"
		},
		etc.
	]
*/

//
// Command line interface
//

program
  .version(packageJson.version)
  .option(
    "-e, --encoding <encoding>",
    "encoding of tbx file, e.g. utf16le. Default is utf8"
  )
  .option("--nofail", "don't fail on error, you could be missing some data")
  .on("--help", function() {
    console.log("\n  Examples:\n")
    console.log("    $ cat some-termbase.tbx | node tbx2json.js")
    console.log("    $ cat some-termbase.tbx | tbx2json")
    console.log("\n  With jq and unzip:\n")
    console.log(
      '    $ unzip -p example-termbase.zip | node tbx2json.js --nofail | jq "." > output.json'
    )
  })
  .parse(process.argv)

const encoding = program.encoding || "utf8" // Default encoding = utf8
const nofail = program.nofail || false

const output = process.stdout
const input = process.stdin
  .setEncoding(encoding)
  .on("end", () => output.write("]")) // close array

output.write("[") // open array for valid JSON

parser(input, output)

function parser(inputStream, outputStream) {
  const xml = new XmlStream(inputStream, encoding)

  // for parsing
  let first = true
  let language = null
  let id = null

  xml.collect("langSet")

  xml.on("startElement: termEntry", el => {
    id = el.$.id
  })

  xml.on("endElement: termEntry", () => {
    id = null
  })

  xml.on("startElement: langSet", el => {
    language = el.$["xml:lang"]
  })

  xml.on("endElement: langSet", () => {
    language = null
  })

  xml.on("endElement: term", item => {
    // Hacky, adds comma before every JSON object (except first)
    let output = first ? "" : ",\n"
    first = false
    const term = {
      termid: id,
      language,
      term: item.$text
    }
    output += JSON.stringify(term, null, 4)
    outputStream.write(output)
  })

  xml.on("error", message => {
    if (nofail) return
    throw new Error(message)
  })
}
