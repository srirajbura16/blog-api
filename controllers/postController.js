const User = require('../models/user');
const Post = require('../models/post');

exports.get_posts = async (req, res, next) => {
  try {
    const posts = await Post.find({});
    res.json(posts);
  } catch (err) {
    next(err);
  }
};

exports.create_post = async (req, res, next) => {
  //add user
  const { title, content } = req.body;
  const post = new Post({
    title,
    content,
  });
  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
    return;
  }
};

exports.get_postById = (req, res, next) => {
  const { postId } = req.params;
  Post.findById(postId).exec((err, post) => {
    if (err) return next(err);
    res.json(post);
  });
};
