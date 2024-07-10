const express = require('express')
const app = express()
const port = 3000
const util = require("./routes/util");

app.use('/static', express.static('static'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  util.renderPage(res, "index");
})

app.use("/fllchallenge", require("./routes/fllchallenge"));
app.use("/aboutus", require("./routes/about"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
