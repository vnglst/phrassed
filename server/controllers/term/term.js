const { getTerm } = require("../../db/queries/terms_queries")
const { isValidLanguageCombo } = require("../../helpers/helpers")

const LANGS = ["german", "english", "dutch"] // TODO: from DB

module.exports = async function renderSingleTerm(req, res, next) {
  const comboArr = req.params.combo.split("-")
  const { term } = req.params
  if (!isValidLanguageCombo(comboArr, LANGS)) next()
  const [l1, l2] = comboArr

  const terms = await getTerm({ l1, l2, term })

  const title = `Phrassed: ${l2} translation for the term ${l1}: ${term}`
  res.render("term", { title, l1, l2, terms, term })
}
