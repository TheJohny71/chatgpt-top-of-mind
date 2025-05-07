import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip } from 'recharts';

const ModelComparisonChart = ({ selectedModels }) => {
  // If no models are selected, show a placeholder
  if (!selectedModels || selectedModels.length === 0) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
        <p className="text-gray-500">Select models above to compare them visually</p>
      </div>
    );
  }

  // Define the dimensions for radar chart
  const dimensions = [
    { key: 'contractReview', name: 'Contract Review' },
    { key: 'caseAnalysis', name: 'Case Analysis' },
    { key: 'legalResearch', name: 'Legal Research' },
    { key: 'accuracy', name: 'Factual Accuracy' },
    { key: 'speed', name: 'Processing Speed' },
    { key: 'contextHandling', name: 'Context Handling' }
  ];

  // Calculate model attributes
  const getModelAttribute = (model, key) => {
    // First try to get from performance object
    if (model.performance && model.performance[key] !== undefined) {
      return model.performance[key];
    }
    
    // Default values for dimensions that might not exist in original data
    switch (key) {
      case 'accuracy':
        // Derive from model legalRating
        return model.legalRating ? model.legalRating * 20 : 60;
      case 'speed': 
        // Invert context window (smaller = faster)
        const contextSize = parseInt(model.contextWindow?.replace(/[^0-9]/g, '') || '100000');
        return 100 - (contextSize / 250000 * 100);
      case 'contextHandling':
        // Derive from contextWindow
        const tokenSize = parseInt(model.contextWindow?.replace(/[^0-9]/g, '') || '100000');
        return (tokenSize / 200000 * 100);
      default:
        return 70; // Default value if not found
    }
  };

  // Prepare data for radar chart
  const chartData = dimensions.map(dimension => {
    const data = {
      dimension: dimension.name,
    };
    
    // Add each model's value for this dimension
    selectedModels.forEach(model => {
      // Get the value for this dimension (from performance object or calculate it)
      const value = getModelAttribute(model, dimension.key);
      data[model.name] = value;
    });
    
    return data;
  });

  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Model Capability Comparison</h3>
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
            <PolarGrid stroke="#e5e7eb" />
            <PolarAngleAxis dataKey="dimension" tick={{ fill: '#4b5563', fontSize: 12 }} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tickCount={5} stroke="#9CA3AF" />
            
            {selectedModels.map((model, index) => (
              <Radar
                key={model.id}
                name={model.name}
                dataKey={model.name}
                stroke={
                  model.color === 'blue' ? '#3b82f6' :
                  model.color === 'purple' ? '#8b5cf6' :
                  model.color === 'green' ? '#10b981' :
                  model.color === 'indigo' ? '#6366f1' :
                  model.color === 'teal' ? '#14b8a6' :
                  '#3b82f6' // default blue
                }
                fill={
                  model.color === 'blue' ? 'rgba(59, 130, 246, 0.2)' :
                  model.color === 'purple' ? 'rgba(139, 92, 246, 0.2)' :
                  model.color === 'green' ? 'rgba(16, 185, 129, 0.2)' :
                  model.color === 'indigo' ? 'rgba(99, 102, 241, 0.2)' :
                  model.color === 'teal' ? 'rgba(20, 184, 166, 0.2)' :
                  'rgba(59, 130, 246, 0.2)' // default blue
                }
                fillOpacity={0.6}
              />
            ))}
            
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                borderRadius: '0.375rem', 
                border: '1px solid #e5e7eb',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
              }}
              formatter={(value) => [`${value}%`, '']}
            />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="text-xs text-gray-500 mt-4 text-center">
        Values displayed as percentages. Higher values indicate better performance in each category.
      </div>
      
      <div className="mt-6 flex justify-center">
        <button className="px-4 py-2 bg-white border border-gray-300 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none">
          Switch to Table View
        </button>
      </div>
    </div>
  );
};

export default ModelComparisonChart;