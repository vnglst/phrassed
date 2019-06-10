const React = require("react")
const { toLangStr } = require("../../helpers/langCodes")
const { encodeSlug } = require("../../helpers/url")
const _ = require("lodash")
const addHighlights = require("./addHighlights")

module.exports = {
  GroupedList,
  List,
  Term,
  TermContent,
  Language,
  Source
}

function GroupedList({ terms, source, target, query }) {
  const groupedTerms = Object.values(_.groupBy(terms, "termid"))
  return (
    <ul>
      {groupedTerms.map((termSet, idx) => {
        const sourceTerm = termSet.find(t => t.language === source)
        if (!sourceTerm) return null
        const highlighted = addHighlights(sourceTerm.term, [query])
        const targetTerms = termSet.filter(t => t.language === target)

        return (
          <li key={idx}>
            <b>{highlighted}</b>
            <Source termid={sourceTerm.termid} />
            <List
              terms={targetTerms}
              source={source}
              target={target}
              showContent
            />
          </li>
        )
      })}
    </ul>
  )
}

function List({ terms, ...rest }) {
  return (
    <ol className="terms">
      {terms.map((term, index) => (
        <Term key={index} term={term} {...rest} />
      ))}
    </ol>
  )
}

function Term({ term, source, target, showLanguage, showSource, showContent }) {
  const sourceStr = toLangStr[source]
  const targetStr = toLangStr[target]
  const baseUrl = sourceStr && targetStr && `/${targetStr}-${sourceStr}`

  return (
    <li className="term" key={term.termid}>
      {showLanguage && <Language language={term.language} />}
      {showContent && <TermContent baseUrl={baseUrl} term={term.term} />}
      {showSource && <Source termid={term.termid} />}
    </li>
  )
}

function Language({ language }) {
  if (!language) return null

  // TODO: use flag icons here
  return <span className="term-language">{language}</span>
}

function TermContent({ baseUrl, term }) {
  if (!term) return null
  const termSlug = encodeSlug(term)

  return (
    <span className="term-content">
      {baseUrl ? <a href={`${baseUrl}/${termSlug}`}>{term}</a> : term}
    </span>
  )
}

function Source({ termid }) {
  if (!termid) return null

  return (
    <span className="term-source">
      <a href={`/id/${termid}`}>{termid}</a>
    </span>
  )
}
