const { getAllIds } = require("../../db/queries/terms_queries")

module.exports = async function renderAllIds(req, res) {
  const terms = await getAllIds()
  res.render("IdIndex", { terms })
}
