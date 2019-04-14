const express = require("express")
const handlers = require("../handlers/")

const router = express.Router()

// API
router.get("/api/suggestions", handlers.api.suggestions)

// Web pages
router.get("/", handlers.web.renderRoot)
router.get("/:combo/:term", handlers.web.renderTerm)
router.get("/:combo/domain/", handlers.web.renderDomains)
router.get("/:combo/domain/:domain", handlers.web.renderTermsForDomain)
router.get("/id/:id", handlers.web.renderId)

module.exports = router
