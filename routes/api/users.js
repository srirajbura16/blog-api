const express = require('express');
const router = express.Router();

const User = require('../../models/user');

router.get('/', (req, res) => {
  User.find({}).exec((err, users) => {
    if (err) return next(err);
    res.json(users);
  });
});

router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  User.findById(userId).exec((err, user) => {
    if (err) return next(err);
    res.json(user);
  });
});

module.exports = router;
