import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './SentimentChart.css';

function SentimentChart() {
  const data = [
    { name: 'Positive', value: 68 },
    { name: 'Neutral', value: 22 },
    { name: 'Negative', value: 10 },
  ];

  const COLORS = ['#10b981', '#f59e0b', '#ef4444'];

  return (
    <div className="chart-container">
      <h3>Sentiment Breakdown</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name}: ${value}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SentimentChart;
