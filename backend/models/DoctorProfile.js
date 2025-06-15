const mongoose = require('mongoose');

const doctorProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  qualifications: String,
  experience: String,
  specialization: String,
  bio: String,

  // Onboarding Steps
  testSubmitted: { type: Boolean, default: false },
  documentsUploaded: { type: Boolean, default: false },
  interviewStatus: {
    type: String,
    enum: ['pending', 'scheduled', 'cleared', 'rejected'],
    default: 'pending'
  },
  approvedByAdmin: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('DoctorProfile', doctorProfileSchema);
