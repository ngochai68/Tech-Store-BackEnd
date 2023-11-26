const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'localhost',
  user: 'admin_hai',
  password: 'password',
  database: 'tech_store'
};

const pool = mysql.createPool(dbConfig);

async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('Connected successfully to the database.');
    connection.release();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = {
  pool,
  testConnection
};
