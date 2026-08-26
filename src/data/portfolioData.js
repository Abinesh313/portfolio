export const personalInfo = {
  name: "Abinesh G",
  role: "Backend-Leaning Full-Stack Developer",
  tagline: "Engineering scalable backend architectures, high-integrity APIs, and intelligent full-stack platforms.",
  email: "gabineshpgunasekaran313@gmail.com",
  phone: "+91 8248029669",
  location: "Tamil Nadu, India",
  status: "Open to Full-Time & Internship Opportunities",
  socials: {
    github: "https://github.com/Abinesh313",
    linkedin: "https://linkedin.com/in/abinesh313",
    leetcode: "https://leetcode.com/u/Abinesh313/",
    email: "mailto:gabineshpgunasekaran313@gmail.com",
    phone: "tel:+918248029669"
  },
  resumeDriveUrl: "https://drive.google.com/file/d/1gdDiUJvw04f7bok5ExTNJpjQY_Ks0hpq/view?usp=sharing",
  stats: [
    { label: "LeetCode Solved", value: "1030+", subtitle: "Data Structures & Algorithms", highlight: true },
    { label: "Engineering Internships", value: "2", subtitle: "Cognizant & Nissan Digital", highlight: false },
    { label: "Academic CGPA", value: "8.23", subtitle: "B.E. Computer Science", highlight: false },
    { label: "Production Mindset", value: "100%", subtitle: "End-to-End System Ownership", highlight: true }
  ],
  summary: `Computer Science undergraduate and backend-focused full-stack developer with hands-on experience in Java, Spring Boot, ReactJS, and PostgreSQL/SQL through internships and personal projects. Comfortable building and owning services end-to-end, from database design and secure REST APIs to third-party integrations and cloud deployment. Strong in Data Structures, Algorithms, and OOP, with a focus on building and shipping practical, production-ready software.`
};

export const workExperience = [
  {
    id: "cognizant",
    role: "Software Development Engineer Intern",
    company: "Cognizant",
    location: "India",
    period: "Feb 2026 – May 2026",
    current: false,
    badge: "Completed",
    description: "Developing scalable full-stack enterprise solutions utilizing Spring Boot and ReactJS.",
    points: [
      "Developed and maintained full-stack web applications using Spring Boot (Java) and ReactJS, building RESTful APIs for scalable backend services.",
      "Implemented responsive front-end components in ReactJS and integrated them with backend REST APIs to improve application performance and user experience.",
      "Collaborated with cross-functional teams in an Agile/Scrum environment, contributing to sprint planning, code reviews, unit testing, and version control (Git)."
    ],
    tech: ["Java", "Spring Boot", "ReactJS", "REST APIs", "Git", "Unit Testing", "Agile / Scrum"]
  },
  {
    id: "nissan",
    role: "Software Development Engineer Intern",
    company: "Nissan Digital India",
    location: "India",
    period: "July 2025 – Jan 2026",
    current: false,
    badge: "Completed",
    description: "Optimized enterprise data workflows and internal automated processing tools.",
    points: [
      "Developed and optimized internal data-processing tools, improving workflow efficiency and reducing manual processing time significantly.",
      "Collaborated with senior engineers to enhance and maintain existing software systems, applying object-oriented programming and clean coding best practices.",
      "Participated in Agile development cycles – including sprint planning, daily stand-ups, and code reviews – supporting continuous integration and delivery (CI/CD) workflows."
    ],
    tech: ["Python", "Java", "Data Processing Tools", "CI/CD", "OOP", "Agile / Scrum", "Code Reviews"]
  }
];

export const projectsData = [
  {
    id: "ipeb",
    title: "IPEB – International Professional Examination Board",
    subtitle: "Enterprise Full-Stack Certification & Exam Engine",
    type: "Personal Project • Production Deployed",
    liveUrl: "https://ipeb.org",
    githubUrl: "https://github.com/Abinesh313",
    image: null,
    badge: "Flagship Project",
    summary: "Architected a high-concurrency Spring Boot backend with normalized PostgreSQL schema, Docker containerization, sliding JWT auth, and RSA-2048 signed certificate generation.",
    features: [
      "Architected a Spring Boot backend with a normalized PostgreSQL schema spanning users, exams, vouchers, payments, and audit logs, containerized with Docker Compose.",
      "Implemented JWT-based authentication with httpOnly refresh-token cookies, sliding sessions, Google OAuth, and rate limiting on auth and voucher-claim endpoints.",
      "Built a randomized exam engine enforcing single-active-session constraints, with separate question-pool logic for full exams and mock tests.",
      "Integrated Razorpay payments with webhook signature verification and idempotent processing.",
      "Engineered automated RSA-2048 signed digital certificates generation accompanied by a public verification endpoint."
    ],
    architecture: [
      { label: "Backend Core", detail: "Java, Spring Boot, Spring Security, RESTful Micro-services" },
      { label: "Database & Storage", detail: "PostgreSQL with normalized schemas, indexing & audit trails" },
      { label: "Security & Auth", detail: "JWT httpOnly cookies, sliding sessions, Google OAuth2, rate limiting" },
      { label: "Payment & Cryptography", detail: "Razorpay Webhooks (idempotent), RSA-2048 digital signing" },
      { label: "DevOps", detail: "Docker Compose, Containerized Environment" }
    ],
    tech: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "Docker Compose", "Razorpay", "JWT / OAuth2", "RSA-2048", "REST APIs"]
  },
  {
    id: "glidez-solutions",
    title: "Glidez Solutions Platform",
    subtitle: "High-Performance Static Corporate Website & Digital Solutions Portal",
    type: "Production Website • Static Architecture • [glidez.org]",
    liveUrl: "https://glidez.org",
    githubUrl: "https://github.com/Abinesh313",
    badge: "Static Web Platform",
    summary: "Conceptualized, designed, and deployed the official static web infrastructure for Glidez Solutions, featuring digital service integration, e-learning & certification modules, B2B solutions in EV and luxury hospitality, and advanced SEO performance optimization.",
    features: [
      "Architecture & Development: Conceptualized, designed, and deployed the official static web infrastructure for Glidez Solutions utilizing modern web standards.",
      "Service Integration: Built and integrated functional modules for diverse digital IT services, including cybersecurity consultancy, SEO tracking, and automated digital marketing workflows.",
      "E-Learning & Training Modules: Architected a secure, responsive learning portal to host professional certification courses and coordinate structured corporate internships.",
      "Cross-Industry Solutions: Engineered tailored digital solutions and integrations supporting B2B clients in EV infrastructure and luxury hospitality sectors.",
      "Performance & Security Optimization: Implemented robust web application security protocols and advanced SEO methodologies, significantly enhancing search discoverability and site performance."
    ],
    architecture: [
      { label: "Architecture & Development", detail: "Modern, lightweight static web architecture with zero server overhead and instant load times" },
      { label: "Service Integration", detail: "Interactive modules for cybersecurity consulting, SEO analytics, and digital marketing workflows" },
      { label: "E-Learning & Training", detail: "Responsive portal coordinating professional certification courses and corporate internships" },
      { label: "Cross-Industry Solutions", detail: "Tailored B2B digital solutions and integrations for EV infrastructure & luxury hospitality" },
      { label: "Performance & Security", detail: "Web application security protocols, asset compression, schema markup, and advanced SEO" }
    ],
    tech: ["HTML5", "CSS3 / Modern CSS", "JavaScript", "Static Web Architecture", "SEO Optimization", "B2B Solutions", "Web Performance"]
  },
  {
    id: "ai-career-assistant",
    title: "AI Career Assistant (Career Campus)",
    subtitle: "AI-Powered Resume-to-Job Description Matching Platform",
    type: "Personal Project • AI / Full-Stack",
    liveUrl: null,
    githubUrl: "https://github.com/Abinesh313",
    badge: "AI / NLP Innovation",
    summary: "Intelligent recruitment platform built with ReactJS and FastAPI that computes deep semantic match scores, skill gap analysis, and tailored interview question simulations.",
    features: [
      "Independently designed and developed a full-stack application using ReactJS and FastAPI that accepts job descriptions (JD) and resumes as input.",
      "Built an AI/NLP-based matching engine to generate a JD-resume compatibility score along with detailed skill-gap analysis.",
      "Integrated AI features to deliver personalized constructive feedback, interactive resume-based chat, and dynamic interview questions tailored to the given JD and candidate resume."
    ],
    architecture: [
      { label: "Frontend", detail: "ReactJS, Modern UI with real-time score feedback & visualizers" },
      { label: "Backend API", detail: "FastAPI (Python) high-throughput asynchronous endpoints" },
      { label: "AI & NLP Engine", detail: "Semantic parsing, text similarity scoring & keyword gap analysis" },
      { label: "Interactive Tools", detail: "Context-aware AI chat assistant & custom interview question generator" }
    ],
    tech: ["ReactJS", "FastAPI", "Python", "NLP / AI", "RESTful APIs", "Text Processing", "Tailwind / CSS"]
  },
  {
    id: "supermarket-management",
    title: "Supermarket Management System",
    subtitle: "Inventory Management & Retail Automation Platform",
    type: "College Project • Full-Stack",
    liveUrl: null,
    githubUrl: "https://github.com/Abinesh313",
    badge: "Full-Stack Retail System",
    summary: "Full-stack inventory management and automated retail billing platform engineered with ReactJS, Spring Boot, and relational SQL database for real-time stock tracking and store operations.",
    features: [
      "Designed and developed a full-stack Inventory Management System using ReactJS and Spring Boot to manage stock, billing, and store operations.",
      "Implemented CRUD operations and RESTful APIs backed by a relational database (SQL) to support real-time inventory tracking.",
      "Reduced manual data-entry errors and improved store operational efficiency through automated inventory and billing workflows."
    ],
    architecture: [
      { label: "Frontend", detail: "ReactJS responsive dashboard for catalog browsing, billing & stock ledger" },
      { label: "Backend Core", detail: "Spring Boot (Java) RESTful service handling inventory transactions & stock rules" },
      { label: "Database Layer", detail: "Relational SQL database with foreign key constraints, indexing & audit trails" },
      { label: "Automation", detail: "Automated stock threshold alerting, fast POS billing calculations & invoice logs" }
    ],
    tech: ["Java", "Spring Boot", "ReactJS", "SQL", "RESTful APIs", "CRUD Operations", "Data Automation"]
  }
];

export const skillsData = {
  programmingLanguages: [
    { name: "Java", level: "Expert", desc: "Core Java, Streams, Collections, Multithreading, OOP" },
    { name: "Python", level: "Practitioner", desc: "NLP Scripting, Data Processing, Automation, Scripting" },
    { name: "SQL", level: "Advanced", desc: "PostgreSQL, Query Optimization, Joins, Triggers, Normalized Schemas" }
  ],
  backendAndApis: [
    { name: "Spring Boot", level: "Expert", desc: "Enterprise Architecture, Dependency Injection, JPA / Hibernate" },
    { name: "Spring Security", level: "Advanced", desc: "JWT Filters, OAuth2, RBAC, Sliding Sessions, CORS/CSRF" },
    { name: "REST API Development", level: "Expert", desc: "RESTful Standards, Idempotency, Rate Limiting, Swagger/OpenAPI" },
    { name: "PostgreSQL", level: "Advanced", desc: "ACID compliance, Transactions, Indexing, Audit logging" },
    { name: "JWT & OAuth2", level: "Advanced", desc: "httpOnly Refresh Tokens, Session Management, Google OAuth" },
    { name: "ReactJS", level: "Proficient", desc: "Hooks, State Management, Component Architecture, API Integration" }
  ],
  cloudAndDevops: [
    { name: "Docker & Compose", level: "Proficient", desc: "Multi-container setup, Containerization, Environment isolation" },
    { name: "AWS", level: "Intermediate", desc: "EC2, S3, RDS, Cloud Deployment fundamentals" },
    { name: "Git & GitHub", level: "Advanced", desc: "Branching strategies, PR reviews, Version Control workflows" },
    { name: "Agile / Scrum", level: "Practitioner", desc: "Sprint planning, Daily standups, Jira/Git boards" },
    { name: "CI / CD", level: "Intermediate", desc: "Continuous Integration, automated testing & build pipelines" }
  ],
  coreCs: [
    { name: "Data Structures & Algorithms", level: "Proficient", desc: "1030+ LeetCode Solved (Arrays, Two Pointers, Linked Lists, Stacks & Queues, Problem Solving)" },
    { name: "Object-Oriented Programming (OOP)", level: "Advanced", desc: "Solid principles, Design patterns, Abstraction & Polymorphism" },
    { name: "Relational Database Design", level: "Advanced", desc: "Normalization (1NF to BCNF), Entity-Relationship modeling" },
    { name: "Software Development Life Cycle (SDLC)", level: "Advanced", desc: "Requirement analysis, Design, Implementation, QA & Deployment" }
  ],
  aiAndAgentTools: [
    { name: "Antigravity Agents", level: "Advanced", desc: "Agentic coding workflows, multi-tool pipelines, codebase pair programming" },
    { name: "Gemini (Google AI)", level: "Advanced", desc: "Gemini reasoning pipelines, code generation & context-aware refactoring" },
    { name: "Claude (Anthropic)", level: "Advanced", desc: "System architecture analysis, algorithmic design, and advanced prompt engineering" },
    { name: "ChatGPT (OpenAI)", level: "Advanced", desc: "Technical research, automated debugging, documentation & unit test authoring" }
  ]
};

export const educationData = [
  {
    institution: "Sri Krishna College of Technology",
    location: "Coimbatore, Tamil Nadu",
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    period: "Oct 2022 – May 2026",
    score: "CGPA: 8.23 / 10",
    badge: "Graduating 2026",
    highlights: "Focus on Algorithms, Database Systems, Computer Networks, Operating Systems & Distributed Architecture."
  },
  {
    institution: "SRK Matriculation Higher Secondary School",
    location: "Salem, Tamil Nadu",
    degree: "Higher Secondary Certificate (HSC - Class XII)",
    period: "Completed – 2022",
    score: "Score: 92.67%",
    badge: "Top Academic Tier",
    highlights: "Specialization in Mathematics, Physics, Chemistry, and Computer Science."
  },
  {
    institution: "SRK Matriculation Higher Secondary School",
    location: "Salem, Tamil Nadu",
    degree: "Secondary School Leaving Certificate (SSLC - Class X)",
    period: "Completed – 2020",
    score: "Score: 87.6%",
    badge: "Distinction",
    highlights: "Strong foundational academic performance across Mathematics and General Sciences."
  }
];

export const leetcodeHighlights = {
  username: "Abinesh313",
  profileUrl: "https://leetcode.com/u/Abinesh313/",
  problemsSolved: "1030+",
  tagline: "Dedicated problem solver with a solid foundation in Data Structures, Algorithms, and practical logic building.",
  topics: [
    "Data Structures & Algorithms",
    "Arrays & Two Pointers",
    "String Processing & Hashing",
    "Linked Lists, Stacks & Queues",
    "Math, Logic & Simulation",
    "Time & Space Optimization"
  ]
};
