import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const CitationGuide = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);
  
  const models = [
    { id: 'gpt4o', name: 'GPT-4o', version: '2025-03' },
    { id: 'gpt45', name: 'GPT-4.5', version: '2025-01' },
    { id: 'o3', name: 'o3', version: '2025-01' },
    { id: 'o1', name: 'o1', version: '2024-12' }
  ];
  
  const citationFormats = [
    {
      name: 'Bluebook',
      formatFunction: (model) => {
        return `OpenAI. ${model.name}, v.${model.version}. Generated content, [date of generation], [URL if applicable].`;
      }
    },
    {
      name: 'ALWD',
      formatFunction: (model) => {
        return `OpenAI, ${model.name} (version ${model.version}), Generated content, [date of generation], [URL if applicable].`;
      }
    },
    {
      name: 'APA',
      formatFunction: (model) => {
        return `OpenAI. (n.d.). ${model.name} (Version ${model.version}) [Large language model]. https://chat.openai.com/`;
      }
    },
    {
      name: 'MLA',
      formatFunction: (model) => {
        return `OpenAI. "${model.name}, Version ${model.version}." ChatGPT, [date of generation], chat.openai.com/.`;
      }
    }
  ];
  
  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
      <div className="bg-blue-800 text-white px-6 py-4">
        <h3 className="text-lg font-semibold">How to Cite ChatGPT Outputs</h3>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-6">
          When using ChatGPT Enterprise outputs in legal documents, proper citation is essential. 
          Select your preferred citation style and model below. Replace bracketed placeholders 
          with your specific information.
        </p>
        
        <div className="space-y-8">
          {citationFormats.map((format, formatIndex) => (
            <div key={formatIndex} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
              <h4 className="text-lg font-medium text-gray-800 mb-3">{format.name} Format</h4>
              <div className="space-y-3">
                {models.map((model, modelIndex) => {
                  const citation = format.formatFunction(model);
                  const itemIndex = `${formatIndex}-${modelIndex}`;
                  
                  return (
                    <div key={itemIndex} className="bg-gray-50 p-3 rounded-md relative">
                      <p className="text-sm text-gray-800 pr-8 font-mono">{citation}</p>
                      <button 
                        onClick={() => handleCopy(citation, itemIndex)} 
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                        aria-label="Copy citation"
                      >
                        {copiedIndex === itemIndex ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </button>
                      <div className="mt-1 text-xs text-gray-500">For {model.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Important Note</h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  Always verify that ChatGPT's outputs are accurate before citing in legal documents. 
                  While ChatGPT is a useful research tool, it should not replace professional legal judgment 
                  and all outputs should be independently verified.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitationGuide;