const { getAllIds } = require("../../db/queries/idsQueries")

module.exports = async function renderAllIds(req, res) {
  const terms = await getAllIds()
  res.render("AllIds", { terms })
}
