const React = require("react")

module.exports = function addHighlights(str, words) {
  if (!str) return
  const hasMore = words.length > 1
  const word = words.pop()
  return str.split(word).map((part, index, arr) => {
    return (
      <React.Fragment key={index}>
        {hasMore ? addHighlights(part, words) : part}
        {index < arr.length - 1 && (
          <span key={index} className="highlight">
            {word}
          </span>
        )}
      </React.Fragment>
    )
  })
}
