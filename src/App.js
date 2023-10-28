import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage'; 
// import HireForEventPage from './components/HireForEventPage';
// import CookMyCravingPage from './components/CookMyCravingPage';
// import ContactUsPage from './components/ContactUsPage';
// import LoginPage from './components/LoginPage';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

library.add(faTwitter, faInstagram, faFacebook);

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
        {/* <Route path="/hire-for-event" component={HireForEventPage} />
        <Route path="/cook-my-craving" component={CookMyCravingPage} />
        <Route path="/contact-us" component={ContactUsPage} />
        <Route path="/login" component={LoginPage} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
