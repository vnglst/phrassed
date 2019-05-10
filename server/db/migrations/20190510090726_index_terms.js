exports.up = function(knex, Promise) {
  return knex.schema.table("terms", function(t) {
    t.index(["language"])
    t.index(["termid"])
    t.index(["term"])
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.table("terms", function(t) {
    t.dropIndex(["language"])
    t.dropIndex(["termid"])
    t.dropIndex(["term"])
  })
}
