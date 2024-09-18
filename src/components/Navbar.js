
import React from 'react';
import { Link } from 'react-router-dom';
import DarkToggle from './DarkToggle';

const Navbar = () => (
  <nav style={{

  }}>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      alignItems: 'center'
    }}>
      {/* Logo */}
      <div>
        <Link to="/" style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#fff',
          textDecoration: 'none',
        }}>
          Yoga King
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="navmenu-wrapper-items">
        <Link to="/" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Home</Link>
        <Link to="/popular-course" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Courses</Link>
        <Link to="/course-category" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Category</Link>
        <Link to="/profile" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Profile</Link>
        <Link to="/login" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Login</Link>
        <Link to="/register" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Register</Link>
        <DarkToggle />
      </div>
    </div>
  </nav>
);

export default Navbar;

