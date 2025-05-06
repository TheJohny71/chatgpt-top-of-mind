import React from 'react';

const ModelCard = ({ model, onSelect, isSelected, showCompareButton = true }) => {
  // Default color if not provided
  const color = model.color || 'blue';

  // Make sure performance bars always have color properly applied
  const getPerformanceBarColor = () => {
    // For o4-mini-high model, specifically ensure teal color is used
    if (model.id === 'o4minihigh' || model.name === 'o4-mini-high') {
      return 'teal-500';
    }
    return `${color}-500`;
  };

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden border ${isSelected ? `border-${color}-500` : 'border-gray-200'}`}>
      {/* Card Header */}
      <div className={`px-4 py-3 bg-${color}-100 flex justify-between items-center`}>
        <h3 className={`text-lg font-semibold text-${color}-800`}>{model.name}</h3>
        <span className={`text-xs px-2 py-1 rounded-full bg-${color}-200 text-${color}-800`}>
          {model.status}
        </span>
      </div>
      
      {/* Card Body */}
      <div className="p-4">
        <div className="mb-4">
          <p className="text-sm text-gray-600">{model.description}</p>
        </div>
        
        {/* Key Stats */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-gray-50 p-2 rounded">
            <p className="text-xs text-gray-500">Context Window</p>
            <p className="text-sm font-medium">{model.contextWindow}</p>
          </div>
          <div className="bg-gray-50 p-2 rounded">
            <p className="text-xs text-gray-500">Knowledge Cutoff</p>
            <p className="text-sm font-medium">{model.knowledgeCutoff}</p>
          </div>
          <div className="bg-gray-50 p-2 rounded">
            <p className="text-xs text-gray-500">Token Limit</p>
            <p className="text-sm font-medium">{model.tokenLimit || "N/A"}</p>
          </div>
          <div className="bg-gray-50 p-2 rounded">
            <p className="text-xs text-gray-500">Legal Rating</p>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i}
                  className={`h-4 w-4 ${i < model.legalRating ? `text-${color}-500` : 'text-gray-300'}`}
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
        
        {/* Performance Metrics */}
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">Performance for Legal Tasks</h4>
          <div className="space-y-2">
            <div className="flex items-center">
              <span className="text-xs text-gray-600 w-32">Contract Review:</span>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`bg-${getPerformanceBarColor()} h-2 rounded-full`} 
                  style={{ width: `${model.performance?.contractReview || 0}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-600 ml-2">{model.performance?.contractReview || 0}%</span>
            </div>
            <div className="flex items-center">
              <span className="text-xs text-gray-600 w-32">Case Analysis:</span>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`bg-${getPerformanceBarColor()} h-2 rounded-full`} 
                  style={{ width: `${model.performance?.caseAnalysis || 0}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-600 ml-2">{model.performance?.caseAnalysis || 0}%</span>
            </div>
            <div className="flex items-center">
              <span className="text-xs text-gray-600 w-32">Legal Research:</span>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`bg-${getPerformanceBarColor()} h-2 rounded-full`} 
                  style={{ width: `${model.performance?.legalResearch || 0}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-600 ml-2">{model.performance?.legalResearch || 0}%</span>
            </div>
          </div>
        </div>
        
        {/* Estimated Time */}
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">Estimated Time</h4>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gray-50 p-2 rounded">
              <p className="text-xs text-gray-500">Contract Review</p>
              <p className="text-sm font-medium">{model.estimatedTime?.contractReview || "N/A"}</p>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <p className="text-xs text-gray-500">Case Brief</p>
              <p className="text-sm font-medium">{model.estimatedTime?.caseBrief || "N/A"}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Card Footer */}
      <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex justify-between">
        <a 
          href={model.docsLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`text-${color}-600 text-sm hover:underline`}
        >
          View Documentation
        </a>
        
        {showCompareButton && (
          <button
            onClick={() => onSelect(model)}
            className={`px-3 py-1 text-sm rounded-md ${
              isSelected 
                ? `bg-${color}-100 text-${color}-600 border border-${color}-500` 
                : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {isSelected ? 'Selected' : 'Select for Comparison'}
          </button>
        )}
      </div>
    </div>
  );
};

export default ModelCard;