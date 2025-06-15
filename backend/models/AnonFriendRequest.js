const mongoose = require('mongoose');

const anonFriendRequestSchema = new mongoose.Schema(
  {
    fromAnonId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    toAnonId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('AnonFriendRequest', anonFriendRequestSchema);
