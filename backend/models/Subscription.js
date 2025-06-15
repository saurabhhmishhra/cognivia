const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  planName: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, default: 'INR' },
  startDate: { type: Date, default: Date.now },
  expiryDate: { type: Date, required: true },
  sessionLimit: { type: Number, default: 4 },
  sessionsUsed: { type: Number, default: 0 },
  status: { type: String, enum: ['active', 'expired'], default: 'active' }
}, { timestamps: true });

module.exports = mongoose.model('Subscription', subscriptionSchema);
