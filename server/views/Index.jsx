const React = require("react")
const { Layout, Terms, Phrases } = require("./components")
const _ = require("lodash")
const { toLangStr } = require("../helpers")

module.exports = function({ source, target, terms, phrases, query }) {
  const grouped = Object.values(_.groupBy(terms, "termid"))
  const sourceStr = toLangStr[source]
  const targetStr = toLangStr[target]
  const baseUrl = sourceStr && targetStr && `/${targetStr}-${sourceStr}`

  const title = `Phrassed - terminology translations with example phrases`
  return (
    <Layout title={title}>
      <h2>{query}</h2>
      <div className="row">
        <div className="column">
          <code>{source}</code>
        </div>
        <div className="column">
          <code>{target}</code>
        </div>
      </div>

      {grouped.map(arr => {
        return (
          <div className="row">
            <div className="column">
              <ul>
                {arr.map(term =>
                  term.language !== target ? <li>{term.term}</li> : null
                )}
              </ul>
              <span className="source">
                <a href={`/id/${arr[0].termid}`}>{arr[0].termid}</a>
              </span>
            </div>

            <div className="column">
              <ul>
                {arr.map(term =>
                  term.language === target ? (
                    <li>
                      <a href={`${baseUrl}/${term.term}`}>{term.term}</a>
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          </div>
        )
      })}
      {/* <Terms source={source} target={target} terms={terms} /> */}
      <Phrases
        source={source}
        target={target}
        terms={terms}
        phrases={phrases}
        query={query}
      />
    </Layout>
  )
}
