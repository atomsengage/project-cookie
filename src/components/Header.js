import React from 'react';
import './Header.css';
import logo from './images/logo.png'; // Replace with your logo's path
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="header">
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="title">Cookie</div>
        <ul className="nav-list">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/hire-for-event">Hire for Event</Link></li>
          <li className="nav-item"><Link to="/cook-my-craving">Cook My Craving</Link></li>
          <li className="nav-item"><Link to="/contact-us">Contact Us</Link></li>
          <li className="nav-item"><Link to="/login">Login</Link></li> {/* Note the path change here */}
        </ul>
      </div>
    </header>
  );
};


export default Header;
