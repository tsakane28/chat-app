 
const { body, validationResult } = require('express-validator');

// Validator for user registration
const validateRegister = [
    body('username')
        .notEmpty().withMessage('Username is required.')
        .isLength({ min: 3 }).withMessage('Username must be at least 3 characters long.'),
    body('password')
        .notEmpty().withMessage('Password is required.')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.')
];

// Validator for user login
const validateLogin = [
    body('username')
        .notEmpty().withMessage('Username is required.'),
    body('password')
        .notEmpty().withMessage('Password is required.')
];

// Middleware to handle validation errors
const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    validateRegister,
    validateLogin,
    validate,
};
