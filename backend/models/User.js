const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  mobile:   { type: String, required: true, unique: true },
  password: { type: String },
  role:     { type: String, enum: ['admin', 'doctor', 'client'], required: true },
  isVerified: { type: Boolean, default: false },
  otp:        { type: String },
  otpExpiry:  { type: Date },

  // ✅ Doctor onboarding fields (only used if role === 'doctor')
  onboarding: {
    resumeLink:         { type: String },
    documents:          { type: [String], default: [] },
    testScore:          { type: Number },
    interviewStatus:    { type: String, enum: ['pending', 'scheduled', 'cleared', 'rejected'], default: 'pending' },
    approved:           { type: Boolean, default: false },
    commissionPercent:  { type: Number, default: 70 }
  },

  // ✅ Doctor earnings & ratings
  earnings: { type: Number, default: 0 },
  rating: {
    total: { type: Number, default: 0 },  // sum of all stars
    count: { type: Number, default: 0 }   // number of ratings received
  }

}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
