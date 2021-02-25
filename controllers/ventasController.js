const Ventas = require('../models/ventasModel');

exports.getVentas = async (req, res) => {
    const venta = await Ventas.find();

    const test = venta[0].articulos.map(item => {
        console.log(item);
        let arr = Object.values(item);
        let min = Math.min(...arr);
        let max = Math.max(...arr);

        console.log(`Min value: ${min}, Max value: ${max}`);
    });

    res.json({
        data: venta
    })
}