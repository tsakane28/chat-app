require('dotenv').config();

// Export secret values
module.exports = {
    JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret', // Use a secure secret in production
};
 
