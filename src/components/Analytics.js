import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import './Analytics.css';

function Analytics() {
  const trendData = [
    { day: 'Mon', Positive: 62, Neutral: 20, Negative: 18 },
    { day: 'Tue', Positive: 65, Neutral: 22, Negative: 13 },
    { day: 'Wed', Positive: 70, Neutral: 18, Negative: 12 },
    { day: 'Thu', Positive: 68, Neutral: 25, Negative: 7 },
    { day: 'Fri', Positive: 72, Neutral: 20, Negative: 8 },
    { day: 'Sat', Positive: 75, Neutral: 18, Negative: 7 },
    { day: 'Sun', Positive: 68, Neutral: 22, Negative: 10 },
  ];

  const topicsData = [
    { name: 'Product Quality', count: 450, color: '#10b981' },
    { name: 'Delivery', count: 380, color: '#667eea' },
    { name: 'Customer Service', count: 320, color: '#f59e0b' },
    { name: 'Pricing', count: 290, color: '#ef4444' },
    { name: 'Packaging', count: 210, color: '#06b6d4' },
  ];

  return (
    <div className="analytics">
      <h2>📈 Analytics & Insights</h2>

      <div className="analytics-grid">
        <div className="analytics-section">
          <h3>Sentiment Trend (Weekly)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="Positive"
                stroke="#10b981"
                strokeWidth={2}
                dot={{ fill: '#10b981' }}
              />
              <Line
                type="monotone"
                dataKey="Neutral"
                stroke="#f59e0b"
                strokeWidth={2}
                dot={{ fill: '#f59e0b' }}
              />
              <Line
                type="monotone"
                dataKey="Negative"
                stroke="#ef4444"
                strokeWidth={2}
                dot={{ fill: '#ef4444' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="analytics-section">
          <h3>Top Discussion Topics</h3>
          <div className="topics-list">
            {topicsData.map((topic, index) => (
              <div key={index} className="topic-item">
                <div className="topic-header">
                  <span className="topic-name">{topic.name}</span>
                  <span className="topic-count">{topic.count}</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${(topic.count / 450) * 100}%`,
                      backgroundColor: topic.color,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="analytics-section full-width">
        <h3>Reviews by Category (Bar Chart)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={topicsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#667eea" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Analytics;
