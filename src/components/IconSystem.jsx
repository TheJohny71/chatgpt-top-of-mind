import React from 'react';
import { 
  AlertTriangle, 
  Info, 
  CheckCircle, 
  FileText, 
  Cpu, 
  Shield, 
  Star, 
  BarChart,
  CodeSquare,
  Clock,
  HelpCircle,
  Notebook,
  BookOpen,
  Scale,
  Server
} from 'lucide-react';

// Centralized icon system for consistent icon usage throughout the application
const IconSystem = {
  // Category icons
  categories: {
    models: <Cpu className="h-5 w-5" />,
    features: <Star className="h-5 w-5" />,
    updates: <Clock className="h-5 w-5" />,
    security: <Shield className="h-5 w-5" />,
    legal: <Scale className="h-5 w-5" />,
    api: <Server className="h-5 w-5" />,
    documentation: <FileText className="h-5 w-5" />
  },
  
  // Status icons
  status: {
    new: <CheckCircle className="h-5 w-5" />,
    updated: <Info className="h-5 w-5" />,
    warning: <AlertTriangle className="h-5 w-5" />,
    critical: <AlertTriangle className="h-5 w-5" />,
    deprecated: <Clock className="h-5 w-5" />
  },
  
  // Resource icons
  resources: {
    document: <FileText className="h-5 w-5" />,
    code: <CodeSquare className="h-5 w-5" />,
    chart: <BarChart className="h-5 w-5" />,
    faq: <HelpCircle className="h-5 w-5" />,
    guide: <Notebook className="h-5 w-5" />,
    reference: <BookOpen className="h-5 w-5" />
  },
  
  // Get icon by type and name
  getIcon: (type, name, customSize = null) => {
    const iconMap = IconSystem[type];
    if (!iconMap || !iconMap[name.toLowerCase()]) {
      // Return a default icon if the requested one isn't found
      return <Info className={customSize ? `h-${customSize} w-${customSize}` : "h-5 w-5"} />;
    }
    
    // If a custom size is specified, clone the icon with new dimensions
    if (customSize) {
      return React.cloneElement(iconMap[name.toLowerCase()], {
        className: `h-${customSize} w-${customSize}`
      });
    }
    
    return iconMap[name.toLowerCase()];
  },
  
  // Helper function to get status color based on status
  getStatusColor: (status) => {
    switch (status.toLowerCase()) {
      case 'new':
        return 'green';
      case 'updated':
        return 'blue';
      case 'warning':
        return 'amber';
      case 'critical':
        return 'red';
      case 'deprecated':
        return 'gray';
      default:
        return 'blue';
    }
  }
};

export default IconSystem;