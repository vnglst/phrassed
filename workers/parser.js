const XmlStream = require("xml-stream")

function parser({ inputStream, outputStream, encoding, nofail }) {
  outputStream.write("[") // open array for valid JSON
  inputStream.on("end", () => outputStream.write("]")) // close array when stream ends

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

module.exports = parser
