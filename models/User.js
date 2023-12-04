const { pool } = require('../database/database');

async function createUser(userData) {
  const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  const values = [userData.username, userData.email, userData.password];

  const connection = await pool.getConnection();
  try {
    const [result] = await connection.query(query, values);
    return result.insertId;
  } finally {
    connection.release();
  }
}

async function findUserByEmail(email) {
  const query = 'SELECT * FROM users WHERE email = ?';

  const connection = await pool.getConnection();
  try {
    const [users] = await connection.query(query, [email]);
    return users[0];
  } finally {
    connection.release();
  }
}

async function findUserByUsername(username) {
  const query = 'SELECT * FROM users WHERE username = ?';

  const connection = await pool.getConnection();
  try {
    const [users] = await connection.query(query, [username]);
    return users[0];
  } finally {
    connection.release();
  }
}

async function findUserById(userId) {
  const query = 'SELECT * FROM users WHERE user_id = ?';

  const connection = await pool.getConnection();
  try {
    const [users] = await connection.query(query, [userId]);
    return users[0];
  } finally {
    connection.release();
  }
}

module.exports = {
  createUser,
  findUserByEmail,
  findUserByUsername,
  findUserById
};
