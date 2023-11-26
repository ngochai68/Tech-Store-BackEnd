var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/products', productsController.list);
router.get('/products/latest/:limit', productsController.listNewProducts);

module.exports = router;
