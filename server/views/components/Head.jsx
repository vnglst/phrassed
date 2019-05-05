const React = require("react")

module.exports = ({ title }) => (
  <head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="stylesheet" href="/stylesheets/style.css" />
    <script src="/searchClient.js" type="module" />
  </head>
)
