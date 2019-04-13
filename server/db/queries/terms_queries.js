const knex = require("../connection")

const langTermMapper = {
  german: "de",
  dutch: "nl",
  english: "en"
}

module.exports.getAllTerms = function getAllTerms() {
  return knex("terms").select("*")
}

module.exports.getTerm = function getTerm({ term, l1, l2 }) {
  const subquery = knex("terms")
    .select("termid")
    .where("language", langTermMapper[l1])
    .where("term", term)

  return knex("terms")
    .select("*")
    .where("language", langTermMapper[l2])
    .where("termid", "in", subquery)
}

module.exports.searchTerm = function searchTerm({ term, l1, l2 }) {
  const subquery = knex("terms")
    .select("termid")
    .where("language", langTermMapper[l1])
    .where("term", "ilike", `%${term}%`)

  return knex("terms")
    .select("*")
    .where("language", langTermMapper[l2])
    .where("termid", "in", subquery)
}

module.exports.suggestions = function suggestions({ q, l1 }) {
  return knex("terms")
    .select("term")
    .distinct()
    .where("language", langTermMapper[l1])
    .where("term", "ilike", `${q}%`)
    .whereNot("term", "ilike", q)
}
