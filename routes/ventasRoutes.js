const express = require('express');
const ventasController = require('../controllers/ventasController');

const router = express.Router(); // PREGUNTAR A TAVO

router.get('/', ventasController.getVentas);

module.exports = router; // PREGUNTAR A TAVO