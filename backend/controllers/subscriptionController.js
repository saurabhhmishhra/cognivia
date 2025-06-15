const Subscription = require('../models/Subscription');

exports.createSubscription = async (req, res) => {
  const { planName, price, currency, sessionLimit, durationInDays } = req.body;
  const clientId = req.user.id;

  const start = new Date();
  const expiry = new Date();
  expiry.setDate(start.getDate() + durationInDays);

  const subscription = new Subscription({
    clientId,
    planName,
    price,
    currency,
    sessionLimit,
    expiryDate: expiry
  });

  await subscription.save();
  res.json({ msg: 'Subscription activated', subscription });
};

exports.getClientSubscription = async (req, res) => {
  const clientId = req.user.id;
  const sub = await Subscription.findOne({ clientId }).sort({ createdAt: -1 });
  res.json(sub);
};

exports.updateSessionsUsed = async (req, res) => {
  const { subscriptionId } = req.params;

  const updated = await Subscription.findByIdAndUpdate(
    subscriptionId,
    { $inc: { sessionsUsed: 1 } },
    { new: true }
  );

  if (updated.sessionsUsed >= updated.sessionLimit) {
    updated.status = 'expired';
    await updated.save();
  }

  res.json(updated);
};