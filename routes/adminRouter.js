var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');
const categoriesController = require('../controllers/categoriesController');
const upload = require('../middleware/multer');

router.get('/products', productsController.getAllProducts);
router.get('/products/latest/:limit', productsController.getLatestProducts);
router.post('/products', upload.single('image'), productsController.createProduct);
router.get('/products/:id', productsController.getProductById);
router.put('/products/:id', upload.single('image'), productsController.updateProduct);
router.delete('/products/:id', productsController.deleteProduct);

router.get('/product-categories', categoriesController.getAllCategories);
router.get('/product-categories/:categoryId', categoriesController.getCategoryById);
router.post('/product-categories', categoriesController.createCategory);
router.put('/product-categories/:categoryId', categoriesController.updateCategory);
router.delete('/product-categories/:categoryId', categoriesController.deleteCategory);

module.exports = router;
