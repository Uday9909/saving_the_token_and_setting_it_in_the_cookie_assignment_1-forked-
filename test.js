const { encrypt, decrypt } = require('./script');

const payload = { userId: 123, username: 'testuser' };

const token = encrypt(payload);
const decoded = decrypt(token);

if (JSON.stringify(payload) === JSON.stringify(decoded)) {
  console.log('Success');
} else {
  console.log('Failure');
}
