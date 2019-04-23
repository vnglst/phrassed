const React = require("react")
const Layout = require("./components/Layout")

module.exports = function({ source, target, id, terms }) {
  const title = `Phrassed - summary of translations for term with id ${id}`
  return (
    <Layout title={title}>
      <h2>{id}</h2>
      {terms.map((term, index) => (
        <div key={index}>
          <code>[{term.language}] </code>
          {term.term}
        </div>
      ))}
    </Layout>
  )
}
