const mongoose = require('mongoose');

const anonymousCommentSchema = new mongoose.Schema({
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'AnonymousPost', required: true },
  comment: { type: String, required: true },
  commentedAt: { type: Date, default: Date.now },
  reports: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('AnonymousComment', anonymousCommentSchema);
