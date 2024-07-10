const express = require('express')
const router = express.Router();
const util = require("./util");


router.get("/", (req, res) => {
    util.renderPage(res, "index");
});

router.get("/submerged", (req, res) => {
    util.renderPage(res, "fllchallenge/submerged");
});

module.exports = router;