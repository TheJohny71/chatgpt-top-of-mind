// src/components/legal/LegalUseCard.jsx
import React from 'react';
import { FileText, Book, CheckCircle } from 'lucide-react';

const LegalUseCard = ({ useCase, onViewTemplate }) => {
  // Determine the icon to display based on the category
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'contracts':
        return <FileText className="h-5 w-5 text-blue-500" />;
      case 'litigation':
        return <Book className="h-5 w-5 text-purple-500" />;
      case 'compliance':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'research':
        return <FileText className="h-5 w-5 text-indigo-500" />;
      default:
        return <FileText className="h-5 w-5 text-gray-500" />;
    }
  };

  // If useCase is undefined, return a placeholder
  if (!useCase) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <p className="text-gray-400">Use case data unavailable</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-start mb-4">
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
            {getCategoryIcon(useCase.category)}
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">{useCase.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{useCase.description}</p>
          </div>
        </div>
        
        {useCase.benefits && useCase.benefits.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Key Benefits:</h4>
            <ul className="space-y-1">
              {useCase.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-4 w-4 text-green-500 mt-0.5">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <p className="ml-2 text-xs text-gray-600">{benefit}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded mr-2">
              {useCase.category.toUpperCase()}
            </span>
            {useCase.isNew && (
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                NEW
              </span>
            )}
          </div>
          <button
            onClick={() => onViewTemplate && onViewTemplate(useCase)}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            View Template →
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalUseCard;