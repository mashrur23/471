import React from 'react';
import '../App.css'; // Importing CSS for styling

const Main = () => (
  <div className="container">
    <header className="header">
      <h1>Welcome to My Yoga Course</h1>
      <p>Find your inner peace and strength.</p>
    </header>
    
    <section className="content">
      <h2>About Our Course</h2>
      <p>
        Join us for a transformative journey through yoga. Our courses are designed for all levels, 
        from beginners to advanced practitioners. Experience the benefits of yoga for your body and mind.
      </p>
      <button className="cta-button">Join Now</button>
    </section>
    
    <footer className="footer">
      <p>&copy; 2023 My Yoga Course. All rights reserved.</p>
    </footer>
  </div>
);

export default Main;