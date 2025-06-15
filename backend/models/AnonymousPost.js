const mongoose = require('mongoose');

const anonymousPostSchema = new mongoose.Schema({
  content: { type: String, required: true },
  postedAt: { type: Date, default: Date.now },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // pending
  accepted: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // mutual acceptance
  chatLinks: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    anonChatId: String
  }],
  reports: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('AnonymousPost', anonymousPostSchema);
