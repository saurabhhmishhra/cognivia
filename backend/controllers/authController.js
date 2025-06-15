const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

// OTP generator
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// Email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.OTP_EMAIL_USER,
    pass: process.env.OTP_EMAIL_PASS
  }
});

// 👉 Send OTP
exports.sendOTP = async (req, res) => {
  const { email, mobile, fullName, role } = req.body;

  try {
    const existing = await User.findOne({ $or: [{ email }, { mobile }] });
    if (existing) return res.status(400).json({ msg: 'User already exists' });

    const otp = generateOTP();
    const otpExpiry = Date.now() + 10 * 60 * 1000; // 10 min

    const mailOptions = {
      from: process.env.OTP_EMAIL_USER,
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP is: ${otp}`
    };

    await transporter.sendMail(mailOptions);

    const user = new User({
      fullName,
      email,
      mobile,
      otp,
      otpExpiry,
      role
    });

    await user.save();
    res.json({ msg: 'OTP sent successfully' });

  } catch (err) {
    console.error('Send OTP Error:', err);
    res.status(500).json({ msg: 'Email error', error: err.message });
  }
};

// 👉 Verify OTP & Create Password
exports.verifyOTP = async (req, res) => {
  const { email, otp, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.otp !== otp || Date.now() > user.otpExpiry) {
      return res.status(400).json({ msg: 'Invalid or expired OTP' });
    }

    user.password = await bcrypt.hash(password, 10);
    user.otp = undefined;
    user.otpExpiry = undefined;
    user.isVerified = true;
    await user.save();

    res.json({ msg: 'OTP verified, account created' });

  } catch (err) {
    console.error('Verify OTP Error:', err);
    res.status(500).json({ msg: 'Verification error', error: err.message });
  }
};

// 👉 Login
exports.login = async (req, res) => {
  const { emailOrMobile, password } = req.body;

  try {
    const user = await User.findOne({
      $or: [{ email: emailOrMobile }, { mobile: emailOrMobile }]
    });

    if (!user || !user.isVerified) {
      return res.status(400).json({ msg: 'User not found or not verified' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Incorrect password' });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      token,
      user: {
        id: user._id,
        role: user.role,
        fullName: user.fullName
      }
    });

  } catch (err) {
    console.error('Login Error:', err);
    res.status(500).json({ msg: 'Login failed', error: err.message });
  }
};
