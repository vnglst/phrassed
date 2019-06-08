const program = require("commander")
const fs = require("fs")
const zlib = require("zlib")

const parser = require("./parser")
const packageJson = require("../package.json")
const decompress = zlib.createBrotliDecompress()

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
  .option("-i --input <file>", "input file: gzipped tbx format")
  .option("-o --output <file>", "output filename (.json)")
  .option(
    "-e, --encoding <encoding>",
    "encoding of tbx file, e.g. utf16le. Default is utf8",
    "utf8"
  )
  .option(
    "--nofail",
    "don't fail on error, you could be missing some data",
    false
  )
  .on("--help", function() {
    console.log("\n  Examples:\n")
    console.log(
      "    $ node tbx2json.js --input some-termbase.tmx.gz --output output.json"
    )
    console.log("\n  With jq for validation:\n")
    console.log(
      '    $ node tbx2json.js --input some-termbase.tmx.gz --nofail | jq "."'
    )
  })
  .parse(process.argv)

const inputTbx = program.input
const outputFile = program.output
const encoding = program.encoding
const nofail = program.nofail

const fileContents = fs.createReadStream(inputTbx)
const outputStream = outputFile
  ? fs.createWriteStream(outputFile)
  : process.stdout

const inputStream = fileContents.pipe(decompress)

parser({ inputStream, outputStream, encoding, nofail })
