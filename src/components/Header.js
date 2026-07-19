import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">🎯</span>
          <h1>Sentiment Analytics</h1>
        </div>
        <p className="tagline">Real-time Customer Feedback Intelligence</p>
      </div>
    </header>
  );
}

export default Header;
