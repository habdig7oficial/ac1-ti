module.exports = function (app) {



    app.get("/",function (req,res) {
        res.render("index.ejs")
    })

    app.post("/",function (req,res) {

        let conexao = require("../config/database")

        conexao()

        let modelo  = require("../models/models")

        let documento = new modelo ({
            nome:req.body.first_name,
            sobrenome:req.body.last_name,
            email:req.body.email,
            enviado: req.body.message
        })
        .save()
        .then(function () {
            res.redirect("/")

            console.log(`nome: ${req.body.first_name}, sobrenome:${req.body.last_name}, email:${req.body.email}, enviado: ${req.body.message}`)
        })
        .catch(function () {
            res.send("não foi possível acessar o banco de dados")
        })
    })

    app.get("/*",function (req,res) {
        res.render("404.ejs")
    })

}