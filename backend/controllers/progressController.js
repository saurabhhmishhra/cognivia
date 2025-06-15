const Progress = require('../models/Progress');
const User = require('../models/User');

// Doctor assigns a task to client
exports.assignTask = async (req, res) => {
  const { clientId, title, description } = req.body;
  const doctorId = req.user.id;

  let progress = await Progress.findOne({ client: clientId, doctor: doctorId });

  const newTask = {
    title,
    description,
    assignedDate: new Date(),
    status: 'pending'
  };

  if (!progress) {
    progress = new Progress({
      client: clientId,
      doctor: doctorId,
      tasks: [newTask]
    });
  } else {
    progress.tasks.push(newTask);
  }

  await progress.save();
  res.json({ msg: 'Task assigned', progress });
};

// Client updates task status
exports.updateTaskStatus = async (req, res) => {
  const { progressId, taskIndex, status } = req.body;

  const progress = await Progress.findById(progressId);
  if (!progress) return res.status(404).json({ msg: 'Progress not found' });

  if (!['pending', 'in-progress', 'completed'].includes(status))
    return res.status(400).json({ msg: 'Invalid status' });

  progress.tasks[taskIndex].status = status;
  if (status === 'completed') {
    progress.tasks[taskIndex].completedDate = new Date();
  }

  await progress.save();
  res.json({ msg: 'Task updated', progress });
};

// Doctor adds note
exports.addNote = async (req, res) => {
  const { progressId, text } = req.body;
  const progress = await Progress.findById(progressId);
  if (!progress) return res.status(404).json({ msg: 'Progress not found' });

  progress.notes.push({ text });
  await progress.save();
  res.json({ msg: 'Note added', progress });
};

// Client gets their progress
exports.getMyProgress = async (req, res) => {
  const progress = await Progress.find({ client: req.user.id }).populate('doctor', 'fullName');
  res.json(progress);
};

// Doctor views progress of a client
exports.getClientProgress = async (req, res) => {
  const { clientId } = req.params;
  const progress = await Progress.findOne({ client: clientId, doctor: req.user.id });
  res.json(progress);
};
