const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const { verifyToken, requireRole } = require('../middleware/authMiddleware');

router.post('/submit', verifyToken, blogController.submitBlog);
router.get('/approved', blogController.getAllApprovedBlogs);

// Admin only
router.get('/pending', verifyToken, requireRole('admin'), blogController.getPendingBlogs);
router.put('/approve/:id', verifyToken, requireRole('admin'), blogController.approveBlog);

module.exports = router;
