import React, { useState } from 'react';
import './ReviewFeed.css';
import ReviewCard from './ReviewCard';

function ReviewFeed() {
  const [filter, setFilter] = useState('all');

  const reviews = [
    {
      id: 1,
      author: 'Sarah Johnson',
      sentiment: 'positive',
      text: 'Excellent product! Great quality and fast delivery. Highly recommend!',
      date: '2 hours ago',
      source: 'Twitter',
      rating: 5,
    },
    {
      id: 2,
      author: 'Mike Chen',
      sentiment: 'positive',
      text: 'Amazing customer service. They resolved my issue within 24 hours!',
      date: '5 hours ago',
      source: 'Facebook',
      rating: 5,
    },
    {
      id: 3,
      author: 'Emma Davis',
      sentiment: 'neutral',
      text: 'Good product but packaging could be better. Overall satisfied.',
      date: '1 day ago',
      source: 'Google Reviews',
      rating: 3,
    },
    {
      id: 4,
      author: 'John Wilson',
      sentiment: 'negative',
      text: 'Product arrived damaged. Waiting for replacement. Poor packaging.',
      date: '1 day ago',
      source: 'Instagram',
      rating: 2,
    },
    {
      id: 5,
      author: 'Lisa Anderson',
      sentiment: 'positive',
      text: 'Perfect! Exactly what I was looking for. Worth every penny!',
      date: '2 days ago',
      source: 'Amazon',
      rating: 5,
    },
    {
      id: 6,
      author: 'Robert Brown',
      sentiment: 'neutral',
      text: 'Average product. Does what it says but nothing special.',
      date: '3 days ago',
      source: 'Google Reviews',
      rating: 3,
    },
  ];

  const filteredReviews =
    filter === 'all' ? reviews : reviews.filter((r) => r.sentiment === filter);

  return (
    <div className="review-feed">
      <h2>💬 Review Feed</h2>
      
      <div className="filter-section">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Reviews ({reviews.length})
        </button>
        <button
          className={`filter-btn ${filter === 'positive' ? 'active' : ''}`}
          onClick={() => setFilter('positive')}
        >
          😊 Positive ({reviews.filter((r) => r.sentiment === 'positive').length})
        </button>
        <button
          className={`filter-btn ${filter === 'neutral' ? 'active' : ''}`}
          onClick={() => setFilter('neutral')}
        >
          😐 Neutral ({reviews.filter((r) => r.sentiment === 'neutral').length})
        </button>
        <button
          className={`filter-btn ${filter === 'negative' ? 'active' : ''}`}
          onClick={() => setFilter('negative')}
        >
          😞 Negative ({reviews.filter((r) => r.sentiment === 'negative').length})
        </button>
      </div>

      <div className="reviews-container">
        {filteredReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}

export default ReviewFeed;
