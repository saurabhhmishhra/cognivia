const express = require('express');
const router = express.Router();
const { verifyToken, requireRole } = require('../middleware/authMiddleware');
const availabilityController = require('../controllers/availabilityController');

// Doctor adds availability
router.post('/set', verifyToken, requireRole('doctor'), availabilityController.setAvailability);

// Get availability for a doctor (clients will use this to book)
router.get('/:doctorId', availabilityController.getAvailability);

module.exports = router;
