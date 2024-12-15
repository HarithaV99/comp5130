import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AboutPage = () => {
  
  const location = useLocation();
  let eventName = location.state?.eventName || 'Unknown Event';
  let eventDescription = location.state?.eventDescription || 'No description available';
  // console.log('eeeeeeeeeeeeeeeee', eventDescription, eventName)
  return (
  <div>
    <h1>About {eventName}</h1>
    <p>{eventDescription}</p>
  </div>
  )
};

export default AboutPage;
