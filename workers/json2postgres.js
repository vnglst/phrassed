const knex = require("../../server/db/connection")
const JSONStream = require("JSONStream")
const { Writable } = require("stream")

function insertTerm(term) {
  return knex("terms").insert(term)
}

process.stdin
  .pipe(JSONStream.parse("*"))
  .pipe(saveToDb())
  .on("done", function() {
    console.log("All done!")
    process.exit(0)
  })

function saveToDb() {
  return new Writable({
    objectMode: true,

    write(term, encoding, callback) {
      console.log(term)
      insertTerm(term)
        .then(() => {
          console.log("written: ", term.termid)
          callback()
        })
        .catch(e => {
          console.log("error writing", e)
          callback()
        })
    }
  })
}
