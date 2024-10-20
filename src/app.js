const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const authRoutes = require('./routes/auth.route');
const dbInit = require('./config/db.config.init');

// Initialize Express app
const app = express();

// Middleware
app.use(helmet());              // For setting secure HTTP headers
app.use(cors());                // Enable CORS for cross-origin requests
app.use(morgan('dev'));         // Logging HTTP requests
app.use(express.json());        // Parse JSON request body
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request body

// Initialize Database (optional - use it if you want to auto-init your database)
dbInit();

// Routes
app.use('/api/auth', authRoutes);  // Authentication routes

// Basic route to ensure server is running
app.get('/', (req, res) => {
    res.send('Chat App API is running...');
});

module.exports = app;
