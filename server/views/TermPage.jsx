const React = require("react")
const Layout = require("./components/Layout")
const Terms = require("./components/Terms")
const Phrase = require("./components/Phrase")

module.exports = function({ source, target, term, terms, phrases }) {
  const title = `Phrassed: ${source} translation for the term ${target}: ${term}`
  return (
    <Layout title={title}>
      <h2>{term}</h2>
      <Terms source={source} target={target} terms={terms} />
      <div className="phrases">
        {phrases.map((phrase, index) => (
          <Phrase
            key={index}
            source={source}
            target={target}
            terms={terms}
            query={term}
            phrase={phrase}
          />
        ))}
      </div>
    </Layout>
  )
}
