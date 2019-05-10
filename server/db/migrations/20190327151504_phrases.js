exports.up = function(knex) {
  return knex.schema.createTable("phrases", t => {
    t.increments()
    t.string("phraseid")
      .notNullable()
      .unique()
    t.text("de")
    t.text("fr")
    t.text("es")
    t.text("pt")
    t.text("fi")
    t.text("it")
    t.text("sv")
    t.text("el")
    t.text("nl")
    t.text("en")
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable("phrases")
}
