const termsQueries = require("../db/queries/terms_queries")
const { catchErrors } = require("./helpers")

module.exports.suggestions = async function suggestions(req, res) {
  const queryResult = await catchErrors(termsQueries.suggestions)({
    l1: req.query.lang1,
    q: req.query.q
  })

  const result = queryResult.map(t => t.term)
  res.status(200).send(result)
}
