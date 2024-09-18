
      import React from 'react';
      import { Link } from 'react-router-dom';
      
      const Navbar = () => (
        <nav className='nav' >
          <div className='arrange'>
            
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
            <div style={{
              display: 'flex',
              gap: '20px',
              fontSize: '16px',
            }}>
              <Link to="/" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Home</Link>
              <Link to="/popular-course" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Popular Courses</Link>
              <Link to="/profile" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Profile</Link>
              <Link to="/login" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Login</Link>
              <Link to="/register" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Register</Link>
              <Link to="/instructors" style={{ color: '#ecf0f1', textDecoration: 'none' }}>InstructorsList</Link>
              
            </div>
          </div>
        </nav>
      );
      
      export default Navbar;
      
