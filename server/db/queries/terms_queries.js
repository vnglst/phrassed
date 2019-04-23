const knex = require("../connection")

module.exports.getAllTerms = function getAllTerms() {
  return knex("terms").select("*")
}

module.exports.getTermsForId = function getTerms({ id }) {
  return knex("terms")
    .select("*")
    .where("termid", id)
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

module.exports.getSuggestions = function getSuggestions({ q, source }) {
  return knex("terms")
    .select("term")
    .distinct()
    .where("language", source)
    .where("term", "ilike", `${q}%`)
    .whereNot("term", "ilike", q)
}
