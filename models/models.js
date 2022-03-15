const mongoose = require("mongoose")

const modelo = new mongoose.Schema({
    nome:String,
    sobrenome:String,
    email:String,
    enviado:String,
    data:{type:Date,default:Date.now}
})

const mensagem = mongoose.model("mensagem",modelo)

module.exports = mensagem
