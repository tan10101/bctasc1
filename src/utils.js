import validator from 'validator';

console.log('am src/utils.js');

const isEmail = (email) => validator.isEmail(email);

const square = (n) => n*n;

export { square, isEmail };
