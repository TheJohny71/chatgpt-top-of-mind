export const updates = [
    {
      id: 1,
      title: "API Security Update Required",
      date: "Apr 28, 2025",
      category: "CRITICAL",
      tags: ["LEGAL"],
      content: "All Enterprise customers must update their API authentication methods by May 15 to comply with new regulatory requirements. Authentication requests using legacy tokens will be rejected after this date.",
      isNew: true,
      icon: "AlertTriangle",
      color: "red",
      links: [
        { text: "Read More", url: "#" },
        { text: "View Implementation Guide", url: "#" }
      ]
    },
    {
      id: 2,
      title: "New Models Released: o3 and o4-mini",
      date: "Apr 16, 2025",
      category: "NEW",
      tags: ["MODELS"],
      content: "Two new models optimized for legal research are now available. The o3 model excels at cross-jurisdictional research, while o4-mini is designed for high-volume document review.",
      isNew: false,
      icon: "Info",
      color: "blue",
      links: [
        { text: "Read More", url: "#" },
        { text: "View Model Capabilities", url: "#" }
      ]
    },
    {
      id: 3,
      title: "Enterprise API Updates for Legal",
      date: "Mar 22, 2025",
      category: "FEATURES",
      tags: [],
      content: "API enhancements provide improved document handling capabilities, including automatic citation formatting and jurisdiction-aware responses.",
      isNew: false,
      icon: "CheckCircle",
      color: "green",
      links: [
        { text: "Read More", url: "#" },
        { text: "View API Documentation", url: "#" }
      ]
    }
  ];
  
  export const models = [
    {
      id: 1,
      name: "o3",
      tag: "NEW",
      tagColor: "blue",
      topColor: "blue-700",
      description: "Advanced legal reasoning with cross-jurisdictional capabilities",
      capabilities: [
        { name: "Case Law Research", rating: "Excellent", percentage: 100 },
        { name: "Document Analysis", rating: "Good", percentage: 80 }
      ]
    },
    {
      id: 2,
      name: "o4-mini",
      tag: "NEW",
      tagColor: "purple",
      topColor: "purple-600",
      description: "Optimized for speed and high-volume document review applications",
      capabilities: [
        { name: "Case Law Research", rating: "Fair", percentage: 60 },
        { name: "Document Analysis", rating: "Fair", percentage: 60 }
      ]
    },
    {
      id: 3,
      name: "o1",
      tag: "STANDARD",
      tagColor: "green",
      topColor: "green-600",
      description: "Reliable performance for general legal research and document review",
      capabilities: [
        { name: "Case Law Research", rating: "Excellent", percentage: 100 },
        { name: "Document Analysis", rating: "Good", percentage: 80 }
      ]
    }
  ];