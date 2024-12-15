import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EventList from '../components/EventList';

const Home = () => {
  const navigate = useNavigate();
  const loggedIn = sessionStorage.getItem('isLoggedin') === 'true';

  useEffect(() => {
    if (!loggedIn) {
      navigate('/');
    }
  }, [loggedIn, navigate]);

  if (!loggedIn) {
    return null;
  }

  return (
    <div>
    <h1 style={{ color: 'purple', background: 'linear-gradient(to right, red, orange, yellow, green, blue)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
      Welcome to Event Hub
    </h1>
    <p style={{ color: 'blue', fontSize: '1.2rem' }}>
      Discover and join exciting events happening in your college!
    </p>
    <EventList />
  </div>
  
  );
};

export default Home;
