const Ventas = require('../models/ventasModel');

exports.getVentas = async (req, res) => {
    const venta = await Ventas.find();

    console.log(venta);

    res.json({
        data: venta
    })
}