module.exports = function (app) {
    app.get("/gallery",function (req,res) {
        res.render("gallery.ejs",{dados:""})
    })

    let multer = require("../config/multer")

    app.post("/gallery",multer.single("imagem"),function (req,res) {
        res.redirect("/gallery")
    })
}