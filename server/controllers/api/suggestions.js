const { getSuggestions } = require("../../db/queries/terms_queries")

module.exports = async function suggestions(req, res) {
  const { lang1, q } = req.query

  const queryResult = await getSuggestions({ l1: lang1, q })

  const result = queryResult.map(t => t.term)
  res.status(200).send(result)
}
