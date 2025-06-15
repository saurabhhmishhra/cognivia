const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  role: { type: String, enum: ['admin', 'doctor', 'client', 'guest'], required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  isApproved: { type: Boolean, default: false },
  submittedAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);
