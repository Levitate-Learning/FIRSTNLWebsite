const express = require('express')
const router = express.Router();
const util = require("./util");

router.get("/championship", (req, res) => {
    util.renderPage(res, "events/provincial_championship");
});


module.exports = router;
