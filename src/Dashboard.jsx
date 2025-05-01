import React from 'react';
import { Bell, Search, MessageSquare, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { updates, models } from './updateData';

// Helper function to get the correct icon
const getIcon = (iconName) => {
  switch(iconName) {
    case 'AlertTriangle': return <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />;
    case 'Info': return <Info className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />;
    case 'CheckCircle': return <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />;
    default: return <Info className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />;
  }
};

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white p-6 flex justify-between items-center shadow-md">
        <h1 className="text-3xl font-serif font-bold">ChatGPT Enterprise: Top of Mind</h1>
        <div className="flex items-center gap-6">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search updates..." 
              className="pl-10 pr-4 py-2 rounded-full text-gray-800 text-sm w-64"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
          </div>
          <button className="flex items-center gap-1 bg-blue-800 hover:bg-blue-700 transition-colors px-4 py-2 rounded-full text-sm">
            <MessageSquare className="h-4 w-4" />
            <span>Feedback</span>
          </button>
          <span className="text-gray-300 text-sm">Last Updated: April 30, 2025</span>
        </div>
      </header>
      
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <ul className="flex px-6 pt-4 pb-4 space-x-8 max-w-7xl mx-auto">
          <li className="text-lg text-gray-500 px-2 cursor-pointer hover:text-blue-800 transition-colors">
            Overview
          </li>
          <li className="text-lg text-gray-500 px-2 cursor-pointer hover:text-blue-800 transition-colors">
            Recent Updates
          </li>
          <li className="text-lg text-blue-900 font-medium relative px-2 cursor-pointer">
            Models
            <div className="absolute bottom-[-16px] left-0 w-full h-1 bg-blue-700 rounded"></div>
          </li>
          <li className="text-lg text-gray-500 px-2 cursor-pointer hover:text-blue-800 transition-colors">
            Prompt Library
          </li>
          <li className="text-lg text-gray-500 px-2 cursor-pointer hover:text-blue-800 transition-colors">
            Legal Use Cases
          </li>
          <li className="text-lg text-gray-500 px-2 cursor-pointer hover:text-blue-800 transition-colors">
            Resources
          </li>
        </ul>
      </nav>
      
      {/* Main Content */}
      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        {/* Overview Section */}
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
        
        {/* Recent Updates Section */}
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
              <button className="text-sm border border-gray-300 rounded px-2 py-1 bg-white hover:bg-gray-50">
                Mark All as Read
              </button>
            </div>
          </div>
          <p className="text-gray-600 mb-4">Stay informed about the latest changes to ChatGPT Enterprise for legal research.</p>
          
          <div className="space-y-4">
            {/* Map through updates */}
            {updates.map(update => (
              <div key={update.id} className={`bg-white rounded-lg shadow-sm p-4 border-l-4 border-${update.color}-500`}>
                <div className="flex items-start">
                  {getIcon(update.icon)}
                  <div>
                    <div className="flex items-center">
                      <h3 className="text-lg font-medium text-gray-800 mr-2">{update.title}</h3>
                      <span className={`bg-${update.color}-100 text-${update.color}-800 text-xs font-medium px-2.5 py-0.5 rounded`}>
                        {update.category}
                      </span>
                      {update.tags.map((tag, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium ml-2 px-2.5 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                      <span className="ml-auto text-sm text-gray-500">{update.date}</span>
                      {update.isNew && <span className="ml-2 inline-flex h-2 w-2 bg-blue-500 rounded-full"></span>}
                    </div>
                    <p className="text-gray-600 mt-1">{update.content}</p>
                    <div className="mt-2">
                      {update.links.map((link, index) => (
                        <button key={index} className="text-blue-700 hover:text-blue-800 text-sm font-medium ml-4 first:ml-0">
                          {link.text}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="flex justify-center mt-4">
              <button className="text-blue-700 hover:text-blue-800 border border-blue-700 rounded-full px-4 py-1 text-sm font-medium">
                View All Updates
              </button>
            </div>
          </div>
        </section>
        
        {/* Models Section */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-serif text-blue-900">Models</h2>
            <button className="text-sm border border-gray-300 rounded px-2 py-1 bg-white hover:bg-gray-50">
              View Comparison
            </button>
          </div>
          <p className="text-gray-600 mb-4">Select models optimized for legal research with specialized capabilities.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {models.map(model => (
              <div key={model.id} className="bg-white rounded-lg shadow-sm overflow-hidden relative">
                <div className={`h-2 bg-${model.topColor} w-full absolute top-0`}></div>
                <div className="p-5 pt-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-serif text-gray-800">{model.name}</h3>
                    <span className={`bg-${model.tagColor}-100 text-${model.tagColor}-800 text-xs font-semibold px-2.5 py-0.5 rounded`}>
                      {model.tag}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-2 text-sm">{model.description}</p>
                  <div className="mt-4 text-sm">
                    {model.capabilities.map((capability, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span>{capability.name}</span>
                          <span className={`text-${model.tagColor}-700 font-medium`}>{capability.rating}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
                          <div className={`bg-${model.topColor} h-1.5 rounded-full`} style={{ width: `${capability.percentage}%` }}></div>
                        </div>
                      </div>
                    ))}
                    
                    <button className="mt-3 w-full text-center border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition-colors text-gray-700">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Resources Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-serif text-blue-900 mb-2">Resources</h2>
          <p className="text-gray-600 mb-4">Quick access to documentation and frequently asked questions.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-sm p-5">
              <h3 className="text-lg font-medium text-gray-800 mb-3">Documentation</h3>
              <ul className="space-y-2 text-sm">
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
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto p-6 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            © 2025 OpenAI, Inc. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Terms</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Privacy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;