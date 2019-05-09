const knex = require("../connection")

module.exports.searchSuggestions = function searchSuggestions({ q, source }) {
  // TODO: simplify this query and improve performance

  const targetLanguage = knex("terms")
    .select("termid")
    .where("language", "nl")
    .whereNotNull("term")

  const mainQuery = knex("terms")
    .select("term")
    .where("termid", "in", targetLanguage)
    .where("language", source)
    .where("term", "ilike", `${q}%`)
    .whereRaw("length(term) < 20")
    .orderBy("term")
    .distinct()
    .limit(10)

  return mainQuery
}
