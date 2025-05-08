import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, Info, ExternalLink, Clock } from 'lucide-react';
import ModelsTab from './pages/ModelsTab';
import PromptLibraryTab from './pages/PromptLibraryTab';
import UpdatesTab from './pages/UpdatesTab';
import LegalUseCasesTab from './pages/LegalUseCasesTab';
import LastUpdatedFooter from './components/LastUpdatedFooter';
import LegalUseCasesTab from './pages/LegalUseCasesTab';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const lastUpdated = "May 06, 2025";

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white p-6 flex justify-between items-center shadow-md">
        <h1 className="text-3xl font-serif font-bold">ChatGPT Enterprise: Top of Mind</h1>
        <span className="text-gray-300 text-sm flex items-center">
          <Clock className="h-4 w-4 mr-2" />
          Last Updated: {lastUpdated}
        </span>
      </header>
      
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <ul className="flex px-6 pt-4 pb-4 space-x-8 max-w-7xl mx-auto">
          <li 
            className={`text-lg ${activeTab === 'overview' ? 'text-blue-900 font-medium relative' : 'text-gray-500'} px-2 cursor-pointer hover:text-blue-800 transition-colors`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
            {activeTab === 'overview' && <div className="absolute bottom-[-16px] left-0 w-full h-1 bg-blue-700 rounded"></div>}
          </li>
          <li 
            className={`text-lg ${activeTab === 'updates' ? 'text-blue-900 font-medium relative' : 'text-gray-500'} px-2 cursor-pointer hover:text-blue-800 transition-colors`}
            onClick={() => setActiveTab('updates')}
          >
            Recent Updates
            {activeTab === 'updates' && <div className="absolute bottom-[-16px] left-0 w-full h-1 bg-blue-700 rounded"></div>}
          </li>
          <li 
            className={`text-lg ${activeTab === 'models' ? 'text-blue-900 font-medium relative' : 'text-gray-500'} px-2 cursor-pointer hover:text-blue-800 transition-colors`}
            onClick={() => setActiveTab('models')}
          >
            Models
            {activeTab === 'models' && <div className="absolute bottom-[-16px] left-0 w-full h-1 bg-blue-700 rounded"></div>}
          </li>
          <li 
            className={`text-lg ${activeTab === 'prompt-library' ? 'text-blue-900 font-medium relative' : 'text-gray-500'} px-2 cursor-pointer hover:text-blue-800 transition-colors`}
            onClick={() => setActiveTab('prompt-library')}
          >
            Prompt Library
            {activeTab === 'prompt-library' && <div className="absolute bottom-[-16px] left-0 w-full h-1 bg-blue-700 rounded"></div>}
          </li>
          <li 
            className={`text-lg ${activeTab === 'use-cases' ? 'text-blue-900 font-medium relative' : 'text-gray-500'} px-2 cursor-pointer hover:text-blue-800 transition-colors`}
            onClick={() => setActiveTab('use-cases')}
          >
            Legal Use Cases
            {activeTab === 'use-cases' && <div className="absolute bottom-[-16px] left-0 w-full h-1 bg-blue-700 rounded"></div>}
          </li>
          <li 
            className={`text-lg ${activeTab === 'resources' ? 'text-blue-900 font-medium relative' : 'text-gray-500'} px-2 cursor-pointer hover:text-blue-800 transition-colors`}
            onClick={() => setActiveTab('resources')}
          >
            Resources
            {activeTab === 'resources' && <div className="absolute bottom-[-16px] left-0 w-full h-1 bg-blue-700 rounded"></div>}
          </li>
        </ul>
      </nav>
      
      {/* Main Content */}
      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        {/* Render content based on active tab */}
        
        {/* If Models tab is selected, use our ModelsTab component */}
        {activeTab === 'models' ? (
          <ModelsTab />
        ) : activeTab === 'prompt-library' ? (
          <PromptLibraryTab />
        ) : activeTab === 'updates' ? (
          <UpdatesTab />
        ) : activeTab === 'use-cases' ? (
          <LegalUseCasesTab />
        ) : (
          /* Otherwise, show the original content */
          <>
            {/* Overview Section - Show only if overview tab is active */}
            {activeTab === 'overview' && (
              <section className="mb-8">
                <h2 className="text-2xl font-serif text-blue-900 mb-2">Overview</h2>
                <p className="text-gray-600 mb-4">Current status and key highlights of ChatGPT Enterprise for legal research.</p>
                
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border-l-4 border-blue-700 pl-4">
                      <h3 className="text-lg font-medium text-gray-800">Available Models</h3>
                      <p className="text-gray-600">4 models optimized for legal research</p>
                      <div className="mt-2">
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                          2 NEW
                        </span>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-purple-600 pl-4">
                      <h3 className="text-lg font-medium text-gray-800">Updates This Month</h3>
                      <p className="text-gray-600">3 significant platform updates</p>
                      <div className="mt-2">
                        <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                          1 CRITICAL
                        </span>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-teal-600 pl-4">
                      <h3 className="text-lg font-medium text-gray-800">Research Tools</h3>
                      <p className="text-gray-600">Legal research workflows and templates</p>
                      <div className="mt-2">
                        <span className="inline-block bg-teal-100 text-teal-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                          UPDATED
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
            
            {/* Recent Updates Section - Show only if overview tab is active, with most recent updates first */}
            {activeTab === 'overview' && (
              <section className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-2xl font-serif text-blue-900">Recent Updates</h2>
                  <div className="flex gap-2">
                    <select className="text-sm border border-gray-300 rounded px-2 py-1 bg-white">
                      <option>All Categories</option>
                      <option>Models</option>
                      <option>Features</option>
                      <option>Legal</option>
                    </select>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">Stay informed about the latest changes to ChatGPT Enterprise for legal research.</p>
                
                <div className="space-y-6">
                  {/* Shopping Features - Most recent update */}
                  <div className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-purple-500">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="flex items-center">
                          <h3 className="text-lg font-medium text-gray-800 mr-2">ChatGPT Shopping Search Features Now Available</h3>
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">FEATURES</span>
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium ml-2 px-2.5 py-0.5 rounded">NEW</span>
                          <span className="ml-auto text-sm text-gray-500">Apr 28, 2025</span>
                          <span className="ml-2 inline-flex h-2 w-2 bg-blue-500 rounded-full"></span>
                        </div>
                        <p className="text-sm font-medium italic text-gray-700 mt-1 mb-2">
                          Key Takeaway: Enterprise users can now access personalized shopping results with no ads or commissions.
                        </p>
                        <p className="text-gray-600">
                          ChatGPT's web search capabilities now include personalized product recommendations with images, reviews, and direct purchase links. Available to all ChatGPT users, including Enterprise, with no advertisements or commissions.
                        </p>
                        <div className="mt-2">
                          <a 
                            href="https://www.reuters.com/business/media-telecom/openai-rolls-out-new-shopping-features-with-chatgpt-search-update-2025-04-28/" 
                            className="text-blue-700 hover:text-blue-800 text-sm font-medium flex items-center"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Feature Details
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* GPT-4 Retiring */}
                  <div className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-red-500">
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="flex items-center">
                          <h3 className="text-lg font-medium text-gray-800 mr-2">GPT-4 Retiring: Transition Guide for Enterprise Users</h3>
                          <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">CRITICAL</span>
                          <span className="bg-purple-100 text-purple-800 text-xs font-medium ml-2 px-2.5 py-0.5 rounded">MODELS</span>
                          <span className="ml-auto text-sm text-gray-500">Apr 15, 2025</span>
                          <span className="ml-2 inline-flex h-2 w-2 bg-blue-500 rounded-full"></span>
                        </div>
                        <p className="text-sm font-medium italic text-gray-700 mt-1 mb-2">
                          Key Takeaway: All GPT-4 workflows must be updated to GPT-4o compatibility by April 30th.
                        </p>
                        <p className="text-gray-600">
                          Effective April 30, 2025, GPT-4 will be retired from ChatGPT and fully replaced by GPT-4o. Enterprise users should prepare for this transition by updating workflows and custom GPTs to ensure compatibility with the new model.
                        </p>
                        <div className="mt-2">
                          <a 
                            href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes" 
                            className="text-blue-700 hover:text-blue-800 text-sm font-medium flex items-center"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Migration Guide
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* GPT-4o Image Generation */}
                  <div className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-blue-500">
                    <div className="flex items-start">
                      <Info className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="flex items-center">
                          <h3 className="text-lg font-medium text-gray-800 mr-2">GPT-4o Upgraded with Enhanced Image Generation</h3>
                          <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">MODELS</span>
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium ml-2 px-2.5 py-0.5 rounded">NEW</span>
                          <span className="ml-auto text-sm text-gray-500">Mar 25, 2025</span>
                        </div>
                        <p className="text-sm font-medium italic text-gray-700 mt-1 mb-2">
                          Key Takeaway: Advanced image creation and editing now available, rolling out soon to Enterprise users.
                        </p>
                        <p className="text-gray-600">
                          OpenAI has upgraded ChatGPT's image generation capabilities with GPT-4o. The new functionality allows for more accurate and detailed image creation and editing. Pro subscribers have immediate access, with Plus and Enterprise users gaining access soon.
                        </p>
                        <div className="mt-2">
                          <a 
                            href="https://techcrunch.com/2025/03/25/chatgpts-image-generation-feature-gets-an-upgrade/" 
                            className="text-blue-700 hover:text-blue-800 text-sm font-medium flex items-center"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Read Announcement
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mt-4">
                    <button 
                      className="text-blue-700 hover:text-blue-800 border border-blue-700 rounded-full px-4 py-1 text-sm font-medium"
                      onClick={() => setActiveTab('updates')}
                    >
                      View All Updates
                    </button>
                  </div>
                </div>
              </section>
            )}
            
            {/* Original Models Section - Only show in overview tab since we now have the dedicated ModelsTab for the models tab */}
            {activeTab === 'overview' && (
              <section className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-2xl font-serif text-blue-900">Models</h2>
                  <button 
                    className="text-sm border border-gray-300 rounded px-2 py-1 bg-white hover:bg-gray-50"
                    onClick={() => setActiveTab('models')}
                  >
                    View Comparison
                  </button>
                </div>
                <p className="text-gray-600 mb-4">Select models optimized for legal research with specialized capabilities.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden relative">
                    <div className="h-2 bg-blue-700 w-full absolute top-0"></div>
                    <div className="p-5 pt-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-serif text-gray-800">o3</h3>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">NEW</span>
                      </div>
                      <p className="text-gray-600 mt-2 text-sm">
                        Advanced legal reasoning with cross-jurisdictional capabilities
                      </p>
                      <div className="mt-4 text-sm">
                        <div className="flex justify-between mb-1">
                          <span>Case Law Research</span>
                          <span className="text-blue-700 font-medium">Excellent</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
                          <div className="bg-blue-700 h-1.5 rounded-full" style={{ width: "100%" }}></div>
                        </div>
                        
                        <div className="flex justify-between mb-1">
                          <span>Document Analysis</span>
                          <span className="text-blue-700 font-medium">Good</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
                          <div className="bg-blue-700 h-1.5 rounded-full" style={{ width: "80%" }}></div>
                        </div>
                        
                        <button className="mt-3 w-full text-center border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition-colors text-gray-700">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden relative">
                    <div className="h-2 bg-purple-600 w-full absolute top-0"></div>
                    <div className="p-5 pt-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-serif text-gray-800">o4-mini</h3>
                        <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">NEW</span>
                      </div>
                      <p className="text-gray-600 mt-2 text-sm">
                        Optimized for speed and high-volume document review applications
                      </p>
                      <div className="mt-4 text-sm">
                        <div className="flex justify-between mb-1">
                          <span>Case Law Research</span>
                          <span className="text-purple-700 font-medium">Fair</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
                          <div className="bg-purple-600 h-1.5 rounded-full" style={{ width: "60%" }}></div>
                        </div>
                        
                        <div className="flex justify-between mb-1">
                          <span>Document Analysis</span>
                          <span className="text-purple-700 font-medium">Fair</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
                          <div className="bg-purple-600 h-1.5 rounded-full" style={{ width: "60%" }}></div>
                        </div>
                        
                        <button className="mt-3 w-full text-center border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition-colors text-gray-700">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden relative">
                    <div className="h-2 bg-green-600 w-full absolute top-0"></div>
                    <div className="p-5 pt-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-serif text-gray-800">o1</h3>
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">STANDARD</span>
                      </div>
                      <p className="text-gray-600 mt-2 text-sm">
                        Reliable performance for general legal research and document review
                      </p>
                      <div className="mt-4 text-sm">
                        <div className="flex justify-between mb-1">
                          <span>Case Law Research</span>
                          <span className="text-green-700 font-medium">Excellent</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
                          <div className="bg-green-600 h-1.5 rounded-full" style={{ width: "100%" }}></div>
                        </div>
                        
                        <div className="flex justify-between mb-1">
                          <span>Document Analysis</span>
                          <span className="text-green-700 font-medium">Good</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
                          <div className="bg-green-600 h-1.5 rounded-full" style={{ width: "80%" }}></div>
                        </div>
                        
                        <button className="mt-3 w-full text-center border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition-colors text-gray-700">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
            
            {/* Resources Section - Show only if resources tab is active or on overview */}
            {(activeTab === 'overview' || activeTab === 'resources') && (
              <section className="mb-8">
                <h2 className="text-2xl font-serif text-blue-900 mb-2">Resources</h2>
                <p className="text-gray-600 mb-4">Quick access to documentation and frequently asked questions.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="bg-white rounded-lg shadow-sm p-5">
                    <h3 className="text-lg font-medium text-gray-800 mb-3">Documentation</h3>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <a href="#" className="text-blue-700 hover:underline flex items-center">
                          <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          API Documentation for Legal Researchers
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-blue-700 hover:underline flex items-center">
                          <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Model Comparison Guide
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-blue-700 hover:underline flex items-center">
                          <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Prompt Engineering for Legal Research
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-blue-700 hover:underline flex items-center">
                          <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Security and Compliance Guide
                        </a>
                      </li>
                    </ul>
                    <button className="mt-4 text-blue-700 hover:text-blue-800 text-sm font-medium">
                      View All Documentation →
                    </button>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm p-5">
                    <h3 className="text-lg font-medium text-gray-800 mb-3">Frequently Asked Questions</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <h4 className="font-medium text-gray-800">How do I choose the right model for my research needs?</h4>
                        <p className="text-gray-600 mt-1">Each model has different strengths based on the type of legal research...</p>
                        <button className="text-blue-700 hover:text-blue-800 text-xs mt-1">Read More</button>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">What citation formats are supported?</h4>
                        <p className="text-gray-600 mt-1">All models support Bluebook, ALWD, APA, and MLA citation formats...</p>
                        <button className="text-blue-700 hover:text-blue-800 text-xs mt-1">Read More</button>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">How do I report a citation or legal accuracy issue?</h4>
                        <p className="text-gray-600 mt-1">Use the feedback button in the interface to report any issues...</p>
                        <button className="text-blue-700 hover:text-blue-800 text-xs mt-1">Read More</button>
                      </div>
                    </div>
                    <button className="mt-4 text-blue-700 hover:text-blue-800 text-sm font-medium">
                      View All FAQs →
                    </button>
                  </div>
                </div>
              </section>
            )}
          </>
        )}
      </main>
      
      {/* Persistent Footer with Last Updated */}
      <LastUpdatedFooter lastUpdated={lastUpdated} />
    </div>
  );
};

export default Dashboard;