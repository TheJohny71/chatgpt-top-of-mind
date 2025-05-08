// src/components/legal/LegalCategoryFilter.jsx
import React from 'react';

const LegalCategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  // If categories is undefined or empty, return nothing
  if (!categories || categories.length === 0) {
    return null;
  }
  
  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LegalCategoryFilter;