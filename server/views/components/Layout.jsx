const React = require("react")
const Head = require("./Head")

module.exports = ({ children, ...rest }) => (
  <html lang="en">
    <Head {...rest} />
    <body>
      <a className="logo" href="/">
        Phrassed
      </a>
      <div id="search-bar">
        <form action="/" method="get">
          <input
            type="search"
            id="searchbox"
            name="q"
            aria-label="Search terminology"
          />
          <input type="submit" value="Search" />
        </form>
      </div>
      {children}
    </body>
  </html>
)
