// dbUp.js

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

// Function to create the database
const createDatabase = async () => {
    try {
        await query('CREATE DATABASE IF NOT EXISTS chat_app');
        console.log('Database created or already exists.');
    } catch (err) {
        console.error('Error creating database:', err);
    } finally {
        connection.end();
    }
};

createDatabase();
 
