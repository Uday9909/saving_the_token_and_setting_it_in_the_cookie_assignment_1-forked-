const jwt = require('jsonwebtoken');

const secretKey = 'your-256-bit-secret'; // In real applications, use environment variables to store secrets securely

const encrypt = (payload) => {
  // Sign the payload to create a JWT token
  return jwt.sign(payload, secretKey, { algorithm: 'HS256' });
}

const decrypt = (token) => {
  // Verify and decode the JWT token
  try {
    return jwt.verify(token, secretKey);
  } catch (err) {
    console.error('Invalid token:', err);
    return null;
  }
}

module.exports = {
  encrypt,
  decrypt
}
