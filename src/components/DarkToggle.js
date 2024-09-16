// src/components/DarkToggle.js
import React, { useEffect } from 'react';
import '../darkmode.css'; // Correct path to the CSS file

function DarkToggle() {
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      document.body.classList.add(savedTheme === 'dark' ? 'dark-mode' : 'light-mode');
    } else {                     //   (prefersDarkScheme) {
      document.body.classList.add(prefersDarkScheme ? 'dark-mode' : 'light-mode');
    }
  }, []);

  return (
    <div className="DarkToggle">
      <nav>
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      </nav>
    </div>
  );
}

export default DarkToggle;
