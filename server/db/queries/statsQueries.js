const knex = require("../connection")

exports.countIds = function countIds() {
  return knex("terms").count("termid")
}

exports.countDistinctIds = function countDistinctIds() {
  return knex("terms").countDistinct("termid")
}

exports.getLangCounts = function getLangCounts() {
  const getLangs = knex("terms")
    .select("language")
    .distinct()

  const q = knex("terms")
    .select("language")
    .count()
    .where("language", "in", getLangs)
    .groupBy("language")

  return q
}
