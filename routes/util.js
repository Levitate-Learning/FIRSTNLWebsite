module.exports = {
    renderPage: (res, view) => {
        return res.render("base", {page: view});
    }
}