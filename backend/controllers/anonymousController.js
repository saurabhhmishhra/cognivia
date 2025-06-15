const AnonymousPost = require('../models/AnonymousPost');
const AnonymousComment = require('../models/AnonymousComment');

// Submit a new anonymous post
exports.submitPost = async (req, res) => {
  const { content } = req.body;
  if (!content) return res.status(400).json({ msg: 'Content is required' });

  const post = new AnonymousPost({ content });
  await post.save();
  res.json({ msg: 'Post submitted anonymously', post });
};

// Get all anonymous posts
exports.getPosts = async (req, res) => {
  const posts = await AnonymousPost.find().sort({ createdAt: -1 });
  res.json(posts);
};

// Add a comment to a post
exports.addComment = async (req, res) => {
  const { postId, comment } = req.body;
  if (!comment) return res.status(400).json({ msg: 'Comment is required' });

  const newComment = new AnonymousComment({ postId, comment });
  await newComment.save();
  res.json({ msg: 'Comment added', comment: newComment });
};

// Get comments for a post
exports.getComments = async (req, res) => {
  const { postId } = req.params;
  const comments = await AnonymousComment.find({ postId }).sort({ createdAt: 1 });
  res.json(comments);
};

// Send anonymous friend request
exports.sendFriendRequest = async (req, res) => {
  const { postId } = req.body;
  const post = await AnonymousPost.findById(postId);
  if (!post) return res.status(404).json({ msg: 'Post not found' });

  if (post.friends.includes(req.user.id)) {
    return res.status(400).json({ msg: 'Friend request already sent' });
  }

  post.friends.push(req.user.id);
  await post.save();
  res.json({ msg: 'Friend request sent anonymously' });
};

// REPORT anonymous post
exports.reportPost = async (req, res) => {
  const { id } = req.params;
  await AnonymousPost.findByIdAndUpdate(id, { $inc: { reports: 1 } });
  res.json({ msg: 'Post reported' });
};

// REPORT comment
exports.reportComment = async (req, res) => {
  const { id } = req.params;
  await AnonymousComment.findByIdAndUpdate(id, { $inc: { reports: 1 } });
  res.json({ msg: 'Comment reported' });
};

// Admin: Get reported posts
exports.getReportedPosts = async (req, res) => {
  const posts = await AnonymousPost.find({ reports: { $gte: 1 } });
  res.json(posts);
};

// Admin: Get reported comments
exports.getReportedComments = async (req, res) => {
  const comments = await AnonymousComment.find({ reports: { $gte: 1 } });
  res.json(comments);
};

// Admin: Delete post
exports.deletePost = async (req, res) => {
  await AnonymousPost.findByIdAndDelete(req.params.id);
  await AnonymousComment.deleteMany({ postId: req.params.id }); // also delete comments
  res.json({ msg: 'Post and comments deleted' });
};

// Admin: Delete comment
exports.deleteComment = async (req, res) => {
  await AnonymousComment.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Comment deleted' });
};
