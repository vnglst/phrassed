const { getTerm } = require("../../db/queries/terms_queries")
const { searchInPhrases } = require("../../db/queries/phrases_queries")

module.exports = async function renderSingleTerm(req, res, next) {
  const { term } = req.params
  const { source, target } = req.phrassed

  const terms = await getTerm({ source, target, term })
  const phrases = await searchInPhrases({ source, target, query: term })

  res.render("TermPage", {
    source,
    target,
    terms,
    phrases,
    term
  })
}
