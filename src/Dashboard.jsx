import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, Info, ExternalLink, Clock, FileText, Shield, Book, Cpu, Settings, Users } from 'lucide-react';
import ModelsTab from './pages/ModelsTab';
import PromptLibraryTab from './pages/PromptLibraryTab';
import UpdatesTab from './pages/UpdatesTab';
import LegalUseCasesTab from './pages/LegalUseCasesTab';
import ResourcesTab from './pages/ResourcesTab';
import LastUpdatedFooter from './components/LastUpdatedFooter';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const lastUpdated = "May 13, 2025";

  // Featured resources from ResourcesTab.jsx - most relevant for Overview page
  const featuredResources = [
    {
      id: 1,
      title: "ChatGPT Enterprise Documentation",
      description: "Official product documentation for ChatGPT Enterprise features and capabilities.",
      icon: <FileText className="h-4 w-4 mr-2 text-blue-700" />,
      link: "https://help.openai.com/en/collections/5688074-chatgpt-enterprise"
    },
    {
      id: 3,
      title: "OpenAI Trust Portal",
      description: "Security documentation, compliance certifications, and SOC 2 Type 2 report access.",
      icon: <Shield className="h-4 w-4 mr-2 text-blue-700" />,
      link: "https://trust.openai.com/"
    },
    {
      id: 7,
      title: "Advanced Prompt Engineering Documentation",
      description: "Technical instructions for specialized prompt construction in professional contexts.",
      icon: <Book className="h-4 w-4 mr-2 text-blue-700" />,
      link: "https://academy.openai.com/public/content"
    },
    {
      id: 9,
      title: "Custom GPT Technical Documentation",
      description: "Technical specifications for GPT construction, permissions management, and knowledge retrieval.",
      icon: <Cpu className="h-4 w-4 mr-2 text-blue-700" />,
      link: "https://openai.com/chatgpt/enterprise"
    }
  ];

  // Frequently asked questions - synced with the Resources tab content
  const faqs = [
    {
      question: "How do I choose the right model for my research needs?",
      answer: "Each model has different strengths based on the type of legal research...",
      link: "Read More"
    },
    {
      question: "What citation formats are supported?",
      answer: "All models support Bluebook, ALWD, APA, and MLA citation formats...",
      link: "Read More"
    },
    {
      question: "How do I report a citation or legal accuracy issue?",
      answer: "Use the feedback button in the interface to report any issues...",
      link: "Read More"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white p-6 flex justify-between items-center shadow-md">
        <h1 className="text-3xl font-serif font-bold">ChatGPT Enterprise: Top of Mind</h1>
        <span className="text-gray-300 text-sm flex items-center">
          <Clock className="h-4 w-4 mr-2" />
          Last Updated: {lastUpdated}
        </span>
      </header>
      
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <ul className="flex px-6 pt-4 pb-4 space-x-8 max-w-7xl mx-auto">
          <li 
            className={`text-lg ${activeTab === 'overview' ? 'text-blue-900 font-medium relative' : 'text-gray-500'} px-2 cursor-pointer hover:text-blue-800 transition-colors`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
            {activeTab === 'overview' && <div className="absolute bottom-[-16px] left-0 w-full h-1 bg-blue-700 rounded"></div>}
          </li>
          <li 
            className={`text-lg ${activeTab === 'updates' ? 'text-blue-900 font-medium relative' : 'text-gray-500'} px-2 cursor-pointer hover:text-blue-800 transition-colors`}
            onClick={() => setActiveTab('updates')}
          >
            Recent Updates
            {activeTab === 'updates' && <div className="absolute bottom-[-16px] left-0 w-full h-1 bg-blue-700 rounded"></div>}
          </li>
          <li 
            className={`text-lg ${activeTab === 'models' ? 'text-blue-900 font-medium relative' : 'text-gray-500'} px-2 cursor-pointer hover:text-blue-800 transition-colors`}
            onClick={() => setActiveTab('models')}
          >
            Models
            {activeTab === 'models' && <div className="absolute bottom-[-16px] left-0 w-full h-1 bg-blue-700 rounded"></div>}
          </li>
          <li 
            className={`text-lg ${activeTab === 'prompt-library' ? 'text-blue-900 font-medium relative' : 'text-gray-500'} px-2 cursor-pointer hover:text-blue-800 transition-colors`}
            onClick={() => setActiveTab('prompt-library')}
          >
            Prompt Library
            {activeTab === 'prompt-library' && <div className="absolute bottom-[-16px] left-0 w-full h-1 bg-blue-700 rounded"></div>}
          </li>
          <li 
            className={`text-lg ${activeTab === 'use-cases' ? 'text-blue-900 font-medium relative' : 'text-gray-500'} px-2 cursor-pointer hover:text-blue-800 transition-colors`}
            onClick={() => setActiveTab('use-cases')}
          >
            Legal Use Cases
            {activeTab === 'use-cases' && <div className="absolute bottom-[-16px] left-0 w-full h-1 bg-blue-700 rounded"></div>}
          </li>
          <li 
            className={`text-lg ${activeTab === 'resources' ? 'text-blue-900 font-medium relative' : 'text-gray-500'} px-2 cursor-pointer hover:text-blue-800 transition-colors`}
            onClick={() => setActiveTab('resources')}
          >
            Resources
            {activeTab === 'resources' && <div className="absolute bottom-[-16px] left-0 w-full h-1 bg-blue-700 rounded"></div>}
          </li>
        </ul>
      </nav>
      
      {/* Main Content */}
      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        {/* Render content based on active tab */}
        
        {/* If Models tab is selected, use our ModelsTab component */}
        {activeTab === 'models' ? (
          <ModelsTab />
        ) : activeTab === 'prompt-library' ? (
          <PromptLibraryTab />
        ) : activeTab === 'updates' ? (
          <UpdatesTab />
        ) : activeTab === 'use-cases' ? (
          <LegalUseCasesTab />
        ) : activeTab === 'resources' ? (
          <ResourcesTab />
        ) : (
          /* Otherwise, show the original overview content */
          <>
            {/* Critical Update Banner */}
            {activeTab === 'overview' && (
              <section className="mb-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-md">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-red-800">Critical Update: GPT-4 Retiring April 30, 2025</h3>
                      <p className="text-red-700 mt-1">
                        All legal teams must migrate GPT-4 workflows to GPT-4o by April 30th. Update custom GPTs, prompts, and workflows immediately.
                      </p>
                      <a 
                        href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes" 
                        className="text-red-800 underline text-sm font-medium mt-2 inline-block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Migration Guide →
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            )}
            
            {/* Overview Section - Show only if overview tab is active */}
            {activeTab === 'overview' && (
              <section className="mb-8">
                <h2 className="text-2xl font-serif text-blue-900 mb-2">Overview</h2>
                <p className="text-gray-600 mb-4">Current status and key highlights of ChatGPT Enterprise for legal research.</p>
                
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border-l-4 border-blue-700 pl-4">
                      <h3 className="text-lg font-medium text-gray-800">Available Models</h3>
                      <p className="text-gray-600">5 models with full tool access capabilities</p>
                      <div className="mt-2">
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                          o3 & o4-mini GA
                        </span>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-purple-600 pl-4">
                      <h3 className="text-lg font-medium text-gray-800">Updates This Month</h3>
                      <p className="text-gray-600">4 significant platform updates</p>
                      <div className="mt-2">
                        <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                          GPT-4 SUNSET
                        </span>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-teal-600 pl-4">
                      <h3 className="text-lg font-medium text-gray-800">Compliance Tools</h3>
                      <p className="text-gray-600">Enhanced SCIM and API integrations</p>
                      <div className="mt-2">
                        <span className="inline-block bg-teal-100 text-teal-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                          ENHANCED
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
            
            {/* Recent Updates Section - Show only if overview tab is active, with most recent updates first */}
            {activeTab === 'overview' && (
              <section className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-2xl font-serif text-blue-900">Recent Updates</h2>
                  <div className="flex gap-2">
                    <select className="text-sm border border-gray-300 rounded px-2 py-1 bg-white">
                      <option>All Categories</option>
                      <option>Models</option>
                      <option>Features</option>
                      <option>Legal</option>
                    </select>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">Stay informed about the latest changes to ChatGPT Enterprise for legal research.</p>
                
                <div className="space-y-6">
                  {/* GPT-4 Retiring - Most Critical */}
                  <div className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-red-500">
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="flex items-center">
                          <h3 className="text-lg font-medium text-gray-800 mr-2">GPT-4 Retiring: Transition Guide for Enterprise Users</h3>
                          <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">CRITICAL</span>
                          <span className="bg-purple-100 text-purple-800 text-xs font-medium ml-2 px-2.5 py-0.5 rounded">MODELS</span>
                          <span className="ml-auto text-sm text-gray-500">Apr 15, 2025</span>
                        </div>
                        <p className="text-sm font-medium italic text-gray-700 mt-1 mb-2">
                          Key Takeaway: All GPT-4 workflows must be updated to GPT-4o compatibility by April 30th.
                        </p>
                        <p className="text-gray-600">
                          Effective April 30, 2025, GPT-4 will be retired from ChatGPT and fully replaced by GPT-4o. Enterprise users should prepare for this transition by updating workflows and custom GPTs to ensure compatibility with the new model.
                        </p>
                        <div className="mt-2">
                          <a 
                            href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes" 
                            className="text-blue-700 hover:text-blue-800 text-sm font-medium flex items-center"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Migration Guide
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* o3 and o4-mini GA */}
                  <div className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-blue-500">
                    <div className="flex items-start">
                      <Info className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="flex items-center">
                          <h3 className="text-lg font-medium text-gray-800 mr-2">o3 and o4-mini Models Now Generally Available</h3>
                          <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">MODELS</span>
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium ml-2 px-2.5 py-0.5 rounded">NEW</span>
                          <span className="ml-auto text-sm text-gray-500">Apr 16, 2025</span>
                        </div>
                        <p className="text-sm font-medium italic text-gray-700 mt-1 mb-2">
                          Key Takeaway: Most advanced reasoning models with full tool access now available for Enterprise users.
                        </p>
                        <p className="text-gray-600">
                          OpenAI's o3 and o4-mini models are now generally available. These models feature full tool access including web search, Python, image analysis, and files. o3 offers superior reasoning capabilities while o4-mini provides exceptional mathematical performance.
                        </p>
                        <div className="mt-2">
                          <a 
                            href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes" 
                            className="text-blue-700 hover:text-blue-800 text-sm font-medium flex items-center"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Model Documentation
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Compliance Tools */}
                  <div className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-green-500">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="flex items-center">
                          <h3 className="text-lg font-medium text-gray-800 mr-2">New Compliance and Administrative Tools for Enterprise</h3>
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">FEATURES</span>
                          <span className="bg-teal-100 text-teal-800 text-xs font-medium ml-2 px-2.5 py-0.5 rounded">SECURITY</span>
                          <span className="ml-auto text-sm text-gray-500">Mar 12, 2025</span>
                        </div>
                        <p className="text-sm font-medium italic text-gray-700 mt-1 mb-2">
                          Key Takeaway: Enhanced security tools now available for meeting regulatory requirements across workspaces.
                        </p>
                        <p className="text-gray-600">
                          ChatGPT Enterprise now includes enhanced compliance tools, SCIM support for user management, and improved GPT controls. These updates help organizations meet FINRA, HIPAA, and GDPR requirements.
                        </p>
                        <div className="mt-2">
                          <a 
                            href="https://openai.com/index/new-tools-for-chatgpt-enterprise/" 
                            className="text-blue-700 hover:text-blue-800 text-sm font-medium flex items-center"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Read More
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mt-4">
                    <button 
                      className="text-blue-700 hover:text-blue-800 border border-blue-700 rounded-full px-4 py-1 text-sm font-medium"
                      onClick={() => setActiveTab('updates')}
                    >
                      View All Updates
                    </button>
                  </div>
                </div>
              </section>
            )}
            
            {/* Original Models Section - Only show in overview tab since we now have the dedicated ModelsTab for the models tab */}
            {activeTab === 'overview' && (
              <section className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-2xl font-serif text-blue-900">Models</h2>
                  <button 
                    className="text-sm border border-gray-300 rounded px-2 py-1 bg-white hover:bg-gray-50"
                    onClick={() => setActiveTab('models')}
                  >
                    View Comparison
                  </button>
                </div>
                <p className="text-gray-600 mb-4">Select models optimized for legal research with specialized capabilities.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden relative">
                    <div className="h-2 bg-indigo-700 w-full absolute top-0"></div>
                    <div className="p-5 pt-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-serif text-gray-800">o3</h3>
                        <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded">GA</span>
                      </div>
                      <p className="text-gray-600 mt-2 text-sm">
                        Advanced legal reasoning with full tool access and cross-jurisdictional capabilities
                      </p>
                      <div className="mt-4 text-sm">
                        <div className="flex justify-between mb-1">
                          <span>Case Law Research</span>
                          <span className="text-indigo-700 font-medium">Excellent</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
                          <div className="bg-indigo-700 h-1.5 rounded-full" style={{ width: "100%" }}></div>
                        </div>
                        
                        <div className="flex justify-between mb-1">
                          <span>Document Analysis</span>
                          <span className="text-indigo-700 font-medium">Excellent</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
                          <div className="bg-indigo-700 h-1.5 rounded-full" style={{ width: "90%" }}></div>
                        </div>
                        
                        <button className="mt-3 w-full text-center border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition-colors text-gray-700">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden relative">
                    <div className="h-2 bg-green-600 w-full absolute top-0"></div>
                    <div className="p-5 pt-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-serif text-gray-800">o4-mini</h3>
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">GA</span>
                      </div>
                      <p className="text-gray-600 mt-2 text-sm">
                        Cost-efficient reasoning model with exceptional mathematical performance
                      </p>
                      <div className="mt-4 text-sm">
                        <div className="flex justify-between mb-1">
                          <span>Case Law Research</span>
                          <span className="text-green-700 font-medium">Good</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
                          <div className="bg-green-600 h-1.5 rounded-full" style={{ width: "80%" }}></div>
                        </div>
                        
                        <div className="flex justify-between mb-1">
                          <span>Document Analysis</span>
                          <span className="text-green-700 font-medium">Good</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
                          <div className="bg-green-600 h-1.5 rounded-full" style={{ width: "80%" }}></div>
                        </div>
                        
                        <button className="mt-3 w-full text-center border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition-colors text-gray-700">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden relative">
                    <div className="h-2 bg-purple-600 w-full absolute top-0"></div>
                    <div className="p-5 pt-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-serif text-gray-800">GPT-4.5</h3>
                        <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">POWERFUL</span>
                      </div>
                      <p className="text-gray-600 mt-2 text-sm">
                        Superior nuanced understanding with large context window
                      </p>
                      <div className="mt-4 text-sm">
                        <div className="flex justify-between mb-1">
                          <span>Case Law Research</span>
                          <span className="text-purple-700 font-medium">Excellent</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
                          <div className="bg-purple-600 h-1.5 rounded-full" style={{ width: "95%" }}></div>
                        </div>
                        
                        <div className="flex justify-between mb-1">
                          <span>Document Analysis</span>
                          <span className="text-purple-700 font-medium">Excellent</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
                          <div className="bg-purple-600 h-1.5 rounded-full" style={{ width: "96%" }}></div>
                        </div>
                        
                        <button className="mt-3 w-full text-center border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition-colors text-gray-700">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
            
            {/* Compliance Tools Section */}
            {activeTab === 'overview' && (
              <section className="mb-8">
                <h2 className="text-2xl font-serif text-blue-900 mb-2">Enterprise Compliance Features</h2>
                <p className="text-gray-600 mb-4">Enhanced tools for regulatory compliance and data security.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg shadow-sm p-5">
                    <div className="flex items-center mb-3">
                      <Shield className="h-6 w-6 text-blue-700 mr-3" />
                      <h3 className="text-lg font-medium text-gray-800">Compliance API</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      Detailed audit trails for FINRA, HIPAA, and GDPR compliance requirements.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li>• Complete conversation tracking</li>
                      <li>• File upload audit logs</li>
                      <li>• Metadata retention</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm p-5">
                    <div className="flex items-center mb-3">
                      <Users className="h-6 w-6 text-green-700 mr-3" />
                      <h3 className="text-lg font-medium text-gray-800">SCIM Support</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      Automated user provisioning and de-provisioning across your organization.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li>• Okta & Entra ID sync</li>
                      <li>• Automated account management</li>
                      <li>• Group permissions</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm p-5">
                    <div className="flex items-center mb-3">
                      <Settings className="h-6 w-6 text-teal-700 mr-3" />
                      <h3 className="text-lg font-medium text-gray-800">GPT Controls</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      Granular control over custom GPT usage and external connections.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li>• Domain whitelist</li>
                      <li>• Ownership transfer</li>
                      <li>• Third-party approval</li>
                    </ul>
                  </div>
                </div>
              </section>
            )}
            
            {/* Resources Section - Show only if resources tab is active or on overview */}
            {(activeTab === 'overview') && (
              <section className="mb-8">
                <h2 className="text-2xl font-serif text-blue-900 mb-2">Resources</h2>
                <p className="text-gray-600 mb-4">Quick access to documentation and frequently asked questions.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="bg-white rounded-lg shadow-sm p-5">
                    <h3 className="text-lg font-medium text-gray-800 mb-3">Documentation</h3>
                    <ul className="space-y-3 text-sm">
                      {featuredResources.map((resource) => (
                        <li key={resource.id}>
                          <a href={resource.link} className="text-blue-700 hover:underline flex items-center" target="_blank" rel="noopener noreferrer">
                            {resource.icon}
                            {resource.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <button 
                      className="mt-4 text-blue-700 hover:text-blue-800 text-sm font-medium"
                      onClick={() => setActiveTab('resources')}
                    >
                      View All Documentation →
                    </button>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm p-5">
                    <h3 className="text-lg font-medium text-gray-800 mb-3">Frequently Asked Questions</h3>
                    <div className="space-y-3 text-sm">
                      {faqs.map((faq, index) => (
                        <div key={index}>
                          <h4 className="font-medium text-gray-800">{faq.question}</h4>
                          <p className="text-gray-600 mt-1">{faq.answer}</p>
                          <button className="text-blue-700 hover:text-blue-800 text-xs mt-1">{faq.link}</button>
                        </div>
                      ))}
                    </div>
                    <button 
                      className="mt-4 text-blue-700 hover:text-blue-800 text-sm font-medium"
                      onClick={() => setActiveTab('resources')}
                    >
                      View All FAQs →
                    </button>
                  </div>
                </div>
              </section>
            )}
          </>
        )}
      </main>
      
      {/* Persistent Footer with Last Updated */}
      <LastUpdatedFooter lastUpdated={lastUpdated} />
    </div>
  );
};

export default Dashboard;