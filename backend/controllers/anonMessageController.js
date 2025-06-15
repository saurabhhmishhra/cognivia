const AnonMessage = require('../models/AnonMessage');

// Send message
exports.sendMessage = async (req, res) => {
  const senderId = req.user.id;
  const { receiverId, message } = req.body;

  if (!receiverId || !message) {
    return res.status(400).json({ msg: 'Receiver and message required' });
  }

  try {
    const msg = await AnonMessage.create({ senderId, receiverId, message });
    res.json({ msg: 'Message sent', data: msg });
  } catch (err) {
    res.status(500).json({ msg: 'Error sending message', error: err.message });
  }
};

// Fetch conversation
exports.getConversation = async (req, res) => {
  const userId = req.user.id;
  const { withUserId } = req.params;

  try {
    const messages = await AnonMessage.find({
      $or: [
        { senderId: userId, receiverId: withUserId },
        { senderId: withUserId, receiverId: userId }
      ]
    }).sort('sentAt');

    res.json(messages);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching messages', error: err.message });
  }
};
