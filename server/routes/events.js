const express = require('express');
const Event = require('../models/Event');
const Register = require('../models/Registration');
const router = express.Router();

// GET all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    console.log('events', events);
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new event
router.post('/', async (req, res) => {
  const event = new Event({
    eventName: req.body.eventName,
    Date: req.body.date,
    Time: req.body.time,
    Location: req.body.location,
    description: req.body.description,
    image: req.body.image
  });

  try {
    console.log(' -     -----', req.body)
    console.log('event --------->>>>>', event)
    const newEvent = await event.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post('/register', async (req, res) => {
  const register = new Register({
    eventName : req.body.eventName,
    name: req.body.username,
    email: req.body.email,
    phoneNumber: req.body.number,
    // description: req.body.description,
    // registrationLink: req.body.registrationLink
  });

  try {
    const newRegistration = await register.save();
    res.status(201).json(newRegistration);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
