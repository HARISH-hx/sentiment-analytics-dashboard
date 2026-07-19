import React from 'react';
import './StatCard.css';

function StatCard({ icon, label, value, trend, color }) {
  return (
    <div className="stat-card" style={{ '--card-color': color }}>
      <div className="stat-icon">{icon}</div>
      <div className="stat-content">
        <p className="stat-label">{label}</p>
        <h3 className="stat-value">{value}</h3>
        {trend && (
          <p className={`stat-trend ${trend.type}`}>
            {trend.type === 'up' ? '↑' : '↓'} {trend.value}
          </p>
        )}
      </div>
    </div>
  );
}

export default StatCard;