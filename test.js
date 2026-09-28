
const {getLinkPreview} = require("link-preview-js");

var link = "https://firstinspires.blob.core.windows.net/fll/challenge/2026-27/fll-challenge-bioglow-judging-session-flowchart.pdf"

getLinkPreview(link).then(data => {console.log(data)});