const knex = require("../connection")

module.exports.getAllIds = function getAllIds() {
  return knex("terms")
    .select("termid")
    .distinct()
    .limit(500)
}

module.exports.getTermsForId = function getTerms({ id }) {
  return knex("terms")
    .select("*")
    .where("termid", id)
}
