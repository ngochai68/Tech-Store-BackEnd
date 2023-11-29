const { pool } = require('../database/database');

async function getCategories() {
  const connection = await pool.getConnection();
  try {
    const [categories] = await connection.query('SELECT * FROM product_categories');
    const [productCounts] = await connection.query(`
      SELECT 
        category_id, 
        COUNT(*) AS product_count
      FROM 
        products
      GROUP BY 
        category_id;
    `);

    const categoriesWithProductCount = categories.map((category) => {
      const productCount = productCounts.find((p) => p.category_id === category.category_id)?.product_count || 0;
      return { ...category, product_count: productCount };
    });

    return categoriesWithProductCount;
  } finally {
    connection.release();
  }
}

async function getCategoryById(categoryId) {
  const connection = await pool.getConnection();
  try {
    const [categories] = await connection.query('SELECT * FROM product_categories WHERE category_id = ?', [categoryId]);
    if (categories.length === 0) {
      return null; // Or handle not found case as needed
    }
    return categories[0];
  } finally {
    connection.release();
  }
}

async function createCategory(categoryData) {
  const connection = await pool.getConnection();
  try {
    const [result] = await connection.query('INSERT INTO product_categories SET ?', categoryData);
    return result.insertId;
  } finally {
    connection.release();
  }
}

async function updateCategory(categoryId, categoryData) {
  const connection = await pool.getConnection();
  try {
    await connection.query('UPDATE product_categories SET ? WHERE category_id = ?', [categoryData, categoryId]);
  } finally {
    connection.release();
  }
}

async function deleteCategory(categoryId) {
  const connection = await pool.getConnection();
  try {
    await connection.query('DELETE FROM product_categories WHERE category_id = ?', [categoryId]);
  } finally {
    connection.release();
  }
}

module.exports = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
};
