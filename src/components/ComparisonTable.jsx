import React from 'react';

const ComparisonTable = ({ selectedModels, onRemove }) => {
  // If no models are selected, show a placeholder
  if (!selectedModels || selectedModels.length === 0) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
        <p className="text-gray-500">Select models above to compare them side by side</p>
      </div>
    );
  }

  // Define the comparison categories and attributes
  const categories = [
    {
      name: 'General Specifications',
      attributes: [
        { key: 'status', label: 'Status' },
        { key: 'contextWindow', label: 'Context Window' },
        { key: 'tokenLimit', label: 'Token Limit' },
        { key: 'knowledgeCutoff', label: 'Knowledge Cutoff' },
      ]
    },
    {
      name: 'Performance Metrics',
      attributes: [
        { key: 'performance.contractReview', label: 'Contract Review', format: value => `${value}%` },
        { key: 'performance.caseAnalysis', label: 'Case Analysis', format: value => `${value}%` },
        { key: 'performance.legalResearch', label: 'Legal Research', format: value => `${value}%` },
      ]
    },
    {
      name: 'Time Estimates',
      attributes: [
        { key: 'estimatedTime.contractReview', label: 'Contract Review Time' },
        { key: 'estimatedTime.caseBrief', label: 'Case Brief Time' },
      ]
    }
  ];

  // Helper function to get nested property
  const getNestedProperty = (obj, key) => {
    return key.split('.').reduce((o, k) => (o || {})[k], obj);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <div className="bg-blue-800 text-white px-6 py-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Model Comparison</h3>
        <div className="text-sm">
          {selectedModels.length}/3 models selected
        </div>
      </div>
      
      {/* Model Headers */}
      <div className="grid grid-cols-4 border-b border-gray-200">
        <div className="p-4 font-medium text-gray-500">
          Features
        </div>
        {selectedModels.map((model, index) => (
          <div key={index} className={`p-4 font-medium bg-${model.color}-50 flex justify-between items-center`}>
            <span className={`text-${model.color}-700`}>{model.name}</span>
            <button 
              onClick={() => onRemove(model)} 
              className="text-gray-400 hover:text-gray-600"
              aria-label={`Remove ${model.name} from comparison`}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        ))}
        {/* Empty columns for aesthetics if less than 3 models */}
        {Array.from({ length: 3 - selectedModels.length }).map((_, index) => (
          <div key={`empty-${index}`} className="p-4 bg-gray-50 text-center">
            <span className="text-gray-400 text-sm">Not selected</span>
          </div>
        ))}
      </div>
      
      {/* Comparison Categories */}
      {categories.map((category, catIndex) => (
        <div key={catIndex} className="border-b border-gray-200 last:border-b-0">
          {/* Category Header */}
          <div className="grid grid-cols-4 bg-gray-50">
            <div className="p-3 font-medium text-gray-700">
              {category.name}
            </div>
            <div className="col-span-3"></div>
          </div>
          
          {/* Category Attributes */}
          {category.attributes.map((attr, attrIndex) => (
            <div key={attrIndex} className="grid grid-cols-4 border-t border-gray-100">
              <div className="p-3 text-sm text-gray-500">
                {attr.label}
              </div>
              {selectedModels.map((model, modelIndex) => {
                const value = getNestedProperty(model, attr.key);
                return (
                  <div key={modelIndex} className={`p-3 text-sm ${modelIndex % 2 === 0 ? 'bg-gray-50' : ''}`}>
                    {attr.format ? attr.format(value) : (value || 'N/A')}
                  </div>
                );
              })}
              {/* Empty columns for aesthetics if less than 3 models */}
              {Array.from({ length: 3 - selectedModels.length }).map((_, index) => (
                <div key={`empty-attr-${index}`} className="p-3 bg-gray-50"></div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ComparisonTable;