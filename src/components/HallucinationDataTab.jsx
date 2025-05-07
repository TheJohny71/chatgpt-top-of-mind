// src/components/HallucinationDataTab.jsx
import React from 'react';

const HallucinationDataTab = () => {
  // Model data for hallucination metrics
  const hallucinationData = [
    {
      id: 'gpt45',
      name: 'GPT-4.5',
      shortName: '4.5',
      color: 'purple',
      evaluationDate: 'Feb 2025',
      personQA: {
        rate: 19,
        confidence: 2.1
      },
      simpleQA: {
        rate: 37.1,
        confidence: 3.2
      },
      source: 'OpenAI'
    },
    {
      id: 'o3',
      name: 'o3',
      shortName: 'o3',
      color: 'indigo',
      evaluationDate: 'Apr 2025',
      personQA: {
        rate: 33,
        confidence: 2.8
      },
      simpleQA: {
        rate: null,
        confidence: null,
        notEvaluated: true
      },
      source: 'TechCrunch'
    },
    {
      id: 'o4mini',
      name: 'o4-mini',
      shortName: 'o4',
      color: 'green',
      evaluationDate: 'Apr 2025',
      personQA: {
        rate: 48,
        confidence: 3.5
      },
      simpleQA: {
        rate: null,
        confidence: null,
        notEvaluated: true
      },
      source: 'TechCrunch'
    },
    {
      id: 'o4minihigh',
      name: 'o4-mini-high',
      shortName: 'o4H',
      color: 'teal',
      evaluationDate: 'Apr 2025',
      personQA: {
        rate: null,
        confidence: null,
        notPublished: true
      },
      simpleQA: {
        rate: null,
        confidence: null,
        notPublished: true
      },
      source: 'N/A'
    },
    {
      id: 'gpt4o',
      name: 'GPT-4o',
      shortName: '4o',
      color: 'blue',
      evaluationDate: 'Feb 2025',
      personQA: {
        rate: 52,
        confidence: 3.0
      },
      simpleQA: {
        rate: 61.8,
        confidence: 3.5
      },
      source: 'OpenAI'
    },
    {
      id: 'o1',
      name: 'o1',
      shortName: 'o1',
      color: 'green',
      evaluationDate: 'Dec 2024',
      personQA: {
        rate: 16,
        confidence: 2.0
      },
      simpleQA: {
        rate: 44,
        confidence: 3.0
      },
      source: 'OpenAI'
    }
  ];

  // Usage recommendations
  const usageRecommendations = [
    {
      useCase: 'Critical factual research',
      recommended: 'o1, GPT-4.5 with search tools',
      notRecommended: 'o3, o4-mini, GPT-4o',
      notes: 'Lower-hallucination models should be paired with verification'
    },
    {
      useCase: 'Creative content generation',
      recommended: 'Any model',
      notRecommended: 'N/A',
      notes: 'Hallucination constraints less important for creative tasks'
    },
    {
      useCase: 'Code generation',
      recommended: 'o3, GPT-4.5',
      notRecommended: 'o4-mini, GPT-4o',
      notes: 'Despite higher PersonQA hallucination, o3\'s code generation is strong'
    },
    {
      useCase: 'Healthcare/Legal assistance',
      recommended: 'GPT-4.5 with human verification',
      notRecommended: 'o3, o4-mini, o1, GPT-4o',
      notes: 'No model is reliable enough for unverified use in high-stakes domains'
    }
  ];

  return (
    <div>
      {/* Introduction Card */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Understanding Model Hallucination</h3>
        <p className="text-gray-600 mb-4">
          Hallucinations occur when AI models generate information that is factually incorrect or not supported by available evidence. For legal applications, minimizing hallucinations is critical to ensure reliable research and analysis.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="border-l-4 border-blue-600 pl-4">
            <h4 className="font-medium text-gray-800">What are hallucinations?</h4>
            <p className="text-sm text-gray-600">Incorrect or fabricated information confidently presented as fact by AI models.</p>
          </div>
          <div className="border-l-4 border-purple-600 pl-4">
            <h4 className="font-medium text-gray-800">Why they matter for legal work</h4>
            <p className="text-sm text-gray-600">Legal accuracy is paramount for research, analysis, and client advice.</p>
          </div>
          <div className="border-l-4 border-indigo-600 pl-4">
            <h4 className="font-medium text-gray-800">How we measure them</h4>
            <p className="text-sm text-gray-600">Models are evaluated on specialized benchmarks including PersonQA and SimpleQA.</p>
          </div>
        </div>
      </div>

      {/* Hallucination Rate Comparison Chart */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Hallucination Rate Comparison</h3>
        <div className="grid grid-cols-7 gap-4 mb-6 px-4 border-b pb-4 border-gray-100">
          <div className="col-span-2 font-medium text-gray-500 text-sm uppercase tracking-wider">Model</div>
          <div className="col-span-2 font-medium text-gray-500 text-sm uppercase tracking-wider text-center">PersonQA Rate</div>
          <div className="col-span-2 font-medium text-gray-500 text-sm uppercase tracking-wider text-center">SimpleQA Rate</div>
          <div className="col-span-1 font-medium text-gray-500 text-sm uppercase tracking-wider text-center">Source</div>
        </div>

        {hallucinationData.map((model) => (
          <div key={model.id} className="grid grid-cols-7 gap-4 px-4 py-3 hover:bg-gray-50 border-b border-gray-100">
            <div className="col-span-2 flex items-center">
              <div className={`h-6 w-6 rounded-full bg-${model.color}-100 flex items-center justify-center text-${model.color}-800 text-xs font-medium mr-3`}>
                {model.shortName}
              </div>
              <div>
                <p className="font-medium text-gray-900">{model.name}</p>
                <p className="text-xs text-gray-500">{model.evaluationDate}</p>
              </div>
            </div>
            
            <div className="col-span-2 flex flex-col items-center justify-center">
              {model.personQA.rate !== null ? (
                <>
                  <p className="text-lg font-semibold text-gray-900">{model.personQA.rate}% ± {model.personQA.confidence}%</p>
                  <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden mt-1">
                    <div className={`h-full bg-${model.color}-500 rounded-full`} style={{width: `${model.personQA.rate}%`}}></div>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-lg font-semibold text-gray-500">
                    {model.personQA.notPublished ? 'Not published' : 'Not evaluated'}
                  </p>
                  <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden mt-1">
                    <div className="h-full bg-gray-300 rounded-full" style={{width: '0%'}}></div>
                  </div>
                </>
              )}
            </div>
            
            <div className="col-span-2 flex flex-col items-center justify-center">
              {model.simpleQA.rate !== null ? (
                <>
                  <p className="text-lg font-semibold text-gray-900">{model.simpleQA.rate}% ± {model.simpleQA.confidence}%</p>
                  <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden mt-1">
                    <div className={`h-full bg-${model.color}-500 rounded-full`} style={{width: `${model.simpleQA.rate}%`}}></div>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-lg font-semibold text-gray-500">
                    {model.simpleQA.notPublished ? 'Not published' : 'Not evaluated'}
                  </p>
                  <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden mt-1">
                    <div className="h-full bg-gray-300 rounded-full" style={{width: '0%'}}></div>
                  </div>
                </>
              )}
            </div>
            
            <div className="col-span-1 flex items-center justify-center">
              <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-700">{model.source}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Model Usage Recommendations */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Hallucination Impact: Legal Use Case Guidance</h3>
        
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg mb-6">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Use Case</th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Recommended Models</th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Not Recommended</th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {usageRecommendations.map((rec, index) => (
                <tr key={index}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{rec.useCase}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{rec.recommended}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{rec.notRecommended}</td>
                  <td className="px-3 py-4 text-sm text-gray-500">{rec.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Benchmark Definitions */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Understanding the Benchmarks</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-800 mb-2 flex items-center">
              <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 text-xs font-medium mr-2">PQ</div>
              PersonQA
            </h4>
            <p className="text-sm text-gray-600">
              Measures the model's tendency to provide incorrect or fabricated information when answering questions about specific people (e.g., "When did Marie Curie win her Nobel Prize?"). Lower scores indicate better factual accuracy about people.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-800 mb-2 flex items-center">
              <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-800 text-xs font-medium mr-2">SQ</div>
              SimpleQA
            </h4>
            <p className="text-sm text-gray-600">
              OpenAI's general knowledge benchmark that tests factual accuracy across multiple domains including history, science, geography, and current events. Lower scores indicate better overall factual accuracy.
            </p>
          </div>
        </div>
      </div>

      {/* Methodological Notes */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
        <h4 className="font-medium text-gray-800 mb-2">Methodological Notes</h4>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
          <li>Refusal to answer is not counted as a hallucination in these metrics</li>
          <li>All evaluations were conducted using standard system prompts without additional context</li>
          <li>PersonQA and SimpleQA use different question sets and methodologies, so direct comparison requires caution</li>
          <li>Confidence intervals represent 95% confidence based on sample sizes and distribution</li>
          <li>Data is based on public sources and official documentation from model providers</li>
        </ul>
      </div>
    </div>
  );
};

export default HallucinationDataTab;