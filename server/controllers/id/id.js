const { getTermsForId } = require("../../db/queries/terms_queries")

module.exports = async function renderSingleId(req, res) {
  const { id } = req.params

  const terms = await getTermsForId({ id })

  res.render("IdPage", { terms, id })
}
