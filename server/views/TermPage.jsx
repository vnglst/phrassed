const React = require("react")
const Layout = require("./components/Layout")
const Term = require("./components/Term")

module.exports = function({ source, target, term, terms }) {
  const title = `Phrassed: ${source} translation for the term ${target}: ${term}`
  return (
    <Layout title={title}>
      <h2>{term}</h2>
      {terms.map((term, index) => (
        <Term
          key={index}
          source={source}
          target={target}
          term={term}
          number={index + 1}
        />
      ))}
    </Layout>
  )
}
