const React = require("react")
const { Layout, Terms, Phrases } = require("./components")

module.exports = function({ source, target, terms, phrases, query }) {
  const title = `Phrassed - terminology translations with example phrases`
  return (
    <Layout title={title}>
      <h2>{query}</h2>
      <Terms source={source} target={target} terms={terms} />
      <Phrases
        source={source}
        target={target}
        terms={terms}
        phrases={phrases}
        query={query}
      />
    </Layout>
  )
}
