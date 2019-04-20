const languages = {
  german: "de",
  dutch: "nl",
  english: "en"
}

module.exports.languages = languages

module.exports.isValidLanguageCombo = (comboArr, langs) => {
  if (comboArr.length > 2) return false
  const [lang1, lang2] = comboArr
  if (lang1 === lang2) return false
  return langs.includes(lang1) && langs.includes(lang2)
}

// does a global search and adds a span tag to instances
const addHighlight = (str, search) =>
  str.replace(
    // global search, whole words only
    new RegExp("\\b" + search + "\\b", "g"),
    `<span class="highlight">${search}</span>`
  )

// adds a span to a string for all terms
const addHighlightsForAllTerms = (str, terms) => {
  terms.forEach(t => {
    str = addHighlight(str, t.term)
  })
  return str
}

module.exports.addHighlights = ({ l1, l2, phrases, terms, query }) => {
  const lang1 = languages[l1]
  const lang2 = languages[l2]
  return phrases.map(phrase => {
    return {
      ...phrase,
      [lang1]: addHighlight(phrase[lang1], query),
      [lang2]: addHighlightsForAllTerms(phrase[lang2], terms)
    }
  })
}
