const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('GET ALL USERS');
});

router.get('/:userId', (req, res) => {
  res.send('GET USER BASED ON ID');
});
