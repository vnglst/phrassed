exports.up = function(knex) {
  return knex.schema.createTable("terms", table => {
    table.increments()
    table.string("termid").notNullable()
    table.string("language").notNullable()
    table.text("term")
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable("terms")
}
