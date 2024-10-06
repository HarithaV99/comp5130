import React from 'react';

const Navbar = () => (
  <nav className="navbar">
    <div className="icon">
      <h2 className="logo">Event Hub</h2>
    </div>
    <div className="menu">
      <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
    </div>
    <SearchBar />
  </nav>
);

export default Navbar;
