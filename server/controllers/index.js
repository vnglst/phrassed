const { searchTerm } = require("../db/queries/terms_queries")
const { searchInPhrases } = require("../db/queries/phrases_queries")

module.exports = async function renderIndex(req, res) {
  const { q } = req.query
  const source = "de" // from user?
  const target = "nl"

  const terms = await searchTerm({ source, target, term: q })
  const phrases = await searchInPhrases({ source, target, query: q })

  res.render("IndexPage", {
    source,
    target,
    terms,
    phrases,
    query: q
  })
}
