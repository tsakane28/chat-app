// user.model.js

const pool = require('../config/db.config');

// User model schema
const User = {
    create: async (username, password) => {
        const result = await pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
        return result.insertId; // Return the ID of the newly created user
    },

    findById: async (id) => {
        const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
        return rows[0]; // Return the user found
    },

    findByUsername: async (username) => {
        const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
        return rows[0]; // Return the user found
    },

    getAllUsers: async () => {
        const [rows] = await pool.query('SELECT * FROM users');
        return rows; // Return all users
    }
};

module.exports = User;
 
