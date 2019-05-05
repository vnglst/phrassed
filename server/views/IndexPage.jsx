const React = require("react")
const Layout = require("./components/Layout")
const Phrase = require("./components/Phrase")
const Terms = require("./components/Terms")

module.exports = function({ source, target, terms, phrases, query }) {
  const title = `Phrassed - terminology translations with example phrases`
  return (
    <Layout title={title}>
      <h2>{query}</h2>
      <Terms source={source} target={target} terms={terms} />
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
    </Layout>
  )
}
