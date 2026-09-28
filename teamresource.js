const fs = require("fs");
const {parse} = require("csv-parse/sync");
const {getLinkPreview} = require("link-preview-js");

module.exports = { 
    loadCSV: (file) => {
        const data = fs.readFileSync(file);

        var rows = parse(data, {
            columns: true,
            skip_empty_lines: true,
            trim: true
        })

        rows = rows.filter(row => row.HideOnWebsite != "TRUE" && row.Posted == "TRUE").map((row) => {
            row.Links = row.Link.split(/\r?\n/).filter(link => link.length > 0);
            /*row.Previews = row.Links.map(async (link) => {
                console.log(link);
                return await getLinkPreview(link)
            });*/
            return row;
        });

        return rows;
    }
}