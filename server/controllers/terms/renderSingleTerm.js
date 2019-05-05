const { getTerm } = require("../../db/queries/termsQueries")
const { searchInPhrases } = require("../../db/queries/phrasesQueries")

module.exports = async function renderSingleTerm(req, res, next) {
  const { term } = req.params
  const { source, target } = req.phrassed

  const terms = await getTerm({ source, target, term })
  const phrases = await searchInPhrases({ source, target, query: term })

  res.render("SingleTerm", {
    source,
    target,
    terms,
    phrases,
    term
  })
}
