const { searchTerm } = require("../db/queries/termsQueries")
const { searchInPhrases } = require("../db/queries/phrasesQueries")

module.exports.renderIndex = async function renderIndex(req, res) {
  const { q } = req.query
  const source = "de" // from user?
  const target = "nl"

  const terms = await searchTerm({ source, target, term: q })
  const phrases = await searchInPhrases({ source, target, query: q })

  res.render("Index", {
    source,
    target,
    terms,
    phrases,
    query: q
  })
}
