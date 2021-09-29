const express = require('express');
const router = express.Router();

const postController = require('../../controllers/postController');

//GET ALL POSTS
router.get('/', postController.get_posts);

//GET SINGLE POST BASED ON ID
router.get('/:postId', postController.get_postById);

//MAKE NEW POST
router.post('/', (req, res) => {
  res.send('MAKE NEW POST');
});

//DELETE POST BASED ON ID
router.delete('/:postId', (req, res) => {
  res.send(`DELETE POST BASED ON ID`);
});

module.exports = router;
