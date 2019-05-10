exports.up = function(knex) {
  return knex.schema.createTable("terms", t => {
    t.increments()
    t.string("termid").notNullable()
    t.string("language").notNullable()
    t.text("term")
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable("terms")
}
