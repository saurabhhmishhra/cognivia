const AnonFriendRequest = require('../models/AnonFriendRequest');

// Send friend request
exports.sendRequest = async (req, res) => {
  const fromAnonId = req.user.id;
  const { toAnonId } = req.body;

  if (fromAnonId === toAnonId) {
    return res.status(400).json({ msg: 'Cannot send request to self' });
  }

  const exists = await AnonFriendRequest.findOne({ fromAnonId, toAnonId });
  if (exists) return res.status(400).json({ msg: 'Request already sent' });

  const request = await AnonFriendRequest.create({
    fromAnonId,
    toAnonId,
    status: 'pending'
  });

  res.json({ msg: 'Request sent', request });
};

// Accept or reject friend request
exports.respondToRequest = async (req, res) => {
  const toAnonId = req.user.id;
  const { id } = req.params;
  const { action } = req.body; // "accept" or "reject"

  const request = await AnonFriendRequest.findById(id);
  if (!request || request.toAnonId.toString() !== toAnonId) {
    return res.status(403).json({ msg: 'Unauthorized or invalid request' });
  }

  if (!['accept', 'reject'].includes(action)) {
    return res.status(400).json({ msg: 'Invalid action' });
  }

  request.status = action === 'accept' ? 'accepted' : 'rejected';

  let chatId = null;

  if (action === 'accept') {
    // Look for reverse request
    const reverse = await AnonFriendRequest.findOne({
      fromAnonId: request.toAnonId,
      toAnonId: request.fromAnonId,
      status: 'accepted'
    });

    if (reverse) {
      const sorted = [request.fromAnonId.toString(), request.toAnonId.toString()].sort();
      chatId = `${sorted[0]}_${sorted[1]}`;

      request.anonChatId = chatId;
      reverse.anonChatId = chatId;
      await reverse.save();
    }
  }

  await request.save();

  res.json({
    msg: `Request ${action}ed`,
    request,
    mutual: !!chatId,
    anonChatId: chatId || null
  });
};

// Get current user's friend requests
exports.getRequests = async (req, res) => {
  const userId = req.user.id;

  const sent = await AnonFriendRequest.find({ fromAnonId: userId })
    .populate('toAnonId', 'fullName');

  const received = await AnonFriendRequest.find({ toAnonId: userId })
    .populate('fromAnonId', 'fullName');

  res.json({ sent, received });
};
