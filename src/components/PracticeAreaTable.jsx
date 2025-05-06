import React from 'react';

const PracticeAreaTable = ({ models }) => {
  // Define practice areas to compare across - expanded based on research
  const practiceAreas = [
    { id: 'contracts', name: 'Contracts & Transactions', description: 'Contract review, analysis, and transaction support' },
    { id: 'litigation', name: 'Litigation & Disputes', description: 'Case analysis, legal precedent review, arguments' },
    { id: 'ip', name: 'Intellectual Property', description: 'Patent, trademark, and copyright analysis' },
    { id: 'compliance', name: 'Compliance & Regulatory', description: 'Regulatory analysis and compliance frameworks' },
    { id: 'corporate', name: 'Corporate & M&A', description: 'Due diligence and transaction advisory' },
    { id: 'employment', name: 'Employment Law', description: 'Labor relations, HR compliance, and employment regulations' },
    { id: 'tax', name: 'Tax Law', description: 'Tax planning, compliance, and dispute resolution' },
    { id: 'health', name: 'Health & Life Sciences', description: 'Healthcare regulations and bioscience compliance' },
    { id: 'private', name: 'Private Client', description: 'High-net-worth individual services and estate planning' }
  ];

  // Rating terms based on score
  const getRatingTerm = (rating) => {
    if (rating >= 5) return "Excellence";
    if (rating >= 4) return "Great";
    if (rating >= 3) return "Good";
    if (rating >= 2) return "Fair";
    return "Limited";
  };

  // Model ratings for new practice areas (based on research)
  const getExpandedRatings = (model, areaId) => {
    // If the model already has a rating for this area, use it
    if (model.practiceAreas && model.practiceAreas[areaId] !== undefined) {
      return model.practiceAreas[areaId];
    }
    
    // Otherwise assign ratings based on research and model strengths
    const modelName = model.name.toLowerCase();
    
    // GPT-4o - strong for general tasks, good for multimodal and quick analysis
    if (modelName.includes('gpt-4o')) {
      if (areaId === 'employment') return 4;
      if (areaId === 'tax') return 3;
      if (areaId === 'health') return 4;
      if (areaId === 'private') return 5;
    }
    
    // GPT-4.5 - strong across most areas especially with context and nuance
    else if (modelName.includes('gpt-4.5')) {
      if (areaId === 'employment') return 5;
      if (areaId === 'tax') return 4;
      if (areaId === 'health') return 5;
      if (areaId === 'private') return 5;
    }
    
    // o3 - excellent reasoning capabilities for complex matters
    else if (modelName === 'o3') {
      if (areaId === 'employment') return 4;
      if (areaId === 'tax') return 5;
      if (areaId === 'health') return 4;
      if (areaId === 'private') return 4;
    }
    
    // o4-mini - fast, cost-effective for more straightforward tasks
    else if (modelName.includes('o4-mini') && !modelName.includes('high')) {
      if (areaId === 'employment') return 4;
      if (areaId === 'tax') return 4;
      if (areaId === 'health') return 3;
      if (areaId === 'private') return 3;
    }
    
    // o4-mini-high - improved reasoning for complex tasks
    else if (modelName.includes('o4-mini-high')) {
      if (areaId === 'employment') return 4;
      if (areaId === 'tax') return 5;
      if (areaId === 'health') return 4;
      if (areaId === 'private') return 4;
    }
    
    // Default rating if no specific value
    return 3;
  };

  return (
    <div className="mb-12 bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Header with subtle gradient */}
      <div className="bg-gradient-to-r from-indigo-700 to-indigo-900 px-8 py-6 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          Practice Area Suitability
        </h3>
        <div className="flex items-center text-sm font-medium text-indigo-100">
          <span className="flex items-center mr-6">
            <span className="h-3 w-3 rounded-full bg-indigo-300 mr-2"></span>
            Highly Recommended
          </span>
          <span className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-indigo-100 mr-2"></span>
            Recommended
          </span>
        </div>
      </div>
      
      {/* Content with subtle hover effects and visual enhancements */}
      <div className="p-6">
        <div className="grid grid-cols-7 gap-4 mb-4 px-4">
          <div className="col-span-2 font-medium text-gray-500 text-sm uppercase tracking-wider">Practice Area</div>
          {/* Column headers for each model */}
          {models.slice(0, 5).map((model, index) => (
            <div key={index} className={`text-center text-sm font-medium text-${model.color}-700`}>
              {model.name}
            </div>
          ))}
        </div>
        
        {/* Rows for each practice area */}
        {practiceAreas.map((area, areaIndex) => (
          <div key={areaIndex} className="bg-white rounded-lg hover:bg-indigo-50 transition-colors duration-150 mb-3 p-4">
            <div className="grid grid-cols-7 gap-4 items-center">
              <div className="col-span-2">
                <h4 className="font-medium text-gray-900">{area.name}</h4>
                <p className="text-xs text-gray-500 mt-1">{area.description}</p>
              </div>
              
              {/* Rating indicators for each model */}
              {models.slice(0, 5).map((model, modelIndex) => {
                // Get the rating for this model and practice area
                const rating = model.practiceAreas?.[area.id] || getExpandedRatings(model, area.id);
                const ratingTerm = getRatingTerm(rating);
                const colorClass = model.color || 'blue'; // Default to blue if no color specified
                
                return (
                  <div key={modelIndex} className="flex flex-col items-center">
                    <div className={`h-2.5 w-2.5 rounded-full bg-${colorClass}-600 mb-1 ring-4 ring-${colorClass}-100`}></div>
                    <div className={`text-xs text-${colorClass}-700 font-medium`}>{ratingTerm}</div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        
        {/* Removed the "Compare all practice areas" button as requested */}
      </div>
    </div>
  );
};

export default PracticeAreaTable;