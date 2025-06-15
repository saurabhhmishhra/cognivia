const mongoose = require('mongoose');

const settingSchema = new mongoose.Schema({
  commissionPercent: {
    type: Number,
    default: 20
  },
  otpExpiryMinutes: {
    type: Number,
    default: 10
  },
  reportThreshold: {
    type: Number,
    default: 5
  },
  maintenanceMode: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model('Setting', settingSchema);
