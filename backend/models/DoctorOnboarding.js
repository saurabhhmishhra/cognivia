const mongoose = require('mongoose');

const onboardingSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  mobile:   { type: String, required: true, unique: true },
  resumeLink: { type: String },
  documents:  [{ type: String }], // array of file URLs
  testScore:  { type: Number },
  interviewStatus: { type: String, enum: ['pending', 'passed', 'failed'], default: 'pending' },
  approved: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('DoctorOnboarding', onboardingSchema);
