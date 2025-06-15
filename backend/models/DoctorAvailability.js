const mongoose = require('mongoose');

const availabilitySchema = new mongoose.Schema({
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  dayOfWeek: { type: String, required: true }, // e.g., 'Monday', 'Tuesday'
  startTime: { type: String, required: true }, // e.g., '10:00'
  endTime: { type: String, required: true },   // e.g., '13:30'
  timezone: { type: String, required: true },  // e.g., 'Asia/Kolkata'
});

module.exports = mongoose.model('DoctorAvailability', availabilitySchema);
