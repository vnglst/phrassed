const {
  searchTerm,
  getTerm,
  getTermsForId
} = require("../db/queries/terms_queries")
const { searchInPhrases } = require("../db/queries/phrases_queries")
const { isValidLanguageCombo, addHighlights } = require("./helpers")

const LANGS = ["german", "english", "dutch"] // TODO: from DB
const SOURCE_LANG = "german" // TODO: from user
const TARGET_LANG = "dutch"

module.exports.renderRoot = async function renderRoot(req, res) {
  const { q } = req.query
  const l1 = SOURCE_LANG
  const l2 = TARGET_LANG

  const terms = await searchTerm({ l1, l2, term: q })

  const response = await searchInPhrases({ l1, l2, query: q })
  const phrases = addHighlights({ l1, l2, phrases: response, terms, query: q })

  const title = `Phrassed - terminology translations with example phrases`
  res.render("index", { title, l1, l2, terms, phrases, query: q })
}

module.exports.renderTerm = async function renderTerm(req, res, next) {
  const comboArr = req.params.combo.split("-")
  const { term } = req.params
  if (!isValidLanguageCombo(comboArr, LANGS)) next()
  const [l1, l2] = comboArr

  const terms = await getTerm({ l1, l2, term })

  const title = `Phrassed: ${l2} translation for the term ${l1}: ${term}`
  res.render("term", { title, l1, l2, terms, term })
}

module.exports.renderDomains = async function(req, res, next) {
  // TODO: List all domains
  next()
}

module.exports.renderTermsForDomain = async function(req, res, next) {
  // TODO: Lists all language-1 terms for :domain with translations for language 2
  next()
}

module.exports.renderId = async function(req, res) {
  const { id } = req.params

  const terms = await getTermsForId({ id })

  const title = `Phrassed - summary of translations for term with id ${id}`
  res.render("id", { title, terms, id })
}
