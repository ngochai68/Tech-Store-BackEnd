var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/products', productsController.getAllProducts);
router.get('/products/latest/:limit', productsController.getLatestProducts);

module.exports = router;
