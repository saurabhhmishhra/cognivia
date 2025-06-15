const Message = require('../models/Message');

// Send message
exports.sendMessage = async (req, res) => {
  const { receiverId, content, type = 'text', isAnonymous = false } = req.body;
  const senderId = req.user.id;

  try {
    const message = await Message.create({
      from: senderId,
      to: receiverId,
      content,
      type,
      isAnonymous
    });

    res.json({ msg: 'Message sent', message });
  } catch (err) {
    res.status(500).json({ msg: 'Sending failed', error: err.message });
  }
};

// Get full conversation between current user and another
exports.getChatHistory = async (req, res) => {
  const userId = req.user.id;
  const { otherUserId } = req.params;

  try {
    const messages = await Message.find({
      $or: [
        { from: userId, to: otherUserId },
        { from: otherUserId, to: userId }
      ]
    }).sort({ createdAt: 1 });

    res.json(messages);
  } catch (err) {
    res.status(500).json({ msg: 'Fetching history failed', error: err.message });
  }
};

// Mark as read
exports.markAsRead = async (req, res) => {
  const { messageId } = req.params;

  try {
    const updated = await Message.findByIdAndUpdate(
      messageId,
      { read: true },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to update read status', error: err.message });
  }
};
