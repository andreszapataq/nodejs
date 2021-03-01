const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
    cliente: String,
    telefono: String,
    compras: Array
});

const Ventas = mongoose.model('Venta', ventaSchema);

module.exports = Ventas;