const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');
const { verifyToken, requireRole } = require('../middleware/authMiddleware');

router.post('/create', verifyToken, requireRole('client'), subscriptionController.createSubscription);
router.get('/me', verifyToken, requireRole('client'), subscriptionController.getClientSubscription);
router.put('/use/:subscriptionId', verifyToken, requireRole('client'), subscriptionController.updateSessionsUsed);

module.exports = router;
