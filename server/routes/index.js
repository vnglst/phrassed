const express = require("express")

const getSuggestions = require("../controllers/api/suggestions")
const renderIndex = require("../controllers")
const renderAllIds = require("../controllers/id")
const renderSingleId = require("../controllers/id/id")
const renderAllTerms = require("../controllers/term")
const renderSingleTerm = require("../controllers/term/term")

const router = express.Router()

// API
router.get("/api/suggestions", getSuggestions)

// Web pages
router.get("/", renderIndex)
router.get("/id/", renderAllIds)
router.get("/id/:id", renderSingleId)
router.get("/:combo/", renderAllTerms)
router.get("/:combo/:term", renderSingleTerm)

module.exports = router
