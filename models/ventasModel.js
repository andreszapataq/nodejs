const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
    cliente: String,
    telefono: String,
    articulo_1: Number,
    articulo_2: Number,
    articulo_3: Number
});

const Ventas = mongoose.model('Venta', ventaSchema);

module.exports = Ventas;