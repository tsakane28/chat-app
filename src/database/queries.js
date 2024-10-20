// queries.js

const pool = require('../config/db.config');

// Function to get a user by username
const getUserByUsername = async (username) => {
    const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
    return rows[0]; // Return the first user found
};

// Function to add a new user
const addUser = async (username, password) => {
    await pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
};

// Function to get all messages between two users
const getMessagesBetweenUsers = async (senderId, receiverId) => {
    const [messages] = await pool.query(
        'SELECT * FROM messages WHERE (sender_id = ? AND receiver_id = ?) OR (sender_id = ? AND receiver_id = ?) ORDER BY created_at',
        [senderId, receiverId, receiverId, senderId]
    );
    return messages;
};

// Function to send a message
const sendMessage = async (senderId, receiverId, content) => {
    await pool.query('INSERT INTO messages (sender_id, receiver_id, content) VALUES (?, ?, ?)', [senderId, receiverId, content]);
};

// Export database query functions
module.exports = {
    getUserByUsername,
    addUser,
    getMessagesBetweenUsers,
    sendMessage,
};
 
