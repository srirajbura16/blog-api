const User = require('../models/user');
const Post = require('../models/post');

const passport = require('passport');
const bcrypt = require('bcryptjs');

const { body, validationResult } = require('express-validator');
const { signup_validators } = require('../lib/validators');

// GET /
exports.get_users = async (req, res, next) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /userId
exports.get_userById = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// POST /
exports.create_user = [
  signup_validators,
  async (req, res, next) => {
    //signup-validators - also check if user name is taken
    //hashpassword - bcrypt
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.json({ errors: errors.array() });
      return;
    }
    const { username, password } = req.body;
    const user = new User({
      username,
      password,
    });
    try {
      const newUser = await user.save();
      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
];
