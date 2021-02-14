const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('HOLA PAPI!');
});

app.get('/tavo', (req, res) => {
    res.send('HOLA PAPI 2!');
});

app.listen(process.env.PORT || 5000);

module.exports = app;