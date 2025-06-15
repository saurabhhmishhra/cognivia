const express = require('express');
const router = express.Router();
const therapyController = require('../controllers/therapyController');
const { verifyToken, requireRole } = require('../middleware/authMiddleware');

router.post('/assign', verifyToken, requireRole('doctor'), therapyController.assignTask);
router.get('/client', verifyToken, requireRole('client'), therapyController.getClientTasks);
router.get('/doctor', verifyToken, requireRole('doctor'), therapyController.getDoctorTasks);
router.put('/:taskId', verifyToken, therapyController.updateTaskStatus);

module.exports = router;
