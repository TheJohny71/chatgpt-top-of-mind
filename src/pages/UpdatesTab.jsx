import React, { useState } from 'react';
import { AlertTriangle, Info, CheckCircle, ExternalLink } from 'lucide-react';

const UpdatesTab = () => {
  // State for category filter
  const [categoryFilter, setCategoryFilter] = useState('All Categories');
  
  // Updates data based on provided links, excluding API updates
  const updates = [
    {
      id: 1,
      title: "GPT-4o Upgraded with Enhanced Image Generation",
      date: "Mar 25, 2025",
      category: "MODELS",
      tags: ["NEW"],
      content: "OpenAI has upgraded ChatGPT's image generation capabilities with GPT-4o. The new functionality allows for more accurate and detailed image creation and editing. Pro subscribers have immediate access, with Plus and Enterprise users gaining access soon.",
      isNew: true,
      icon: "Info",
      color: "blue",
      links: [
        { text: "Read Announcement", url: "https://techcrunch.com/2025/03/25/chatgpts-image-generation-feature-gets-an-upgrade/" },
        { text: "View Capabilities Guide", url: "#" }
      ]
    },
    {
      id: 2,
      title: "New Compliance and Administrative Tools for Enterprise",
      date: "Mar 12, 2025",
      category: "FEATURES",
      tags: ["SECURITY"],
      content: "ChatGPT Enterprise now includes enhanced compliance tools, SCIM support for user management, and improved GPT controls. These updates help organizations meet regulatory requirements while maintaining data security across workspaces.",
      isNew: true,
      icon: "CheckCircle",
      color: "green",
      links: [
        { text: "Read More", url: "https://openai.com/index/new-tools-for-chatgpt-enterprise/" },
        { text: "Implementation Guide", url: "#" }
      ]
    },
    {
      id: 3,
      title: "GPT-4o Improvements: Enhanced Instruction Following",
      date: "Feb 27, 2025",
      category: "MODELS",
      tags: ["UPDATE"],
      content: "OpenAI has made significant improvements to GPT-4o, making it more intuitive, creative, and collaborative. The model now follows instructions more accurately, handles coding tasks more smoothly, and communicates in a clearer, more natural way.",
      isNew: false,
      icon: "Info",
      color: "blue",
      links: [
        { text: "Release Notes", url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" },
        { text: "Model Comparison", url: "#" }
      ]
    },
    {
      id: 4,
      title: "ChatGPT Shopping Search Features Now Available",
      date: "Apr 28, 2025",
      category: "FEATURES",
      tags: ["NEW"],
      content: "ChatGPT's web search capabilities now include personalized product recommendations with images, reviews, and direct purchase links. Available to all ChatGPT users, including Enterprise, with no advertisements or commissions.",
      isNew: true,
      icon: "CheckCircle",
      color: "purple",
      links: [
        { text: "Feature Details", url: "https://www.reuters.com/business/media-telecom/openai-rolls-out-new-shopping-features-with-chatgpt-search-update-2025-04-28/" },
        { text: "User Guide", url: "#" }
      ]
    },
    {
      id: 5,
      title: "GPT-4 Retiring: Transition Guide for Enterprise Users",
      date: "Apr 15, 2025",
      category: "CRITICAL",
      tags: ["MODELS"],
      content: "Effective April 30, 2025, GPT-4 will be retired from ChatGPT and fully replaced by GPT-4o. Enterprise users should prepare for this transition by updating workflows and custom GPTs to ensure compatibility with the new model.",
      isNew: false,
      icon: "AlertTriangle",
      color: "amber",
      links: [
        { text: "Migration Guide", url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" },
        { text: "Impact Assessment", url: "#" }
      ]
    }
  ];

  // Filter updates based on category
  const filteredUpdates = categoryFilter === 'All Categories' 
    ? updates 
    : updates.filter(update => update.category === categoryFilter);

  // Get icon component based on name
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'AlertTriangle':
        return <AlertTriangle />;
      case 'Info':
        return <Info />;
      case 'CheckCircle':
        return <CheckCircle />;
      default:
        return <Info />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Recent Updates</h2>
        <p className="text-gray-600">
          Stay informed about the latest changes to ChatGPT Enterprise for legal research.
        </p>
      </div>

      {/* Filter and Controls */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-2">
          <select 
            className="text-sm border border-gray-300 rounded px-2 py-1 bg-white"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option>All Categories</option>
            <option>MODELS</option>
            <option>FEATURES</option>
            <option>CRITICAL</option>
          </select>
        </div>
        <button className="text-sm border border-gray-300 rounded px-2 py-1 bg-white hover:bg-gray-50">
          Mark All as Read
        </button>
      </div>

      {/* Updates List */}
      <div className="space-y-4 mb-8">
        {filteredUpdates.map(update => (
          <div 
            key={update.id} 
            className={`bg-white rounded-lg shadow-sm p-4 border-l-4 ${
              update.color === 'blue' ? 'border-blue-500' :
              update.color === 'green' ? 'border-green-500' :
              update.color === 'amber' ? 'border-amber-500' :
              update.color === 'purple' ? 'border-purple-500' :
              'border-gray-500'
            }`}
          >
            <div className="flex items-start">
              <div className={`h-5 w-5 mr-3 mt-0.5 flex-shrink-0 ${
                update.color === 'blue' ? 'text-blue-500' :
                update.color === 'green' ? 'text-green-500' :
                update.color === 'amber' ? 'text-amber-500' :
                update.color === 'purple' ? 'text-purple-500' :
                'text-gray-500'
              }`}>
                {getIcon(update.icon)}
              </div>
              <div>
                <div className="flex items-center flex-wrap">
                  <h3 className="text-lg font-medium text-gray-800 mr-2">{update.title}</h3>
                  
                  {update.category && (
                    <span className={`
                      text-xs font-medium px-2.5 py-0.5 rounded mx-1
                      ${update.category === 'CRITICAL' ? 'bg-red-100 text-red-800' :
                        update.category === 'MODELS' ? 'bg-purple-100 text-purple-800' :
                        'bg-green-100 text-green-800'}
                    `}>
                      {update.category}
                    </span>
                  )}
                  
                  {update.tags && update.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className={`
                        text-xs font-medium px-2.5 py-0.5 rounded mx-1
                        ${tag === 'NEW' ? 'bg-blue-100 text-blue-800' :
                          tag === 'SECURITY' ? 'bg-teal-100 text-teal-800' :
                          'bg-gray-100 text-gray-800'}
                      `}
                    >
                      {tag}
                    </span>
                  ))}
                  
                  <span className="ml-auto text-sm text-gray-500">{update.date}</span>
                  
                  {update.isNew && (
                    <span className="ml-2 inline-flex h-2 w-2 bg-blue-500 rounded-full"></span>
                  )}
                </div>
                <p className="text-gray-600 mt-1">
                  {update.content}
                </p>
                <div className="mt-2 flex flex-wrap">
                  {update.links.map((link, i) => (
                    <a 
                      key={i} 
                      href={link.url} 
                      className="text-blue-700 hover:text-blue-800 text-sm font-medium mr-4 flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.text}
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Source Attribution */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm text-gray-500">
        <p>Updates sourced from official OpenAI documentation, including <a href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes" className="text-blue-600 hover:underline">ChatGPT Release Notes</a>, <a href="https://help.openai.com/en/articles/10128477-chatgpt-enterprise-edu-release-notes" className="text-blue-600 hover:underline">Enterprise Release Notes</a>, and <a href="https://openai.com/index/new-tools-for-chatgpt-enterprise/" className="text-blue-600 hover:underline">OpenAI Announcements</a>.</p>
      </div>
      
      {/* View All Button */}
      <div className="flex justify-center mt-8">
        <button className="text-blue-700 hover:text-blue-800 border border-blue-700 rounded-full px-4 py-1 text-sm font-medium">
          View All Updates
        </button>
      </div>
    </div>
  );
};

export default UpdatesTab;