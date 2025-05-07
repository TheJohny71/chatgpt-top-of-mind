// src/pages/PromptLibraryTab.jsx
import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const PromptLibraryTab = () => {
  const [activeSection, setActiveSection] = useState('diagram');

  // Legal research template text
  const legalResearchTemplate = `[CONTEXT/POLICY]
You are assisting a senior legal researcher at a global law firm with expertise in international law, regulatory compliance, and cross-border transactions. All responses must adhere to attorney-client privilege standards. The information provided is for internal research purposes only and doesn't constitute legal advice. Cite all legal sources according to The Bluebook: A Uniform System of Citation (21st edition) format. Maintain strict confidentiality and avoid speculative legal conclusions. You must not fabricate, invent, or hallucinate any cases, statutes, regulations, scholarly works, or other legal authorities that do not exist.

[ROLE]
Act as an experienced legal research assistant with expertise in comparative legal analysis, case law research, and regulatory frameworks. You have access to major legal databases and understand complex legal concepts across multiple jurisdictions. You are meticulous about accuracy and comprehensiveness.

[TASK]
Analyze the following legal question/scenario: {INSERT SPECIFIC LEGAL QUESTION OR SCENARIO}. Identify relevant statutes, regulations, case law, and scholarly articles. Compare applicable legal frameworks across the relevant jurisdictions. Highlight potential conflicts of law and recent legal developments that may impact the analysis.

[CONSTRAINTS]
Limit your analysis to 1,000 words. Focus only on {INSERT RELEVANT JURISDICTIONS} legal systems. Do not provide definitive legal advice or predict court outcomes. Distinguish clearly between established law and emerging legal theories. Avoid discussion of active litigation strategy. Use formal, precise legal language while remaining accessible to non-specialist readers.

[EXAMPLES]
A strong legal research response includes:

Case example: "In Smith v. Jones (2023), the Southern District of New York held that... This suggests a trend toward..."

Statutory analysis example: "Under Section 10(b) of the Securities Exchange Act, as interpreted in SEC v. Texas Gulf Sulphur Co., the elements required for establishing liability are..."

Jurisdiction comparison example: "While the UK approach emphasizes X principle as seen in Regina v. Panel on Take-overs and Mergers, ex parte Datafin Plc, the US courts have instead focused on Y factor as demonstrated in Chevron U.S.A., Inc. v. Natural Resources Defense Council, Inc."

[OUTPUT SPEC]
Structure your response as follows:
1. Executive Summary (2-3 sentences)
2. Applicable Legal Framework (bullet points of key statutes/regulations)
3. Jurisdictional Analysis (organized by relevant jurisdiction)
4. Significant Case Law (chronological order, most recent first)
5. Potential Implications (objective analysis only)
6. Areas Requiring Further Research
7. Key Sources (formatted according to Bluebook citation)

[FALLBACK]
If certain information is unavailable or outside your knowledge base, clearly indicate which specific aspects require additional research. If multiple interpretations exist, present the dominant views in the field while noting that further analysis may be needed. If the question involves novel legal issues without clear precedent, identify analogous areas of law that might inform the analysis. Do not fabricate, invent, or hallucinate any legal authorities, cases, statutes, regulations, or scholarly works that do not exist. If you are uncertain about the existence or details of a legal source, explicitly state this limitation rather than filling in gaps with speculative or fabricated information.`;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        alert("Template copied to clipboard!");
      },
      (err) => {
        console.error("Could not copy text: ", err);
        alert("Failed to copy template. Please try selecting and copying manually.");
      }
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Prompt Library</h2>
        <p className="text-gray-600">
          Use these templates and guidelines to create effective prompts for legal research and analysis.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveSection('diagram')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeSection === 'diagram'
                ? 'border-blue-700 text-blue-700'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Prompt Anatomy Diagram
          </button>
          <button
            onClick={() => setActiveSection('template')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeSection === 'template'
                ? 'border-blue-700 text-blue-700'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Legal Research Template
          </button>
          <button
            onClick={() => setActiveSection('guide')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeSection === 'guide'
                ? 'border-blue-700 text-blue-700'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Implementation Guide
          </button>
        </nav>
      </div>

      {/* Prompt Anatomy Diagram Section */}
      {activeSection === 'diagram' && (
        <section className="mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">The Anatomy of a Prompt: 7 Building Blocks</h3>
            
            <div className="mb-6">
              <div className="bg-white border border-gray-200 rounded-lg mb-6">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-center mb-2">The Anatomy of a Prompt: 7 Building Blocks</h2>
                  <p className="text-center text-gray-600 italic mb-8">"Structure Beats Charm"</p>
                  
                  <div className="relative flex">
                    {/* Main content blocks - Full size with label adjustments */}
                    <div className="flex-grow">
                      {/* 1. CONTEXT/POLICY */}
                      <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-l-blue-600 shadow-sm mb-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-grow pr-4">
                            <h4 className="text-lg font-bold text-blue-800 flex items-center">
                              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 mr-3 shadow-sm">1</div>
                              CONTEXT/POLICY
                            </h4>
                            <p className="text-gray-700 mt-2 pl-11">Background information and purpose for the model. Sets the stage.</p>
                          </div>
                          <div className="whitespace-nowrap text-blue-700 text-sm px-3 py-1 rounded-full border border-blue-200 bg-blue-50 flex-shrink-0 mt-1">
                            Early influence
                          </div>
                        </div>
                      </div>
                      
                      {/* 2. ROLE */}
                      <div className="bg-green-50 p-5 rounded-lg border-l-4 border-l-green-600 shadow-sm mb-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-grow pr-4">
                            <h4 className="text-lg font-bold text-green-800 flex items-center">
                              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 mr-3 shadow-sm">2</div>
                              ROLE
                            </h4>
                            <p className="text-gray-700 mt-2 pl-11">The persona or identity the model should adopt.</p>
                          </div>
                          <div className="whitespace-nowrap text-green-700 text-sm px-3 py-1 rounded-full border border-green-200 bg-green-50 flex-shrink-0 mt-1">
                            Identity framing
                          </div>
                        </div>
                      </div>
                      
                      {/* 3. TASK */}
                      <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-l-yellow-600 shadow-sm mb-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-grow pr-4">
                            <h4 className="text-lg font-bold text-yellow-800 flex items-center">
                              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 text-yellow-700 mr-3 shadow-sm">3</div>
                              TASK
                            </h4>
                            <p className="text-gray-700 mt-2 pl-11">The specific action or goal the model needs to achieve.</p>
                          </div>
                          <div className="whitespace-nowrap text-yellow-700 text-sm px-3 py-1 rounded-full border border-yellow-200 bg-yellow-50 flex-shrink-0 mt-1">
                            Goal direction
                          </div>
                        </div>
                      </div>
                      
                      {/* 4. CONSTRAINTS */}
                      <div className="bg-red-50 p-5 rounded-lg border-l-4 border-l-red-600 shadow-sm mb-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-grow pr-4">
                            <h4 className="text-lg font-bold text-red-800 flex items-center">
                              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-700 mr-3 shadow-sm">4</div>
                              CONSTRAINTS
                            </h4>
                            <p className="text-gray-700 mt-2 pl-11">Rules, style guidelines, and format requirements.</p>
                          </div>
                          <div className="whitespace-nowrap text-red-700 text-sm px-3 py-1 rounded-full border border-red-200 bg-red-50 flex-shrink-0 mt-1">
                            Boundary setting
                          </div>
                        </div>
                      </div>
                      
                      {/* 5. EXAMPLES */}
                      <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-l-purple-600 shadow-sm mb-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-grow pr-4">
                            <h4 className="text-lg font-bold text-purple-800 flex items-center">
                              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-700 mr-3 shadow-sm">5</div>
                              EXAMPLES
                            </h4>
                            <p className="text-gray-700 mt-2 pl-11">Demonstrations of the desired input-output format or behavior.</p>
                          </div>
                          <div className="whitespace-nowrap text-purple-700 text-sm px-3 py-1 rounded-full border border-purple-200 bg-purple-50 flex-shrink-0 mt-1">
                            Pattern teaching
                          </div>
                        </div>
                      </div>
                      
                      {/* 6. OUTPUT SPEC */}
                      <div className="bg-teal-50 p-5 rounded-lg border-l-4 border-l-teal-600 shadow-sm mb-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-grow pr-4">
                            <h4 className="text-lg font-bold text-teal-800 flex items-center">
                              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 text-teal-700 mr-3 shadow-sm">6</div>
                              OUTPUT SPEC
                            </h4>
                            <p className="text-gray-700 mt-2 pl-11">Explicit instructions on the required output format.</p>
                          </div>
                          <div className="whitespace-nowrap text-teal-700 text-sm px-3 py-1 rounded-full border border-teal-200 bg-teal-50 flex-shrink-0 mt-1">
                            Response shaping
                          </div>
                        </div>
                      </div>
                      
                      {/* 7. FALLBACK/ERROR HANDLING */}
                      <div className="bg-pink-50 p-5 rounded-lg border-l-4 border-l-pink-600 shadow-sm mb-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-grow pr-4">
                            <h4 className="text-lg font-bold text-pink-800 flex items-center">
                              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-100 text-pink-700 mr-3 shadow-sm">7</div>
                              FALLBACK/ERROR HANDLING
                            </h4>
                            <p className="text-gray-700 mt-2 pl-11">Instructions on how to respond if difficulties arise.</p>
                          </div>
                          <div className="whitespace-nowrap text-pink-700 text-sm px-3 py-1 rounded-full border border-pink-200 bg-pink-50 flex-shrink-0 mt-1">
                            Safety net
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Sequential Processing vertical text */}
                    <div className="ml-6">
                      <div className="relative h-full flex items-center justify-center bg-blue-900 text-white rounded-lg shadow-sm" style={{ width: '36px' }}>
                        <div className="transform rotate-90 whitespace-nowrap font-bold uppercase text-sm tracking-wider origin-center">
                          SEQUENTIAL PROCESSING
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Critical Rules for Prompt Block Ordering */}
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm mt-8">
              <h3 className="text-lg font-bold text-blue-900 mb-4 text-center">Critical Rules for Prompt Block Ordering</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-4 border-blue-600 pl-4 py-2 bg-white rounded-r-lg shadow-sm">
                  <h4 className="font-medium text-gray-900">Rule 1: Early tokens steer the search space</h4>
                  <p className="text-gray-700 text-sm">Instructions placed earlier in the prompt have a disproportionately strong influence on the model's initial processing. Critical rules and policies should be front-loaded.</p>
                </div>
                
                <div className="border-l-4 border-blue-600 pl-4 py-2 bg-white rounded-r-lg shadow-sm">
                  <h4 className="font-medium text-gray-900">Rule 2: Recency beats rank when rules collide</h4>
                  <p className="text-gray-700 text-sm">Due to positional encoding decay, later instructions can sometimes override earlier ones. This creates the vulnerability for prompt injection attacks if critical constraints aren't properly segregated.</p>
                </div>
                
                <div className="border-l-4 border-blue-600 pl-4 py-2 bg-white rounded-r-lg shadow-sm">
                  <h4 className="font-medium text-gray-900">Rule 3: Output format doubles as a stop-token</h4>
                  <p className="text-gray-700 text-sm">Placing the required output format at the end of the prompt biases the model to stop generating text once that pattern is emitted, improving correctness and efficiency.</p>
                </div>
                
                <div className="border-l-4 border-blue-600 pl-4 py-2 bg-white rounded-r-lg shadow-sm">
                  <h4 className="font-medium text-gray-900">Optimal Order</h4>
                  <p className="text-gray-700 text-sm">The most effective sequence is: <strong>immovable rules first</strong> (via Context/Policy), <strong>task-specific details next</strong> (Role through Examples), and <strong>output format last</strong> (Output Spec and Fallback).</p>
                </div>
              </div>
              
              <div className="mt-4 text-gray-600 italic text-sm text-center px-4 py-2 bg-white rounded-lg border border-gray-100">
                "Remove a piece and the load shifts unpredictably... place these in a different order and you'll likely get more unpredictable responses."
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Legal Research Template Section */}
      {activeSection === 'template' && (
        <section className="mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Legal Research Prompt Template</h3>
              <button
                onClick={() => copyToClipboard(legalResearchTemplate)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Copy Template
              </button>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">For Senior Researchers at Global Law Firms</h4>
              <p className="text-gray-700">This template follows the 7-part prompt anatomy structure and is specifically designed for legal research and analysis. Simply copy, customize the sections in curly braces, and use with any LLM.</p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
              <pre className="p-4 text-sm text-gray-800 overflow-x-auto whitespace-pre-wrap font-mono">
                {legalResearchTemplate}
              </pre>
            </div>
            
            <div className="mt-8 space-y-4">
              <h4 className="text-lg font-semibold text-gray-800">Customization Notes</h4>
              
              <div className="space-y-2">
                <div className="bg-blue-50 p-3 rounded-md border border-blue-100">
                  <h5 className="font-medium text-blue-800">1. Context Section</h5>
                  <p className="text-blue-700 text-sm">Specify any client-specific confidentiality requirements or departmental policies that should govern the research.</p>
                </div>
                
                <div className="bg-green-50 p-3 rounded-md border border-green-100">
                  <h5 className="font-medium text-green-800">2. Task Section</h5>
                  <p className="text-green-700 text-sm">Clearly define the legal question or fact pattern that requires analysis. Be as specific as possible about the legal issues involved.</p>
                </div>
                
                <div className="bg-yellow-50 p-3 rounded-md border border-yellow-100">
                  <h5 className="font-medium text-yellow-800">3. Constraints Section</h5>
                  <p className="text-yellow-700 text-sm">Specify relevant jurisdictions and any time limitations or resource constraints.</p>
                </div>
                
                <div className="bg-purple-50 p-3 rounded-md border border-purple-100">
                  <h5 className="font-medium text-purple-800">4. Examples Section</h5>
                  <p className="text-purple-700 text-sm">Consider adding examples from your firm's previous research that demonstrate the preferred analytical approach.</p>
                </div>
                
                <div className="bg-teal-50 p-3 rounded-md border border-teal-100">
                  <h5 className="font-medium text-teal-800">5. Output Spec Section</h5>
                  <p className="text-teal-700 text-sm">Adjust the structure to match your department's standard research memo format if needed.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Implementation Guide Section */}
      {activeSection === 'guide' && (
        <section className="mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Implementation Guide</h3>
            
            <div className="mb-6">
              <h4 className="text-lg font-medium text-gray-800 mb-2">Using the Prompt Structure in Practice</h4>
              <p className="text-gray-700 mb-4">
                This guide helps you implement the 7-part prompt structure in your daily legal research workflows. 
                Here are some practical tips for getting the most out of structured prompts:
              </p>
              
              <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                <li>
                  <strong>Start with a template:</strong> Always begin with a complete template like the one provided, then modify it for your specific needs.
                </li>
                <li>
                  <strong>Maintain the order:</strong> Keep the seven components in their recommended sequence - Context, Role, Task, Constraints, Examples, Output Spec, Fallback.
                </li>
                <li>
                  <strong>Be specific with jurisdictions:</strong> Always explicitly state which legal jurisdictions are relevant in both the Context and Constraints sections.
                </li>
                <li>
                  <strong>Include citation requirements:</strong> Specify citation format (Bluebook, ALWD, etc.) in the Context section to ensure consistent formatting.
                </li>
                <li>
                  <strong>Use firm-specific examples:</strong> Replace the generic examples with actual examples from your firm's research to guide the model toward your preferred style.
                </li>
                <li>
                  <strong>Be explicit about non-advice:</strong> Reinforce in multiple sections that the output is for research purposes only and doesn't constitute legal advice.
                </li>
                <li>
                  <strong>Guard against hallucination:</strong> Include specific anti-hallucination instructions in both the Context and Fallback sections.
                </li>
              </ol>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
              <h4 className="text-lg font-medium text-gray-800 mb-3">Workflow Integration</h4>
              <p className="text-gray-700 mb-3">
                Here's how to integrate structured prompts into your research process:
              </p>
              
              <div className="flow-root">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold text-sm">1</div>
                    <p className="ml-3 text-gray-700"><strong>Intake:</strong> Begin with a template prompt specifically chosen for the research task.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold text-sm">2</div>
                    <p className="ml-3 text-gray-700"><strong>Customize:</strong> Adjust the template for the specific legal question, jurisdiction, and desired output format.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold text-sm">3</div>
                    <p className="ml-3 text-gray-700"><strong>Initial Research:</strong> Use the prompt to generate a first draft of research.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold text-sm">4</div>
                    <p className="ml-3 text-gray-700"><strong>Verification:</strong> Fact-check all cases, statutes, and other authorities mentioned.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold text-sm">5</div>
                    <p className="ml-3 text-gray-700"><strong>Refinement:</strong> Create follow-up prompts that build on verified information, maintaining the 7-part structure.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold text-sm">6</div>
                    <p className="ml-3 text-gray-700"><strong>Documentation:</strong> Save effective prompts for similar future research tasks.</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-lg font-medium text-gray-800 mb-3">Additional Resources</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ExternalLink className="h-4 w-4 text-blue-600 mr-2" />
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    ChatGPT at Work - Understanding Prompts
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      )}
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-600">
        <p>Based on "The Universal Anatomy of the Prompt" by Nate B. Jones. Adapted for legal research applications.</p>
      </div>
    </div>
  );
};

export default PromptLibraryTab;