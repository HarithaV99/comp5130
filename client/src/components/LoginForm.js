import React from 'react';

const LoginForm = () => (
  <div className="form">
    <h2>Login Here</h2>
    <input type="email" placeholder="Enter Email Here" />
    <input type="password" placeholder="Enter Password Here" />
    <button className="btnn"><a href="#">Login</a></button>
    <p className="link">Don't have an account<br /><a href="#">Sign up here</a></p>
  </div>
);

export default LoginForm;
