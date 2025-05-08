// src/pages/LegalUseCasesTab.jsx
import React, { useState } from 'react';
import { 
  ResearchWorkflowTab, 
  CitationGuideTab, 
  UseCasesLibraryTab, 
  LegalOverviewTab 
} from '../components/legal';

const LegalUseCasesTab = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Render the appropriate tab content based on active tab
  const renderTabContent = () => {
    switch(activeTab) {
      case 'workflow':
        return <ResearchWorkflowTab />;
      case 'citation':
        return <CitationGuideTab />;
      case 'use-cases':
        return <UseCasesLibraryTab />;
      case 'overview':
      default:
        return <LegalOverviewTab />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* Tab navigation */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Legal Use Cases for ChatGPT Enterprise</h2>
        <p className="text-gray-700 mb-6">
          ChatGPT Enterprise offers powerful capabilities for legal research, document analysis, and workflow optimization. 
          This section provides resources for effectively integrating AI into your legal practice while maintaining professional standards.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            onClick={() => setActiveTab('workflow')}
            className="bg-blue-50 p-5 rounded-lg border border-blue-100 cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h4 className="font-medium text-gray-800 mb-2">Research Workflow Integration</h4>
            <p className="text-sm text-gray-600 mb-3">
              Learn how to seamlessly integrate ChatGPT Enterprise into your legal research workflow with our step-by-step guide.
            </p>
            <div className="text-blue-600 text-sm font-medium flex items-center">
              Explore Integration 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          
          <div 
            onClick={() => setActiveTab('citation')}
            className="bg-purple-50 p-5 rounded-lg border border-purple-100 cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h4 className="font-medium text-gray-800 mb-2">Citation Guide</h4>
            <p className="text-sm text-gray-600 mb-3">
              Best practices for generating and verifying legal citations with ChatGPT Enterprise to ensure accuracy and compliance.
            </p>
            <div className="text-purple-600 text-sm font-medium flex items-center">
              View Citation Guide 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          
          <div 
            onClick={() => setActiveTab('use-cases')}
            className="bg-green-50 p-5 rounded-lg border border-green-100 cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h4 className="font-medium text-gray-800 mb-2">Use Cases Library</h4>
            <p className="text-sm text-gray-600 mb-3">
              Browse our collection of optimized prompt templates for common legal tasks, from contract analysis to case briefs.
            </p>
            <div className="text-green-600 text-sm font-medium flex items-center">
              Browse Library 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Render the active tab content */}
      {renderTabContent()}
    </div>
  );
};

export default LegalUseCasesTab;