const TherapyTask = require('../models/TherapyTask');

exports.assignTask = async (req, res) => {
  const doctorId = req.user.id;
  const { clientId, title, instructions } = req.body;

  const task = new TherapyTask({ doctorId, clientId, title, instructions });
  await task.save();

  res.json({ msg: 'Task assigned', task });
};

exports.getClientTasks = async (req, res) => {
  const clientId = req.user.id;
  const tasks = await TherapyTask.find({ clientId }).sort({ createdAt: -1 });
  res.json(tasks);
};

exports.getDoctorTasks = async (req, res) => {
  const doctorId = req.user.id;
  const tasks = await TherapyTask.find({ doctorId }).sort({ createdAt: -1 });
  res.json(tasks);
};

exports.updateTaskStatus = async (req, res) => {
  const { taskId } = req.params;
  const { status, progressNote } = req.body;

  const updated = await TherapyTask.findByIdAndUpdate(
    taskId,
    { status, progressNote },
    { new: true }
  );

  res.json(updated);
};