const React = require("react")
const { toLangStr } = require("../../helpers")

module.exports = function Term({ term, source, target, number }) {
  const sourceStr = toLangStr[source]
  const targetStr = toLangStr[target]

  return (
    <div>
      <b>{number} </b>
      <a href={`/${targetStr}-${sourceStr}/${term.term}`}>{term.term}</a> [
      <a href={`/id/${term.termid}`}>source</a>]
    </div>
  )
}
