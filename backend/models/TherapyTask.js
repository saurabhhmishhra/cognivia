const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  instructions: { type: String },
  status: { type: String, enum: ['assigned', 'completed'], default: 'assigned' },
  progressNote: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('TherapyTask', taskSchema);
