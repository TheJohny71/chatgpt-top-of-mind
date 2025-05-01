import React, { useState } from 'react';
import ModelCard from '../components/ModelCard';
import ComparisonTable from '../components/ComparisonTable';
import PracticeAreaTable from '../components/PracticeAreaTable';
import PricingTable from '../components/PricingTable';

const ModelsTab = () => {
  // Sample model data - in a real app this would come from an API or data source
  const allModels = [
    {
      id: 'gpt4o',
      name: 'GPT-4o',
      color: 'purple',
      status: 'Available',
      description: 'The latest multimodal model with best-in-class performance for legal research and document analysis.',
      contextWindow: '128,000 tokens',
      knowledgeCutoff: 'April 2023',
      tokenLimit: '128,000 tokens',
      legalRating: 5,
      recommended: true,
      performance: {
        contractReview: 98,
        caseAnalysis: 95,
        legalResearch: 97
      },
      estimatedTime: {
        contractReview: '15-20 min',
        caseBrief: '10-15 min'
      },
      practiceAreas: {
        contracts: 5,
        litigation: 5,
        ip: 4,
        compliance: 5,
        corporate: 5
      },
      pricing: {
        inputTokens: '0.01',
        outputTokens: '0.03',
        monthlyCost: '650.00',
        costPerRequest: '0.45'
      },
      docsLink: '#'
    },
    {
      id: 'gpt4',
      name: 'GPT-4',
      color: 'blue',
      status: 'Available',
      description: 'Powerful model suitable for a wide range of legal tasks with advanced reasoning capabilities.',
      contextWindow: '32,000 tokens',
      knowledgeCutoff: 'April 2023',
      tokenLimit: '32,000 tokens',
      legalRating: 4,
      recommended: true,
      performance: {
        contractReview: 92,
        caseAnalysis: 90,
        legalResearch: 88
      },
      estimatedTime: {
        contractReview: '25-30 min',
        caseBrief: '20-25 min'
      },
      practiceAreas: {
        contracts: 4,
        litigation: 4,
        ip: 4,
        compliance: 4,
        corporate: 4
      },
      pricing: {
        inputTokens: '0.009',
        outputTokens: '0.027',
        monthlyCost: '500.00',
        costPerRequest: '0.38'
      },
      docsLink: '#'
    },
    {
      id: 'claude3opus',
      name: 'Claude 3 Opus',
      color: 'indigo',
      status: 'New',
      description: 'Anthropic\'s most powerful model with excellent legal reasoning and document understanding.',
      contextWindow: '200,000 tokens',
      knowledgeCutoff: 'August 2023',
      tokenLimit: '200,000 tokens',
      legalRating: 5,
      recommended: true,
      performance: {
        contractReview: 97,
        caseAnalysis: 96,
        legalResearch: 94
      },
      estimatedTime: {
        contractReview: '15-18 min',
        caseBrief: '12-15 min'
      },
      practiceAreas: {
        contracts: 5,
        litigation: 5,
        ip: 5,
        compliance: 4,
        corporate: 5
      },
      pricing: {
        inputTokens: '0.015',
        outputTokens: '0.075',
        monthlyCost: '720.00',
        costPerRequest: '0.55'
      },
      docsLink: '#'
    },
    {
      id: 'gpt35turbo',
      name: 'GPT-3.5 Turbo',
      color: 'green',
      status: 'Available',
      description: 'Faster, more cost-effective model suitable for basic legal tasks and document drafting.',
      contextWindow: '16,000 tokens',
      knowledgeCutoff: 'April 2023',
      tokenLimit: '16,000 tokens',
      legalRating: 3,
      recommended: false,
      performance: {
        contractReview: 75,
        caseAnalysis: 68,
        legalResearch: 70
      },
      estimatedTime: {
        contractReview: '35-45 min',
        caseBrief: '30-40 min'
      },
      practiceAreas: {
        contracts: 3,
        litigation: 2,
        ip: 3,
        compliance: 3,
        corporate: 3
      },
      pricing: {
        inputTokens: '0.0015',
        outputTokens: '0.002',
        monthlyCost: '150.00',
        costPerRequest: '0.10'
      },
      docsLink: '#'
    },
    {
      id: 'claude3sonnet',
      name: 'Claude 3 Sonnet',
      color: 'indigo',
      status: 'Available',
      description: 'Balanced performance and cost-effectiveness for legal tasks requiring nuanced understanding.',
      contextWindow: '100,000 tokens',
      knowledgeCutoff: 'August 2023',
      tokenLimit: '100,000 tokens',
      legalRating: 4,
      recommended: false,
      performance: {
        contractReview: 90,
        caseAnalysis: 87,
        legalResearch: 85
      },
      estimatedTime: {
        contractReview: '22-28 min',
        caseBrief: '18-22 min'
      },
      practiceAreas: {
        contracts: 4,
        litigation: 4,
        ip: 4,
        compliance: 3,
        corporate: 4
      },
      pricing: {
        inputTokens: '0.008',
        outputTokens: '0.024',
        monthlyCost: '350.00',
        costPerRequest: '0.25'
      },
      docsLink: '#'
    },
    {
      id: 'llama3',
      name: 'Llama 3',
      color: 'blue',
      status: 'Beta',
      description: 'Meta\'s open-source model optimized for enterprise use with good performance at legal tasks.',
      contextWindow: '128,000 tokens',
      knowledgeCutoff: 'December 2023',
      tokenLimit: '128,000 tokens',
      legalRating: 3,
      recommended: false,
      performance: {
        contractReview: 82,
        caseAnalysis: 78,
        legalResearch: 75
      },
      estimatedTime: {
        contractReview: '30-35 min',
        caseBrief: '25-30 min'
      },
      practiceAreas: {
        contracts: 3,
        litigation: 3,
        ip: 3,
        compliance: 3,
        corporate: 3
      },
      pricing: {
        inputTokens: '0.0000',
        outputTokens: '0.0000',
        monthlyCost: 'Self-hosted',
        costPerRequest: 'Variable'
      },
      docsLink: '#'
    }
  ];

  // Filter categories
  const filterOptions = [
    { id: 'all', label: 'All Models' },
    { id: 'recommended', label: 'Recommended for Legal' },
    { id: 'available', label: 'Available Now' },
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
    if (activeFilter === 'available') return model.status.toLowerCase() === 'available';
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
           activeFilter === 'available' ? 'Currently Available Models' : 
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
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Practice Area Suitability
        </h3>
        <PracticeAreaTable models={allModels.slice(0, 5)} />
      </section>

      {/* Pricing Information */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Pricing Information
        </h3>
        <PricingTable models={allModels} />
      </section>
    </div>
  );
};

export default ModelsTab;