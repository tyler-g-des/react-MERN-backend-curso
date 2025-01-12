const express = require('express');
require('dotenv').config();
const {dbConnetion } = require('./database/config')
var cors = require('cors');

console.log(process.env);

// Crear el servidor de express
const app = express();

// Base de datos
dbConnetion();

//CORS
app.use(cors());


// Directorio publico
app.use( express.static('public') );

//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));


// Escuchar peticiones
app.listen(process.env.PORT, () => { 
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});