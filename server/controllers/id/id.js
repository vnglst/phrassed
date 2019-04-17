const { getTermsForId } = require("../../db/queries/terms_queries")

module.exports = async function renderSingleId(req, res) {
  const { id } = req.params

  const terms = await getTermsForId({ id })

  const title = `Phrassed - summary of translations for term with id ${id}`
  res.render("id", { title, terms, id })
}
