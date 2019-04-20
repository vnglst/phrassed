const { searchTerm } = require("../db/queries/terms_queries")
const { searchInPhrases } = require("../db/queries/phrases_queries")
const { addHighlights } = require("../helpers")

const SOURCE_LANG = "german" // TODO: from user
const TARGET_LANG = "dutch"

module.exports = async function renderIndex(req, res) {
  const { q } = req.query
  const l1 = SOURCE_LANG
  const l2 = TARGET_LANG

  const terms = await searchTerm({ l1, l2, term: q })
  const phrases = await searchInPhrases({ l1, l2, query: q })

  const title = `Phrassed - terminology translations with example phrases`
  res.render("index", {
    title,
    l1,
    l2,
    terms,
    phrases: addHighlights({ l1, l2, phrases, terms, query: q }),
    query: q
  })
}
