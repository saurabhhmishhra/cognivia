const express = require('express');
const router = express.Router();
const controller = require('../controllers/anonFriendController');
const { verifyToken } = require('../middleware/authMiddleware');

router.post('/send', verifyToken, controller.sendRequest);
router.put('/:id/respond', verifyToken, controller.respondToRequest);
router.get('/my-requests', verifyToken, controller.getRequests);

module.exports = router;
