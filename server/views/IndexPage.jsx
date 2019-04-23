const React = require("react")
const Layout = require("./components/Layout")
const Phrase = require("./components/Phrase")
const Term = require("./components/Term")

module.exports = function({ source, target, terms, phrases, query }) {
  const title = `Phrassed - terminology translations with example phrases`
  return (
    <Layout title={title}>
      <h2>{query}</h2>
      {terms.map((term, index) => (
        <Term
          key={index}
          source={source}
          target={target}
          term={term}
          number={index + 1}
        />
      ))}
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
    </Layout>
  )
}
