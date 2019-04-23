const _ = require("lodash")

// TODO: following language strings should be localized
const toLangStr = {
  de: "german",
  nl: "dutch",
  en: "english"
}

const toLangCode = _.invert(toLangStr)

module.exports.toLangCode = toLangCode
module.exports.toLangStr = toLangStr

module.exports.parseCombo = comboStr => {
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
  const availableLangs = ["german", "english", "dutch"] // TODO: get these from DB?
  if (comboArr.length > 2) return false
  const [source, target] = comboArr
  if (source === target) return false
  return availableLangs.includes(source) && availableLangs.includes(target)
}
