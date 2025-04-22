const { encrypt, decrypt } = require('./script');

const payload = { userId: 123, username: 'testuser' };

const token = encrypt(payload);
const decoded = decrypt(token);

// Check if all keys and values in payload exist in decoded
const isMatch = Object.keys(payload).every(key => decoded[key] === payload[key]);

if (isMatch) {
  console.log('Success');
} else {
  console.log('Failure');
}
