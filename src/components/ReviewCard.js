import React from 'react';
import './ReviewCard.css';

function ReviewCard({ review }) {
  const sentimentIcons = {
    positive: '😊',
    neutral: '😐',
    negative: '😞',
  };

  const sentimentColors = {
    positive: '#10b981',
    neutral: '#f59e0b',
    negative: '#ef4444',
  };

  const renderStars = (rating) => {
    return (
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? 'filled' : ''}>
            ⭐
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="review-card">
      <div className="review-header">
        <div className="review-left">
          <div
            className="sentiment-badge"
            style={{ borderColor: sentimentColors[review.sentiment] }}
          >
            {sentimentIcons[review.sentiment]}
          </div>
          <div className="review-info">
            <h4>{review.author}</h4>
            <span className="source-badge">{review.source}</span>
          </div>
        </div>
        <span className="review-time">{review.date}</span>
      </div>

      <p className="review-text">{review.text}</p>

      <div className="review-footer">
        {renderStars(review.rating)}
        <span
          className="sentiment-label"
          style={{ color: sentimentColors[review.sentiment] }}
        >
          {review.sentiment.charAt(0).toUpperCase() + review.sentiment.slice(1)}
        </span>
      </div>
    </div>
  );
}

export default ReviewCard;
