const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
    cliente: String,
    telefono: String,
    articulos: [Object]
});

const Ventas = mongoose.model('Venta', ventaSchema);

module.exports = Ventas;