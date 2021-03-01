const Ventas = require('../models/ventasModel');

exports.getVentas = async (req, res) => {
    const venta = await Ventas.find(); // TRY FINDONE

    // const {compras, username, telefono} = venta; TRY THIS
    
    const compras = venta[0].compras;

    let min = Math.min(...compras.map(item => item.cantidad));

    let menorCompra;
    compras.map(item => item.cantidad === min ? menorCompra = item.articulo : 'NADA!');
    console.log(menorCompra);

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