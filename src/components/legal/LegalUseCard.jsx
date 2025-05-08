// src/components/legal/ResearchWorkflowTab.jsx
import React from 'react';
import { 
  Search, 
  BookOpen, 
  Scale, 
  Clipboard, 
  CheckCircle,
  ArrowRight, 
  Download, 
  AlertTriangle
} from 'lucide-react';
import { 
  workflowComparisonData, 
  integrationPoints, 
  integrationTechniques,
  integrationBenefits 
} from '../../data/legalUseCasesData';

const ResearchWorkflowTab = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-blue-900 mb-4">Research Workflow Integration</h2>
      
      {/* Introduction section */}
      <div className="mb-8">
        <p className="text-gray-700 mb-4">
          ChatGPT Enterprise can be seamlessly integrated into your legal research workflow, enhancing efficiency 
          while maintaining the reliability and verification standards required for legal work.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-md">
          <p className="text-blue-700 text-sm font-medium">
            When integrated properly, ChatGPT Enterprise complements traditional legal research methods, potentially saving 
            20-40% of research time while improving consistency across similar tasks, though results may vary depending on 
            complexity and scope.
          </p>
        </div>
      </div>
      
      {/* Parallel workflow comparison */}
      <div className="mb-10">
        <h3 className="text-xl font-medium text-gray-800 mb-4">Parallel Workflow Comparison</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Traditional Research Process */}
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-medium text-gray-800 mb-3">Traditional Research Process</h4>
            <div className="space-y-4">
              {workflowComparisonData.traditional.map((step) => (
                <div key={step.step} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-sm">{step.step}</div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-700">{step.title}</p>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* AI-Assisted Research Process */}
          <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
            <h4 className="text-lg font-medium text-blue-800 mb-3">AI-Assisted Research Process</h4>
            <div className="space-y-4">
              {workflowComparisonData.aiAssisted.map((step) => (
                <div key={step.step} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">{step.step}</div>
                  <div className="ml-3">
                    <p className="font-medium text-blue-700">{step.title}</p>
                    <p className="text-sm text-blue-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Integration Points Throughout Research Process */}
      <div className="mb-10">
        <h3 className="text-xl font-medium text-gray-800 mb-4">Integration Points Throughout Research Process</h3>
        
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-9 top-4 bottom-4 w-0.5 bg-gray-200"></div>
          
          {/* Timeline items */}
          <div className="space-y-8">
            {integrationPoints.map((point, index) => {
              // Dynamically use the right icon component
              let IconComponent;
              switch(point.icon) {
                case 'Search':
                  IconComponent = Search;
                  break;
                case 'BookOpen':
                  IconComponent = BookOpen;
                  break;
                case 'Scale':
                  IconComponent = Scale;
                  break;
                case 'Clipboard':
                  IconComponent = Clipboard;
                  break;
                default:
                  IconComponent = Search;
              }
              
              return (
                <div key={index} className="relative flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 z-10">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div className="ml-6 bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex-grow">
                    <h4 className="font-medium text-gray-800 mb-2">{point.title}</h4>
                    <p className="text-gray-600 mb-3">{point.description}</p>
                    <div className="bg-blue-50 p-3 rounded border border-blue-100 text-sm">
                      <p className="text-blue-700 font-medium">Example Prompt:</p>
                      <p className="text-blue-600 italic">{point.examplePrompt}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Sample Integration Techniques */}
      <div className="mb-10">
        <h3 className="text-xl font-medium text-gray-800 mb-4">Sample Integration Techniques</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {integrationTechniques.map((technique, index) => (
            <div key={index} className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-800 mb-2">{technique.title}</h4>
              <p className="text-gray-600 text-sm">
                {technique.description}
              </p>
              <div className="mt-3 text-sm">
                <a href="#" className="text-blue-600 flex items-center">
                  View Example <ArrowRight className="h-3 w-3 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Potential Benefits */}
      <div className="mb-8">
        <h3 className="text-xl font-medium text-gray-800 mb-4">Potential Benefits of Integration</h3>
        
        <div className="bg-white p-5 rounded-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              {integrationBenefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-start">
                  {benefit.isWarning ? (
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                  ) : (
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  )}
                  <div>
                    <h4 className="font-medium text-gray-800">{benefit.title}</h4>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-3">
              {integrationBenefits.slice(3).map((benefit, index) => (
                <div key={index} className="flex items-start">
                  {benefit.isWarning ? (
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                  ) : (
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  )}
                  <div>
                    <h4 className="font-medium text-gray-800">{benefit.title}</h4>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Download Section */}
      <div className="flex justify-center mt-10">
        <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
          <Download className="h-4 w-4 mr-2" />
          Download Integration Guide
        </button>
      </div>
    </div>
  );
};

export default ResearchWorkflowTab;