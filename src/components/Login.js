import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [isOtpStep, setIsOtpStep] = useState(false); 
  const navigate = useNavigate();

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      
      
      setIsOtpStep(true);
      localStorage.setItem('user', JSON.stringify({ email })); 
    } catch (error) {
      setError('Invalid credentials');
      console.error('Error logging in', error);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/verify-otp', { email, otp });
      
      const { token } = response.data;
      localStorage.setItem('token', token); 
      
      navigate('/profile'); 
    } catch (error) {
      setError('Invalid OTP');
      console.error('Error verifying OTP', error);
    }
  };

  return (
    <form onSubmit={isOtpStep ? handleOtpSubmit : handleSubmit} style={{
      maxWidth: '400px',
      margin: '0 auto',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      backgroundColor: '#fff'
    }}>
      {!isOtpStep ? (
        <>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            style={{ marginBottom: '10px' }}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            style={{ marginBottom: '10px' }}
          />
          <button type="submit">Login</button>
        </>
      ) : (
        <>
          <p>A verification code has been sent to your email. Please enter the code below:</p>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            required
            style={{ marginBottom: '10px' }}
          />
          <button type="submit">Verify OTP</button>
        </>
      )}
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
    </form>
  );
};

export default Login;
