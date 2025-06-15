const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progressController');
const { verifyToken, requireRole } = require('../middleware/authMiddleware');

// Doctor assigns task, adds notes, views progress
router.post('/assign', verifyToken, requireRole('doctor'), progressController.assignTask);
router.post('/add-note', verifyToken, requireRole('doctor'), progressController.addNote);
router.get('/client/:clientId', verifyToken, requireRole('doctor'), progressController.getClientProgress);

// Client updates task or views progress
router.put('/update-task', verifyToken, requireRole('client'), progressController.updateTaskStatus);
router.get('/my-progress', verifyToken, requireRole('client'), progressController.getMyProgress);

module.exports = router;
