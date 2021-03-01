const express = require('express');
const ventasController = require('../controllers/ventasController');

const router = express.Router(); // TAVO

router.get('/', ventasController.getVentas);

module.exports = router; // TAVO