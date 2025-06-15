const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');
const { verifyToken, requireRole } = require('../middleware/authMiddleware');

router.post('/book', verifyToken, requireRole('client'), appointmentController.bookAppointment);
router.get('/client', verifyToken, requireRole('client'), appointmentController.getClientAppointments);
router.get('/doctor', verifyToken, requireRole('doctor'), appointmentController.getDoctorAppointments);
router.put('/:id/status', verifyToken, appointmentController.updateAppointmentStatus);

// ✅ Add this line:
router.put('/:id/reschedule', verifyToken, appointmentController.rescheduleAppointment);
router.post('/rate', verifyToken, requireRole('client'), appointmentController.rateDoctor);

module.exports = router;
