const User = require('../models/user');
const Post = require('../models/post');

const passport = require('passport');
const bcrypt = require('bcryptjs');

exports.get_users = (req, res, next) => {
  User.find({}).exec((err, users) => {
    if (err) return next(err);
    res.json(users);
  });
};

exports.get_userById = (req, res, next) => {
  const { userId } = req.params;
  User.findById(userId).exec((err, user) => {
    if (err) return next(err);
    res.json(user);
  });
};
