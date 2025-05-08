// src/components/legal/UseCasesLibraryTab.jsx
import React, { useState } from 'react';
import { FileText, Download, Book, CheckCircle, Copy } from 'lucide-react';
import LegalCategoryFilter from './LegalCategoryFilter';
import LegalUseCard from './LegalUseCard';
import { legalCategories, legalUseCases } from '../../data/legalUseCasesData';

const UseCasesLibraryTab = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedUseCase, setSelectedUseCase] = useState(null);
  const [showPromptTemplate, setShowPromptTemplate] = useState(false);
  const [copied, setCopied] = useState(false);

  // Filter use cases based on active category
  const filteredUseCases = activeCategory === 'all' 
    ? legalUseCases 
    : legalUseCases.filter(useCase => useCase.category === activeCategory);

  // Handle viewing a prompt template
  const handleViewTemplate = (useCase) => {
    setSelectedUseCase(useCase);
    setShowPromptTemplate(true);
    setCopied(false);
  };

  // Handle closing the prompt template modal
  const handleCloseTemplate = () => {
    setShowPromptTemplate(false);
  };

  // Copy template to clipboard
  const handleCopyTemplate = () => {
    if (!selectedUseCase) return;
    
    navigator.clipboard.writeText(selectedUseCase.promptTemplate)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy template: ', err);
        alert('Could not copy to clipboard. Please try manually selecting the text.');
      });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Legal Use Cases</h2>
        <p className="text-gray-600">
          Explore optimized workflows and templates for common legal tasks using ChatGPT Enterprise.
        </p>
      </div>

      {/* Category Filters */}
      <LegalCategoryFilter 
        categories={legalCategories} 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />

      {/* Introduction Card */}
      {activeCategory === 'all' && (
        <div className="bg-gradient-to-r from-blue-900 to-indigo-800 rounded-xl shadow-lg mb-8 text-white p-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/4 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-xl font-semibold mb-3">Optimizing ChatGPT for Legal Tasks</h3>
              <p className="mb-3">
                These use cases provide optimized prompt templates and model recommendations for common legal workflows. 
                Each template follows best practices for legal prompting, including proper context setting, task specification, 
                and output formatting.
              </p>
              <div className="flex space-x-4 mt-4">
                <button className="flex items-center bg-white text-blue-900 px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-100">
                  <Download className="h-4 w-4 mr-2" />
                  Download All Templates
                </button>
                <button className="flex items-center border border-white text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-800">
                  <Book className="h-4 w-4 mr-2" />
                  Prompting Guide
                </button>
              </div>
            </div>
            <div className="md:w-1/4 flex justify-center">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-300" />
                    <span>Optimized for legal use</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-300" />
                    <span>Proper citation formatting</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-300" />
                    <span>Jurisdictional awareness</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-300" />
                    <span>Regulatory compliance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Use Cases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUseCases.map(useCase => (
          <LegalUseCard 
            key={useCase.id} 
            useCase={useCase} 
            onViewTemplate={handleViewTemplate} 
          />
        ))}
      </div>
      
      {/* Bottom Section */}
      <div className="mt-12 bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Need a Custom Legal Use Case?</h3>
        <p className="text-gray-700 mb-4">
          Our team can help develop custom prompt templates and workflows tailored to your specific legal practice areas. 
          Contact your account representative to schedule a consultation.
        </p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          Request Custom Template
        </button>
      </div>

      {/* Prompt Template Modal */}
      {showPromptTemplate && selectedUseCase && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">{selectedUseCase.title} - Prompt Template</h3>
                <button 
                  onClick={handleCloseTemplate}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-gray-50 border border-gray-200 rounded-lg mb-4">
                <pre className="p-4 text-sm text-gray-800 overflow-x-auto whitespace-pre-wrap font-mono">
                  {selectedUseCase.promptTemplate}
                </pre>
              </div>
              <div className="mt-4 flex justify-between">
                <button 
                  onClick={handleCopyTemplate}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  {copied ? (
                    <>
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-5 w-5 mr-2 text-gray-500" />
                      Copy Template
                    </>
                  )}
                </button>
                <button
                  onClick={handleCloseTemplate}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Close
                </button>
              </div>
            </div>
            
            {/* Model recommendations */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Recommended for use with:</h4>
              <div className="flex items-center">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded mr-2">
                  {selectedUseCase.modelRecommendation}
                </span>
                {selectedUseCase.isNew && (
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                    NEW
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UseCasesLibraryTab;