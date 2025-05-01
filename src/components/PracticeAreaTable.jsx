import React from 'react';

const PracticeAreaTable = ({ models }) => {
  // Define practice areas to compare across
  const practiceAreas = [
    { id: 'contracts', name: 'Contracts & Transactions' },
    { id: 'litigation', name: 'Litigation & Disputes' },
    { id: 'ip', name: 'Intellectual Property' },
    { id: 'compliance', name: 'Compliance & Regulatory' },
    { id: 'corporate', name: 'Corporate & M&A' },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <div className="bg-indigo-800 text-white px-6 py-4">
        <h3 className="text-lg font-semibold">Practice Area Suitability</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Practice Area
              </th>
              {models.map((model, index) => (
                <th 
                  key={index} 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {model.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {practiceAreas.map((area) => (
              <tr key={area.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {area.name}
                </td>
                {models.map((model, modelIndex) => {
                  // Get the rating for this model and practice area
                  const rating = model.practiceAreas?.[area.id] || 0;
                  
                  return (
                    <td key={modelIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        {/* Rating visualization (1-5 scale) */}
                        <div className="flex mr-2">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`h-4 w-4 ${i < rating ? `text-${model.color}-500` : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        
                        {/* Recommendation tag for highest rating */}
                        {rating >= 4 && (
                          <span className={`text-xs px-2 py-1 rounded-full bg-${model.color}-100 text-${model.color}-800`}>
                            Recommended
                          </span>
                        )}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PracticeAreaTable;