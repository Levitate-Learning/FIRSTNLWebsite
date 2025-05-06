const express = require('express')
const router = express.Router();
const util = require("./util");


router.get("/", (req, res) => {
    util.renderPage(res, "our_history/our_history");
});

module.exports = router;