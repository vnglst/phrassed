const express = require("express")

const { getSuggestions, getStats } = require("../controllers/api")
const { renderIndex } = require("../controllers")
const { renderAllIds, renderSingleId } = require("../controllers/ids")
const { renderAllTerms, renderSingleTerm } = require("../controllers/terms")

const { parseCombo } = require("../middleware")

const router = express.Router()

// API
router.get("/api/suggestions", getSuggestions)
router.get("/api/stats", getStats)

// Web pages
router.get("/", renderIndex)
router.get("/id/", renderAllIds)
router.get("/id/:id", renderSingleId)
router.get("/:combo/", parseCombo, renderAllTerms)
router.get("/:combo/:term", parseCombo, renderSingleTerm)

module.exports = router
