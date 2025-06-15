const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');
const { verifyToken, requireRole } = require('../middleware/authMiddleware');

// Doctor applies
router.post('/apply', verifyToken, requireRole('doctor'), doctorController.submitApplication);

// Doctor gets own onboarding status
router.get('/status', verifyToken, requireRole('doctor'), doctorController.getOwnStatus);

// Admin views all
router.get('/applications', verifyToken, requireRole('admin'), doctorController.getApplications);
// ratings+earnings
router.get('/metrics', verifyToken, requireRole('doctor'), doctorController.getEarningsAndRating);

// Admin updates application
router.put('/applications/:id', verifyToken, requireRole('admin'), doctorController.updateStatus);

// Admin terminates doctor
router.delete('/:id', verifyToken, requireRole('admin'), doctorController.terminateDoctor);

module.exports = router;
