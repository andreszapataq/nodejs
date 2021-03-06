const Ventas = require('../models/ventasModel');
const twilio = require('twilio');

exports.getVentas = async (req, res) => {
    const venta = await Ventas.find();
    
    const tel = venta[0].telefono;
    
    const compras = venta[0].compras;

    let min = Math.min(...compras.map(item => item.cantidad));

    let menorCompra;
    compras.map(item => item.cantidad === min ? menorCompra = item.articulo : 'NADA!');
    console.log(menorCompra);


    // TWILIO
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    
    const client = new twilio(accountSid, authToken);

    const message = await client.messages.create({
                    body: `Compra ${menorCompra} este mes con 30% de descuento. Oferta valida solo para ti!`,
                    to: tel,
                    from: '+13347216403'
                });

    const messageID = message.sid;
    console.log(messageID);


    res.json({
        data: venta
    })
}