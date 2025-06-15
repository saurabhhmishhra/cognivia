const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const { verifyToken } = require('../middleware/authMiddleware');

router.post('/send', verifyToken, messageController.sendMessage);
router.get('/chat/:otherUserId', verifyToken, messageController.getChatHistory);
router.put('/read/:messageId', verifyToken, messageController.markAsRead);
router.post('/anon/send', verifyToken, messageController.sendAnonMessage);
router.get('/anon/:anonChatId', verifyToken, messageController.getAnonMessages);

module.exports = router;
