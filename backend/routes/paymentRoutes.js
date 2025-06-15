const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const { verifyToken, requireRole } = require('../middleware/authMiddleware');

router.post('/create-order', verifyToken, requireRole('client'), paymentController.createOrder);
router.post('/verify', verifyToken, requireRole('client'), paymentController.verifyPayment); // optional

module.exports = router;
