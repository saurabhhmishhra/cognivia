const User = require('../models/User');

// Doctor applies for onboarding
exports.submitApplication = async (req, res) => {
  const { resumeLink, documents } = req.body;
  const doctorId = req.user.id;

  const doctor = await User.findById(doctorId);
  if (!doctor || doctor.role !== 'doctor') {
    return res.status(403).json({ msg: 'Only doctors can apply' });
  }

  doctor.onboarding.resumeLink = resumeLink;
  doctor.onboarding.documents = documents;
  await doctor.save();

  res.json({ msg: 'Application submitted' });
};

// Admin: Get all doctor applications
exports.getApplications = async (req, res) => {
  const doctors = await User.find({ role: 'doctor' });
  res.json(doctors);
};

// Admin: Update status of application
exports.updateStatus = async (req, res) => {
  const { id } = req.params;
  const { testScore, interviewStatus, approved, commissionPercent } = req.body;

  const doctor = await User.findById(id);
  if (!doctor || doctor.role !== 'doctor') {
    return res.status(404).json({ msg: 'Doctor not found' });
  }

  doctor.onboarding.testScore = testScore ?? doctor.onboarding.testScore;
  doctor.onboarding.interviewStatus = interviewStatus ?? doctor.onboarding.interviewStatus;
  doctor.onboarding.approved = approved ?? doctor.onboarding.approved;
  doctor.onboarding.commissionPercent = commissionPercent ?? doctor.onboarding.commissionPercent;

  if (approved) {
    doctor.isVerified = true;
  }

  await doctor.save();
  res.json({ msg: 'Doctor status updated', doctor });
};
// Doctor: Get own onboarding status
exports.getOwnStatus = async (req, res) => {
  const doctorId = req.user.id;
  const doctor = await User.findById(doctorId);

  if (!doctor || doctor.role !== 'doctor') {
    return res.status(403).json({ msg: 'Access denied' });
  }

  res.json({
    onboarding: doctor.onboarding,
    isVerified: doctor.isVerified
  });
};

// Admin: Terminate doctor
exports.terminateDoctor = async (req, res) => {
  const { id } = req.params;

  const doctor = await User.findById(id);
  if (!doctor || doctor.role !== 'doctor') {
    return res.status(404).json({ msg: 'Doctor not found' });
  }

  doctor.role = 'terminated';
  doctor.isVerified = false;
  await doctor.save();

  res.json({ msg: 'Doctor terminated successfully' });
};

exports.getEarningsAndRating = async (req, res) => {
  const doctor = await User.findById(req.user.id);

  const averageRating =
    doctor.rating.count > 0 ? (doctor.rating.total / doctor.rating.count).toFixed(2) : 'No ratings';

  res.json({
    earnings: doctor.earnings,
    rating: averageRating,
    totalRatings: doctor.rating.count
  });
};
