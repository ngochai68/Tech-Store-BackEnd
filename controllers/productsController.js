const Product = require('../models/Product');

async function list(req, res, next) {
  try {
    const products = await Product.getProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
}

async function listNewProducts(req, res, next) {
  const limit = parseInt(req.params.limit, 10) || 10;
  try {
    const newProducts = await Product.getNewProducts(limit);
    res.json(newProducts);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  list,
  listNewProducts
};
