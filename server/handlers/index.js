const termsQueries = require("../db/queries/terms_queries")
const phrasesQueries = require("../db/queries/phrases_queries")

const LANGS = ["german", "english", "dutch"]

module.exports.renderRoot = async function renderRoot(req, res) {
  const { q } = req.query

  const terms = await catchErrors(termsQueries.searchTerm)({
    l1: "german",
    l2: "dutch",
    term: q
  })

  const phrases = await catchErrors(phrasesQueries.searchInPhrases)({
    lang: "german",
    query: q
  })

  res.render("index", { title: "Phrassed", terms, phrases })
}

module.exports.renderTerm = async function renderTerm(req, res, next) {
  const comboArr = req.params.combo.split("-")
  if (!isValidLanguageCombo(comboArr)) next()
  const [l1, l2] = comboArr
  const terms = await catchErrors(termsQueries.getTerm)({
    l1,
    l2,
    term: req.params.term
  })

  // const terms = await termsQueries.getAllTerms()

  res.status(200).send(terms)
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

function isValidLanguageCombo(comboArr) {
  if (comboArr.length > 2) return false
  const [lang1, lang2] = comboArr
  if (lang1 === lang2) return false
  return LANGS.includes(lang1) && LANGS.includes(lang2)
}

function catchErrors(fn) {
  return function(...args) {
    return fn(...args).catch(err => {
      console.error(err)
    })
  }
}
