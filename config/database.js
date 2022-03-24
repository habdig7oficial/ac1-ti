const mongoose = require('mongoose')

let db = "2emia"

const conexao = async() =>{
    //conexão local
    // var bdlocal = await mongoose.connect('mongodb://localhost/ac1tri')
    //conexao atlas

    var atlas = await mongoose.connect (`mongodb+srv://root:Santinho111@habdig7oficial-cluster.ccizs.mongodb.net/${db}?retryWrites=true&w=majority`)
}

module.exports = {conexao,db}
