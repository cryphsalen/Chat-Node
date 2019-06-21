// Declaración Librerías
var express = require('express')

// Inicializo Librerías
var app = express()

var http = require('http').Server(app)
var io = require('socket.io')(http)

// Detecta cuando se conecta un usuario
io.on('connection', (socket) => {
    console.log("Usuario conectado")
    socket.emit("bienvenida")
    socket.on('nuevo_mensaje', (message) => {
        console.log(message)
    })
})

//Indicamos ficheros estáticos a cargar de la carpeta /public, __dirname es el fichero actual donde estoy
app.use(express.static(__dirname + '/public'))

// Declaración de la aplicación
var server = http.listen(5200, () => {
    console.log("Servidor listo en http://localhost:5200/")
})