// validatorHandler.js

const { body, validationResult } = require('express-validator');

// Middleware to validate registration and login data
const validateUser = [
    body('username')
        .notEmpty()
        .withMessage('Username is required.')
        .isLength({ min: 3 })
        .withMessage('Username must be at least 3 characters long.'),
    body('password')
        .notEmpty()
        .withMessage('Password is required.')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next(); // Proceed if no validation errors
    }
];

module.exports = validateUser;
 
