module.exports = (app) => {

    db = "ac1-db"

    let importar = require("../config/database")

    let conexao = importar.conexao()

    let mygrid = require("../models/mygrid")

    app.get('/', async (req,res) => {

        let documento = await mygrid.find()

        res.render('index.ejs',{dados:documento})
    })


app.post('/', (req,res) =>{
    //var conexao = require('../config/database')
    //conexao()

    var modelo = require('../models/mensagem')

    var documento = new modelo({
        nome: req.body.first_name,
        sobrenome: req.body.last_name,
        email: req.body.email,
        mensagem: req.body.message

    })
    .save()
    .then(() => {
    res.redirect('/')
})
.catch(() => {
    res.send("Não foi possível gravar o documento no Banco de Dados")
})

})
}
