const ejs = require("ejs");

global.IMAGE = function(img){
  return ejs.render(`
      src = "/img/og/<%=img%>" srcset = "/img/xs/<%=img%> 50w, /img/sm/<%=img%> 200w, /img/md/<%=img%> 500w, /img/lg/<%=img%> 1000w" sizes="(max-width: 300px) 50px, (max-width: 800px) 200px, (max-width: 1500px) 500px, 1000px"
    `, {img: img});
}

global.LINK = function(url){
    return url + ".html"
}

module.exports = [
    {template: "base.ejs", output: 'index.html', data: {page: "index"}},
    {template: "base.ejs", output: "aboutus.html", data: {page: "about/about_us"}},
    {template: "base.ejs", output: "fll.html", data: {page: "fll/fll"}},
    {template: "base.ejs", output: "fll/startateam.html", data: {page: "fll/start_a_team"}},
    {template: "base.ejs", output: "fll/innovation.html", data: {page: "fll/innovation_resources"}},
    {template: "base.ejs", output: "fll/faq.html", data: {page: "fll/FAQ"}},
    {template: "base.ejs", output: "fll/coding.html", data: {page: "fll/coding_resources"}},
    {template: "base.ejs", output: "fll/archive/2024.html", data: {page: "fll/archive/submerged"}},
    {template: "base.ejs", output: "fll/archive/2023.html", data: {page: "fll/archive/masterpiece"}},
    {template: "base.ejs", output: "ftc.html", data: {page: "ftc/ftc"}}
]