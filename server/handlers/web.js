const termsQueries = require("../db/queries/terms_queries")
const phrasesQueries = require("../db/queries/phrases_queries")
const { catchErrors, isValidLanguageCombo } = require("./helpers")

const LANGS = ["german", "english", "dutch"] // TODO: from DB
const SOURCE_LANG = "german" // TODO: from user
const TARGET_LANG = "dutch"

module.exports.renderRoot = async function renderRoot(req, res) {
  const { q } = req.query
  const l1 = SOURCE_LANG
  const l2 = TARGET_LANG

  const terms = await catchErrors(termsQueries.searchTerm)({
    l1,
    l2,
    term: q
  })

  const phrases = await catchErrors(phrasesQueries.searchInPhrases)({
    lang: l1,
    query: q
  })

  res.render("index", {
    title: `Phrassed - terminology translations with example phrases`,
    l1,
    l2,
    terms,
    phrases
  })
}

module.exports.renderTerm = async function renderTerm(req, res, next) {
  const comboArr = req.params.combo.split("-")
  const { term } = req.params
  if (!isValidLanguageCombo(comboArr, LANGS)) next()
  const [l1, l2] = comboArr
  const terms = await catchErrors(termsQueries.getTerm)({
    l1,
    l2,
    term
  })

  res.render("term", {
    title: `Phrassed: ${l2} translation for the term ${l1}: ${term}`,
    l1,
    l2,
    terms
  })
}

module.exports.suggestions = async function suggestions(req, res) {
  const queryResult = await catchErrors(termsQueries.suggestions)({
    l1: req.query.lang1,
    q: req.query.q
  })

  const result = queryResult.map(t => t.term)
  res.status(200).send(result)
}

module.exports.renderDomains = async function(req, res, next) {
  // TODO: List all domains
  next()
}

module.exports.renderTermsForDomain = async function(req, res, next) {
  // TODO: Lists all language-1 terms for :domain with translations for language 2
  next()
}

module.exports.renderId = async function(req, res, next) {
  // TODO: All information on term with :id, with links to source
  next()
}
