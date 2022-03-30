module.exports = function (app) {

    let conexao = require("../config/database")

    conexao.conexao()

    let gallery = require("../models/gallery") 

    app.get("/gallery",async function (req,res) {
        let documento = await gallery.find()
        res.render("gallery.ejs")
        console.log(documento)
    })

    let multer = require("../config/multer")

    app.post("/gallery",multer.single("imagem"),async function (req,res) {

        let documento = await new gallery({
            arquivo:req.file.filename
        }).save()

        res.redirect("/gallery")
    })
}

/*,{dados:documento} */