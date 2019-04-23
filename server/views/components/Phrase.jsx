const React = require("react")

function addHighlights(str, words) {
  const hasMore = words.length > 1
  const word = words.pop()
  return str.split(word).map((part, index, arr) => {
    return (
      <React.Fragment key={index}>
        {hasMore ? addHighlights(part, words) : part}
        {index < arr.length - 1 && <span className="highlight">{word}</span>}
      </React.Fragment>
    )
  })
}

module.exports = function Phrase({ source, target, phrase, terms, query }) {
  const sourceWithHighlights = addHighlights(phrase[source], [query])
  const words = terms.map(term => term.term)
  const targetWithHighlights = addHighlights(phrase[target], words)

  return (
    <div className="row">
      <div className="column">{sourceWithHighlights}</div>
      <div className="column">{targetWithHighlights}</div>
    </div>
  )
}
