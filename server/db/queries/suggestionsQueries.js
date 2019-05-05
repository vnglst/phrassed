const knex = require("../connection")

module.exports.searchSuggestions = function searchSuggestions({ q, source }) {
  return knex("terms")
    .select("term")
    .distinct()
    .where("language", source)
    .where("term", "ilike", `%${q}%`)
}
