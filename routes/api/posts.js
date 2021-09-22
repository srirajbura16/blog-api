const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('this worked?');
});

router.get('/:postId', (req, res) => {
  res.send(`Get post: ${req.params.postId}`);
});
// router.get('/:postID', posts_controller.post_get);

module.exports = router;
