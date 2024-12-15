import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get('http://localhost:5000/events');
      console.log('res -->>', res.data)
      setEvents(res.data);
    };
    fetchEvents();
  }, []);

  // const 

  return (
    <div>
      <h1>Events</h1>
      <div className="event-grid">
        {events.map((event, index) => (
          <div key={event._id} className="event-card">
            <img src={event.image} className="event-image"/>
            <Link to={"/details"} state={{ eventName: event.eventName, eventDescription : event.description }}>
              <button className="register-button" style={{color:'red'}}>
                <h3 style={{color:'red'}}>{event.eventName}</h3>
              </button>
            </Link>
            <p>Date: {event.Date}</p>
            <p>Time: {event.Time}</p>
            <p>Location: {event.Location}</p>
            <Link to={"/register"} state={{ eventName: event.eventName }}>
              <button className="register-button">Register</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
