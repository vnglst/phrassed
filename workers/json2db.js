const knex = require("../server/db/connection")
const JSONStream = require("JSONStream")
const { Writable } = require("stream")

function insertTerm(term) {
  return knex("terms").insert(term)
}

let totalTerms = 0

process.stdout.write("Writing terms.")

process.stdin
  .pipe(JSONStream.parse("*"))
  .pipe(saveToDb())
  .on("finish", function() {
    console.log(` All done! ${totalTerms} terms written to db.`)
    process.exit(0)
  })

function saveToDb() {
  return new Writable({
    objectMode: true,
    write(term, encoding, callback) {
      insertTerm(term)
        .then(() => {
          totalTerms++
          if (totalTerms % 1000 === 0) process.stdout.write(".")
          callback()
        })
        .catch(e => {
          console.log("error writing", e)
          callback()
        })
    }
  })
}
