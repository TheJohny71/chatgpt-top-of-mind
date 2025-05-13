import React, { useEffect, useState } from 'react';
import { ArrowRight, Clock } from 'lucide-react';

const LandingPage = ({ onEnter }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Create particles animation
  useEffect(() => {
    const createParticles = () => {
      const particlesContainer = document.getElementById('particles');
      if (!particlesContainer) return;
      
      // Clear existing particles
      particlesContainer.innerHTML = '';
      const particleCount = 25;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 25 + 's';
        particlesContainer.appendChild(particle);
      }
    };
    
    createParticles();
  }, []);

  const handleEnterDashboard = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      onEnter();
    }, 300);
  };

  return (
    <div className={`landing-hero ${isTransitioning ? 'transitioning' : ''}`}>
      <div className="particles" id="particles"></div>
      
      <div className="landing-container">
        <h1 className="landing-subtitle">Top of Mind</h1>
        <p className="landing-tagline">Your ChatGPT Enterprise Intelligence Hub</p>
        
        <p className="landing-quote">"Strive not to be a success, but rather to be of value"</p>
        <p className="landing-author">— Albert Einstein</p>
        
        <button 
          className="enter-btn" 
          onClick={handleEnterDashboard}
        >
          Enter Intelligence Hub
          <ArrowRight className="h-5 w-5 ml-2" />
        </button>
      </div>
      
      <div className="landing-timestamp">
        <Clock className="h-4 w-4 mr-2" />
        Last sync: May 13, 2025 • 9:42 AM
      </div>
      
      <style jsx>{`
        .landing-hero {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, #0A0E27 0%, #1A1F3A 50%, #0F172A 100%);
          overflow: hidden;
          transition: opacity 0.3s ease-out;
        }
        
        .landing-hero.transitioning {
          opacity: 0;
        }
        
        .landing-hero::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(ellipse at top, rgba(251, 191, 36, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .landing-hero::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.15) 0%, transparent 40%),
                      radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.15) 0%, transparent 40%);
          opacity: 0.5;
          animation: float 30s ease-in-out infinite;
        }
        
        .landing-container {
          text-align: center;
          z-index: 10;
          padding: 2rem;
          max-width: 1000px;
          animation: fadeIn 1s ease-out;
        }
        
        .landing-subtitle {
          font-size: 5.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #60A5FA 0%, #A78BFA 50%, #F59E0B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          line-height: 1.1;
          animation: slideUp 0.8s ease-out 0.3s both;
        }
        
        .landing-tagline {
          font-size: 1.25rem;
          color: #64748B;
          margin-bottom: 3rem;
          font-weight: 300;
          animation: slideUp 0.8s ease-out 0.5s both;
        }
        
        .landing-quote {
          font-size: 2rem;
          font-weight: 200;
          color: #CBD5E1;
          line-height: 1.4;
          margin-bottom: 1rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          letter-spacing: -0.01em;
          animation: slideUp 0.8s ease-out 0.7s both;
        }
        
        .landing-author {
          font-size: 0.875rem;
          color: #64748B;
          margin-bottom: 3rem;
          font-style: italic;
          animation: slideUp 0.8s ease-out 0.8s both;
        }
        
        .enter-btn {
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          padding: 16px 36px;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          animation: slideUp 0.8s ease-out 0.9s both;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        
        .enter-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(251, 191, 36, 0.1);
        }
        
        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }
        
        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: rgba(251, 191, 36, 0.4);
          border-radius: 50%;
          animation: drift 25s infinite;
        }
        
        .particle:nth-child(even) {
          width: 2px;
          height: 2px;
          animation-duration: 30s;
          background: rgba(147, 197, 253, 0.6);
        }
        
        .landing-timestamp {
          position: fixed;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          color: #475569;
          font-size: 0.875rem;
          animation: fadeIn 1s ease-out 1s both;
          display: flex;
          align-items: center;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.05) rotate(2deg); }
        }
        
        @keyframes drift {
          0% {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }
        
        @media (max-width: 768px) {
          .landing-subtitle { font-size: 3.5rem; }
          .landing-quote { font-size: 1.5rem; }
          .landing-tagline { font-size: 1rem; }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;