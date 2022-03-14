module.exports = function () {
    app.get("/",function (req,res) {
        res.render("index.ejs")
    })

    app.get("/*",function (req,res) {
        res.render("404.ejs")
    })

}