const { getTerm } = require("../../db/queries/terms_queries")
const { parseCombo } = require("../../helpers")

module.exports = async function renderSingleTerm(req, res, next) {
  const { term, combo } = req.params

  const { isValidCombo, source, target } = parseCombo(combo)
  if (!isValidCombo) next()

  const terms = await getTerm({ source, target, term })

  res.render("TermPage", {
    source,
    target,
    terms,
    term
  })
}
