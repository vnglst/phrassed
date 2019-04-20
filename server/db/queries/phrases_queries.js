const knex = require("../connection")
const { languages } = require("../../helpers")

module.exports.searchInPhrases = ({ query, l1, l2 }) => {
  const column1 = languages[l1]
  const column2 = languages[l2]
  return knex("phrases")
    .select(column1, column2)
    .whereRaw(
      `to_tsvector('${l1}', ${column1}) @@ plainto_tsquery('${l1}', '${query}')`
    )
}
