const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { verifyToken, requireRole } = require('../middleware/authMiddleware');

// 🔒 Admin only
router.use(verifyToken, requireRole('admin'));

// Dashboard metrics
router.get('/metrics', verifyToken, requireRole('admin'), adminController.getDashboardMetrics);

// 📄 Blog Approvals
router.get('/blogs/pending', adminController.getPendingBlogs);
router.put('/blogs/:id/review', adminController.reviewBlog);

// 🧾 Anonymous Content Moderation
router.get('/reports', adminController.getReportedContent);
router.delete('/reports/:type/:id', adminController.deleteReportedItem);

// ⚙️ Platform Settings
router.get('/settings', adminController.getSettings);
router.put('/settings', adminController.updateSettings);

module.exports = router;
