export const mockData = {
  hero: {
    announcement: "🚀 Launch Your Career",
    title: "Master Your Dream Job Interview with AI-Powered Mock Sessions",
    subtitle: "Simulate real hiring processes for top MNCs in India. Practice with AI interviews, get instant feedback, and land your dream role at TCS, Accenture, Wipro, or Infosys.",
    stats: [
      { label: "Success Rate", value: "94%" },
      { label: "Interview Simulations", value: "10K+" },
      { label: "Companies Covered", value: "50+" }
    ]
  },

  companies: [
    {
      id: 1,
      name: "TCS",
      logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=100&fit=crop&crop=center",
      process: [
        "Online Assessment (TCS NQT)",
        "Technical Interview",
        "Managerial Round",
        "HR Interview"
      ],
      difficulty: "Medium",
      avgDuration: "45 mins",
      color: "accent-blue"
    },
    {
      id: 2,
      name: "Accenture",
      logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=100&fit=crop&crop=center",
      process: [
        "Cognitive Assessment", 
        "Coding Challenge",
        "Technical Interview",
        "Communication Assessment"
      ],
      difficulty: "Hard",
      avgDuration: "60 mins",
      color: "accent-purple"
    },
    {
      id: 3,
      name: "Wipro",
      logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=100&fit=crop&crop=center",
      process: [
        "WILP Assessment",
        "Technical Round",
        "Project Discussion", 
        "HR Round"
      ],
      difficulty: "Medium",
      avgDuration: "50 mins",
      color: "accent-orange"
    },
    {
      id: 4,
      name: "Infosys",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop&crop=center",
      process: [
        "Infosys Mysore Assessment",
        "Technical Interview",
        "System Design",
        "Leadership Interview"
      ],
      difficulty: "Hard",
      avgDuration: "55 mins",
      color: "accent-green"
    }
  ],

  features: [
    {
      title: "AI-Powered Interviews",
      description: "Practice with advanced AI that adapts to your responses and provides real-time feedback",
      icon: "Brain"
    },
    {
      title: "Company-Specific Simulations", 
      description: "Experience exact hiring processes of top MNCs with authentic question patterns",
      icon: "Building2"
    },
    {
      title: "Real-time Feedback",
      description: "Get instant analysis of your performance with detailed improvement suggestions",
      icon: "MessageSquare"
    },
    {
      title: "1:1 Expert Sessions",
      description: "Book sessions with industry experts from your target companies",
      icon: "Users"
    },
    {
      title: "Performance Analytics",
      description: "Track your progress with detailed analytics and personalized learning paths",
      icon: "BarChart3"
    },
    {
      title: "Mock Assessments",
      description: "Practice coding challenges and aptitude tests in exam-like environments",
      icon: "Code"
    }
  ],

  testimonials: [
    {
      name: "Priya Sharma",
      role: "Software Engineer at TCS",
      content: "The AI mock interviews were incredibly realistic. I practiced for 2 weeks and cleared TCS on my first attempt!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Rahul Kumar", 
      role: "Consultant at Accenture",
      content: "Company-specific simulations helped me understand Accenture's process perfectly. Got selected with a great package!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Anjali Patel",
      role: "Business Analyst at Wipro", 
      content: "The feedback system is amazing. It helped me identify my weak points and improve them before the real interview.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
  ],

  pricing: [
    {
      name: "Basic",
      price: "₹999",
      period: "month",
      description: "Perfect for getting started",
      features: [
        "5 AI mock interviews",
        "Basic company simulations",
        "Performance reports",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "₹1,999", 
      period: "month",
      description: "Most popular choice",
      features: [
        "Unlimited AI mock interviews",
        "All company simulations",
        "Advanced analytics",
        "1:1 expert session (1/month)",
        "Priority support",
        "Resume review"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "₹3,999",
      period: "month", 
      description: "Complete interview mastery",
      features: [
        "Everything in Pro",
        "Unlimited 1:1 sessions",
        "Personalized learning path",
        "Mock assessment creation",
        "Interview guarantee program",
        "24/7 phone support"
      ],
      popular: false
    }
  ],

  faqs: [
    {
      question: "How realistic are the AI mock interviews?",
      answer: "Our AI is trained on thousands of real interview patterns from top MNCs. It adapts to your responses and provides authentic interview experience matching company-specific styles."
    },
    {
      question: "Can I practice for specific companies?",
      answer: "Yes! We offer dedicated simulation modes for TCS, Accenture, Wipro, Infosys, and 50+ other companies with their exact hiring processes and question patterns."
    },
    {
      question: "What if I'm not satisfied with the service?", 
      answer: "We offer a 7-day money-back guarantee. If you're not completely satisfied, we'll refund your full payment, no questions asked."
    },
    {
      question: "How do 1:1 expert sessions work?",
      answer: "Book sessions with industry professionals who currently work at or have experience with your target companies. Sessions are conducted via video call and include personalized feedback."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes! Our mobile app is available on both iOS and Android. You can practice interviews anytime, anywhere with the same features as our web platform."
    }
  ],

  chatbotResponses: {
    greeting: "Hi! I'm here to help you with any questions about HackerBucket's AI Mock Interview platform. How can I assist you today?",
    pricing: "We have three plans: Basic (₹999/month), Pro (₹1,999/month), and Premium (₹3,999/month). The Pro plan is most popular and includes unlimited AI interviews and 1 expert session per month.",
    companies: "We support interview simulations for TCS, Accenture, Wipro, Infosys, and 50+ other top companies. Each simulation follows the exact hiring process of that company.",
    features: "Our platform offers AI-powered interviews, real-time feedback, company-specific simulations, 1:1 expert sessions, and detailed performance analytics.",
    support: "You can reach our support team at support@hackerbucket.com or use the live chat feature. Pro and Premium users get priority support.",
    trial: "We offer a 7-day money-back guarantee on all plans. You can also try our basic features with a free demo interview.",
    default: "I'm not sure about that specific question. Please contact our support team at support@hackerbucket.com or call +91-9876543210 for detailed assistance."
  }
};