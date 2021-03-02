const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const ventasRouter = require('./routes/ventasRoutes');
const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());


// RUTAS
app.get('/', (req, res) => {
    res.send('HOLA PAPI!');
});

app.get('/tavo', (req, res) => {
    res.send('HOLA PAPI 2!');
});

app.use('/ventas', ventasRouter);


module.exports = app;