import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    axios.get('http://localhost:5000/events') // Ensure this URL is correct
      .then(response => {
        setEvents(response.data);
        setFilteredEvents(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    const filtered = events.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            event.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredEvents(filtered);
  }, [searchTerm, selectedCategory, events]);

  // Function to handle button click event
  const handleMoreInfo = (event) => {
    alert(`More details about the event: \n\nTitle: ${event.title}\nDescription: ${event.description}\nLocation: ${event.location}`);
  };

  return (
    <div className="container">
      <h1 className="text-center mt-4">Upcoming College Events</h1>

      {/* Search Bar */}
      <div className="row mt-4">
        <div className="col-md-6">
          <input
            type="text"
            placeholder="Search events..."
            className="form-control"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Category Filter */}
        <div className="col-md-6">
          <select
            className="form-control"
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Workshops">Workshops</option>
            <option value="Seminars">Seminars</option>
            <option value="Sports">Sports</option>
            <option value="Concerts">Concerts</option>
          </select>
        </div>
      </div>

      <div className="row mt-4">
        {filteredEvents.map(event => (
          <div className="col-md-4 mb-4" key={event._id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text">{event.description}</p>
                <p className="card-text">Location: {event.location}</p>
                <p className="card-text">Date: {new Date(event.date).toLocaleDateString()}</p>
                <p className="card-text">Category: {event.category}</p>

                {/* Register button */}
                <a href={event.registrationLink} className="btn btn-primary">Register</a>

                {/* More Info button */}
                <button 
                  className="btn btn-info ml-2" 
                  onClick={() => handleMoreInfo(event)}>
                  More Info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
