const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const speakeasy = require('speakeasy'); 
const nodemailer = require('nodemailer'); 
const User = require('../models/User');
const router = express.Router();


const generateAndSendOTP = async (user) => {
  const otp = speakeasy.totp({
    secret: user.totpSecret, 
    encoding: 'base32',
    step: 300, // OTP valid for 5 minutes
  });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@example.com', 
      pass: 'your-email-password', 
    },
  });

  const mailOptions = {
    from: 'your-email@example.com',
    to: user.email,
    subject: 'Your 2FA Code',
    text: `Your verification code is ${otp}`,
  };

  await transporter.sendMail(mailOptions);
  return otp;
};


router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const totpSecret = speakeasy.generateSecret().base32; // Generate a TOTP secret for the user
    const user = new User({ email, password: hashedPassword, totpSecret });
    await user.save();
    res.status(201).send('User created');
  } catch (error) {
    res.status(400).send('Error registering user');
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).send('Invalid credentials');
    }

    // Generate and send OTP after password verification
    const otp = await generateAndSendOTP(user);

    // Store OTP secret and email in session or a temporary store
    req.session.otpSecret = user.totpSecret;
    req.session.email = user.email;

    res.status(200).send('OTP sent, please verify');
  } catch (error) {
    res.status(400).send('Error logging in');
  }
});

// OTP verification route
router.post('/verify-otp', async (req, res) => {
  const { otp } = req.body;

  // Verify the OTP
  const isValid = speakeasy.totp.verify({
    secret: req.session.otpSecret,
    encoding: 'base32',
    token: otp,
    window: 2,
  });

  if (!isValid) {
    return res.status(400).send('Invalid OTP');
  }

  // Generate JWT token
  const user = await User.findOne({ email: req.session.email });
  const token = jwt.sign({ id: user._id }, 'your_jwt_secret'); 

  // Clear OTP and email from session
  req.session.otpSecret = null;
  req.session.email = null;

  res.json({ token });
});

module.exports = router;
