const express = require("express")

const router = express.Router()

// API
router.get("/api/suggestions", require("../controllers/api/suggestions"))

// Web pages
router.get("/", require("../controllers"))
// router.get("/id/", require("../controllers/id"))
router.get("/id/:id", require("../controllers/id/id"))
// router.get("/:combo/", require("../controllers/term"))
router.get("/:combo/:term", require("../controllers/term/term"))
// router.get("/:combo/domain/", require("../controllers/domain"))
router.get("/:combo/domain/:domain", require("../controllers/domain/domain"))

module.exports = router
