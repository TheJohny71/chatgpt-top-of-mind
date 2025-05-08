// src/components/legal/CitationGuideTab.jsx
import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, Download } from 'lucide-react';

// Dummy data for citation models (move this to your data file later)
const citationModels = [
  { id: 'o3', name: 'o3', risk: 'Variable', process: 'Always verify all citations' },
  { id: 'o4-mini', name: 'o4-mini', risk: 'Variable', process: 'Always verify all citations' },
  { id: 'GPT-4.5', name: 'GPT-4.5', risk: 'Variable', process: 'Always verify all citations' }
];

// Verification workflow steps
const verificationSteps = [
  { 
    step: 1, 
    title: 'Initial Citation Generation', 
    description: 'Request ChatGPT to provide citations in proper Bluebook format with specific instructions about citation elements.',
    examplePrompt: "Please provide the full Bluebook citation for [case name], including parallel citations if available.",
    isWarning: false
  },
  { 
    step: 2, 
    title: 'Existence Verification', 
    description: 'Verify that the cited authority actually exists using official legal databases (Westlaw, Lexis, Bloomberg, HeinOnline).',
    warningText: 'ChatGPT may generate plausible-sounding but non-existent cases or statutory citations.',
    isWarning: true
  },
  { 
    step: 3, 
    title: 'Content Verification', 
    description: 'Check that the holding or content attributed to the authority is accurate and not mischaracterized.',
    warningText: 'Inaccurate characterization of holdings, dicta presented as holdings, or overstatement of precedential value.',
    isWarning: true
  },
  { 
    step: 4, 
    title: 'Current Status Check', 
    description: 'Check if the authority is still good law using citator services (Shepard\'s, KeyCite, BCite).',
    warningText: 'ChatGPT may cite overruled, superseded, or otherwise no longer authoritative sources.',
    isWarning: true
  },
  { 
    step: 5, 
    title: 'Format Correction', 
    description: 'Correct any formatting errors in the citation to ensure compliance with current Bluebook standards.',
    examplePrompt: "Please correct this citation to follow proper Bluebook format, including correct abbreviations for reporters and courts.",
    isWarning: false
  }
];

// Best practices
const promptingTechniques = [
  "Be specific about citation format (provide a full Bluebook 21st edition citation)",
  "Request specific citation elements (parallel citations, pinpoint citations)",
  "Use jurisdiction-specific prompts (California Supreme Court citation style)",
  "Specify handling of subsequent citations (id., supra, hereinafter)",
  "Provide example citations for ChatGPT to follow in its own outputs"
];

const crossJurisdictionalTips = [
  "Specify both source and target jurisdiction formatting rules",
  "Request jurisdiction-specific citation signals where appropriate",
  "Ask for explanations of how foreign authorities should be treated",
  "Request proper treatment of conflicting citation standards",
  "Use separate prompts for authorities from different jurisdictions"
];

const CitationGuideTab = () => {
  // Active tab within the Citation Guide
  const [activeTab, setActiveTab] = useState('formats');

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-blue-900 mb-4">Expanded Citation Guide and Authority Verification</h2>
      
      {/* Introduction section */}
      <div className="mb-8">
        <p className="text-gray-700 mb-4">
          Proper citation and authority verification are critical aspects of using ChatGPT Enterprise for legal research. 
          This guide provides a framework for ensuring accuracy and reliability when using AI-generated legal citations.
        </p>
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-md">
          <div className="flex">
            <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
            <p className="text-amber-700 text-sm">
              <span className="font-bold">Important:</span> All models require the same level of verification for 
              citations and legal authorities. Never assume any model provides inherently more accurate citations 
              without verification.
            </p>
          </div>
        </div>
      </div>
      
      {/* Tabs for the citation guide */}
      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button 
              onClick={() => setActiveTab('formats')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'formats' 
                  ? 'border-blue-500 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Citation Formats
            </button>
            <button 
              onClick={() => setActiveTab('verification')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'verification' 
                  ? 'border-blue-500 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Authority Verification
            </button>
            <button 
              onClick={() => setActiveTab('generation')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'generation' 
                  ? 'border-blue-500 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Citation Generation
            </button>
          </nav>
        </div>
        
        {/* Citation Formats Tab */}
        {activeTab === 'formats' && (
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Common Citation Issues with ChatGPT</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <h4 className="font-medium text-blue-800 mb-2">Bluebook Format Challenges</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <p>Inconsistent handling of italics and small caps in case names</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <p>Incorrect abbreviations for court names and reporters</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <p>Challenges with pinpoint citations and parallel citations</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <p>Inconsistent treatment of subsequent citations (id., supra)</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <h4 className="font-medium text-blue-800 mb-2">Common Verification Failures</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <p>Non-existent cases with plausible-sounding names</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <p>Incorrect court, jurisdiction, or date information</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <p>Mischaracterized holdings or dicta as binding precedent</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <p>Citations to overruled or superseded authorities</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
              <h4 className="font-medium text-gray-800 mb-3">Authority Verification Across Models</h4>
              <p className="text-sm text-gray-600 mb-4">
                All ChatGPT models require the same level of verification regardless of model generation. 
                Never assume any model provides inherently more reliable citations without verification.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Model
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Hallucination Risk
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Verification Process
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {citationModels.map(model => (
                      <tr key={model.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {model.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {model.risk}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {model.process}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {/* Authority Verification Workflow Tab */}
        {activeTab === 'verification' && (
          <div className="mt-6">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Authority Verification Workflow</h3>
            
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <div className="relative">
                {/* Vertical timeline line */}
                <div className="absolute left-9 top-4 bottom-4 w-0.5 bg-gray-200"></div>
                
                {/* Timeline items */}
                <div className="space-y-8">
                  {verificationSteps.map(step => (
                    <div key={step.step} className="relative flex">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 z-10">
                        <span className="font-bold">{step.step}</span>
                      </div>
                      <div className="ml-6 bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex-grow">
                        <h4 className="font-medium text-gray-800 mb-2">{step.title}</h4>
                        <p className="text-gray-600 mb-2">{step.description}</p>
                        
                        {step.isWarning ? (
                          <div className="bg-amber-50 p-3 rounded border border-amber-100 text-sm">
                            <p className="text-amber-600">
                              <span className="font-bold">Common Issue:</span> {step.warningText}
                            </p>
                          </div>
                        ) : step.examplePrompt && (
                          <div className="bg-blue-50 p-3 rounded border border-blue-100 text-sm">
                            <p className="text-blue-700 font-medium">Example Prompt:</p>
                            <p className="text-blue-600 italic">{step.examplePrompt}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Citation Generation Tab */}
        {activeTab === 'generation' && (
          <div className="mt-6">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Citation Generation Best Practices</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h4 className="font-medium text-blue-800 mb-3">Effective Prompting Techniques</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  {promptingTechniques.map((technique, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <p>{technique}</p>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h4 className="font-medium text-blue-800 mb-3">Cross-Jurisdictional Citation</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  {crossJurisdictionalTips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <p>{tip}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Citation Building Tool - Simple Mockup */}
            <div className="mt-8">
              <h3 className="text-xl font-medium text-gray-800 mb-4">Interactive Citation Building Tool</h3>
              
              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <div className="border border-gray-300 rounded-lg p-4 mb-4">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Authority Type</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md text-sm">
                      <option>Case</option>
                      <option>Statute</option>
                      <option>Regulation</option>
                      <option>Secondary Source</option>
                      <option>International Material</option>
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Case Name</label>
                      <input type="text" className="w-full p-2 border border-gray-300 rounded-md text-sm" placeholder="e.g., Brown v. Board of Education" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                      <input type="text" className="w-full p-2 border border-gray-300 rounded-md text-sm" placeholder="e.g., 1954" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Reporter</label>
                      <input type="text" className="w-full p-2 border border-gray-300 rounded-md text-sm" placeholder="e.g., U.S." />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Volume</label>
                      <input type="text" className="w-full p-2 border border-gray-300 rounded-md text-sm" placeholder="e.g., 347" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Page</label>
                      <input type="text" className="w-full p-2 border border-gray-300 rounded-md text-sm" placeholder="e.g., 483" />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Court</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md text-sm">
                      <option>U.S. Supreme Court</option>
                      <option>U.S. Court of Appeals</option>
                      <option>U.S. District Court</option>
                      <option>State Supreme Court</option>
                      <option>State Appellate Court</option>
                      <option>State Trial Court</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center mb-2">
                    <input type="checkbox" id="parallel" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                    <label htmlFor="parallel" className="ml-2 block text-sm text-gray-700">Include parallel citation</label>
                  </div>
                  
                  <div className="flex items-center">
                    <input type="checkbox" id="pinpoint" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                    <label htmlFor="pinpoint" className="ml-2 block text-sm text-gray-700">Include pinpoint citation</label>
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  Generate Bluebook Citation
                </button>
                
                <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-md">
                  <h4 className="text-sm font-medium text-gray-700 mb-1">Generated Citation</h4>
                  <p className="text-sm font-mono">Brown v. Bd. of Educ., 347 U.S. 483 (1954).</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Warning About ChatGPT Citations */}
      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-md mb-8">
        <div className="flex">
          <AlertTriangle className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-medium text-red-800">Important Notice on Citations</h3>
            <p className="text-sm text-red-700 mt-1">
              All citations generated by ChatGPT, regardless of the model used, require verification against 
              primary sources before inclusion in any legal document. Never assume the accuracy of AI-generated 
              citations without independent confirmation.
            </p>
          </div>
        </div>
      </div>
      
      {/* Download Section */}
      <div className="flex justify-center mt-10">
        <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
          <Download className="h-4 w-4 mr-2" />
          Download Citation Checklist
        </button>
      </div>
    </div>
  );
};

export default CitationGuideTab;