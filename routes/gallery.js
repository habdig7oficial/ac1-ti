module.exports = function (app) {

    let conexao = require("../config/database")

    const multer = require("multer")
    let gallery = require("../models/gallery") 

    app.get("/gallery", async function (req,res) {

        conexao.conexao()
        let documento = await gallery.find()
        res.render("gallery.ejs",{dados:documento})
        console.log(documento)
    })

    let upload = require("../config/multer")

    app.post("/gallery",function (req,res) {
        upload(req,res,async(err)=>{
            if (err instanceof multer.MuleterError) {
                res.send("O Arquivo é maior que cem kb")

            }
            else{
              res.send("Tipo de Arquivo Inválido")     
            }
        })
        let documento = await new gallery({
            arquivo:req.file.filename
        }).save()

        res.redirect("/gallery")
    })
}