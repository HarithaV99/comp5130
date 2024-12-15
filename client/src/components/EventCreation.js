// src/components/RegistrationForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const EventCreation = () => {
  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();


  const handleRegistration = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
        console.log({eventName, date, time, location, image, description})
      await axios.post('http://localhost:5000/events', {
        eventName, date, time, location, image, description
      });
      setSuccess('Registration successful!');
      setTimeout(() => navigate('/'), 2000);  // Redirect to login page after 2 seconds
    } catch (err) {
      setError(err.response?.data?.msg || 'An error occurred');
    }
  };

  return (
    <div>
      <h2>Add Event</h2>
      <form onSubmit={handleRegistration}>
        <div>
            <label>Event Name:</label>
            <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            placeholder="Enter the event name"
            required
            />
        </div>
        <div>
            <label>Date:</label>
            <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            />
        </div>
        <div>
            <label>Time:</label>
            <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            />
        </div>
        <div>
            <label>Location:</label>
            <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter the location"
            required
            />
        </div>
        <div>
            <label>Image:</label>
            <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            // required
            />
        </div>
        <div>
            <label>Description:</label>
            <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter a brief description of the event"
            // required
            />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <button type="submit">Create Event</button>
      </form>

    </div>
  );
};

export default EventCreation;
