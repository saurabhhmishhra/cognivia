const express = require('express');
const router = express.Router();
const controller = require('../controllers/anonMessageController');
const { verifyToken } = require('../middleware/authMiddleware');

// Send a message
router.post('/send', verifyToken, controller.sendMessage);

// Get conversation between two anonymous users
router.get('/conversation/:withUserId', verifyToken, controller.getConversation);

module.exports = router;
