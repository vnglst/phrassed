const knex = require("../connection")

exports.getAllIds = function getAllIds() {
  return knex("terms")
    .select("termid")
    .distinct()
    .limit(500)
}

exports.getTermsForId = function getTerms({ id }) {
  return knex("terms")
    .select("*")
    .where("termid", id)
}
