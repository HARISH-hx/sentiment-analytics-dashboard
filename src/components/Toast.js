import React from 'react';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import './Toast.css';

function Toast({ message, type }) {
  const getIcon = () => {
    if (type === 'success') return <FiCheckCircle />;
    if (type === 'error') return <FiAlertCircle />;
    return <FiAlertCircle />;
  };

  return (
    <div className={`toast toast-${type}`}>
      <div className="toast-icon">{getIcon()}</div>
      <span className="toast-message">{message}</span>
    </div>
  );
}

export default Toast;
