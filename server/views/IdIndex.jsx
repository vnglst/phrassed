const React = require("react")
const Layout = require("./components/Layout")
const Terms = require("./components/Terms")

module.exports = function({ terms }) {
  const title = `Phrassed - list of all ids`
  return (
    <Layout title={title}>
      <h2>All ids</h2>
      <Terms terms={terms} />
    </Layout>
  )
}
