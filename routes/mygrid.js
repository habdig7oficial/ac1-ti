module.exports = (app) => {
    

    let importar = require("../config/database")

    let db = importar.db

    let conexao = importar.conexao()

    let mygrid = require("../models/mygrid")

    app.get('/mygrid', async (req,res) => {

        let resultado = await mygrid.find()
        res.render('mygrid.ejs',{dados:resultado})
        res.send(resultado)

        console.log(resultado)
    })



    app.post("/mygrid", function (req,res) {
        let documento = new mygrid({
            titulo:req.body.titulo,
            texto:req.body.texto
        }).save().then(()=>{
            res.redirect("/mygrid")
        }).catch(function () {
            res.send(`não foi possível gravar ${req.body.titulo}, ${req.body.texto}`)
        }) 
    
    })

}

/*.then(function (req,res) {
            res.redirect("/mygrid")
        }).cacth(function () {
            res.send(`não foi possível gravar ${req.body.titulo}, ${req.body.texto}`)
        }) */