const express = require('express');
const ventasController = require('../controllers/ventasController');

const router = express.Router();

router.get('/', ventasController.getVentas);


module.exports = router;