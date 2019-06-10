const knex = require("../connection")

// postgres accepts following strings as inputs for languages
const toPostgresLang = {
  de: "german",
  nl: "dutch",
  en: "english",
  fr: "french",
  es: "spanisch",
  pt: "portuguese",
  fi: "finnish",
  it: "italian",
  sv: "swedisch",
  el: "greek"
}

exports.searchInPhrases = ({ query, source, target }) => {
  const column1 = source
  const column2 = target
  const postgresLang = toPostgresLang[source]
  return knex("phrases")
    .select(column1, column2)
    .whereRaw(
      `to_tsvector('${postgresLang}', ${column1}) @@ plainto_tsquery('${postgresLang}', '${query}')`
    )
    .whereNotNull(column2)
}
