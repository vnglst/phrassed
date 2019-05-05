exports.up = function(knex) {
  return knex.schema.createTable("phrases", table => {
    table.increments()
    table
      .string("phraseid")
      .notNullable()
      .unique()
    table.string("de")
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
