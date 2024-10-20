// dbDown.js

const mysql = require('mysql');
const { promisify } = require('util');

// Database connection configuration
const dbConfig = {
    host: 'localhost',
    user: 'your_username', // Replace with your database username
    password: 'your_password', // Replace with your database password
};

// Create a MySQL connection
const connection = mysql.createConnection(dbConfig);
const query = promisify(connection.query).bind(connection);

// Function to drop the database
const dropDatabase = async () => {
    try {
        await query('DROP DATABASE IF EXISTS chat_app');
        console.log('Database dropped if it existed.');
    } catch (err) {
        console.error('Error dropping database:', err);
    } finally {
        connection.end();
    }
};

dropDatabase();
 
