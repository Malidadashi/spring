// src/components/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const Dashboard = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('token');
    navigate('/signin');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {currentUser.email}</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Dashboard;
