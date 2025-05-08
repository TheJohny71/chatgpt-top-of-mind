// src/components/legal/LegalOverviewTab.jsx
import React from 'react';
import { FileText, HelpCircle, ExternalLink } from 'lucide-react';

const LegalOverviewTab = () => {
  return (
    <div>
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

      {/* Best Practices Section */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold text-blue-900 mb-4">Best Practices for Legal AI Use</h3>
        
        <div className="mb-6">
          <h4 className="font-medium text-gray-800 mb-3">Ethical Considerations</h4>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="h-5 w-5 text-green-500 mr-2 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm text-gray-700">Always verify all AI-generated legal research against primary sources</p>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 text-green-500 mr-2 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm text-gray-700">Maintain client confidentiality by using Enterprise privacy controls</p>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 text-green-500 mr-2 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm text-gray-700">Disclose AI assistance when appropriate under applicable ethical rules</p>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 text-green-500 mr-2 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm text-gray-700">Maintain professional judgment and responsibility for all legal work</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium text-gray-800 mb-3">Getting Started</h4>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">1</div>
              <div className="ml-4">
                <h5 className="font-medium text-gray-700">Review Firm Policies</h5>
                <p className="text-sm text-gray-600">Ensure compliance with your firm's AI usage policies and ethical guidelines.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">2</div>
              <div className="ml-4">
                <h5 className="font-medium text-gray-700">Start with Structured Prompts</h5>
                <p className="text-sm text-gray-600">Use our pre-built templates to quickly generate effective results.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">3</div>
              <div className="ml-4">
                <h5 className="font-medium text-gray-700">Implement Verification Workflow</h5>
                <p className="text-sm text-gray-600">Establish a consistent process for checking AI outputs against primary sources.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">4</div>
              <div className="ml-4">
                <h5 className="font-medium text-gray-700">Document Your Process</h5>
                <p className="text-sm text-gray-600">Maintain records of how AI was used and what verification was performed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources section removed as requested */}
      {/* FAQ section removed as requested */}
      {/* Last updated information removed as requested */}
    </div>
  );
};

export default LegalOverviewTab;