import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div
      style={{
        backgroundColor: '#f5f7fa',
        color: '#333',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          textAlign: 'center',
          padding: '50px',
          backgroundColor: '#007bff',
          color: '#fff',
          borderRadius: '10px',
        }}
      >
        <h1 style={{ fontSize: '3rem', margin: '10px 0' }}>Welcome to Event Hub!</h1>
        <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>
          Your gateway to discovering and engaging with exciting campus events and clubs.
        </p>
      </div>

      {/* About Section */}
      <section
        style={{
          padding: '40px 0',
          margin: '20px auto',
          maxWidth: '900px',
          textAlign: 'center',
        }}
      >
        <h2 style={{ color: '#0056b3', marginBottom: '20px' }}>About Us</h2>
        <p>
          Event Hub is a vibrant platform designed to connect students with the campus community. From discovering
          events to joining clubs, we’re here to help you explore your passions and make meaningful connections.
        </p>
      </section>

      {/* Mission and Vision Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: '20px auto',
          padding: '20px 0',
          maxWidth: '900px',
        }}
      >
        <div style={{ flex: 1, margin: '0 10px' }}>
          <h3 style={{ color: '#0056b3' }}>Our Mission</h3>
          <p>
            To empower students by providing a centralized platform to explore and participate in events, fostering
            connections and building a thriving campus community.
          </p>
        </div>
        <div style={{ flex: 1, margin: '0 10px' }}>
          <h3 style={{ color: '#0056b3' }}>Our Vision</h3>
          <p>
            A world where every student feels connected, informed, and inspired to make the most of their college
            experience.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <section
        style={{
          backgroundColor: '#e6f7ff',
          padding: '30px',
          borderRadius: '10px',
          margin: '20px auto',
          maxWidth: '900px',
        }}
      >
        <h2 style={{ textAlign: 'center', color: '#0056b3' }}>Key Features</h2>
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: '20px 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <li style={{ marginBottom: '15px' }}>📅 Browse upcoming campus events.</li>
          <li style={{ marginBottom: '15px' }}>🤝 Discover clubs that match your interests.</li>
          <li style={{ marginBottom: '15px' }}>🔔 Stay informed with real-time updates.</li>
          <li style={{ marginBottom: '15px' }}>🖱️ Seamlessly enroll in activities with just a click!</li>
        </ul>
      </section>

      {/* Call to Action Section */}
      <section
        style={{
          textAlign: 'center',
          padding: '30px',
          margin: '20px auto',
          maxWidth: '900px',
        }}
      >
        <h2 style={{ color: '#0056b3' }}>Ready to Explore?</h2>
        <p>Sign up today and start discovering the amazing opportunities waiting for you on campus!</p>
        <Link to="/home">
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            Get Started
          </button>
        </Link>
      </section>
    </div>
  );
};

export default About;
