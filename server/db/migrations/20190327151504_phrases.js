exports.up = function(knex) {
  return knex.schema.createTable("phrases", table => {
    table.increments()
    table.string("source").notNullable()
    table
      .string("sourceId")
      .notNullable()
      .unique()
    table.string("de")
    table.string("nl")
    table.string("en")
    table.string("domain")
    // TODO: for indices, later
    // table.specificType('en', 'tsvector').notNullable()
    // table.index('en', null, 'gin')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable("phrases")
}
