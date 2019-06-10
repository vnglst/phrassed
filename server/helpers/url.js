// converts a string to a url slug
exports.encodeSlug = function encodeSlug(str) {
  // replace spaces in URL with underscores
  // replace slashes
  // replace %
  // etc.
  return str
    .replace(/ /g, "_")
    .replace(/%/g, "%25")
    .replace(/\//g, "%2F")
}

// converts a url slug back to a string
exports.decodeSlug = function decodeSlug(str) {
  // replace underscores in URL with spaces
  // etc.
  return str
    .replace(/_/g, " ")
    .replace("%25", "%")
    .replace("%2F", "/")
}
