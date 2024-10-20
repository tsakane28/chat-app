const bcrypt = require('bcrypt');

// Function to hash a password
const hashPassword = async (password) => {
    const saltRounds = 10; // Number of rounds for hashing
    return await bcrypt.hash(password, saltRounds);
};

// Function to compare a password with a hashed password
const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

module.exports = {
    hashPassword,
    comparePassword,
};
 
