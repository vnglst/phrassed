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
