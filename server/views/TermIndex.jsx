const React = require("react")
const Layout = require("./components/Layout")
const Terms = require("./components/Terms")

module.exports = function({ source, target, terms }) {
  const title = `Phrassed: ${source} translation for all terms`

  return (
    <Layout title={title}>
      <h2>
        {source} terms with {target} translations
      </h2>
      <Terms source={target} target={source} terms={terms} />
    </Layout>
  )
}
