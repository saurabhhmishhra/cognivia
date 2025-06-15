const Appointment = require('../models/Appointment');
const DoctorAvailability = require('../models/DoctorAvailability');
const { DateTime } = require('luxon');
const User = require('../models/User'); 
// 📅 Book appointment
exports.bookAppointment = async (req, res) => {
  const { doctorId, scheduledTime, type, timezone, notes } = req.body;
  const clientId = req.user.id;

  try {
    const userTime = DateTime.fromISO(scheduledTime, { zone: timezone });
    const userDay = userTime.toFormat('cccc'); // e.g., 'Monday'

    // 1️⃣ Get doctor's availability
    const availability = await DoctorAvailability.findOne({ doctor: doctorId, dayOfWeek: userDay });
    if (!availability) {
      return res.status(400).json({ msg: 'Doctor not available on selected day' });
    }

    const docStart = DateTime.fromFormat(availability.startTime, 'HH:mm', { zone: availability.timezone });
    const docEnd = DateTime.fromFormat(availability.endTime, 'HH:mm', { zone: availability.timezone });
    const requestedTime = userTime.setZone(availability.timezone);

    if (requestedTime < docStart || requestedTime > docEnd) {
      return res.status(400).json({ msg: 'Appointment time is outside doctor\'s available hours' });
    }

    // 2️⃣ Check for existing appointments clash (±30 min buffer)
    const bufferMinutes = 30;
    const startWindow = userTime.minus({ minutes: bufferMinutes });
    const endWindow = userTime.plus({ minutes: bufferMinutes });

    const conflict = await Appointment.findOne({
      doctorId,
      scheduledTime: { $gte: startWindow.toJSDate(), $lte: endWindow.toJSDate() }
    });

    if (conflict) {
      return res.status(400).json({ msg: 'Appointment slot already taken' });
    }

    // 3️⃣ Create new appointment
    const newAppt = new Appointment({
      clientId,
      doctorId,
      scheduledTime,
      type,
      timezone,
      notes
    });

    await newAppt.save();
    res.json({ msg: 'Appointment booked', appointment: newAppt });

  } catch (err) {
    res.status(500).json({ msg: 'Booking failed', error: err.message });
  }
};

// 📆 Get client's appointments
exports.getClientAppointments = async (req, res) => {
  const appts = await Appointment.find({ clientId: req.user.id }).populate('doctorId', 'name email');
  res.json(appts);
};

// 📆 Get doctor's appointments
exports.getDoctorAppointments = async (req, res) => {
  const appts = await Appointment.find({ doctorId: req.user.id }).populate('clientId', 'name email');
  res.json(appts);
};

// 🔄 Update appointment status
exports.updateAppointmentStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  // Add inside updateAppointmentStatus controller (after updating status)
if (status === 'completed') {
const appt = await Appointment.findById(id);
const doctor = await User.findById(appt.doctorId);
const fee = appt.fee || 1000; // fallback fee
const commission = doctor.onboarding?.commissionPercent || 70;
const payout = (fee * commission) / 100;
doctor.earnings += payout;
await doctor.save();
}
  const updated = await Appointment.findByIdAndUpdate(id, { status }, { new: true });
  res.json(updated);
};

// ⏰ Reschedule appointment
exports.rescheduleAppointment = async (req, res) => {
  const { id } = req.params;
  const { newTime, timezone } = req.body;

  try {
    const appt = await Appointment.findById(id);
    if (!appt) return res.status(404).json({ msg: 'Appointment not found' });

    const userTime = DateTime.fromISO(newTime, { zone: timezone });
    const userDay = userTime.toFormat('cccc');

    const availability = await DoctorAvailability.findOne({ doctor: appt.doctorId, dayOfWeek: userDay });
    if (!availability) {
      return res.status(400).json({ msg: 'Doctor not available on selected day' });
    }

    const docStart = DateTime.fromFormat(availability.startTime, 'HH:mm', { zone: availability.timezone });
    const docEnd = DateTime.fromFormat(availability.endTime, 'HH:mm', { zone: availability.timezone });
    const requestedTime = userTime.setZone(availability.timezone);

    if (requestedTime < docStart || requestedTime > docEnd) {
      return res.status(400).json({ msg: 'New time outside available hours' });
    }

    // Check conflict again
    const bufferMinutes = 30;
    const startWindow = userTime.minus({ minutes: bufferMinutes });
    const endWindow = userTime.plus({ minutes: bufferMinutes });

    const conflict = await Appointment.findOne({
      doctorId: appt.doctorId,
      _id: { $ne: appt._id }, // exclude current
      scheduledTime: { $gte: startWindow.toJSDate(), $lte: endWindow.toJSDate() }
    });

    if (conflict) {
      return res.status(400).json({ msg: 'New slot clashes with another appointment' });
    }

    appt.scheduledTime = newTime;
    appt.timezone = timezone;
    await appt.save();

    res.json({ msg: 'Appointment rescheduled', appointment: appt });

  } catch (err) {
    res.status(500).json({ msg: 'Reschedule failed', error: err.message });
  }
};
// ⭐️ Client rates doctor after session
exports.rateDoctor = async (req, res) => {
  const { doctorId, rating } = req.body;

  if (rating < 1 || rating > 5) {
    return res.status(400).json({ msg: 'Rating must be between 1 and 5' });
  }

  const doctor = await User.findById(doctorId);
  if (!doctor || doctor.role !== 'doctor') {
    return res.status(404).json({ msg: 'Doctor not found' });
  }

  doctor.rating.total += rating;
  doctor.rating.count += 1;
  await doctor.save();

  res.json({ msg: 'Rating submitted successfully' });
};
