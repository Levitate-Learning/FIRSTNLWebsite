const express = require('express')
const router = express.Router();
const util = require("./util");


router.get("/", (req, res) => {
    util.renderPage(res, "fll/fll");
});

router.get("/startateam", (req, res) => {
    util.renderPage(res, "fll/start_a_team");
});

router.get("/innovation", (req, res) => {
    util.renderPage(res, "fll/innovation_resources");
});

router.get("/faq", (req, res) => {
    util.renderPage(res, "fll/FAQ");
});

router.get("/coding", (req, res) => {
    util.renderPage(res, "fll/coding_resources")
});

router.get("/archive/2024", (req, res) => {
    util.renderPage(res, "fll/archive/submerged");
});

router.get("/archive/2023", (req, res) => {
    util.renderPage(res, "fll/archive/masterpiece");
});


module.exports = router;