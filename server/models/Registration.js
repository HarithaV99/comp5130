// models/Event.js
const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    eventName: { type: String, required: true },
    name: { type: String, required: true},
    email: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Register', registerSchema);
