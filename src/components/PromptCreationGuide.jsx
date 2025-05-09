// src/components/PromptCreationGuide.jsx
import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Check, Clipboard, AlertCircle, BookOpen, Lightbulb, Layers, Play, Pause, RotateCcw } from 'lucide-react';

const PromptCreationGuide = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const [promptBlocks, setPromptBlocks] = useState({
    context: "You are an expert legal researcher and attorney with specialty in contract law.",
    role: "Act as a contract law specialist reviewing a software licensing agreement.",
    task: "Identify potential issues in the following software licensing agreement, focusing on liability limitations, intellectual property rights, and termination clauses.",
    constraints: "Limit your analysis to 500 words. Focus only on US law. Do not provide definitive legal advice.",
    examples: "A thorough analysis would include key concerns like: \"Section 8.2 contains overly broad liability limitations that may not be enforceable under California law.\"",
    outputSpec: "Structure your response as follows: 1) Summary of key issues, 2) Analysis by clause type, 3) Suggested modifications.",
    fallback: "If you're uncertain about specific state laws, note this and provide general US contract law principles."
  });
  
  const totalSteps = 7;
  
  // For auto-advance when playing
  useEffect(() => {
    let timer;
    if (isPlaying && currentStep < totalSteps) {
      timer = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 5000); // Advance every 5 seconds
    } else if (isPlaying && currentStep === totalSteps) {
      setIsPlaying(false);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [currentStep, isPlaying, totalSteps]);
  
  // Steps information
  const stepInfo = [
    {
      number: 1,
      title: "Context/Policy",
      description: "Set the background and purpose for the model",
      instruction: "Start by establishing who the AI should be and what expertise it should have.",
      tips: [
        "Be specific about expertise areas",
        "Include relevant professional standards",
        "Set confidentiality expectations upfront",
        "Mention ethical or legal frameworks"
      ],
      placeholder: "You are a [expertise] with knowledge of [specific areas]."
    },
    {
      number: 2,
      title: "Role",
      description: "Define the persona or identity for the model",
      instruction: "Describe the specific professional role the AI should adopt.",
      tips: [
        "Specify a clear professional identity",
        "Include level of expertise/experience",
        "Define relationship to the task",
        "Match the role to your desired outcome"
      ],
      placeholder: "Act as a [specific role] who is [doing specific activity]."
    },
    {
      number: 3,
      title: "Task",
      description: "Specify the exact action or goal to achieve",
      instruction: "Clearly state what you want the model to accomplish.",
      tips: [
        "Use precise action verbs",
        "Break complex tasks into smaller parts",
        "Include specific areas of focus",
        "Clarify if analysis, synthesis, or creation"
      ],
      placeholder: "[Action verb] the following [content type], focusing on [specific elements]."
    },
    {
      number: 4,
      title: "Constraints",
      description: "Define rules, limits, and requirements",
      instruction: "Set boundaries for the response including length, scope, and other limitations.",
      tips: [
        "Set word or character limits",
        "Specify jurisdictional boundaries",
        "Include ethical or professional limits",
        "Define what to exclude"
      ],
      placeholder: "Limit your [output type] to [length]. Focus only on [specific scope]. Do not [prohibited actions]."
    },
    {
      number: 5,
      title: "Examples",
      description: "Provide sample inputs and outputs",
      instruction: "Show examples of the kind of analysis or responses you're looking for.",
      tips: [
        "Include specific formats you prefer",
        "Demonstrate depth of analysis expected",
        "Show preferred citation styles",
        "Include both style and substance examples"
      ],
      placeholder: "A thorough [output type] would include elements like: \"[example of expected content]\""
    },
    {
      number: 6,
      title: "Output Spec",
      description: "Define the format and structure of the response",
      instruction: "Specify exactly how you want the response organized.",
      tips: [
        "Use numbered lists for clear structure",
        "Specify sections and subsections",
        "Define citation format if needed",
        "Indicate if you want pros/cons or other formats"
      ],
      placeholder: "Structure your response as follows: 1) [first section], 2) [second section], 3) [third section]."
    },
    {
      number: 7,
      title: "Fallback",
      description: "Provide instructions for handling uncertainties",
      instruction: "Tell the model what to do if it's unsure or lacks information.",
      tips: [
        "Specify how to handle knowledge gaps",
        "Guide how to approach uncertain areas",
        "Include whether to disclose limitations",
        "Provide alternative approaches"
      ],
      placeholder: "If you're uncertain about [specific area], [provide instructions on what to do instead]."
    }
  ];
  
  // Get current step info
  const currentStepInfo = stepInfo[currentStep - 1];
  
  // Handle step navigation
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  // Handle text block updates
  const updatePromptBlock = (blockKey, newValue) => {
    setPromptBlocks({
      ...promptBlocks,
      [blockKey]: newValue
    });
  };
  
  // Compile the complete prompt
  const getCompletePrompt = () => {
    const blockKeys = ['context', 'role', 'task', 'constraints', 'examples', 'outputSpec', 'fallback'];
    const blockTitles = ['CONTEXT/POLICY', 'ROLE', 'TASK', 'CONSTRAINTS', 'EXAMPLES', 'OUTPUT SPEC', 'FALLBACK'];
    
    return blockKeys.map((key, index) => {
      return `[${blockTitles[index]}]\n${promptBlocks[key]}\n`;
    }).join('\n');
  };
  
  // Copy the complete prompt to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(getCompletePrompt())
      .then(() => {
        // Show success message
        alert('Prompt copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
        alert('Failed to copy. Please try selecting and copying manually.');
      });
  };
  
  // Download the complete prompt as a text file
  const downloadPrompt = () => {
    const element = document.createElement('a');
    const file = new Blob([getCompletePrompt()], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = 'prompt-template.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  
  // Reset demo
  const resetDemo = () => {
    setCurrentStep(1);
    setIsPlaying(false);
  };
  
  // Toggle play state for auto-advancing
  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };
  
  // Toggle section expansion
  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  // Calculate token usage estimate
  const calculateTokens = () => {
    // Rough estimate: 1 token ≈ 4 characters
    const completePrompt = getCompletePrompt();
    return Math.ceil(completePrompt.length / 4);
  };
  
  // Get the key for the current block
  const getCurrentBlockKey = () => {
    const keys = ['context', 'role', 'task', 'constraints', 'examples', 'outputSpec', 'fallback'];
    return keys[currentStep - 1];
  };
  
  // Estimate token usage percentage (assuming 8,000 token limit for context)
  const tokenPercentage = Math.min((calculateTokens() / 8000) * 100, 100);
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      {/* Header Section */}
      <div className="bg-blue-900 text-white px-6 py-4">
        <h2 className="text-xl font-bold">Prompt Creation Guide</h2>
        <p className="text-blue-100 text-sm">Build effective prompts for legal research with this 7-part framework</p>
      </div>
      
      {/* Step Indicator Bar */}
      <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
        <div className="relative flex items-center justify-between w-full">
          {/* Step indicators */}
          {stepInfo.map((step, index) => (
            <div 
              key={index}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setCurrentStep(index + 1)}
            >
              <div 
                className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium mb-1
                  ${currentStep === index + 1 
                    ? 'bg-blue-600 text-white' 
                    : currentStep > index + 1 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-gray-200 text-gray-600'
                  }`}
              >
                {currentStep > index + 1 ? <Check className="h-4 w-4" /> : index + 1}
              </div>
              <div className={`text-xs ${currentStep === index + 1 ? 'text-blue-800 font-medium' : 'text-gray-500'} hidden sm:block`}>
                {step.title.split('/')[0]}
              </div>
            </div>
          ))}
          
          {/* Connector lines */}
          <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-200 -z-10"></div>
          <div 
            className="absolute top-4 left-0 h-0.5 bg-blue-600 transition-all -z-10" 
            style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
          ></div>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column - Step Instructions */}
          <div className="md:w-1/2">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{currentStepInfo.title}</h3>
              <p className="text-gray-600">{currentStepInfo.description}</p>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-md mb-6">
              <p className="text-blue-800">{currentStepInfo.instruction}</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
              <h4 className="flex items-center text-gray-700 font-medium mb-3">
                <Lightbulb className="h-4 w-4 text-amber-500 mr-2" />
                Best Practices
              </h4>
              <ul className="space-y-2">
                {currentStepInfo.tips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs mr-2 flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-sm text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="flex items-center text-gray-700 font-medium mb-3">
                <AlertCircle className="h-4 w-4 text-red-500 mr-2" />
                Common Mistakes
              </h4>
              
              {currentStep === 1 && (
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Being too vague about expertise level</li>
                  <li>Setting unrealistic expectations for knowledge</li>
                  <li>Forgetting to establish confidentiality needs</li>
                </ul>
              )}
              
              {currentStep === 2 && (
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Confusing role with the task itself</li>
                  <li>Creating a role beyond realistic expertise</li>
                  <li>Using roles that conflict with task needs</li>
                </ul>
              )}
              
              {currentStep === 3 && (
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Being vague about what you want done</li>
                  <li>Requesting too many tasks at once</li>
                  <li>Not specifying priority of analysis areas</li>
                </ul>
              )}
              
              {currentStep === 4 && (
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Setting contradictory constraints</li>
                  <li>Being unrealistic about output length</li>
                  <li>Forgetting to specify jurisdictional limits</li>
                </ul>
              )}
              
              {currentStep === 5 && (
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Providing examples that contradict instructions</li>
                  <li>Using examples too different from desired output</li>
                  <li>Not demonstrating proper depth of analysis</li>
                </ul>
              )}
              
              {currentStep === 6 && (
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Creating overly complex structures</li>
                  <li>Not specifying required elements</li>
                  <li>Forgetting to include citation format</li>
                </ul>
              )}
              
              {currentStep === 7 && (
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Not providing clear guidance for uncertainties</li>
                  <li>Contradicting earlier instructions</li>
                  <li>Failing to address how to handle limitations</li>
                </ul>
              )}
            </div>
          </div>
          
          {/* Right Column - Prompt Builder */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {currentStepInfo.title}
              </label>
              <textarea 
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 h-32"
                placeholder={currentStepInfo.placeholder}
                value={promptBlocks[getCurrentBlockKey()]}
                onChange={(e) => updatePromptBlock(getCurrentBlockKey(), e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-1">
                Approx. {Math.ceil(promptBlocks[getCurrentBlockKey()].length / 4)} tokens
              </p>
            </div>
            
            {/* Complete Prompt Preview */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium text-gray-800 flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Complete Prompt Preview
                </h4>
                <div className="flex space-x-2">
                  <button 
                    className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                    onClick={copyToClipboard}
                  >
                    <Clipboard className="h-4 w-4 mr-1" />
                    Copy
                  </button>
                  <button 
                    className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                    onClick={downloadPrompt}
                  >
                    <ChevronRight className="h-4 w-4 mr-1 transform rotate-90" />
                    Download
                  </button>
                </div>
              </div>
              
              <div className="bg-white border border-gray-300 rounded p-3 h-64 overflow-y-auto">
                <pre className="text-xs text-gray-800 font-mono whitespace-pre-wrap">{getCompletePrompt()}</pre>
              </div>
              
              <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                <span>Approx. {calculateTokens()} tokens used</span>
                <span className="flex items-center">
                  <Layers className="h-3 w-3 mr-1" />
                  Token usage: 
                  <div className="w-24 h-2 bg-gray-200 rounded-full ml-2 overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        tokenPercentage < 50 ? 'bg-green-500' : 
                        tokenPercentage < 75 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${tokenPercentage}%` }}
                    ></div>
                  </div>
                </span>
              </div>
            </div>
            
            {/* Legal-Specific Tips */}
            <div 
              className="bg-indigo-50 border border-indigo-200 rounded-lg overflow-hidden mb-4 cursor-pointer"
              onClick={() => toggleSection('legalTips')}
            >
              <div className="p-4 flex justify-between items-center">
                <h4 className="font-medium text-indigo-900">Legal Research Tips</h4>
                <ChevronRight className={`h-5 w-5 text-indigo-700 transition-transform ${expandedSection === 'legalTips' ? 'transform rotate-90' : ''}`} />
              </div>
              
              {expandedSection === 'legalTips' && (
                <div className="px-4 pb-4">
                  <ul className="space-y-2 text-sm text-indigo-800">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-indigo-200 text-indigo-800 flex items-center justify-center text-xs mr-2 flex-shrink-0">✓</div>
                      <span>Always specify relevant jurisdictions in CONTEXT and CONSTRAINTS sections</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-indigo-200 text-indigo-800 flex items-center justify-center text-xs mr-2 flex-shrink-0">✓</div>
                      <span>Include citation format requirements (e.g., Bluebook, ALWD)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-indigo-200 text-indigo-800 flex items-center justify-center text-xs mr-2 flex-shrink-0">✓</div>
                      <span>For case analysis, specify treatment of dictum vs. holding</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-indigo-200 text-indigo-800 flex items-center justify-center text-xs mr-2 flex-shrink-0">✓</div>
                      <span>Request distinction between binding and persuasive authority</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-indigo-200 text-indigo-800 flex items-center justify-center text-xs mr-2 flex-shrink-0">✓</div>
                      <span>Include anti-hallucination instructions in FALLBACK section</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            
            {/* Context Window Awareness */}
            <div 
              className="bg-blue-50 border border-blue-200 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => toggleSection('contextWindow')}
            >
              <div className="p-4 flex justify-between items-center">
                <h4 className="font-medium text-blue-900">Context Window Considerations</h4>
                <ChevronRight className={`h-5 w-5 text-blue-700 transition-transform ${expandedSection === 'contextWindow' ? 'transform rotate-90' : ''}`} />
              </div>
              
              {expandedSection === 'contextWindow' && (
                <div className="px-4 pb-4">
                  <p className="text-sm text-blue-800 mb-3">
                    Remember that each part of your prompt consumes tokens from the available context window. For complex legal tasks:
                  </p>
                  
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-blue-200 text-blue-800 flex items-center justify-center text-xs mr-2 flex-shrink-0">1</div>
                      <span>Balance comprehensive instructions with leaving room for responses</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-blue-200 text-blue-800 flex items-center justify-center text-xs mr-2 flex-shrink-0">2</div>
                      <span>For complex documents, consider breaking analysis into multiple segments</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-blue-200 text-blue-800 flex items-center justify-center text-xs mr-2 flex-shrink-0">3</div>
                      <span>Use GPT-4o or models with larger context windows for lengthy legal documents</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-blue-200 text-blue-800 flex items-center justify-center text-xs mr-2 flex-shrink-0">4</div>
                      <span>Current prompt uses ~{calculateTokens()} tokens of your available context window</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Footer */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
        <div className="flex space-x-2">
          <button 
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`px-4 py-2 rounded border ${
              currentStep === 1 
                ? 'border-gray-200 text-gray-400 cursor-not-allowed' 
                : 'border-blue-600 text-blue-600 hover:bg-blue-50'
            }`}
          >
            <ChevronLeft className="h-5 w-5 inline mr-1" />
            Previous
          </button>
          
          <button 
            onClick={togglePlayback}
            className="p-2 rounded border border-blue-600 text-blue-600 hover:bg-blue-50"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </button>
          
          <button 
            onClick={resetDemo}
            className="p-2 rounded border border-blue-600 text-blue-600 hover:bg-blue-50"
            aria-label="Reset"
          >
            <RotateCcw className="h-5 w-5" />
          </button>
        </div>
        
        <div>
          <span className="mr-4 text-sm text-gray-600">Step {currentStep} of {totalSteps}</span>
          
          {currentStep < totalSteps ? (
            <button 
              onClick={nextStep}
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Next
              <ChevronRight className="h-5 w-5 inline ml-1" />
            </button>
          ) : (
            <div className="flex space-x-2">
              <button 
                onClick={copyToClipboard}
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 flex items-center"
              >
                Copy Prompt
                <Clipboard className="h-5 w-5 ml-1" />
              </button>
              <button 
                onClick={downloadPrompt}
                className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 flex items-center"
              >
                Download
                <ChevronRight className="h-5 w-5 ml-1 transform rotate-90" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PromptCreationGuide;