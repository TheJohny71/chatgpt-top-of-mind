import React from 'react';

const PricingTable = ({ models }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <div className="bg-green-800 text-white px-6 py-4">
        <h3 className="text-lg font-semibold">Pricing Information</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Model
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Input Tokens
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Output Tokens
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estimated Monthly Cost
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cost per Request
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {models.map((model, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className={`flex-shrink-0 h-8 w-8 rounded-full bg-${model.color}-100 flex items-center justify-center`}>
                      <span className={`text-xs font-medium text-${model.color}-800`}>
                        {model.name.substring(0, 2)}
                      </span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{model.name}</div>
                      <div className="text-xs text-gray-500">{model.type || 'GPT Model'}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${model.pricing?.inputTokens || '0.00'} / 1K tokens
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${model.pricing?.outputTokens || '0.00'} / 1K tokens
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">${model.pricing?.monthlyCost || 'N/A'}</div>
                  <div className="text-xs text-gray-500">Based on estimated usage</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">${model.pricing?.costPerRequest || 'N/A'}</div>
                  <div className="text-xs text-gray-500">Avg. legal document</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="px-6 py-4 bg-gray-50 text-xs text-gray-500">
        * Pricing estimates are based on average usage patterns for legal professionals. Actual costs may vary.
      </div>
    </div>
  );
};

export default PricingTable;