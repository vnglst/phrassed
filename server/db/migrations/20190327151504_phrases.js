exports.up = function(knex) {
  return knex.schema.createTable("phrases", table => {
    table.increments()
    table
      .string("phraseid")
      .notNullable()
      .unique()
    table.string("de")
    table.string("fr")
    table.string("es")
    table.string("pt")
    table.string("fi")
    table.string("it")
    table.string("sv")
    table.string("el")
    table.string("nl")
    table.string("en")
    // TODO: for indices, later
    // table.specificType('en', 'tsvector').notNullable()
    // table.index('en', null, 'gin')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable("phrases")
}
