// src/components/WakeWordLibrary.jsx
import React, { useState } from 'react';
import { Copy, Check, ArrowRight, Code, Book, Scale, FileText, Clipboard, AlertTriangle } from 'lucide-react';

const WakeWordLibrary = () => {
  const [activeTabs, setActiveTabs] = useState('library');
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [customWakeWord, setCustomWakeWord] = useState({
    name: '',
    instruction: ''
  });
  
  // Wake word data - from the examples in the provided content
  const wakeWords = [
    {
      id: 'cross-jur',
      name: 'CROSS-JUR',
      icon: <Scale className="h-5 w-5 text-blue-700" />,
      description: 'Format a cross-jurisdictional analysis comparing legal approaches between different jurisdictions',
      usage: 'CROSS-JUR → [paste jurisdictions and question]',
      instruction: 'Format a cross-jurisdictional analysis comparing the legal approaches between the jurisdictions mentioned. Structure with clear jurisdiction headings, key principles, notable divergences, and practical implications. Cite relevant cases in Bluebook format.'
    },
    {
      id: 'verify',
      name: 'VERIFY',
      icon: <AlertTriangle className="h-5 w-5 text-purple-700" />,
      description: 'Analyze citations or legal references for validity and accuracy',
      usage: 'VERIFY → [paste citation or legal reference]',
      instruction: 'Analyze the following citation or legal reference. Identify: 1) Whether it exists, 2) Current status (good law, overruled, etc.), 3) Accuracy of quotation or characterization, 4) Bluebook formatting errors. Flag any concerns with specific correction recommendations.'
    },
    {
      id: 'legal-7',
      name: 'LEGAL-7',
      icon: <Layers className="h-5 w-5 text-indigo-700" />,
      description: 'Apply the 7-part prompt structure for structured legal research',
      usage: 'LEGAL-7 → [paste legal research question]',
      instruction: 'Apply the 7-part prompt structure for legal research: 1) Context/Policy, 2) Role, 3) Task, 4) Constraints, 5) Examples, 6) Output Spec, 7) Fallback. Keep my input as the core research question but expand it using this framework.'
    },
    {
      id: 'contract',
      name: 'CONTRACT',
      icon: <FileText className="h-5 w-5 text-green-700" />,
      description: 'Analyze contracts for key provisions, risks, and obligations',
      usage: 'CONTRACT → [paste contract text]',
      instruction: 'Analyze the following contract text for: 1) Key obligations, 2) Risk provisions, 3) Termination rights, 4) Unusual or concerning provisions, 5) Recommended follow-up questions. Structure as bullet points with section references.'
    },
    {
      id: 'brief',
      name: 'BRIEF',
      icon: <Book className="h-5 w-5 text-amber-700" />,
      description: 'Generate comprehensive case briefs with proper citations',
      usage: 'BRIEF → [paste court opinion]',
      instruction: 'Create a comprehensive case brief using proper Bluebook citation format from the following court opinion. Structure with: 1) Case name and citation, 2) Facts, 3) Procedural history, 4) Issue(s), 5) Holding, 6) Reasoning, 7) Key quotations with page numbers, 8) Concurring/dissenting opinions.'
    },
    {
      id: 'build-prompt',
      name: 'BUILD-PROMPT',
      icon: <Clipboard className="h-5 w-5 text-teal-700" />,
      description: 'Interactive guide through the 7-part legal prompt structure',
      usage: 'BUILD-PROMPT → [follow guided questions]',
      instruction: `When I say "BUILD-PROMPT", help me create a detailed legal research prompt by guiding me through each part of the 7-part framework. For each part:
1. Explain the purpose of that section (Context, Role, Task, etc.)
2. Show a legal research example for that section
3. Ask me what I want for that section
4. Wait for my input before proceeding to the next section
5. If I type "default", use your example instead
6. After collecting all 7 parts, compile them into a complete, well-formatted prompt for me to use

Start by explaining you'll guide me through creating a prompt, then begin with the first part (Context/Policy).`
    }
  ];
  
  // Steps for creating custom wake words
  const steps = [
    {
      title: "Name Your Wake Word",
      description: "Choose a simple, memorable name that's easy to type and relates to the task.",
      tips: ["Use ALL CAPS for visibility", "Keep it under 10 characters", "Make it distinctive and memorable", "Avoid spaces (use hyphens if needed)"]
    },
    {
      title: "Write Clear Instructions",
      description: "Detail exactly what ChatGPT should do when it sees this wake word.",
      tips: ["Be specific about output format", "Include step-by-step guidance", "Specify any constraints", "Consider adding examples"]
    },
    {
      title: "Test Your Wake Word",
      description: "Try your wake word in ChatGPT to ensure it works as expected.",
      tips: ["Test with different inputs", "Refine based on results", "Check for consistent formatting", "Verify all instructions are followed"]
    }
  ];

  // Handle copying wake word instructions
  const handleCopy = (text, index) => {
    const fullInstruction = `Please remember:\nWake-word ${text}`;
    navigator.clipboard.writeText(fullInstruction);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };
  
  // Handle copying the BUILD-PROMPT wake word
  const handleCopyBuildPrompt = () => {
    const instruction = wakeWords.find(word => word.id === 'build-prompt').instruction;
    const fullInstruction = `Please remember:\n${instruction}`;
    navigator.clipboard.writeText(fullInstruction);
    setCopiedIndex('build-prompt');
    setTimeout(() => setCopiedIndex(null), 2000);
  };
  
  // Handle copying custom wake word
  const handleCopyCustom = () => {
    if (!customWakeWord.name || !customWakeWord.instruction) return;
    
    const fullInstruction = `Please remember:\nWake-word ${customWakeWord.name} → ${customWakeWord.instruction}`;
    navigator.clipboard.writeText(fullInstruction);
    setCopiedIndex('custom');
    setTimeout(() => setCopiedIndex(null), 2000);
  };
  
  // Navigate steps for custom wake word creation
  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-blue-900 mb-3">Wake Word Prompting for Legal Research</h3>
        <p className="text-gray-600">
          Save specific instructions in ChatGPT's memory with designated "wake words" that can be invoked in any conversation.
          These pre-defined prompting patterns ensure consistent, high-quality outputs for your legal research workflows.
        </p>
      </div>
      
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTabs('library')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTabs === 'library'
                ? 'border-blue-700 text-blue-700'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Wake Word Library
          </button>
          <button
            onClick={() => setActiveTabs('builder')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTabs === 'builder'
                ? 'border-blue-700 text-blue-700'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Create Custom Wake Words
          </button>
          <button
            onClick={() => setActiveTabs('interactive')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTabs === 'interactive'
                ? 'border-blue-700 text-blue-700'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Interactive Prompt Builder
          </button>
        </nav>
      </div>
      
      {/* Wake Word Library Tab */}
      {activeTabs === 'library' && (
        <div>
          <div className="mb-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-md">
              <h4 className="text-lg font-medium text-blue-800 mb-2">How to Use Wake Words</h4>
              <ol className="list-decimal list-inside text-blue-700 space-y-2">
                <li>Copy a wake word instruction using the button</li>
                <li>Paste it into ChatGPT and send the message</li>
                <li>ChatGPT will confirm it has remembered the instruction</li>
                <li>Now simply type the wake word in any conversation to trigger the instruction</li>
              </ol>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {wakeWords.slice(0, 5).map((wakeWord, index) => (
              <div key={wakeWord.id} className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <div className="flex items-center p-4 border-b border-gray-100">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    {wakeWord.icon}
                  </div>
                  <h4 className="text-lg font-medium text-gray-900">{wakeWord.name}</h4>
                  <button 
                    onClick={() => handleCopy(wakeWord.name + ' → ' + wakeWord.instruction, index)} 
                    className="ml-auto text-blue-600 hover:text-blue-800 flex items-center text-sm"
                  >
                    {copiedIndex === index ? (
                      <><Check className="h-4 w-4 mr-1" /> Copied</>
                    ) : (
                      <><Copy className="h-4 w-4 mr-1" /> Copy instruction</>
                    )}
                  </button>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 mb-3">{wakeWord.description}</p>
                  <div className="bg-gray-50 p-3 rounded-lg text-sm">
                    <p className="font-mono text-gray-700">{wakeWord.usage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-4">Need a custom wake word for your specific legal workflow?</p>
            <button 
              onClick={() => setActiveTabs('builder')} 
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Create Custom Wake Word <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      )}
      
      {/* Create Custom Wake Words Tab */}
      {activeTabs === 'builder' && (
        <div>
          <div className="mb-8">
            <h4 className="text-lg font-medium text-gray-800 mb-3">Create Your Own Wake Word</h4>
            <p className="text-gray-600 mb-4">
              Follow these steps to create a custom wake word for your specific legal research needs.
            </p>
            
            {/* Step Indicator */}
            <div className="relative mb-8">
              <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-200"></div>
              <div className="flex justify-between relative">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => setCurrentStep(index + 1)}
                  >
                    <div 
                      className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium mb-1 relative z-10
                        ${currentStep === index + 1 
                          ? 'bg-blue-600 text-white' 
                          : currentStep > index + 1 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-gray-200 text-gray-600'
                        }`}
                    >
                      {currentStep > index + 1 ? <Check className="h-4 w-4" /> : index + 1}
                    </div>
                    <div className={`text-xs ${currentStep === index + 1 ? 'text-blue-800 font-medium' : 'text-gray-500'}`}>
                      {step.title.split(' ')[0]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Current Step Content */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-medium text-gray-800 mb-2">{steps[currentStep - 1].title}</h4>
              <p className="text-gray-600 mb-4">{steps[currentStep - 1].description}</p>
              
              {/* Step 1: Name */}
              {currentStep === 1 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Wake Word Name</label>
                  <input 
                    type="text" 
                    value={customWakeWord.name}
                    onChange={(e) => setCustomWakeWord({...customWakeWord, name: e.target.value.toUpperCase()})}
                    placeholder="e.g., CONTRACT-REVIEW"
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                  <div className="mt-4 bg-blue-50 p-3 rounded-md">
                    <h5 className="text-sm font-semibold text-blue-800 mb-2">Best Practices:</h5>
                    <ul className="space-y-1">
                      {steps[0].tips.map((tip, i) => (
                        <li key={i} className="text-sm text-blue-700 flex items-start">
                          <Check className="h-4 w-4 text-blue-500 mr-1 mt-0.5 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              
              {/* Step 2: Instruction */}
              {currentStep === 2 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Wake Word Instruction</label>
                  <textarea 
                    value={customWakeWord.instruction}
                    onChange={(e) => setCustomWakeWord({...customWakeWord, instruction: e.target.value})}
                    placeholder="e.g., Analyze the following contract for key provisions, obligations, and risks..."
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 h-32"
                  />
                  <div className="mt-4 bg-blue-50 p-3 rounded-md">
                    <h5 className="text-sm font-semibold text-blue-800 mb-2">Instruction Tips:</h5>
                    <ul className="space-y-1">
                      {steps[1].tips.map((tip, i) => (
                        <li key={i} className="text-sm text-blue-700 flex items-start">
                          <Check className="h-4 w-4 text-blue-500 mr-1 mt-0.5 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              
              {/* Step 3: Review and Test */}
              {currentStep === 3 && (
                <div>
                  <div className="border border-gray-200 rounded-lg p-4 mb-4">
                    <h5 className="text-sm font-medium text-gray-700 mb-2">Your Custom Wake Word:</h5>
                    <div className="bg-gray-50 p-3 rounded-md mb-3">
                      <p className="font-mono text-sm">Wake-word {customWakeWord.name} → {customWakeWord.instruction}</p>
                    </div>
                    <button 
                      onClick={handleCopyCustom}
                      className="inline-flex items-center px-3 py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-50"
                    >
                      {copiedIndex === 'custom' ? (
                        <><Check className="h-4 w-4 mr-1" /> Copied</>
                      ) : (
                        <><Copy className="h-4 w-4 mr-1" /> Copy to Clipboard</>
                      )}
                    </button>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded-md">
                    <h5 className="text-sm font-semibold text-blue-800 mb-2">Testing Tips:</h5>
                    <ul className="space-y-1">
                      {steps[2].tips.map((tip, i) => (
                        <li key={i} className="text-sm text-blue-700 flex items-start">
                          <Check className="h-4 w-4 text-blue-500 mr-1 mt-0.5 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <button 
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-4 py-2 rounded ${
                  currentStep === 1 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Previous
              </button>
              
              {currentStep < steps.length ? (
                <button 
                  onClick={nextStep}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Next
                </button>
              ) : (
                <button 
                  onClick={() => {
                    // Reset form and go back to library
                    setCustomWakeWord({ name: '', instruction: '' });
                    setCurrentStep(1);
                    setActiveTabs('library');
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Finish
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Interactive Prompt Builder Tab */}
      {activeTabs === 'interactive' && (
        <div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-md mb-6">
            <h4 className="text-lg font-medium text-blue-800 mb-3">Interactive Prompt Builder</h4>
            <p className="text-blue-700 mb-3">
              The BUILD-PROMPT wake word creates an interactive experience that guides you through creating a complete legal research prompt using the 7-part framework.
            </p>
            
            <h5 className="font-medium text-blue-800 mb-2">How It Works:</h5>
            <ol className="list-decimal list-inside text-blue-700 space-y-2 mb-4">
              <li>Install the BUILD-PROMPT wake word by copying and pasting it into ChatGPT</li>
              <li>Type "BUILD-PROMPT" in any conversation</li>
              <li>ChatGPT will guide you through each part of the 7-part framework</li>
              <li>Answer each question or type "default" to use the provided example</li>
              <li>After all parts are complete, ChatGPT will compile the finished prompt</li>
            </ol>
            
            <div className="flex justify-center">
              <button 
                onClick={handleCopyBuildPrompt}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                {copiedIndex === 'build-prompt' ? (
                  <><Check className="h-4 w-4 mr-2" /> Copied to Clipboard</>
                ) : (
                  <><Copy className="h-4 w-4 mr-2" /> Copy BUILD-PROMPT Wake Word</>
                )}
              </button>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
            <div className="bg-gray-50 p-4 border-b border-gray-200">
              <h4 className="font-medium text-gray-800">Example Conversation</h4>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div className="flex">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-blue-700 font-medium">You</span>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 max-w-lg">
                    <p className="text-blue-800">BUILD-PROMPT</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-purple-700 font-medium">AI</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 max-w-lg">
                    <p className="text-gray-800">I'll help you create a detailed legal research prompt using our 7-part framework. I'll guide you through each section one by one.</p>
                    <p className="text-gray-800 mt-2">Let's start with <strong>Part 1: Context/Policy</strong></p>
                    <p className="text-gray-800 mt-2">This section establishes background information and sets expectations. For example:</p>
                    <p className="text-gray-600 italic mt-1">Example: "You are an expert legal researcher with specialty in employment law. Maintain attorney-client privilege standards and cite according to Bluebook format."</p>
                    <p className="text-gray-800 mt-2">What context would you like to provide? (Type "default" to use the example)</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-blue-700 font-medium">You</span>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 max-w-lg">
                    <p className="text-blue-800">You are an expert legal researcher with specialty in contract law for technology companies. Maintain attorney-client privilege and ensure all citations follow Bluebook format.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-purple-700 font-medium">AI</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 max-w-lg">
                    <p className="text-gray-800">Great! Now let's move to <strong>Part 2: Role</strong>...</p>
                    <p className="text-gray-600 text-sm">[Continues with all 7 parts of the framework]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="font-medium text-gray-800 mb-3">Benefits of Interactive Prompt Building</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded-lg border border-gray-100">
                <h5 className="font-medium text-gray-800 mb-2">Educational</h5>
                <p className="text-sm text-gray-600">Learn the 7-part framework while creating your prompt</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-100">
                <h5 className="font-medium text-gray-800 mb-2">Guided Process</h5>
                <p className="text-sm text-gray-600">Never forget important prompt elements</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-100">
                <h5 className="font-medium text-gray-800 mb-2">Time-saving</h5>
                <p className="text-sm text-gray-600">Create complex prompts without memorizing structure</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WakeWordLibrary;