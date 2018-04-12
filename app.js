// Requires ( Importacion de librerias tercerizadas o personalizadas)
var express = require('express');
var mongoose = require('mongoose'); // Libreria para manejo de MongoDB
var bodyParser = require('body-parser'); // Formatear respuestas POST a  Objectos de JS



// Inicializar variables
var app = express(); // Definir servidor express

// Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Conexión a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if ( err ) throw err;
    console.log('MongoDB running in port 27017: \x1b[32m%s\x1b[0m','online');
});


//Importar Rutas
var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');
var loginRoutes = require('./routes/login');

// Rutas (Middleware)
app.use('/usuario', usuarioRoutes);
app.use('/login', loginRoutes);
app.use('/', appRoutes);


// Escuchar peticiones
app.listen(3000, () => {
    console.log('Express server running in port 3000: \x1b[32m%s\x1b[0m','online');
})