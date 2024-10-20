// checkEmail.js

const pool = require('../config/db.config');

// Middleware to check if username is already taken
const checkUsername = async (req, res, next) => {
    const { username } = req.body;

    if (!username) {
        return res.status(400).json({ message: 'Username is required.' });
    }

    try {
        const [existingUser] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
        if (existingUser.length > 0) {
            return res.status(409).json({ message: 'Username already taken.' });
        }
        next(); // Proceed to the next middleware if the username is available
    } catch (err) {
        console.error('Error checking username:', err);
        return res.status(500).json({ message: 'Internal server error.' });
    }
};

module.exports = checkUsername;
 
