const React = require("react")
const { toLangStr } = require("../../helpers")

module.exports = function Terms({ terms, source, target }) {
  return (
    <ol className="terms">
      {terms.map((term, index) => (
        <Term key={index} source={source} target={target} term={term} />
      ))}
    </ol>
  )
}

function Term({ term, source, target }) {
  const sourceStr = toLangStr[source]
  const targetStr = toLangStr[target]
  const baseUrl = sourceStr && targetStr && `/${targetStr}-${sourceStr}`

  return (
    <li className="term" key={term.termid}>
      <Language language={term.language} />
      <TermContent baseUrl={baseUrl} term={term.term} />
      <Source termid={term.termid} />
    </li>
  )
}

function Language({ language }) {
  if (!language) return null
  // TODO: replace with flag icons
  return <code>[{language}] </code>
}

function TermContent({ baseUrl, term }) {
  if (!term) return null

  return (
    <span className="term-content">
      {baseUrl ? <a href={`${baseUrl}/${term}`}>{term}</a> : term}
    </span>
  )
}

function Source({ termid }) {
  if (!termid) return null
  return (
    <span className="source">
      <a href={`/id/${termid}`}>{termid}</a>
    </span>
  )
}
