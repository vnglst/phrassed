const { toLangCode, availableLangs } = require("../helpers")

module.exports = function handleCombo(req, res, next) {
  const { combo } = req.params

  const { isValidCombo, source, target } = parseCombo(combo)
  if (!isValidCombo) return next("router")

  req.phrassed = {
    source,
    target
  }

  next()
}

function parseCombo(comboStr) {
  const comboArr = comboStr.split("-")

  const [lang1, lang2] = comboArr
  const source = toLangCode[lang1]
  const target = toLangCode[lang2]

  return {
    source,
    target,
    isValidCombo: isValidCombo(comboArr)
  }
}

function isValidCombo(comboArr) {
  if (comboArr.length > 2) return false
  const [source, target] = comboArr
  if (source === target) return false
  return availableLangs.includes(source) && availableLangs.includes(target)
}
