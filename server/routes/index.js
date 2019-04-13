const express = require("express")
const handlers = require("../handlers")

const router = express.Router()

router.get("/", handlers.renderRoot)
router.get("/api/suggestions", handlers.suggestions)
router.get("/:combo/:term", handlers.renderTerm)
router.get("/:combo/domain/", handlers.renderDomains)
router.get("/:combo/domain/:domain", handlers.renderTermsForDomain)
router.get("/id/:id", handlers.renderId)

module.exports = router
