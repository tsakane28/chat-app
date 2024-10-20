 
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./secrets');

// Function to generate a token
const generateToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });
};

// Function to verify a token
const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET);
};

module.exports = {
    generateToken,
    verifyToken,
};
