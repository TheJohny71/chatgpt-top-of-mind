import React, { useState } from 'react';
import { AlertTriangle, Info, CheckCircle, ExternalLink, Clock } from 'lucide-react';

const UpdatesTab = () => {
  // State for category filter
  const [categoryFilter, setCategoryFilter] = useState('All Categories');
  
  // Updates data based on provided links, excluding API updates
  // Now sorted with most recent updates first (by date)
  // Removed isNew flag which controlled the blue dots
  const updates = [
    {
      id: 4,
      title: "ChatGPT Shopping Search Features Now Available",
      keyTakeaway: "Enterprise users can now access personalized shopping results with no ads or commissions.",
      date: "Apr 28, 2025", // Most recent
      category: "FEATURES",
      tags: ["NEW"],
      content: "ChatGPT's web search capabilities now include personalized product recommendations with images, reviews, and direct purchase links. Available to all ChatGPT users, including Enterprise, with no advertisements or commissions.",
      icon: "new",
      color: "green",
      links: [
        { text: "Feature Details", url: "https://www.reuters.com/business/media-telecom/openai-rolls-out-new-shopping-features-with-chatgpt-search-update-2025-04-28/" }
      ]
    },
    {
      id: 5,
      title: "GPT-4 Retiring: Transition Guide for Enterprise Users",
      keyTakeaway: "All GPT-4 workflows must be updated to GPT-4o compatibility by April 30th.",
      date: "Apr 15, 2025",
      category: "CRITICAL",
      tags: ["MODELS"],
      content: "Effective April 30, 2025, GPT-4 will be retired from ChatGPT and fully replaced by GPT-4o. Enterprise users should prepare for this transition by updating workflows and custom GPTs to ensure compatibility with the new model.",
      icon: "critical",
      color: "red",
      links: [
        { text: "Migration Guide", url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" }
      ]
    },
    {
      id: 1,
      title: "GPT-4o Upgraded with Enhanced Image Generation",
      keyTakeaway: "Advanced image creation and editing now available, rolling out soon to Enterprise users.",
      date: "Mar 25, 2025",
      category: "MODELS",
      tags: ["NEW"],
      content: "OpenAI has upgraded ChatGPT's image generation capabilities with GPT-4o. The new functionality allows for more accurate and detailed image creation and editing. Pro subscribers have immediate access, with Plus and Enterprise users gaining access soon.",
      icon: "updated",
      color: "blue",
      links: [
        { text: "Read Announcement", url: "https://techcrunch.com/2025/03/25/chatgpts-image-generation-feature-gets-an-upgrade/" }
      ]
    },
    {
      id: 2,
      title: "New Compliance and Administrative Tools for Enterprise",
      keyTakeaway: "Enhanced security tools now available for meeting regulatory requirements across workspaces.",
      date: "Mar 12, 2025",
      category: "FEATURES",
      tags: ["SECURITY"],
      content: "ChatGPT Enterprise now includes enhanced compliance tools, SCIM support for user management, and improved GPT controls. These updates help organizations meet regulatory requirements while maintaining data security across workspaces.",
      icon: "new",
      color: "green",
      links: [
        { text: "Read More", url: "https://openai.com/index/new-tools-for-chatgpt-enterprise/" }
      ]
    },
    {
      id: 3,
      title: "GPT-4o Improvements: Enhanced Instruction Following",
      keyTakeaway: "More accurate instruction following and smoother code handling in latest GPT-4o update.",
      date: "Feb 27, 2025", // Oldest
      category: "MODELS",
      tags: ["UPDATE"],
      content: "OpenAI has made significant improvements to GPT-4o, making it more intuitive, creative, and collaborative. The model now follows instructions more accurately, handles coding tasks more smoothly, and communicates in a clearer, more natural way.",
      icon: "updated",
      color: "blue",
      links: [
        { text: "Release Notes", url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" }
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
      case 'critical':
        return <AlertTriangle />;
      case 'updated':
        return <Info />;
      case 'new':
        return <CheckCircle />;
      default:
        return <Info />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 dashboard-content">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 mobile-text-xl">Recent Updates</h2>
        <p className="text-gray-600 mb-4 leading-6">
          Stay informed about the latest changes to ChatGPT Enterprise for legal research.
        </p>
      </div>

      {/* Filter Controls */}
      <div className="flex justify-between items-center mb-6 mobile-flex-col mobile-items-start">
        <div className="flex gap-2 mb-4 md:mb-0">
          <select 
            className="text-sm border border-gray-300 rounded px-3 py-2 bg-white min-h-[44px]"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option>All Categories</option>
            <option>MODELS</option>
            <option>FEATURES</option>
            <option>CRITICAL</option>
          </select>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="h-4 w-4 mr-2" />
          Last Updated: May 06, 2025
        </div>
      </div>

      {/* Updates List with increased spacing */}
      <div className="space-y-6 mb-8">
        {filteredUpdates.map(update => (
          <div 
            key={update.id} 
            className={`bg-white rounded-lg shadow-sm p-5 border-l-4 ${
              update.color === 'blue' ? 'border-blue-500' :
              update.color === 'green' ? 'border-green-500' :
              update.color === 'red' ? 'border-red-500' :
              update.color === 'purple' ? 'border-purple-500' :
              'border-gray-500'
            }`}
          >
            <div className="flex items-start">
              <div className={`h-5 w-5 mr-4 mt-1 flex-shrink-0 ${
                update.color === 'blue' ? 'text-blue-500' :
                update.color === 'green' ? 'text-green-500' :
                update.color === 'red' ? 'text-red-500' :
                update.color === 'purple' ? 'text-purple-500' :
                'text-gray-500'
              }`}>
                {getIcon(update.icon)}
              </div>
              <div className="w-full">
                <div className="flex items-center flex-wrap mb-1">
                  <h3 className="text-lg font-medium text-gray-800 mr-2 mobile-text-base">{update.title}</h3>
                  
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
                  
                  {/* Removed the blue dot indicator */}
                </div>
                
                {/* Added Key Takeaway */}
                <p className="text-sm font-medium italic text-gray-700 mt-1 mb-3 border-l-2 border-gray-300 pl-3">
                  {update.keyTakeaway}
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-3">
                  {update.content}
                </p>
                
                <div className="mt-3 flex flex-wrap">
                  {/* Only showing primary link for each update */}
                  {update.links.length > 0 && (
                    <a 
                      href={update.links[0].url} 
                      className="text-blue-700 hover:text-blue-800 text-sm font-medium mr-4 flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {update.links[0].text}
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  )}
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
        <button className="text-blue-700 hover:text-blue-800 border border-blue-700 rounded-full px-5 py-2 text-sm font-medium min-h-[44px]">
          View All Updates
        </button>
      </div>
      
      {/* Mobile-friendly footer with last updated info */}
      <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500 md:hidden">
        <div className="flex items-center justify-center">
          <Clock className="h-4 w-4 mr-2" />
          <span>Dashboard Last Updated: May 06, 2025</span>
        </div>
      </div>
    </div>
  );
};

export default UpdatesTab;