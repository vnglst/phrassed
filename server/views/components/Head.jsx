const React = require("react")

module.exports = ({ title }) => (
  <head>
    <title>{title}</title>
    <link rel="stylesheet" href="/stylesheets/style.css" />
    <script src="/app.js" type="module" />
  </head>
)
