const { signup_validators } = require('../lib/validators');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

exports.signup = [
  signup_validators,

  //signup_validators - checkUsernameTaken,
  //create new user
];

exports.login = [
  //JWT
];

exports.logout = [
  //JWT
];
