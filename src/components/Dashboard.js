import React from 'react';
import './Dashboard.css';
import SentimentMetrics from './SentimentMetrics';
import SentimentChart from './SentimentChart';

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>📊 Dashboard Overview</h2>
      <div className="dashboard-grid">
        <SentimentMetrics />
        <SentimentChart />
      </div>
    </div>
  );
}

export default Dashboard;
