// models/Event.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  eventName: String,
  description: String,
  Date: String,
  Time: String,
  Location: String,
  image: String,
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Event', eventSchema);
