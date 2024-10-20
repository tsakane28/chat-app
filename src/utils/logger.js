 
const fs = require('fs');
const path = require('path');

// Log file path
const logFilePath = path.join(__dirname, 'app.log');

// Function to log messages
const log = (message) => {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} - ${message}\n`;
    fs.appendFileSync(logFilePath, logMessage);
};

module.exports = log;
