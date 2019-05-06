const knex = require("../connection")

module.exports.searchSuggestions = function searchSuggestions({ q, source }) {
  return knex("terms")
    .select("term")
    .where("language", source)
    .where("term", "ilike", `${q}%`)
    .orderBy("term")
    .limit(10)
}
