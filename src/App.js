import React, { useState } from 'react';
import Dashboard from './Dashboard.jsx';
import LandingPage from './components/LandingPage';
import ModelsTab from './pages/ModelsTab';
import './App.css';
import './styles/MobileResponsiveStyles.css';

function App() {
  // Add state to control whether to show landing page or main app
  const [showLanding, setShowLanding] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Handle transition from landing page to dashboard
  const handleEnterDashboard = () => {
    setShowLanding(false);
  };

  // If we're showing the landing page, render only that
  if (showLanding) {
    return <LandingPage onEnter={handleEnterDashboard} />;
  }

  // Otherwise render the main app
  if (activeTab === 'dashboard') {
    return <Dashboard />;
  }

  // For other tabs, render with the App's layout
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-blue-900 text-white py-6 shadow-md">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">ChatGPT Enterprise: Top of Mind</h1>
          <span>Last Updated: May 01, 2025</span>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex overflow-x-auto">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`px-6 py-4 border-b-2 font-medium whitespace-nowrap ${
              activeTab === 'dashboard' 
                ? 'text-blue-500 border-blue-500' 
                : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('models')}
            className={`px-6 py-4 border-b-2 font-medium whitespace-nowrap ${
              activeTab === 'models' 
                ? 'text-blue-500 border-blue-500' 
                : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Models
          </button>
          <button 
            onClick={() => setActiveTab('updates')}
            className={`px-6 py-4 border-b-2 font-medium whitespace-nowrap ${
              activeTab === 'updates' 
                ? 'text-blue-500 border-blue-500' 
                : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Updates
          </button>
          <button 
            onClick={() => setActiveTab('resources')}
            className={`px-6 py-4 border-b-2 font-medium whitespace-nowrap ${
              activeTab === 'resources' 
                ? 'text-blue-500 border-blue-500' 
                : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Resources
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {activeTab === 'models' && <ModelsTab />}
        {/* Additional tabs would be rendered here */}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            © 2025 ChatGPT Enterprise: Top of Mind Dashboard
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-500 no-underline">Help</a>
            <a href="#" className="text-sm text-gray-500 no-underline">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 no-underline">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;