const logger = require("../helpers/logger")
const environment = process.env.NODE_ENV || "development"
const config = require("../../knexfile")[environment]

logger.info("database started in " + environment + " mode")

module.exports = require("knex")(config)
