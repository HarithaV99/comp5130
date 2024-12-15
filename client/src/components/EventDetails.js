import React from 'react';
import axios from 'axios';

const EventDetail = ({ event }) => {
  const handleEnroll = async () => {
    try {
      await axios.post(`/api/events/${event._id}/enroll`);
      alert('Successfully enrolled!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <button onClick={handleEnroll}>Enroll</button>
    </div>
  );
};

export default EventDetail;
