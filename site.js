const servidor = require("./config/server.js")

let app = servidor.app

let porta = servidor.porta


app.listen(porta, function () {
    console.log(`servidor rodadando em http//localhost:${porta}`)
})