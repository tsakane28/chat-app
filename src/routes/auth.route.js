const express = require('express');
const { registerUser, loginUser } = require('../controllers/auth.controller');
const { validateRegister, validateLogin, validate } = require('../validators/auth');

const router = express.Router();

// Route for user registration
router.post('/register', validateRegister, validate, registerUser);

// Route for user login
router.post('/login', validateLogin, validate, loginUser);

module.exports = router;