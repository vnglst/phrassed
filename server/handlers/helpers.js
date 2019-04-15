module.exports.isValidLanguageCombo = function isValidLanguageCombo(
  comboArr,
  langs
) {
  if (comboArr.length > 2) return false
  const [lang1, lang2] = comboArr
  if (lang1 === lang2) return false
  return langs.includes(lang1) && langs.includes(lang2)
}
