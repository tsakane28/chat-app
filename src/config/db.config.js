 
// db.config.js

const mysql = require('mysql');

// Database connection configuration
const dbConfig = {
    host: 'localhost',
    user: 'your_username', // Replace with your database username
    password: 'your_password', // Replace with your database password
    database: 'chat_app', // Replace with your database name
};

// Create a MySQL connection pool
const pool = mysql.createPool(dbConfig);

// Export the pool for use in other files
module.exports = pool;
