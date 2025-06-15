const DoctorAvailability = require('../models/DoctorAvailability');

exports.setAvailability = async (req, res) => {
  const doctor = req.user.id;
  const { dayOfWeek, startTime, endTime, timezone } = req.body;

  try {
    const existing = await DoctorAvailability.findOne({ doctor, dayOfWeek });
    if (existing) await existing.deleteOne();

    const newAvailability = new DoctorAvailability({ doctor, dayOfWeek, startTime, endTime, timezone });
    await newAvailability.save();
    res.json({ msg: 'Availability saved', availability: newAvailability });
  } catch (err) {
    res.status(500).json({ msg: 'Failed to save availability', error: err.message });
  }
};

exports.getAvailability = async (req, res) => {
  const { doctorId } = req.params;
  const availability = await DoctorAvailability.find({ doctor: doctorId });
  res.json(availability);
};
