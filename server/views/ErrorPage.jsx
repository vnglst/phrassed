const React = require("react")
const Layout = require("./components/Layout")

module.exports = function({ message, error }) {
  const title = `Phrassed - an error has occured`
  return (
    <Layout title={title}>
      <h1>{message}</h1>
      <h2>{error.status}</h2>
      <pre>{error.stack}</pre>
    </Layout>
  )
}
