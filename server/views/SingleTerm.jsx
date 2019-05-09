const React = require("react")
const { Layout, Terms, Phrases } = require("./components")

module.exports = function({ source, target, term, terms, phrases }) {
  const title = `Phrassed: ${source} translation for the term ${target}: ${term}`
  return (
    <Layout title={title}>
      <h2>{term}</h2>
      <Terms.List
        source={source}
        target={target}
        terms={terms}
        showContent
        showSource
      />
      <Phrases
        source={source}
        target={target}
        terms={terms}
        phrases={phrases}
        query={term}
      />
    </Layout>
  )
}
