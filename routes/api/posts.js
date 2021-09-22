const express = require('express');
const router = express.Router();

require('dotenv').config();

router.get('/', (req, res) => {
  res.send('GET ALL POSTS');
});

router.post('/', (req, res) => {
  res.send('MAKE NEW POST');
});

router.get('/:postId', (req, res) => {
  res.send(`GET POST BASED ON ID`);
});

router.delete('/:postId', (req, res) => {
  res.send(`DELETE POST BASED ON ID`);
});
// router.get('/:postID', posts_controller.post_get);

module.exports = router;
