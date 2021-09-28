const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.use('/posts', require('./posts'));
router.use('/users', require('./users'));

module.exports = router;
