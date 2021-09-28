const express = require('express');
const router = express.Router();

//api client and cms authr
//GET ALL POSTS
router.get('/', (req, res) => {
  res.send('GET ALL POSTS');
});

// https://www.youtube.com/watch?v=fgTGADljAeg
//reread the odin article

//success messages
//error messages

//GET SINGLE POST BASED ON ID
router.get('/:postId', (req, res) => {
  res.send(`GET POST BASED ON ID ${req.params.postId}`);
});

//Used by cms author
//MAKE NEW POST
router.post('/', (req, res) => {
  res.send('MAKE NEW POST');
});

//DELETE POST BASED ON ID
router.delete('/:postId', (req, res) => {
  res.send(`DELETE POST BASED ON ID`);
});
// router.get('/:postID', posts_controller.post_get);

module.exports = router;
