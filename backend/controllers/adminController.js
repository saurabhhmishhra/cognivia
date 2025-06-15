const User = require('../models/User');
const Appointment = require('../models/Appointment');
const Payment = require('../models/Payment'); // assuming you have this
const Blog = require('../models/Blog');
const AnonymousPost = require('../models/AnonymousPost');
const AnonymousComment = require('../models/AnonymousComment');
const Setting = require('../models/Setting');

// Get current settings
exports.getSettings = async (req, res) => {
  try {
    let settings = await Setting.findOne();
    if (!settings) {
      settings = await Setting.create({});
    }
    res.json(settings);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to load settings', error: err.message });
  }
};

// Update settings
exports.updateSettings = async (req, res) => {
  const { commissionPercent, otpExpiryMinutes, reportThreshold, maintenanceMode } = req.body;

  try {
    let settings = await Setting.findOne();
    if (!settings) {
      settings = await Setting.create({});
    }

    if (commissionPercent !== undefined) settings.commissionPercent = commissionPercent;
    if (otpExpiryMinutes !== undefined) settings.otpExpiryMinutes = otpExpiryMinutes;
    if (reportThreshold !== undefined) settings.reportThreshold = reportThreshold;
    if (maintenanceMode !== undefined) settings.maintenanceMode = maintenanceMode;

    await settings.save();
    res.json({ msg: 'Settings updated', settings });
  } catch (err) {
    res.status(500).json({ msg: 'Update failed', error: err.message });
  }
};

// ✅ Get pending blogs
exports.getPendingBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ status: 'pending' }).populate('authorId', 'fullName role');
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ msg: 'Error loading blogs', error: err.message });
  }
};

// ✅ Approve or Reject blog
exports.reviewBlog = async (req, res) => {
  const { id } = req.params;
  const { action } = req.body; // 'approve' or 'reject'

  if (!['approve', 'reject'].includes(action)) {
    return res.status(400).json({ msg: 'Invalid action' });
  }

  const blog = await Blog.findById(id);
  if (!blog) return res.status(404).json({ msg: 'Blog not found' });

  blog.status = action === 'approve' ? 'approved' : 'rejected';
  await blog.save();

  res.json({ msg: `Blog ${action}d`, blog });
};

// ✅ Get reported anonymous posts/comments
exports.getReportedContent = async (req, res) => {
  try {
    const posts = await AnonymousPost.find({ reports: { $gt: 0 } });
    const comments = await AnonymousComment.find({ reports: { $gt: 0 } });

    res.json({ posts, comments });
  } catch (err) {
    res.status(500).json({ msg: 'Failed to load reports', error: err.message });
  }
};

// ✅ Delete anonymous post or comment
exports.deleteReportedItem = async (req, res) => {
  const { type, id } = req.params;

  if (!['post', 'comment'].includes(type)) {
    return res.status(400).json({ msg: 'Invalid type' });
  }

  try {
    if (type === 'post') {
      await AnonymousPost.findByIdAndDelete(id);
    } else {
      await AnonymousComment.findByIdAndDelete(id);
    }

    res.json({ msg: `${type} deleted successfully` });
  } catch (err) {
    res.status(500).json({ msg: 'Failed to delete', error: err.message });
  }
};

// Dashboard metrics
exports.getDashboardMetrics = async (req, res) => {
  try {
    const totalClients = await User.countDocuments({ role: 'client' });
    const totalDoctors = await User.countDocuments({ role: 'doctor' });
    const totalAppointments = await Appointment.countDocuments();
    const totalEarnings = await Payment.aggregate([
      { $match: { status: 'success' } },
      { $group: { _id: null, total: { $sum: "$amount" } } }
    ]);

    const topDoctors = await Appointment.aggregate([
      { $group: { _id: "$doctorId", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 5 },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "doctor"
        }
      },
      { $unwind: "$doctor" },
      {
        $project: {
          _id: 0,
          doctorId: "$doctor._id",
          name: "$doctor.fullName",
          email: "$doctor.email",
          sessions: "$count"
        }
      }
    ]);

    res.json({
      users: { totalClients, totalDoctors },
      totalAppointments,
      totalEarnings: totalEarnings[0]?.total || 0,
      topDoctors
    });
  } catch (err) {
    res.status(500).json({ msg: 'Failed to load metrics', error: err.message });
  }
};
