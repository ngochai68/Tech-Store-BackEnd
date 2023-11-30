const Product = require('../models/Product');

async function getAllProducts(req, res, next) {
  try {
    const products = await Product.getProducts();
    const message = 'Successfully retrieved all products';
    res.json({ message, products });
  } catch (error) {
    next(error);
  }
}

async function getLatestProducts(req, res, next) {
  const limit = parseInt(req.params.limit, 10) || 10;
  try {
    const newProducts = await Product.getNewProducts(limit);
    const message = 'Successfully retrieved latest products';
    res.json({ message, newProducts });
  } catch (error) {
    next(error);
  }
}

async function createProduct(req, res, next) {
  const productData = req.body;
  try {
    const productId = await Product.createProduct(productData);
    const message = 'Product created successfully';
    res.status(201).json({ message, productId });
  } catch (error) {
    next(error);
  }
}

async function getProductById(req, res, next) {
  const productId = req.params.id;
  try {
    const product = await Product.getProductById(productId);
    const message = 'Product retrieved successfully';
    if (!product) {
      const message = 'Product not found';
      res.status(404).json({ message });
      return;
    }
    res.json({ message, product });
  } catch (error) {
    next(error);
  }
}

async function updateProduct(req, res, next) {
  const productId = req.params.id;
  const updatedProductData = req.body;
  try {
    const success = await Product.updateProduct(productId, updatedProductData);
    const message = 'Product updated successfully';
    if (!success) {
      const message = 'Unable to update product';
      res.status(404).json({ message });
      return;
    }
    res.json({ message });
  } catch (error) {
    next(error);
  }
}

async function deleteProduct(req, res, next) {
  const productId = req.params.id;
  try {
    const success = await Product.deleteProduct(productId);
    const message = 'Product deleted successfully';
    if (!success) {
      const message = 'Unable to delete product';
      res.status(404).json({ message });
      return;
    }
    res.json({ message });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllProducts,
  getLatestProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct
};
