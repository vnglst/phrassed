const knex = require("../connection")

const langTermMapper = {
  german: "de",
  dutch: "nl",
  english: "en"
}

function getAllTerms() {
  return knex("terms").select("*")
}

function getTerm({ term, l1, l2 }) {
  const subquery = knex("terms")
    .select("termid")
    .where("language", langTermMapper[l1])
    .where("term", term)

  return knex("terms")
    .select("*")
    .where("language", langTermMapper[l2])
    .where("termid", "in", subquery)
}

function searchTerm({ term, l1, l2 }) {
  const subquery = knex("terms")
    .select("termid")
    .where("language", langTermMapper[l1])
    .where("term", "ilike", `%${term}%`)

  return knex("terms")
    .select("*")
    .where("language", langTermMapper[l2])
    .where("termid", "in", subquery)
}

module.exports = {
  getAllTerms,
  getTerm,
  searchTerm
}
