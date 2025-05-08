// src/pages/ResourcesTab.jsx
import React, { useState } from 'react';
import { 
  FileText, 
  ExternalLink, 
  Shield, 
  Book, 
  Archive, 
  Users, 
  Settings,
  Cpu,
  Search
} from 'lucide-react';

const ResourcesTab = () => {
  // State for category filter and sort option
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  
  // Resource categories - aligned with research needs
  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'documentation', name: 'Documentation' },
    { id: 'security', name: 'Security & Compliance' },
    { id: 'guides', name: 'Implementation Guides' },
    { id: 'training', name: 'Training Materials' }
  ];
  
  // Official OpenAI resources - focused on factual, professional content
  const resources = [
    {
      id: 1,
      title: "ChatGPT Enterprise Documentation",
      description: "Official product documentation for ChatGPT Enterprise features and capabilities.",
      icon: <FileText />,
      categories: ['documentation'],
      link: "https://help.openai.com/en/collections/5688074-chatgpt-enterprise",
      date: "April 15, 2025"
    },
    {
      id: 2,
      title: "Enterprise Privacy Statement",
      description: "Technical documentation on data security and privacy measures for Enterprise deployments.",
      icon: <Shield />,
      categories: ['documentation', 'security'],
      link: "https://openai.com/enterprise-privacy",
      date: "April 30, 2025"
    },
    {
      id: 3,
      title: "OpenAI Trust Portal",
      description: "Security documentation, compliance certifications, and SOC 2 Type 2 report access.",
      icon: <Shield />,
      categories: ['security', 'documentation'],
      link: "https://trust.openai.com/",
      date: "May 06, 2025"
    },
    {
      id: 4,
      title: "Enterprise Feature Documentation",
      description: "Technical specifications for GPT-4 access, context windows, and data analysis capabilities.",
      icon: <Settings />,
      categories: ['documentation'],
      link: "https://help.openai.com/en/articles/8265053-what-is-chatgpt-enterprise",
      date: "March 28, 2025"
    },
    {
      id: 5,
      title: "Enterprise Release Notes",
      description: "Chronological documentation of platform updates and feature additions.",
      icon: <FileText />,
      categories: ['documentation'],
      link: "https://help.openai.com/en/articles/10128477-chatgpt-enterprise-edu-release-notes",
      date: "May 05, 2025"
    },
    {
      id: 6,
      title: "ChatGPT for Professional Workflows",
      description: "Video tutorials and reference materials for enterprise implementation scenarios.",
      icon: <Book />,
      categories: ['training'],
      link: "https://academy.openai.com/public/collections/chatgpt-at-work-2025-02-14",
      date: "February 14, 2025"
    },
    {
      id: 7,
      title: "Advanced Prompt Engineering Documentation",
      description: "Technical instructions for specialized prompt construction in professional contexts.",
      icon: <Book />,
      categories: ['training', 'documentation'],
      link: "https://academy.openai.com/public/content",
      date: "March 10, 2025"
    },
    {
      id: 8,
      title: "Enterprise Administration Guide",
      description: "Technical documentation for system administrators on workspace configuration and security settings.",
      icon: <Users />,
      categories: ['guides', 'documentation'],
      link: "https://help.openai.com/en/collections/5688074-chatgpt-enterprise",
      date: "April 25, 2025"
    },
    {
      id: 9,
      title: "Custom GPT Technical Documentation",
      description: "Technical specifications for GPT construction, permissions management, and knowledge retrieval.",
      icon: <Cpu />,
      categories: ['documentation', 'guides'],
      link: "https://openai.com/chatgpt/enterprise",
      date: "April 12, 2025"
    },
    {
      id: 10,
      title: "Enterprise Compliance Tools Documentation",
      description: "Technical documentation for SCIM, SSO, and administrative controls implementation.",
      icon: <Shield />,
      categories: ['security', 'documentation', 'guides'],
      link: "https://openai.com/index/new-tools-for-chatgpt-enterprise/",
      date: "May 02, 2025"
    }
  ];
  
  // Sort resources based on selected sort option
  const sortResources = (resources) => {
    switch(sortBy) {
      case 'newest':
        return [...resources].sort((a, b) => new Date(b.date) - new Date(a.date));
      case 'oldest':
        return [...resources].sort((a, b) => new Date(a.date) - new Date(b.date));
      case 'title':
        return [...resources].sort((a, b) => a.title.localeCompare(b.title));
      default:
        return resources;
    }
  };
  
  // Filter resources based on selected category
  const filterAndSortResources = () => {
    const filtered = activeCategory === 'all' 
      ? resources 
      : resources.filter(resource => resource.categories.includes(activeCategory));
    return sortResources(filtered);
  };
  
  // Core Enterprise capabilities - factual presentation
  const enterpriseCapabilities = [
    {
      title: "Security",
      details: "SOC 2 Type 2 compliant, data encryption (AES-256, TLS 1.2+)",
      icon: <Shield className="h-5 w-5 text-blue-700" />
    },
    {
      title: "Data Privacy",
      details: "No training on business data, full data ownership",
      icon: <Archive className="h-5 w-5 text-blue-700" />
    },
    {
      title: "Administration",
      details: "Domain verification, SSO, usage analytics",
      icon: <Users className="h-5 w-5 text-blue-700" />
    },
    {
      title: "Technical Specifications",
      details: "32k context windows, GPT-4 access, advanced data analysis",
      icon: <Cpu className="h-5 w-5 text-blue-700" />
    }
  ];

  return (
    <div>
      <section className="mb-8">
        <h2 className="text-2xl font-serif text-blue-900 mb-2">Resources</h2>
        <p className="text-gray-600">
          Official documentation and reference materials for ChatGPT Enterprise.
        </p>
      </section>
      
      {/* Key capabilities - information-focused presentation */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Enterprise Platform Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {enterpriseCapabilities.map((capability, index) => (
              <div key={index} className="flex items-start">
                <div className="h-10 w-10 flex-shrink-0 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  {capability.icon}
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">{capability.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{capability.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Filter and Sort Controls - functional, professional interface */}
      <section className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeCategory === category.id
                    ? 'bg-blue-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-2">Sort by:</span>
            <select 
              className="text-sm border border-gray-300 rounded px-2 py-1 bg-white"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="title">Title (A-Z)</option>
            </select>
          </div>
        </div>
      </section>
      
      {/* Resources List - consistent with dashboard styling */}
      <section className="mb-8">
        <div className="space-y-4">
          {filterAndSortResources().map(resource => (
            <div 
              key={resource.id} 
              className="bg-white rounded-lg shadow-sm p-5 border border-gray-200"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  {React.cloneElement(resource.icon, { className: "h-5 w-5 text-blue-700" })}
                </div>
                <div className="flex-grow">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{resource.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                      <div className="flex items-center mt-2">
                        <span className="text-xs text-gray-500">Updated: {resource.date}</span>
                        <div className="ml-4 flex flex-wrap gap-2">
                          {resource.categories.map(cat => (
                            <span 
                              key={cat} 
                              className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded"
                            >
                              {categories.find(c => c.id === cat)?.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <a 
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex-shrink-0 ml-4 text-blue-700 hover:text-blue-800 flex items-center"
                    >
                      <span className="text-sm font-medium hidden md:inline mr-1">View</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Search Suggestion - integrated help feature */}
      <section>
        <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
          <div className="flex items-center">
            <div className="mr-4">
              <Search className="h-6 w-6 text-gray-400" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Need specific information?</h4>
              <p className="text-sm text-gray-600 mt-1">
                For additional technical documentation, visit the <a href="https://help.openai.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">OpenAI Help Center</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesTab;