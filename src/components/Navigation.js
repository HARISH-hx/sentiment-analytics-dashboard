import React from 'react';
import { FiBarChart, FiMessageSquare, FiTrendingUp } from 'react-icons/fi';
import './Navigation.css';

function Navigation({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: FiBarChart },
    { id: 'reviews', label: 'Reviews', icon: FiMessageSquare },
    { id: 'analytics', label: 'Analytics', icon: FiTrendingUp },
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              title={tab.label}
            >
              <Icon className="nav-icon" />
              <span className="nav-label">{tab.label}</span>
              {activeTab === tab.id && <div className="nav-indicator" />}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default Navigation;
