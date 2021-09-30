const User = require('../models/user');
const Post = require('../models/post');

// GET /
exports.get_posts = async (req, res, next) => {
  try {
    const posts = await Post.find({});
    res.statusjson(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /postId
exports.get_postById = async (req, res, next) => {
  const { postId } = req.params;
  try {
    const post = await Post.findById(postId);
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Post /
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
