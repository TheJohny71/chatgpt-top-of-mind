// src/pages/ModelsTab.jsx
import React, { useState } from 'react';
import { BarChart2, Table } from 'lucide-react';
import ModelCard from '../components/ModelCard';
import ComparisonTable from '../components/ComparisonTable';
import ModelComparisonChart from '../components/ModelComparisonChart';
import PracticeAreaTable from '../components/PracticeAreaTable';
import HallucinationDataTab from '../components/HallucinationDataTab';
import CitationGuide from '../components/CitationGuide';
import '../styles/MobileResponsiveStyles.css';

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
  const [comparisonView, setComparisonView] = useState('chart'); // 'chart' or 'table'
  const [activeSubtab, setActiveSubtab] = useState('overview');

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

  // Toggle between chart and table view
  const toggleComparisonView = () => {
    setComparisonView(comparisonView === 'chart' ? 'table' : 'chart');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 dashboard-content">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 mobile-text-xl">Language Models</h2>
        <p className="text-gray-600">
          Compare and explore available language models for your legal work. Select up to three models to compare.
        </p>
      </div>

      {/* Subtabs Navigation */}
      <div className="mb-8 border-b border-gray-200 nav-container">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveSubtab('overview')}
            className={`py-3 px-1 border-b-2 font-medium text-sm min-h-[44px] ${
              activeSubtab === 'overview'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Model Overview
          </button>
          <button
            onClick={() => setActiveSubtab('hallucination')}
            className={`py-3 px-1 border-b-2 font-medium text-sm min-h-[44px] ${
              activeSubtab === 'hallucination'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Hallucination Data
          </button>
          <button
            onClick={() => setActiveSubtab('practice')}
            className={`py-3 px-1 border-b-2 font-medium text-sm min-h-[44px] ${
              activeSubtab === 'practice'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Practice Areas
          </button>
          <button
            onClick={() => setActiveSubtab('citation')}
            className={`py-3 px-1 border-b-2 font-medium text-sm min-h-[44px] ${
              activeSubtab === 'citation'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Citation Guide
          </button>
        </nav>
      </div>

      {/* Render content based on active subtab */}
      {activeSubtab === 'hallucination' ? (
        <HallucinationDataTab />
      ) : activeSubtab === 'practice' ? (
        <section className="mb-12" id="all-practice-areas">
          <PracticeAreaTable models={allModels} />
        </section>
      ) : activeSubtab === 'citation' ? (
        <section className="mb-12">
          <CitationGuide />
        </section>
      ) : (
        // Default 'overview' subtab
        <>
          {/* Filter Options */}
          <div className="flex flex-wrap gap-2 mb-6">
            {filterOptions.map(option => (
              <button
                key={option.id}
                onClick={() => setActiveFilter(option.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium min-h-[44px] ${
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 responsive-grid card-container">
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 responsive-grid card-container">
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

          {/* Comparison Section with Toggle between Chart and Table */}
          {showComparison && selectedModels.length > 0 && (
            <section className="mb-12">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Model Comparison
                </h3>
                <div className="flex items-center bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setComparisonView('chart')}
                    className={`flex items-center px-3 py-1.5 rounded-md text-sm ${
                      comparisonView === 'chart' 
                        ? 'bg-white text-blue-600 shadow-sm' 
                        : 'text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <BarChart2 className="h-4 w-4 mr-1.5" />
                    Chart
                  </button>
                  <button
                    onClick={() => setComparisonView('table')}
                    className={`flex items-center px-3 py-1.5 rounded-md text-sm ${
                      comparisonView === 'table' 
                        ? 'bg-white text-blue-600 shadow-sm' 
                        : 'text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Table className="h-4 w-4 mr-1.5" />
                    Table
                  </button>
                </div>
              </div>
              
              {/* Render different comparison views based on state */}
              {comparisonView === 'chart' ? (
                <ModelComparisonChart selectedModels={selectedModels} />
              ) : (
                <div className="comparison-table">
                  <ComparisonTable 
                    selectedModels={selectedModels} 
                    onRemove={handleRemoveFromComparison} 
                  />
                </div>
              )}
            </section>
          )}
        </>
      )}
    </div>
  );
};

export default ModelsTab;