import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ReviewFeed from './components/ReviewFeed';
import Analytics from './components/Analytics';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="app">
      <Header />
      <div className="container">
        <nav className="tab-navigation">
          <button
            className={`tab-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            📊 Dashboard
          </button>
          <button
            className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            💬 Reviews
          </button>
          <button
            className={`tab-btn ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            📈 Analytics
          </button>
        </nav>

        <div className="content">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'reviews' && <ReviewFeed />}
          {activeTab === 'analytics' && <Analytics />}
        </div>
      </div>
    </div>
  );
}

export default App;
