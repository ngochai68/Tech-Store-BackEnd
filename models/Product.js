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

module.exports = {
  getProducts,
  getNewProducts
};
