const React = require("react")
const { Layout, Terms, Phrases } = require("./components")

module.exports = function({ source, target, terms, phrases, query }) {
  const title = `Phrassed - terminology translations with example phrases`
  return (
    <Layout title={title}>
      <h2>
        About {terms.length} results for query "{query}"
      </h2>
      <Terms.GroupedList
        terms={terms}
        source={source}
        target={target}
        query={query}
      />
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
