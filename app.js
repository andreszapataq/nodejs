const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

app.get('/', (req, res) => {
    res.send('HOLA PAPI!');
});

app.get('/tavo', (req, res) => {
    res.send('HOLA PAPI 2!');
});

app.get('/twilio', (req, res) => {
    client.messages.create({
        body: 'HOLA TWILIO FROM AWS!',
        to: '+573113559747',  // Text this number +12345678901
        from: '+13347216403' // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));

    res.send('SMS ENVIADO');
});

app.listen(process.env.PORT || 5000);

const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

module.exports = app;