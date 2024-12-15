import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      localStorage.setItem('token', response.data.token); // Save JWT token
      sessionStorage.setItem('isLoggedin', true);
      let role = (response && response.data && response.data.role) ? response.data.role : 'user';
      if (role == 'admin') {
        alert('Admin Login successful!');
        navigate('/events');
      } else {
      // console.log('response -->>>', response.data)
        alert('Login successful!');
        navigate('/home');
      }
    } catch (error) {
      alert('Login failed: ' + error.response.data.msg);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* <label>Email:</label> */}
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required  placeholder="Enter Email Here" />
      </div>
      <div>
        {/* <label>Password:</label> */}
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Enter Password Here" />
      </div>
      <button type="submit" className='btnn'>Login</button>
    </form>
  );
};

export default LoginForm;
