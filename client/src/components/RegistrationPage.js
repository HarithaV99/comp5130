// src/components/RegistrationForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegistration = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    console.log('location', location)
    const eventName = location.state?.eventName || 'Unknown Event';
  
    try {
      await axios.post('http://localhost:5000/events/register', {
        eventName,
        username,
        email,
        number,
      });
      setSuccess('Registration successful!');
      setTimeout(() => navigate('/home'), 2000);  // Redirect to login page after 2 seconds
    } catch (err) {
      setError(err.response?.data?.msg || 'An error occurred');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegistration}>
        <div>
          <label>FullName:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone No:</label>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
            minLength="10"
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
