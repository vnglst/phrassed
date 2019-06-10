const {
  getLangCounts,
  countIds,
  countDistinctIds
} = require("../../db/queries/statsQueries")

// use simple in memory cache to protect database against DDOS
let cache = {}

// stats should more or less match with: https://iate.europa.eu/download-iate
// note: request is slow (~60 seconds) because counts are slow
exports.getStats = async function getStats(req, res) {
  const totalTerms = cache.totalTerms || (await countIds()) // total terms
  const totalEntries = cache.totalEntries || (await countDistinctIds()) // number of entries (unique ids)
  const langCounts = cache.langCounts || (await getLangCounts()) // terms per language

  cache = { totalTerms, totalEntries, langCounts }
  const result = cache
  res.status(200).send(result)
}
