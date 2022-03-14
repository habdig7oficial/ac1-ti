const dotenv = require('dotenv').config()
const mongoose = require("mongoose")

const conexao = async function () {
    let atlas = await mongoose.connect(process.env.SCRIPTDB)
}

module.exports = conexao


/*console.log(process.env.SCRIPTDB)*/

