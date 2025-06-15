const Blog = require('../models/Blog');
const User = require('../models/User');

exports.submitBlog = async (req, res) => {
  const { title, content } = req.body;
  const user = await User.findById(req.user.id);

  const blog = new Blog({
    authorId: user._id,
    role: user.role,
    title,
    content
  });

  await blog.save();
  res.json({ msg: 'Blog submitted for review', blog });
};

exports.getAllApprovedBlogs = async (req, res) => {
  const blogs = await Blog.find({ isApproved: true }).populate('authorId', 'name role');
  res.json(blogs);
};

exports.getPendingBlogs = async (req, res) => {
  const blogs = await Blog.find({ isApproved: false }).populate('authorId', 'name role');
  res.json(blogs);
};

exports.approveBlog = async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, { isApproved: true }, { new: true });
  res.json({ msg: 'Blog approved', blog });
};
