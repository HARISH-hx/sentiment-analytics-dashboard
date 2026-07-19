import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import ReviewFeed from './components/ReviewFeed';
import Analytics from './components/Analytics';
import Toast from './components/Toast';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header showToast={showToast} />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      
      <main className="main-content">
        <div className="tab-content">
          {activeTab === 'dashboard' && <Dashboard showToast={showToast} />}
          {activeTab === 'reviews' && <ReviewFeed showToast={showToast} />}
          {activeTab === 'analytics' && <Analytics showToast={showToast} />}
        </div>
      </main>

      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  );
}

export default App;