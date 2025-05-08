// src/data/legalUseCasesData.js

// Categories for filtering
export const legalCategories = [
  { id: 'all', name: 'All Use Cases' },
  { id: 'contracts', name: 'Contracts & Transactions' },
  { id: 'litigation', name: 'Litigation & Disputes' },
  { id: 'compliance', name: 'Compliance & Regulatory' },
  { id: 'research', name: 'Legal Research' }
];

// Sample use cases data
export const legalUseCases = [
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

// Research workflow integration data
export const workflowComparisonData = {
  traditional: [
    { step: 1, title: 'Initial source identification', description: 'Search databases for potentially relevant sources' },
    { step: 2, title: 'Manual review of each source', description: 'Read and analyze each potential source individually' },
    { step: 3, title: 'Citation collection and verification', description: 'Manually record citations and check formats' },
    { step: 4, title: 'Synthesis of information', description: 'Combine findings into a coherent analysis' },
    { step: 5, title: 'Cross-reference and review', description: 'Check for inconsistencies and missing information' }
  ],
  aiAssisted: [
    { step: 1, title: 'Prompt engineering', description: 'Create structured prompts for specific research questions' },
    { step: 2, title: 'Initial AI synthesis', description: 'Generate preliminary analysis and source suggestions' },
    { step: 3, title: 'Verification of AI outputs', description: 'Check cited sources and factual assertions' },
    { step: 4, title: 'Targeted follow-up prompts', description: 'Request specific details or analysis on key points' },
    { step: 5, title: 'Human review and finalization', description: 'Apply legal judgment and finalize the analysis' }
  ]
};

// Integration points throughout research process
export const integrationPoints = [
  {
    icon: 'Search',
    title: 'Initial Research Scope Definition',
    description: 'Use ChatGPT to help define research parameters, identify key legal issues, and suggest relevant sources and search terms.',
    examplePrompt: 'I need to research [legal issue] in [jurisdiction]. Help me identify the key legal questions, relevant statutes, and important cases I should search for.'
  },
  {
    icon: 'BookOpen',
    title: 'Source Analysis & Synthesis',
    description: 'Upload legal sources and have ChatGPT summarize, extract key principles, and identify connections between multiple sources.',
    examplePrompt: 'I\'ve uploaded these three cases dealing with [legal issue]. Please summarize the key holdings, identify areas of agreement and conflict, and extract the principles that apply to my client\'s situation.'
  },
  {
    icon: 'Scale',
    title: 'Multi-Jurisdictional Analysis',
    description: 'Compare legal approaches across different jurisdictions and identify conflicts of law or trends in legal interpretation.',
    examplePrompt: 'Compare how [legal doctrine] is applied in the 2nd, 9th, and Federal Circuits. Identify key differences in interpretation and application.'
  },
  {
    icon: 'Clipboard',
    title: 'Draft Preparation & Citation',
    description: 'Generate properly formatted citations, draft research memos, and create outlines for legal briefs based on verified research.',
    examplePrompt: 'Based on our research, create a detailed outline for a memorandum on [legal issue]. Include properly formatted Bluebook citations for all sources we\'ve verified.'
  }
];

// Sample integration techniques
export const integrationTechniques = [
  {
    title: 'Parallel Research Validation',
    description: 'Conduct traditional legal research while simultaneously using ChatGPT to analyze the same question. Compare findings to identify overlooked sources or alternative interpretations.'
  },
  {
    title: 'Document Upload Workflow',
    description: 'Build a systematic workflow for uploading primary sources to ChatGPT, extracting key information, and generating summary documents that preserve source attribution.'
  },
  {
    title: 'Multi-Jurisdictional Research',
    description: 'Create comparative analyses of legal doctrines across jurisdictions, identifying conflicts of law and trends in legal interpretation that may affect multi-state matters.'
  }
];

// Potential benefits of integration
export const integrationBenefits = [
  {
    title: 'Time Efficiency',
    description: 'Potentially 20-40% reduction in research time for standard legal questions, though results may vary depending on complexity and scope.'
  },
  {
    title: 'Improved Consistency',
    description: 'Standardized approach to similar legal questions across different researchers and practice groups within the firm.'
  },
  {
    title: 'Enhanced Scope',
    description: 'Ability to quickly check across multiple jurisdictions and identify relevant authorities that might be missed in traditional research.'
  },
  {
    title: 'Junior Attorney Development',
    description: 'Accelerated learning for newer attorneys through exposure to structured analytical approaches and immediate feedback.'
  },
  {
    title: 'Client Cost Management',
    description: 'Reduced research hours while maintaining or improving research quality and thoroughness.'
  },
  {
    title: 'Required Verification',
    description: 'All AI-generated research requires human verification of sources and conclusions before client use.',
    isWarning: true
  }
];