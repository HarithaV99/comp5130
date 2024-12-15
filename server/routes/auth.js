// routes/auth.js
const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();

// Register User
router.post('/register', async (req, res) => {
  const { username, email, password, role } = req.body;
  // console.log('api', { username, email, password, role })
  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    // console.log({user})
    if (user) return res.status(400).json({ msg: 'User already exists' });

    // Create new user
    user = new User({ username, email, password, role });
    await user.save();
    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login User
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });
// console.log('useeeeeeeeeee',{ user})
    // Generate JWT token
    const token = jwt.sign({ id: user._id, role: user.role }, 'yourSecretKey', { expiresIn: '1h' });
    res.json({ token, role: user.role });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
