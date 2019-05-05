const { getAllTerms } = require("../../db/queries/terms_queries")
const { parseCombo } = require("../../helpers")

module.exports = async function renderAllTerms(req, res, next) {
  const { combo } = req.params

  const { isValidCombo, source, target } = parseCombo(combo)
  if (!isValidCombo) next()

  const terms = await getAllTerms({ source })

  res.render("TermIndex", {
    source,
    target,
    terms
  })
}
