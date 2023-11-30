const { pool } = require('../database/database');

async function getProducts() {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query('SELECT * FROM products');
    return rows;
  } finally {
    connection.release();
  }
}

async function getNewProducts(limit) {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query('SELECT * FROM products ORDER BY created_at DESC LIMIT ?', [limit]);
    return rows;
  } finally {
    connection.release();
  }
}

async function createProduct(productData) {
  const connection = await pool.getConnection();
  try {
    const [result] = await connection.query('INSERT INTO products SET ?', [productData]);
    return result.insertId; // Trả về ID của sản phẩm mới được tạo
  } finally {
    connection.release();
  }
}

async function getProductById(productId) {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query('SELECT * FROM products WHERE product_id = ?', [productId]);
    return rows[0]; // Trả về sản phẩm tương ứng với ID cung cấp
  } finally {
    connection.release();
  }
}

async function updateProduct(productId, updatedProductData) {
  const connection = await pool.getConnection();
  try {
    await connection.query('UPDATE products SET ? WHERE product_id = ?', [updatedProductData, productId]);
    return true; // Trả về true nếu cập nhật thành công
  } finally {
    connection.release();
  }
}

async function deleteProduct(productId) {
  const connection = await pool.getConnection();
  try {
    await connection.query('DELETE FROM products WHERE product_id = ?', [productId]);
    return true; // Trả về true nếu xóa thành công
  } finally {
    connection.release();
  }
}

module.exports = {
  getProducts,
  getNewProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct
};
