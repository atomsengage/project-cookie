import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home">
      <div className="home-background">
        {/* Background image of chef cooking */}
        <img src="path-to-chef-image.jpg" alt="Chef" />
      </div>
      <div className="home-content">
        <h1 className="home-title">Most Trusted Platform for At-Home Cooking Services</h1>
        <h2 className="home-subtitle">Find your perfect cook</h2>
      </div>
      <div className="home-cards">
        <div className="home-card">
          <h3>Cook My Craving</h3>
          <p>Starting Price: $20</p>
          <ul>
            <li>One-time cooking</li>
            <li>At your place</li>
            <li>Affordable price</li>
          </ul>
          <button>Know More</button>
        </div>
        <div className="home-card">
          <h3>Cook for Event</h3>
          <p>Starting Price: $50</p>
          <ul>
            <li>Professional cooks</li>
            <li>Cook for a party</li>
            <li>Pick the location</li>
          </ul>
          <button>Know More</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
