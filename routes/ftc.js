const express = require('express')
const router = express.Router();
const util = require("./util");

router.get("/", (req, res) => {
    util.renderPage(res, "ftc/ftc");
});

router.get("/startateam", (req, res) => {
    util.renderPage(res, "ftc/start_a_team");
});

router.get("/robot", (req, res) => {
    util.renderPage(res, "ftc/robot_resources")
});

router.get("/coding", (req, res) => {
    util.renderPage(res, "ftc/programming_resources")
});

module.exports = router;