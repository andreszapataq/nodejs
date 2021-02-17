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

const numbers = ['+573113559747', '+573136299410'];

app.get('/twilio', (req, res) => {
    Promise.all(
        numbers.map(number => {
            return client.messages.create({
                body: 'TWILIO BULK SMS FROM AWS!',
                to: number,  // Text this number +12345678901
                from: '+13347216403' // From a valid Twilio number
            });
        })
    )
    .then((message) => console.log(message.sid));

    res.send('SMS ENVIADO!');
});

app.listen(process.env.PORT || 5000);

const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

module.exports = app;