const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  tasks: [
    {
      title: String,
      description: String,
      assignedDate: Date,
      completedDate: Date,
      status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' }
    }
  ],
  notes: [{ text: String, date: { type: Date, default: Date.now } }]
}, { timestamps: true });

module.exports = mongoose.model('Progress', progressSchema);
