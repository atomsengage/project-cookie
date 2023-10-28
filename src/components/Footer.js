import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // You should import FontAwesome or relevant icon libraries

const Footer = () => {
  return (
    <footer className="footer">
      <div className="left">
        <a href="https://www.apple.com/app-store/">
          <button className="download-button">App Store</button>
        </a>
        <a href="https://play.google.com/store">
          <button className="download-button">Google Play</button>
        </a>
      </div>
      <div className="center">
        <p>&copy; 2023 Cookie</p>
      </div>
      <div className="right">
        <a href="https://www.twitter.com">
          <FontAwesomeIcon icon={['fab', 'twitter']} className="social-icon" />
        </a>
        <a href="https://www.instagram.com">
          <FontAwesomeIcon icon={['fab', 'instagram']} className="social-icon" />
        </a>
        <a href="https://www.facebook.com">
          <FontAwesomeIcon icon={['fab', 'facebook']} className="social-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
