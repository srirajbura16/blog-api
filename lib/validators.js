const { body } = require('express-validator');
const User = require('../models/user');

exports.signup_validators = [
  body('username')
    .exists()
    .trim()
    .isLength({ min: 3 })
    .withMessage('Username must be three or more characters.'),
  // .custom(async (username) => {
  //   const user = await User.findOne({ username: username });
  //   if (user) {
  //     throw new Error('Username already taken');
  //   }
  // })
  // .bail(),
  body('password', 'Password name must be three or more characters.')
    .exists()
    .isLength({ min: 3 })
    .bail(),
  body('confirm-password')
    .exists()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Password confirmation does not match password');
      }
      return true;
    })
    .bail(),
];

exports.create_post_validators = [
  // body('title', 'Title must exists').exists().trim(),
  // body('content'),
  // body('content'),
];
