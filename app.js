const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('HOLA PAPI!');
});

app.get('/tavo', (req, res) => {
    res.send('HOLA PAPI 2!');
});

app.listen(process.env.PORT || 5000);

var accountSid = 'AC693760bad6b60e903146528efad22f04'; // Your Account SID from www.twilio.com/console
var authToken = '2a6fa60c649492ae7bb1538f8998449b';   // Your Auth Token from www.twilio.com/console

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'HOLA PAPI!',
    to: '+573113559747',  // Text this number +12345678901
    from: '+13347216403' // From a valid Twilio number
})
.then((message) => console.log(message.sid));

module.exports = app;