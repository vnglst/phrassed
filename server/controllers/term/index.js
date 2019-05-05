const { getAllTerms } = require("../../db/queries/terms_queries")

module.exports = async function renderAllTerms(req, res, next) {
  const { source, target } = req.phrassed
  const terms = await getAllTerms({ source })

  res.render("TermIndex", {
    source,
    target,
    terms
  })
}
