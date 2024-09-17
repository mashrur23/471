const speakeasy = require('speakeasy');
const nodemailer = require('nodemailer');


const TOTP_SECRET = 'your-totp-secret-key'; 
const EMAIL = 'your-email@example.com';
const EMAIL_PASSWORD = 'your-email-password';


async function send2FACode(user) {
    const otp = speakeasy.totp({
        secret: TOTP_SECRET,
        encoding: 'base32',
        step: 300, // OTP valid for 5 minutes
    });

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: EMAIL,
            pass: EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: EMAIL,
        to: user.email,
        subject: 'Your 2FA Code',
        text: `Your verification code is ${otp}`,
    };

    await transporter.sendMail(mailOptions);
    return otp;
}


exports.login = async (req, res) => {
  const { email, password } = req.body;

  
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  
  const otp = await send2FACode(user);

  req.session.otp = otp;
  req.session.email = user.email;

  res.status(200).json({ message: 'OTP sent, proceed to verify' });
};

exports.verifyOTP = (req, res) => {
  const { otp } = req.body;

  const isValid = speakeasy.totp.verify({
    secret: TOTP_SECRET,
    encoding: 'base32',
    token: otp,
    window: 2,
  });

  if (!isValid) {
    return res.status(401).json({ message: 'Invalid OTP' });
  }

  res.status(200).json({ message: 'Login successful' });
};
