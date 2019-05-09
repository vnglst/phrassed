const knex = require("../connection")

module.exports.getAllTerms = function getAllTerms({ source }) {
  return knex("terms")
    .select("term")
    .where("language", source)
    .distinct()
    .limit(500)
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
  // TODO: simplify this query and improve performance
  const targetLanguage = knex("terms")
    .select("termid")
    .where("language", target)
    .whereNotNull("term")

  const fullTextQuery = knex("terms")
    .select("termid")
    .where("termid", "in", targetLanguage)
    .where("language", source)
    .whereRaw(
      `to_tsvector('german', term) @@ plainto_tsquery('german', '${term}')`
    )

  const mainQuery = knex("terms")
    .select("*")
    .where("termid", "in", fullTextQuery)
    .whereRaw(
      `(("language" = '${source}' AND
         to_tsvector('german', term) @@ plainto_tsquery('german', '${term}')) OR
            "language" = '${target}')`
    )
    .orderByRaw("termid ASC")
    .limit(500)

  return mainQuery
}
