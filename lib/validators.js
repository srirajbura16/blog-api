const { body } = require('express-validator');

exports.signup_validators = [
  body('username'),
  body('password'),
  body('confirm-password'),
];

exports.create_post_validators = [
  body('title'),
  body('content'),
  body('content'),
];
