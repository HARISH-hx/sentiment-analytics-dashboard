# 🎯 Sentiment Analytics Dashboard

A modern, responsive web application for analyzing customer sentiment and feedback in real-time. This platform provides actionable insights from customer reviews across multiple channels.

## 📋 Project Overview

**Customer Sentiment Analytics** - A solution for businesses to understand customer opinions and feedback trends through:
- Natural Language Processing (NLP) sentiment analysis
- Real-time review aggregation from social media and online reviews
- Visual analytics and trend insights
- Actionable recommendations based on feedback

## ✨ Features

### 1. **Dashboard Overview** 📊
- **Sentiment Distribution Metrics**: Quick view of positive, neutral, and negative sentiment percentages
- **Sentiment Breakdown Chart**: Interactive pie chart showing sentiment distribution
- **Total Reviews Count**: Track the volume of customer feedback

### 2. **Review Feed** 💬
- **Real-time Review Display**: Browse all customer reviews with detailed information
- **Sentiment Filtering**: Filter reviews by sentiment (All, Positive, Neutral, Negative)
- **Multi-Source Support**: See reviews from Twitter, Facebook, Instagram, Google Reviews, Amazon
- **Star Ratings**: Visual rating system for each review
- **Timestamp Tracking**: Know when each review was posted

### 3. **Analytics & Insights** 📈
- **Weekly Sentiment Trend**: Line chart showing sentiment evolution over 7 days
- **Top Discussion Topics**: Identify the most mentioned topics in customer feedback
- **Category Analysis**: Bar chart comparing reviews across different categories
- **Progress Visualization**: Visual representation of topic popularity

## 🛠️ Technology Stack

- **Frontend Framework**: React.js
- **Charting Library**: Recharts (for interactive charts)
- **Styling**: Custom CSS with responsive design
- **State Management**: React Hooks (useState)
- **Build Tool**: React Scripts

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Steps

1. **Clone the repository**
```bash
git clone https://github.com/HARISH-hx/sentiment-analytics-dashboard.git
cd sentiment-analytics-dashboard
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm start
```

4. **Open in browser**
```
http://localhost:3000
```

## 📁 Project Structure

```
sentiment-analytics-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── Dashboard.js
│   │   ├── Dashboard.css
│   │   ├── SentimentMetrics.js
│   │   ├── SentimentMetrics.css
│   │   ├── SentimentChart.js
│   │   ├── SentimentChart.css
│   │   ├── ReviewFeed.js
│   │   ├── ReviewFeed.css
│   │   ├── ReviewCard.js
│   │   ├── ReviewCard.css
│   │   ├── Analytics.js
│   │   └── Analytics.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎨 UI/UX Features

- **Modern Gradient Design**: Purple gradient theme for professional appearance
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Fade-in and slide-in animations for better UX
- **Interactive Components**: Hover effects and smooth transitions
- **Color-Coded Sentiment**: Consistent use of green (positive), orange (neutral), red (negative)
- **Intuitive Navigation**: Tab-based navigation between sections
- **Data Visualization**: Interactive charts using Recharts library

## 📊 Mock Data

The application includes realistic mock data:
- **2,456 total reviews** analyzed
- **68% Positive** sentiment reviews
- **22% Neutral** sentiment reviews
- **10% Negative** sentiment reviews
- **Sample reviews** from various sources (Twitter, Facebook, Instagram, Google Reviews, Amazon)
- **Weekly trends** showing sentiment progression

## 🚀 Future Enhancements

1. **Backend Integration**: Connect to real APIs for live data
2. **Advanced NLP Analysis**: Implement actual sentiment analysis algorithms
3. **Topic Modeling**: Use machine learning to identify emerging topics
4. **User Authentication**: Add login/logout functionality
5. **Export Reports**: Generate PDF/CSV reports of sentiment analysis
6. **Real-time Updates**: WebSocket integration for live sentiment tracking
7. **Advanced Filtering**: Filter by date range, source, category, keywords
8. **Sentiment Prediction**: Predictive analytics for future trends
9. **Alerts System**: Notify users of significant sentiment changes
10. **Admin Dashboard**: Content moderation and review management

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured interface
- **Tablet**: Optimized grid layouts
- **Mobile**: Single-column layouts with touch-friendly interactions

## 🔒 Data & Privacy

- All data in this MVP is mock/sample data
- No real customer data is currently stored
- When connected to production APIs, ensure compliance with data protection regulations (GDPR, CCPA, etc.)

## 📝 Usage Guide

### Dashboard Tab
1. View overall sentiment metrics
2. Check sentiment distribution pie chart
3. Monitor total review count

### Reviews Tab
1. Browse all customer reviews
2. Use filter buttons to view specific sentiment categories
3. Check review source and timestamp
4. View star ratings for each review

### Analytics Tab
1. Monitor weekly sentiment trends
2. Identify top discussion topics
3. Analyze review distribution by category
4. Export insights for business decisions

## 🤝 Contributing

This is an individual project. For improvements or bug reports, please contact the project maintainer.

## 📞 Contact & Support

- **Developer**: HARISH-hx
- **Project Duration**: 8-12 weeks
- **Mentor**: Available for weekly guidance
- **Mentor Phone**: 9025988203

## 📄 License

This project is part of an academic curriculum. Usage rights are determined by the institution.

---

**Created with ❤️ for Customer Sentiment Analytics**

Last Updated: July 2026
