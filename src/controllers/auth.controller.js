const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const pool = require('../config/db.config');

// Environment variable for JWT secret
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'; // Replace with a secure secret in production

// Function to register a new user
const registerUser = async (req, res) => {
    const { username, password } = req.body;

    // Validate request data
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    try {
        // Check if the user already exists
        const existingUser = await User.findByUsername(username);
        if (existingUser) {
            return res.status(409).json({ message: 'Username already taken.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert new user into the database
        await User.create(username, hashedPassword); // Call the create method from user model

        return res.status(201).json({ message: 'User registered successfully.' });
    } catch (err) {
        console.error('Error registering user:', err);
        return res.status(500).json({ message: 'Internal server error.' });
    }
};

// Function to log in a user
const loginUser = async (req, res) => {
    const { username, password } = req.body;

    // Validate request data
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    try {
        // Retrieve user from the database
        const user = await User.findByUsername(username);
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password.' });
        }

        // Compare password with hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid username or password.' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '24h' });

        return res.status(200).json({ token });
    } catch (err) {
        console.error('Error logging in user:', err);
        return res.status(500).json({ message: 'Internal server error.' });
    }
};

// Export the controller functions
module.exports = {
    registerUser,
    loginUser,
};
