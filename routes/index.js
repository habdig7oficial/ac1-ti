module.exports = function (app) {



    app.get("/",function (req,res) {
        res.render("index.ejs")
    })

    app.post("/",function (req,res) {

        let conexao = require("../config/database")()
        let modelo  = require("../models/models")

        let documento = new modelo ({
            nome:req.body.fist_name,
            sobrenome:req.body.last_name,
            email:req.body.email,
            enviado: req.body.mensagem
        })
        .save()
        .then(function () {
            res.redirect("/")
        })
        .catch(function () {
            console.error("não foi possível acessar o banco de dados")
        })
    })



}