const express = require('express');
const router = express.Router();

const User = require('../../models/user');
router.get('/signup', (req, res) => {
  res.send('Hello World!');
});

router.post('/signup', (req, res) => {
  //validate and sanitize
  res.send('Hello World!');
});

router.get('/login', (req, res) => {
  res.send('Hello World!');
});

router.post('/login', (req, res) => {
  res.send('Hello World!');
});

module.exports = router;
