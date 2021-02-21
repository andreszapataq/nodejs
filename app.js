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


// TWILIO
const numbers = process.env.NUMBERS.split(' ');

app.get('/twilio', (req, res) => {
    Promise.all(
        numbers.map(number => {
            return client.messages.create({
                body: 'TWILIO BULK SMS FROM AWS!',
                to: number,  // Text this number +12345678901
                from: '+13347216403' // From a valid Twilio number
            })
            .then((message) => console.log(message.sid));
        })
    )
    .then(messages => {
        console.log('Mensaje enviado!');
    })
    .catch(err => console.error(err));
    
    res.send('SMS ENVIADO!');
});

const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

module.exports = app;