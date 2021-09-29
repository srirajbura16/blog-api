const express = require('express');
const router = express.Router();

const Post = require('../../models/post');

//GET ALL POSTS
router.get('/', (req, res, next) => {
  Post.find({}).exec((err, posts) => {
    if (err) return next(err);
    res.json(posts);
  });
});

// https://www.youtube.com/watch?v=fgTGADljAeg
//reread the odin article

//success messages
//error messages

//GET SINGLE POST BASED ON ID
router.get('/:postId', (req, res, next) => {
  const { postId } = req.params;
  Post.findById(postId).exec((err, post) => {
    if (err) return next(err);
    res.json(post);
  });
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
