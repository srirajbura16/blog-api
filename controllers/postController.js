const User = require('../models/user');
const Post = require('../models/post');

exports.get_posts = (req, res, next) => {
  Post.find({}).exec((err, posts) => {
    if (err) return next(err);
    res.json(posts);
  });
};

exports.get_postById = (req, res, next) => {
  const { postId } = req.params;
  Post.findById(postId).exec((err, post) => {
    if (err) return next(err);
    res.json(post);
  });
};
