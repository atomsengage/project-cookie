import React from 'react';
import './Header.css';
import logo from './images/logo.png'; // Replace with your logo's path

const Header = () => {
  return (
    <header className="header">
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="nav-list">
          <li className="nav-item"><a href="/">Home</a></li>
          <li className="nav-item"><a href="/hire-for-event">Hire for Event</a></li>
          <li className="nav-item"><a href="/cook-my-craving">Cook My Craving</a></li>
          <li className="nav-item"><a href="/contact-us">Contact Us</a></li>
          <li className="nav-item"><a href="/login">Login</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
