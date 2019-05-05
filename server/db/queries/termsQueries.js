const knex = require("../connection")

module.exports.getAllTerms = function getAllTerms({ source }) {
  return knex("terms")
    .select("term")
    .where("language", source)
    .distinct()
}

module.exports.getTerm = function getTerm({ term, source, target }) {
  const subquery = knex("terms")
    .select("termid")
    .where("language", source)
    .where("term", term)

  return knex("terms")
    .select("*")
    .where("language", target)
    .where("termid", "in", subquery)
}

module.exports.searchTerm = function searchTerm({ term, source, target }) {
  const subquery = knex("terms")
    .select("termid")
    .where("language", source)
    .where("term", "ilike", `%${term}%`)

  return knex("terms")
    .select("*")
    .where("language", target)
    .where("termid", "in", subquery)
}
