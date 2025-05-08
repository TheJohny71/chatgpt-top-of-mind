import React, { useState } from 'react';
import { FileText, Download, Book, CheckCircle, ArrowRight } from 'lucide-react';

const LegalUseCasesTab = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Use Cases' },
    { id: 'contracts', name: 'Contracts & Transactions' },
    { id: 'litigation', name: 'Litigation & Disputes' },
    { id: 'compliance', name: 'Compliance & Regulatory' },
    { id: 'research', name: 'Legal Research' }
  ];

  // Sample use cases data
  const useCases = [
    {
      id: 1,
      title: 'Contract Analysis and Risk Assessment',
      description: 'Identify key provisions, obligations, and potential risks in contracts.',
      category: 'contracts',
      benefits: [
        'Reduce contract review time by up to 70%',
        'Standardize risk identification across reviewers',
        'Identify inconsistencies across related agreements'
      ],
      promptTemplate: 'You are an expert contract analyst assisting a legal team with contract review. Analyze the following contract for key provisions, obligations, and potential risks. Structure your analysis with sections for: 1) Parties and basic terms, 2) Key obligations, 3) Risk analysis, 4) Unusual or concerning provisions, 5) Recommended follow-up questions.\n\n[Paste contract text here]',
      modelRecommendation: 'o3, GPT-4.5',
      isNew: true
    },
    {
      id: 2,
      title: 'Case Brief Generation',
      description: 'Generate structured case briefs from court opinions with proper citations.',
      category: 'litigation',
      benefits: [
        'Create consistent, well-structured case briefs',
        'Extract key legal principles and holdings',
        'Standardize citation formats across all briefs'
      ],
      promptTemplate: 'You are a legal researcher assisting with case briefing. Please create a comprehensive case brief using proper Bluebook citation format from the following court opinion. Structure your brief with these sections: 1) Case name and citation, 2) Facts, 3) Procedural history, 4) Issue(s), 5) Holding, 6) Reasoning, 7) Key quotations with page numbers, 8) Concurring/dissenting opinions.\n\n[Paste court opinion here]',
      modelRecommendation: 'GPT-4.5',
      isNew: false
    },
    {
      id: 3,
      title: 'Multi-Jurisdictional Regulatory Analysis',
      description: 'Compare regulatory requirements across multiple jurisdictions.',
      category: 'compliance',
      benefits: [
        'Quickly identify jurisdiction-specific requirements',
        'Create compliance checklists for multiple regions',
        'Highlight key differences in regulatory approaches'
      ],
      promptTemplate: 'You are a regulatory compliance expert with expertise in multiple jurisdictions. Please analyze the regulatory requirements for [specific area, e.g., data privacy] across the following jurisdictions: [list jurisdictions]. For each jurisdiction, provide: 1) Key regulatory frameworks, 2) Primary regulatory authorities, 3) Core compliance requirements, 4) Notification/registration requirements, 5) Penalties for non-compliance, 6) Recent or upcoming regulatory changes. Conclude with a comparison highlighting the major differences and similarities.',
      modelRecommendation: 'o3, o4-mini-high',
      isNew: true
    },
    {
      id: 4,
      title: 'Legal Research Memorandum',
      description: 'Generate research memos with proper citations and jurisdictional awareness.',
      category: 'research',
      benefits: [
        'Structure research according to firm standards',
        'Ensure comprehensive source citation',
        'Focus research on relevant jurisdictions'
      ],
      promptTemplate: 'You are a legal researcher at a law firm preparing a research memorandum. The legal question is: [state legal question]. Jurisdiction: [specify jurisdiction]. Prepare a research memorandum addressing this question with the following sections: 1) Question Presented, 2) Brief Answer, 3) Statement of Facts, 4) Discussion (including relevant statutes, regulations, and case law with proper Bluebook citations), 5) Conclusion. Ensure all legal authorities are accurately cited and focus only on the specified jurisdiction unless comparative analysis is explicitly requested.',
      modelRecommendation: 'GPT-4.5, o3',
      isNew: false
    },
    {
      id: 5,
      title: 'Due Diligence Document Classification',
      description: 'Categorize and summarize large volumes of due diligence documents.',
      category: 'contracts',
      benefits: [
        'Rapidly organize document collections by type',
        'Identify missing critical documents',
        'Extract and standardize key terms across documents'
      ],
      promptTemplate: 'You are assisting with legal due diligence for a [transaction type]. Review the following document and provide: 1) Document type/category, 2) Parties involved, 3) Effective date and term, 4) Key obligations or rights, 5) Assignment/change of control provisions, 6) Termination rights, 7) Unusual or noteworthy provisions. Format your response as a structured summary that could be incorporated into a due diligence report.\n\n[Paste document text here]',
      modelRecommendation: 'o4-mini',
      isNew: false
    },
    {
      id: 6,
      title: 'Litigation Document Review Assistant',
      description: 'Identify relevant documents, potential privilege issues, and key evidence.',
      category: 'litigation',
      benefits: [
        'Accelerate early case assessment',
        'Flag potentially privileged communications',
        'Identify documents relevant to specific legal issues'
      ],
      promptTemplate: 'You are assisting with a document review for litigation related to [brief case description]. The key issues in this case include: [list key legal issues]. Review the following document and provide: 1) Document type, 2) Author and recipients, 3) Date, 4) Key content summary, 5) Relevance to specific legal issues, 6) Potential privilege concerns, 7) Recommended importance rating (High/Medium/Low). Flag any potentially harmful admissions or particularly helpful evidence.\n\n[Paste document text here]',
      modelRecommendation: 'o3, o4-mini-high',
      isNew: true
    }
  ];

  // Filter use cases based on active category
  const filteredUseCases = activeCategory === 'all' 
    ? useCases 
    : useCases.filter(useCase => useCase.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Legal Use Cases</h2>
        <p className="text-gray-600">
          Explore optimized workflows and templates for common legal tasks using ChatGPT Enterprise.
        </p>
      </div>

      {/* Category Filters */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Introduction Card */}
      {activeCategory === 'all' && (
        <div className="bg-gradient-to-r from-blue-900 to-indigo-800 rounded-xl shadow-lg mb-8 text-white p-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/4 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-xl font-semibold mb-3">Optimizing ChatGPT for Legal Tasks</h3>
              <p className="mb-3">
                These use cases provide optimized prompt templates and model recommendations for common legal workflows. 
                Each template follows best practices for legal prompting, including proper context setting, task specification, 
                and output formatting.
              </p>
              <div className="flex space-x-4 mt-4">
                <button className="flex items-center bg-white text-blue-900 px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-100">
                  <Download className="h-4 w-4 mr-2" />
                  Download All Templates
                </button>
                <button className="flex items-center border border-white text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-800">
                  <Book className="h-4 w-4 mr-2" />
                  Prompting Guide
                </button>
              </div>
            </div>
            <div className="md:w-1/4 flex justify-center">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-300" />
                    <span>Optimized for legal use</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-300" />
                    <span>Proper citation formatting</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-300" />
                    <span>Jurisdictional awareness</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-300" />
                    <span>Regulatory compliance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Use Cases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUseCases.map(useCase => (
          <div key={useCase.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col">
            {/* Card Header */}
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{useCase.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{useCase.description}</p>
                </div>
                <div className="flex-shrink-0">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </div>
            
            {/* Card Body */}
            <div className="px-6 py-4 flex-grow">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Key Benefits:</h4>
              <ul className="space-y-1 mb-4">
                {useCase.benefits.map((benefit, index) => (
                  <li key={index} className="text-sm text-gray-700 flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    {benefit}
                  </li>
                ))}
              </ul>
              
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-900 mb-1">Recommended Models:</h4>
                <div className="flex items-center">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">{useCase.modelRecommendation}</span>
                  {useCase.isNew && (
                    <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded">NEW</span>
                  )}
                </div>
              </div>
            </div>
            
            {/* Card Footer */}
            <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
              <button className="w-full flex justify-center items-center text-blue-700 hover:text-blue-800 text-sm font-medium py-1">
                View Prompt Template
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom Section */}
      <div className="mt-12 bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Need a Custom Legal Use Case?</h3>
        <p className="text-gray-700 mb-4">
          Our team can help develop custom prompt templates and workflows tailored to your specific legal practice areas. 
          Contact your account representative to schedule a consultation.
        </p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          Request Custom Template
        </button>
      </div>
    </div>
  );
};

export default LegalUseCasesTab;