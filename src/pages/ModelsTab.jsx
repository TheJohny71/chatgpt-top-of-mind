import React, { useState } from 'react';
import ModelCard from '../components/ModelCard';
import ComparisonTable from '../components/ComparisonTable';
import PracticeAreaTable from '../components/PracticeAreaTable';

const ModelsTab = () => {
  // Sample model data - in a real app this would come from an API or data source
  const allModels = [
    {
      id: 'gpt4o',
      name: 'GPT-4o',
      color: 'blue',
      status: 'Available',
      description: 'OpenAI\'s multimodal model with real-time reasoning across text, vision, and voice for professional legal tasks.',
      contextWindow: '128,000 tokens',
      knowledgeCutoff: 'April 2024',
      tokenLimit: '128,000 tokens',
      legalRating: 5,
      recommended: true,
      performance: {
        contractReview: 92,
        caseAnalysis: 90,
        legalResearch: 87
      },
      estimatedTime: {
        contractReview: '18-22 min',
        caseBrief: '12-15 min'
      },
      practiceAreas: {
        contracts: 5,
        litigation: 4,
        ip: 4,
        compliance: 5,
        corporate: 5
      },
      docsLink: '#'
    },
    {
      id: 'gpt45',
      name: 'GPT-4.5',
      color: 'purple',
      status: 'New',
      description: 'OpenAI\'s powerful model with superior nuanced understanding and exceptional document analysis capabilities.',
      contextWindow: '200,000 tokens',
      knowledgeCutoff: 'January 2025',
      tokenLimit: '200,000 tokens',
      legalRating: 5,
      recommended: true,
      performance: {
        contractReview: 97,
        caseAnalysis: 96,
        legalResearch: 95
      },
      estimatedTime: {
        contractReview: '15-18 min',
        caseBrief: '10-13 min'
      },
      practiceAreas: {
        contracts: 5,
        litigation: 5,
        ip: 5,
        compliance: 5,
        corporate: 5
      },
      docsLink: '#'
    },
    {
      id: 'o3',
      name: 'o3',
      color: 'indigo',
      status: 'New',
      description: 'OpenAI\'s advanced reasoning model with exceptional capabilities in complex legal analysis and problem-solving.',
      contextWindow: '128,000 tokens',
      knowledgeCutoff: 'January 2025',
      tokenLimit: '128,000 tokens',
      legalRating: 5,
      recommended: true,
      performance: {
        contractReview: 96,
        caseAnalysis: 94,
        legalResearch: 95
      },
      estimatedTime: {
        contractReview: '25-30 min',
        caseBrief: '18-22 min'
      },
      practiceAreas: {
        contracts: 5,
        litigation: 5,
        ip: 5,
        compliance: 4,
        corporate: 5
      },
      docsLink: '#'
    },
    {
      id: 'o4mini',
      name: 'o4-mini',
      color: 'green',
      status: 'New',
      description: 'Smaller, faster reasoning model offering impressive results for math, coding, and visual analysis at lower cost.',
      contextWindow: '128,000 tokens',
      knowledgeCutoff: 'January 2025',
      tokenLimit: '128,000 tokens',
      legalRating: 4,
      recommended: false,
      performance: {
        contractReview: 89,
        caseAnalysis: 86,
        legalResearch: 87
      },
      estimatedTime: {
        contractReview: '18-22 min',
        caseBrief: '12-15 min'
      },
      practiceAreas: {
        contracts: 4,
        litigation: 4,
        ip: 4,
        compliance: 4,
        corporate: 4
      },
      docsLink: '#'
    },
    {
      id: 'o4minihigh',
      name: 'o4-mini-high',
      color: 'teal',
      status: 'New',
      description: 'Advanced variant of o4-mini that spends more time reasoning, offering improved accuracy and reliability for complex analytical tasks.',
      contextWindow: '200,000 tokens',
      knowledgeCutoff: 'January 2025',
      tokenLimit: '100,000 tokens',
      legalRating: 4,
      recommended: false,
      performance: {
        contractReview: 85,
        caseAnalysis: 83,
        legalResearch: 84
      },
      estimatedTime: {
        contractReview: '15-20 min',
        caseBrief: '10-15 min'
      },
      practiceAreas: {
        contracts: 4,
        litigation: 4,
        ip: 4,
        compliance: 4,
        corporate: 4,
        tax: 5
      },
      docsLink: '#'
    }
  ];

  // Filter categories - removed "Available Now" as requested
  const filterOptions = [
    { id: 'recommended', label: 'Recommended for Legal' },
    { id: 'all', label: 'All Models' },
    { id: 'new', label: 'New Models' }
  ];

  // State management
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedModels, setSelectedModels] = useState([]);
  const [showComparison, setShowComparison] = useState(false);

  // Filter models based on selected filter
  const filteredModels = allModels.filter(model => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'recommended') return model.recommended;
    if (activeFilter === 'new') return model.status.toLowerCase() === 'new' || model.status.toLowerCase() === 'beta';
    return true;
  });

  // Get recommended models for the featured section
  const recommendedModels = allModels.filter(model => model.recommended);

  // Handle model selection for comparison
  const handleModelSelect = (model) => {
    // Check if model is already selected
    if (selectedModels.some(m => m.id === model.id)) {
      setSelectedModels(selectedModels.filter(m => m.id !== model.id));
    } else {
      // Limit selection to 3 models
      if (selectedModels.length < 3) {
        setSelectedModels([...selectedModels, model]);
      } else {
        // Replace the first selected model if already have 3
        const updatedSelection = [...selectedModels.slice(1), model];
        setSelectedModels(updatedSelection);
      }
    }
    
    // Automatically show comparison when models are selected
    if (selectedModels.length > 0 || !selectedModels.some(m => m.id === model.id)) {
      setShowComparison(true);
    }
  };

  // Handle removing a model from comparison
  const handleRemoveFromComparison = (model) => {
    setSelectedModels(selectedModels.filter(m => m.id !== model.id));
    
    // Hide comparison if no models left
    if (selectedModels.length <= 1) {
      setShowComparison(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Language Models</h2>
        <p className="text-gray-600">
          Compare and explore available language models for your legal work. Select up to three models to compare.
        </p>
      </div>

      {/* Filter Options */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filterOptions.map(option => (
          <button
            key={option.id}
            onClick={() => setActiveFilter(option.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === option.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Recommended for Legal Research Section */}
      {activeFilter === 'all' || activeFilter === 'recommended' ? (
        <section className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Recommended for Legal Research
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedModels.map(model => (
              <ModelCard
                key={model.id}
                model={model}
                onSelect={handleModelSelect}
                isSelected={selectedModels.some(m => m.id === model.id)}
              />
            ))}
          </div>
        </section>
      ) : null}

      {/* All Available Models */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          {activeFilter === 'all' ? 'All Available Models' : 
           activeFilter === 'recommended' ? 'All Recommended Models' : 
           'New & Beta Models'}
        </h3>
        
        {filteredModels.length === 0 ? (
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <p className="text-gray-500">No models match your current filter. Try a different selection.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredModels.map(model => (
              <ModelCard
                key={model.id}
                model={model}
                onSelect={handleModelSelect}
                isSelected={selectedModels.some(m => m.id === model.id)}
              />
            ))}
          </div>
        )}
      </section>

      {/* Comparison Section */}
      {showComparison && (
        <section className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Model Comparison
          </h3>
          <ComparisonTable 
            selectedModels={selectedModels} 
            onRemove={handleRemoveFromComparison} 
          />
        </section>
      )}

      {/* Practice Area Suitability */}
      <section className="mb-12" id="all-practice-areas">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Practice Area Suitability
        </h3>
        <PracticeAreaTable models={allModels} />
      </section>
    </div>
  );
};

export default ModelsTab;