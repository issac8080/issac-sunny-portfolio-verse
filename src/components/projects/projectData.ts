
export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Behavioral-Based Insider Threat Detection System",
    description: "A system to monitor user activity and detect anomalies indicating potential insider threats using behavior profiling and pattern deviation analysis. Implemented machine learning algorithms to identify suspicious behavior patterns.",
    tech: ["Python", "Machine Learning", "Behavior Analytics", "Security"],
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop",
    githubUrl: "https://github.com/issac8080",
  },
  {
    id: 2,
    title: "Account Income and Expense Tracker",
    description: "A financial management app with features for tracking income, categorizing expenses, and generating reports to improve budgeting efficiency. Implemented data visualization for better expense analysis and financial planning.",
    tech: ["Express.js", "Pug", "MySQL", "Financial APIs", "Data Visualization"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop",
    githubUrl: "https://github.com/issac8080",
  },
  {
    id: 3,
    title: "Resume Builder using JSON",
    description: "A resume builder that accepts JSON data to dynamically generate a PDF resume with customizable templates and styling options. Includes multi-language support and real-time preview functionality.",
    tech: ["React", "Node.js", "PDF Generation", "JSON"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
    githubUrl: "https://github.com/issac8080",
  },
  {
    id: 4,
    title: "Lumos - Professional Networking App",
    description: "A networking app for students using Flutter for the front-end and blockchain technology for issuing certificates as NFTs. Implemented secure verification systems and decentralized credential storage.",
    tech: ["Flutter", "Blockchain", "NFTs", "Smart Contracts"],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop",
    githubUrl: "https://github.com/issac8080",
  },
  {
    id: 5,
    title: "IoT Automatic Headlight Dimmer",
    description: "An automotive solution using Arduino and LDR sensor for automatic headlight dimming to improve road safety and driver comfort. Designed and developed a prototype with real-time light intensity measurement system.",
    tech: ["Arduino", "IoT", "Sensors", "Embedded Systems"],
    image: "https://images.unsplash.com/photo-1601277160615-bb8b95fc0aae?q=80&w=1932&auto=format&fit=crop",
    githubUrl: "https://github.com/issac8080",
  },
  {
    id: 6,
    title: "E-commerce Platform",
    description: "Developed a full-featured e-commerce platform with payment integration, inventory management, and user authentication. Implemented responsive design for optimal mobile experience.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Payment APIs"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1974&auto=format&fit=crop",
    githubUrl: "https://github.com/issac8080",
  },
  {
    id: 7,
    title: "AI-Powered Content Recommendation System",
    description: "Built a recommendation engine that analyzes user behavior to suggest personalized content. Implemented collaborative filtering and content-based algorithms for improved accuracy.",
    tech: ["Python", "TensorFlow", "Machine Learning", "Data Analysis"],
    image: "https://images.unsplash.com/photo-1677442135136-760c813029fb?q=80&w=1932&auto=format&fit=crop",
    githubUrl: "https://github.com/issac8080",
  },
];
