const React = require("react")
const { Layout, Terms } = require("./components")

module.exports = function({ id, terms }) {
  const title = `Phrassed - summary of translations for term with id ${id}`
  const idNumber = id.split("-")[1]
  const sourceUrl = `https://iate.europa.eu/entry/result/${idNumber}/all`

  return (
    <Layout title={title}>
      <h2>{id}</h2>
      <Terms terms={terms} />
      Link to <a href={sourceUrl}>term on IATE</a>
    </Layout>
  )
}
