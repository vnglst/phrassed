const { getTermsForId } = require("../../db/queries/idsQueries")

module.exports = async function renderSingleId(req, res) {
  const { id } = req.params

  const terms = await getTermsForId({ id })

  res.render("SingleId", { terms, id })
}
