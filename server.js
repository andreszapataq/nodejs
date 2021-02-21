const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const DB = process.env.DB_URI;

app.listen(process.env.PORT || 5000, () => {
    console.log('Server running on port 5000');
});

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() => {
    console.log('CONECTADO A DB PAPI!');
}).catch(err => console.log('MI ERROR: ' + err));