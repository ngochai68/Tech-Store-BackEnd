var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');
const categoriesController = require('../controllers/categoriesController');

router.get('/products', productsController.getAllProducts);
router.get('/products/latest/:limit', productsController.getLatestProducts);
router.post('/products', productsController.createProduct);
router.get('/products/:id', productsController.getProductById);
router.put('/products/:id', productsController.updateProduct);
router.delete('/products/:id', productsController.deleteProduct);

// Tuyến đường mới cho categories
router.get('/product-categories', categoriesController.getAllCategories);
router.post('/product-categories', categoriesController.createCategory);
router.put('/product-categories/:categoryId', categoriesController.updateCategory);
router.delete('/product-categories/:categoryId', categoriesController.deleteCategory);

module.exports = router;
