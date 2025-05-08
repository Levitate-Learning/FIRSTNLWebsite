const express = require('express')
const app = express()
const port = 3000
const util = require("./routes/util");
const ejs = require("ejs");


global.IMAGE = function(img){
  return ejs.render(`
      src = "/img/og/<%=img%>" srcset = "/img/xs/<%=img%> 50w, /img/sm/<%=img%> 200w, /img/md/<%=img%> 500w, /img/lg/<%=img%> 1000w" sizes="(max-width: 300px) 50px, (max-width: 800px) 200px, (max-width: 1500px) 500px, 1000px"
    `, {img: img});
}

global.LINK = function(url){
  return url;
}

global.FILE = function(url){
  return url;
}


app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  util.renderPage(res, "index");
})

app.get("/sponsor", (req, res) => {
  util.renderPage(res, "sponsor")
});

app.use("/fllchallenge", require("./routes/fllchallenge"));
app.use("/aboutus", require("./routes/about"));
app.use("/ourhistory", require("./routes/ourhistory"));
app.use("/fll", require("./routes/fll"));
app.use("/ftc", require("./routes/ftc"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
