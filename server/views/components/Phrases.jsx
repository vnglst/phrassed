const React = require("react")
const addHighlights = require("./addHighlights")

module.exports = function Phrases({ source, target, phrases, terms, query }) {
  return (
    <div className="phrases">
      {phrases.map((phrase, index) => (
        <Phrase
          key={index}
          source={source}
          target={target}
          terms={terms}
          query={query}
          phrase={phrase}
        />
      ))}
    </div>
  )
}

function Phrase({ source, target, phrase, terms, query }) {
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
