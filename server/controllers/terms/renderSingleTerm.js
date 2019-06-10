const { getTerm } = require("../../db/queries/termsQueries")
const { searchInPhrases } = require("../../db/queries/phrasesQueries")
const { decodeSlug } = require("../../helpers/url")

module.exports = async function renderSingleTerm(req, res, next) {
  const term = decodeSlug(req.params.term)
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
