const express = require('express')
const router = express.Router();
const util = require("./util");


router.get("/", (req, res) => {
    util.renderPage(res, "about/about_us");
});

router.get("/first", (req, res) => {
    util.renderPage(res, "about/about_first");
});

module.exports = router;