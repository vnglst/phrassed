const knex = require("../connection")
const { languages } = require("../../mappers")

function searchInPhrases({ query, l1, l2 }) {
  const column1 = languages[l1]
  const column2 = languages[l2]
  return knex("phrases")
    .select(column1, column2)
    .whereRaw(
      `to_tsvector('${l1}', ${column1}) @@ to_tsquery('${l1}', '${query}')`
    )
}

module.exports = {
  searchInPhrases
}
