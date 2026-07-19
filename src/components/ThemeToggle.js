import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import './ThemeToggle.css';

function ThemeToggle({ isDarkMode, setIsDarkMode }) {
  return (
    <button
      className="theme-toggle"
      onClick={() => setIsDarkMode(!isDarkMode)}
      title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {isDarkMode ? (
        <FiSun className="theme-icon" />
      ) : (
        <FiMoon className="theme-icon" />
      )}
    </button>
  );
}

export default ThemeToggle;