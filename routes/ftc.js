const express = require('express')
const router = express.Router();
const util = require("./util");

router.get("/", (req, res) => {
    util.renderPage(res, "ftc/ftc");
});

router.get("/robot", (req, res) => {
    util.renderPage(res, "ftc/robot_resources")
});

module.exports = router;