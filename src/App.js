import React, { useState } from 'react';
import Dashboard from './Dashboard.jsx';
import LandingPage from './components/LandingPage';
import './App.css';
import './styles/MobileResponsiveStyles.css';

function App() {
  // Add state to control whether to show landing page or main app
  const [showLanding, setShowLanding] = useState(true);

  // Handle transition from landing page to dashboard
  const handleEnterDashboard = () => {
    setShowLanding(false);
  };

  // If we're showing the landing page, render only that
  if (showLanding) {
    return <LandingPage onEnter={handleEnterDashboard} />;
  }

  // Otherwise render the Dashboard
  return <Dashboard />;
}

export default App;