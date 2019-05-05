const { getAllTerms } = require("../../db/queries/termsQueries")

module.exports = async function renderAllTerms(req, res, next) {
  const { source, target } = req.phrassed
  const terms = await getAllTerms({ source })

  res.render("AllTerms", {
    source,
    target,
    terms
  })
}
