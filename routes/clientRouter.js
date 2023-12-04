var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');
const usersController = require('../controllers/usersController');

router.get('/products', productsController.getAllProducts);
router.get('/products/latest/:limit', productsController.getLatestProducts);

router.get('/users/:userId', usersController.getUserById);

module.exports = router;
