const React = require("react")
const Head = require("./Head")

module.exports = ({ children, ...rest }) => (
  <html>
    <Head {...rest} />
    <body>
      <h1>
        <a href="/">Phrassed</a>
      </h1>
      <div id="reacthook">
        <form action="/" method="get">
          <input
            type="search"
            id="searchbox"
            name="q"
            aria-label="Search terminology"
          />
          <input type="submit" />
        </form>
      </div>
      {children}
    </body>
  </html>
)
