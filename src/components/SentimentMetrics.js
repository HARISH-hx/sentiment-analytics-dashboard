import React from 'react';
import './SentimentMetrics.css';

function SentimentMetrics() {
  const metrics = [
    { label: 'Positive', value: '68%', color: '#10b981', icon: '😊' },
    { label: 'Neutral', value: '22%', color: '#f59e0b', icon: '😐' },
    { label: 'Negative', value: '10%', color: '#ef4444', icon: '😞' },
    { label: 'Total Reviews', value: '2,456', color: '#667eea', icon: '📊' },
  ];

  return (
    <div className="metrics-container">
      <h3>Sentiment Distribution</h3>
      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-card">
            <div className="metric-icon">{metric.icon}</div>
            <div className="metric-content">
              <p className="metric-label">{metric.label}</p>
              <p className="metric-value" style={{ color: metric.color }}>
                {metric.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SentimentMetrics;
