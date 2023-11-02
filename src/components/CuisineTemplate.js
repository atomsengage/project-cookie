import React, { useState, useEffect } from 'react';
import './CuisineTemplate.css';

const CuisineTemplate = () => {
  const cuisines = ['Italian', 'Chinese', 'Indian', 'Mexican'];
  const [currentCuisine, setCurrentCuisine] = useState(0);
  const cuisineColors = {
    Italian: 'red',
    Chinese: 'green',
    Indian: 'blue',
    Mexican: 'orange',
  };
  const cuisineImages = {
    Italian: '/italian.jpeg',
    Chinese: '/chinese.jpeg',
    Indian: '/indian.jpeg',
    Mexican: '/mexcian.jpeg',
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCuisine((currentCuisine + 1) % cuisines.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentCuisine]);

  return (
    <div className="cuisine-template">
      <h1>
        Craving <span style={{ color: cuisineColors[cuisines[currentCuisine]] }}>{cuisines[currentCuisine]}</span> food? Cooked at your Home
        <br />
        We got you...!
      </h1>
      <div className="cuisine-images">
        {cuisines.map((cuisine, index) => (
          <img
            key={index}
            src={cuisineImages[cuisine]}
            alt={cuisine}
            className={`cuisine-image ${
              index === currentCuisine ? 'highlight' : 'fade'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CuisineTemplate;
