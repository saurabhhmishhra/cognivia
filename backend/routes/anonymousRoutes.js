const express = require('express');
const router = express.Router();
const anonCtrl = require('../controllers/anonymousController');
const { verifyToken, requireRole } = require('../middleware/authMiddleware');

// Public actions
router.post('/post', anonCtrl.submitPost);
router.get('/posts', anonCtrl.getPosts);
router.post('/comment', anonCtrl.addComment);
router.get('/comments/:postId', anonCtrl.getComments);
router.post('/accept-friend', verifyToken, anonCtrl.acceptFriendRequest);

// Authenticated
router.post('/friend-request', verifyToken, anonCtrl.sendFriendRequest);

// Reporting
router.post('/report/post/:id', anonCtrl.reportPost);
router.post('/report/comment/:id', anonCtrl.reportComment);

// Admin-only moderation
router.get('/admin/reported-posts', verifyToken, requireRole('admin'), anonCtrl.getReportedPosts);
router.get('/admin/reported-comments', verifyToken, requireRole('admin'), anonCtrl.getReportedComments);
router.delete('/admin/post/:id', verifyToken, requireRole('admin'), anonCtrl.deletePost);
router.delete('/admin/comment/:id', verifyToken, requireRole('admin'), anonCtrl.deleteComment);

module.exports = router;
