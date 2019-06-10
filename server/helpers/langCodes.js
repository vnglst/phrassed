const _ = require("lodash")

// TODO: following language strings should be localized
const toLangStr = {
  de: "german",
  nl: "dutch",
  en: "english",
  fr: "french",
  es: "spanisch",
  pt: "portuguese",
  fi: "finnish",
  it: "italian",
  sv: "swedisch",
  el: "greek"
}

const toLangCode = _.invert(toLangStr)

const availableLangs = Object.values(toLangStr)

module.exports.toLangCode = toLangCode
module.exports.toLangStr = toLangStr
module.exports.availableLangs = availableLangs
