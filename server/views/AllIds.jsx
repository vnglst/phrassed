const React = require("react")
const { Layout, Terms } = require("./components")

module.exports = function({ terms }) {
  const title = `Phrassed - list of all ids`
  return (
    <Layout title={title}>
      <h2>All ids</h2>
      <Terms.List terms={terms} showSource showContent showLanguage />
    </Layout>
  )
}
