import React from 'react';
import './HomePage.css';
import CuisineTemplate from './CuisineTemplate';
const HomePage = () => {
    return (
      <div className="home">
        <div className="home-background">
          {/* Background image of chef cooking */}
          <img src="/path-to-chef-image.jpg" alt="Chef" />
        </div>
        <div className="home-content">
          <h1 className="home-title">Most Trusted Platform for At-Home Cooking Services</h1>
          <h2 className="home-subtitle">Find your perfect cook</h2>
          <h2 className="home-subtitle">App is coming soon...</h2>
        </div>
        
        <CuisineTemplate />
        
        <div className="home-cards">
        <div class="cards-container">
        <div className="home-card card1">
          <div className="card-header">
            <h3>Cook My Craving</h3>
            <p>Starting Price: $20</p>
          </div>
          <div className="card-body">
          <ul className="styled-list">
            <li>One-time cooking</li>
            <li>At your place</li>
            <li>Affordable price</li>
          </ul>
          </div>
          <div className="card-footer">
          <a href="/cook-my-craving" className="home-button">Know More</a>
          </div>
        </div>

        <div className="home-card card2">
          <div className="card-header">
            <h3>Hire for Event</h3>
            <p>Starting Price: $50</p>
          </div>
          <div className="card-body">
          <ul className="styled-list">
            <li>Professional cooks</li>
            <li>Cook for a party</li>
            <li>Pick the location</li>
          </ul>
          </div>
          <div className="card-footer">
          <a href="/hire-for-event" className="home-button">Know More</a>
          </div>
        </div>
        <div className="home-card card3">
          <div className="card-header">
            <h3>Meal Prep for Week</h3>
            <p>Starting Price: $20</p>
          </div>
          <div className="card-body">
          <ul className="styled-list">
            <li>Hire cook for an hour</li>
            <li>Get weekly meal prep</li>
            <li>At your location</li>
          </ul>
          </div>
          <div className="card-footer">
          <a href="/meal-prep" className="home-button">Know More</a>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  };
  
  export default HomePage;