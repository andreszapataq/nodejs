const Ventas = require('../models/ventasModel');
const twilio = require('twilio');

exports.getVentas = async (req, res) => {
    const venta = await Ventas.find(); // TRY FINDONE

    // const {compras, username, telefono} = venta; TRY THIS
    
    const tel = venta[0].telefono;
    
    const compras = venta[0].compras;

    let min = Math.min(...compras.map(item => item.cantidad));

    let menorCompra;
    compras.map(item => item.cantidad === min ? menorCompra = item.articulo : 'NADA!');
    console.log(menorCompra);


    // TWILIO
    // const numbers = process.env.NUMBERS.split(' ');

    const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
    const authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console
    
    const client = new twilio(accountSid, authToken);

    const message = await client.messages.create({
                    body: `Compra ${menorCompra} este mes con 30% de descuento. Oferta valida solo para ti!`,
                    to: tel,  // Text this number +12345678901
                    from: '+13347216403' // From a valid Twilio number
                });
                // .then(message => console.log(message.sid));

    const messageID = message.sid;
    console.log(messageID);

        // res.send('SMS ENVIADO!');

    /* const twilio2 = async (req, res) => {
        await Promise.all(
            numbers.map(number => {
                return client.messages.create({
                    body: `Compra ${menorCompra} este mes con 30% de descuento. Oferta valida solo para ti!`,
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
        
        // res.send('SMS ENVIADO!');
    }; */

    // twilio2();

    /* let menor;
    let zero = compras[0].cantidad + 1;

    for(let i = 0; i < compras.length; i++) {
        if(compras[i].cantidad < zero) {
            zero = compras[i].cantidad;
            menor = compras[i].articulo;
        }
    }

    console.log(menor); */

    res.json({
        data: venta
    })
}