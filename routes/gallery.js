module.exports = function (app) {

    let database = require("../config/database")

    let gallery = require("../models/gallery") 

    app.get("/gallery",function (req,res) {
        res.render("gallery.ejs",{dados:""})
    })

    let multer = require("../config/multer")

    app.post("/gallery",multer.single("imagem"),async function (req,res) {
        
        database()

        let documento = await new gallery({
            arquivo:req.file.filename
        }).save()

        res.redirect("/gallery")
    })
}