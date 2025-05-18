
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
    title: "Behavioral Insider Threat Detection",
    description: "A hybrid deep learning model integrating LSTMs, Transformers, and Autoencoders to detect insider threats in cybersecurity by analyzing user behavior, system logs, and activity patterns. Enhanced with Explainable AI (SHAP) to provide transparency in threat detection and improve cybersecurity through proactive identification of suspicious activities.",
    tech: ["Python", "Machine Learning", "Transformers", "LSTM", "Autoencoders", "Explainable AI"],
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop",
    githubUrl: "https://github.com/issac8080",
  },
  {
    id: 2,
    title: "Production Website for Devasurya",
    description: "A user-friendly production website for Devasurya Production House built using React. The site showcases the studio's movie portfolio, allowing visitors to explore films, learn about cast and crew, and stay updated on upcoming releases. Features responsive design and smooth navigation for a seamless experience across all devices.",
    tech: ["React", "Responsive Design", "UI/UX", "Web Development"],
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop",
    githubUrl: "https://github.com/issac8080",
  },
  {
    id: 3,
    title: "Account Income and Expense Tracker",
    description: "A financial management app with features for tracking income, categorizing expenses, and generating reports to improve budgeting efficiency. Implemented data visualization for better expense analysis and financial planning. Enhances data organization for faster retrieval and improved user experience.",
    tech: ["Express.js", "Pug", "MySQL", "Financial APIs", "Data Visualization"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop",
    githubUrl: "https://github.com/issac8080",
  },
  {
    id: 4,
    title: "Weather Forecasting App",
    description: "A user-friendly weather forecasting application that enables users to track and know the weather of any location. Features include current weather information for any city and upcoming weather forecasts for the user's location. Designed with an intuitive interface and real-time data updates.",
    tech: ["JavaScript", "Weather APIs", "React", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop",
    githubUrl: "https://github.com/issac8080",
  },
  {
    id: 5,
    title: "Resume Builder using JSON",
    description: "A web application that simplifies the process of creating professional resumes. Users can enter their personal details, education, work experience, and skills, and the application generates a well-formatted, downloadable resume from JSON data. Features customizable templates and styling options.",
    tech: ["React", "Node.js", "PDF Generation", "JSON"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
    githubUrl: "https://github.com/issac8080",
  },
  {
    id: 6,
    title: "Lumos - Professional Networking App",
    description: "A cutting-edge professional social networking platform for students bridging academia and industry. Features include connection tools, profile showcasing, and blockchain integration for issuing certificates as NFTs. The app ensures credential authenticity and integrity while fostering community through collaboration spaces.",
    tech: ["Flutter", "Blockchain", "NFTs", "Smart Contracts", "Social Networking"],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop",
    githubUrl: "https://github.com/issac8080",
  },
  {
    id: 7,
    title: "Portable Power Bank Design",
    description: "A design project focused on creating an efficient and reliable portable power bank for charging devices. The design incorporates optimized power management and safety features to ensure fast charging and protection against overcharging, enhancing durability and performance in various usage scenarios.",
    tech: ["Hardware Design", "Power Management", "Safety Systems", "Product Design"],
    image: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?q=80&w=1926&auto=format&fit=crop",
    githubUrl: "https://github.com/issac8080",
  },
  {
    id: 8,
    title: "IoT Automatic Headlight Dimmer",
    description: "An automotive solution using Arduino and LDR sensor for automatic headlight dimming to improve road safety and driver comfort. The system detects oncoming traffic and adjusts headlight intensity accordingly, reducing glare for other drivers while maintaining optimal visibility for the user.",
    tech: ["Arduino", "IoT", "Sensors", "Embedded Systems", "LDR Technology"],
    image: "https://images.unsplash.com/photo-1601277160615-bb8b95fc0aae?q=80&w=1932&auto=format&fit=crop",
    githubUrl: "https://github.com/issac8080",
  },
  {
    id: 9,
    title: "SmartCrop: Plants to Humans Communication",
    description: "An innovative IoT project focused on improving agricultural practices by enabling communication between plants and humans. The system uses sensors to monitor plant health conditions and environmental factors, providing real-time data to farmers for optimizing growth and productivity through smart farming techniques.",
    tech: ["IoT", "Agriculture", "Sensors", "Data Analytics", "Plant Monitoring"],
    image: "https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?q=80&w=1964&auto=format&fit=crop",
    githubUrl: "https://github.com/issac8080",
  },
  {
    id: 10,
    title: "InitraCV – Resume Builder with Cover Letter",
    description: "A modern web-based tool designed to simplify the resume-making process. It allows users to build a clean, professional resume and instantly generate a personalized cover letter all in one place. Features include customizable templates, real-time preview, and export options.",
    tech: ["Web Development", "Document Generation", "UI/UX", "React", "Template Design"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1974&auto=format&fit=crop",
    githubUrl: "https://github.com/issac8080",
  },
];
