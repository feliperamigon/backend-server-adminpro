// Requires ( Importacion de librerias tercerizadas o personalizadas)
var express = require('express');
var mongoose = require('mongoose'); // Libreria para manejo de MongoDB




// Inicializar variables
var app = express(); // Definir servidor express

// Conexión a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if ( err ) throw err;
    console.log('MongoDB running in port 27017: \x1b[32m%s\x1b[0m','online');
});


// Rutas
app.get('/', ( req, res, next ) => {

    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    })

});


// Escuchar peticiones
app.listen(3000, () => {
    console.log('Express server running in port 3000: \x1b[32m%s\x1b[0m','online');
})