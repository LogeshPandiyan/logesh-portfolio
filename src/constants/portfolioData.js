export const PORTFOLIO_DATA = {
  personalInfo: {
    name: "LOGESH P",
    title: "Associate MERN Stack Developer",
    location: "Coimbatore, TN",
    phone: "+91 76958 70451",
    email: "logeshlp25@gmail.com",
    github: "https://github.com/LogeshPandiyan",
    linkedin: "https://www.linkedin.com/in/logeshpandiyan25",
    bio: "Motivated Associate MERN Stack Developer (0-1 year experience) with hands-on expertise in building scalable full-stack web applications using React.js, Node.js, Express.js, and MongoDB. Experienced in engineering digital document workflows (DSMS) and project management systems (PMS) with secure authentication, RBAC, and modern UI frameworks.",
    summary: "Specialized in crafting enterprise web solutions (PMS & DSMS) featuring PDF document uploading, digital signatures, JWT/RBAC security, RTK Query state management, and end-to-end cloud deployments on Vercel, Render, and MongoDB Atlas.",
  },
  stats: [
    { label: "Years Experience", value: "0-1 Year" },
    { label: "Enterprise Apps Built", value: "2+" },
    { label: "REST APIs Created", value: "20+" },
    { label: "Bugs & UI/UX Fixed", value: "40+" },
  ],
  skills: {
    frontend: [
      { name: "HTML5 & CSS3", level: 95, category: "Frontend" },
      { name: "Bootstrap", level: 80, category: "Frontend" },
      { name: "Tailwind CSS", level: 80, category: "Frontend" },
      { name: "JavaScript (ES6+)", level: 92, category: "Frontend" },
      { name: "React.js", level: 90, category: "Frontend" },
      { name: "Axios", level: 88, category: "Frontend" },
      { name: "RTK Query (Redux)", level: 85, category: "Frontend" },
    ],
    backend: [
      { name: "Node.js", level: 85, category: "Backend" },
      { name: "Express.js", level: 88, category: "Backend" },
      { name: "RESTful APIs", level: 90, category: "Backend" },
      { name: "JWT Authentication", level: 88, category: "Backend" },
      { name: "RBAC Architecture", level: 85, category: "Backend" },
    ],
    database: [
      { name: "MongoDB", level: 88, category: "Database" },
      { name: "MySQL", level: 82, category: "Database" },
      { name: "PostgreSQL", level: 78, category: "Database" },
    ],
    tools: [
      { name: "Postman", level: 92, category: "Tools" },
      { name: "Git & GitHub", level: 90, category: "Tools" },
      { name: "Jest Testing", level: 75, category: "Tools" },
      { name: "Vercel, Render and MongoDB Atlas", level: 85, category: "Tools" },
      { name: "Agile / CI/CD", level: 82, category: "Tools" },
    ],
    softSkills: [
      "Problem Solving",
      "Decision Making",
      "Team Communication",
      "Time Management",
      "Agile Collaboration",
      "Code Reviews"
    ]
  },
  experience: [
    {
      role: "Associate MERN Stack Developer",
      company: "Techno Tackle Software Solutions Pvt. Ltd",
      location: "Coimbatore, Tamil Nadu",
      period: "Dec 2025 – Present",
      type: "Full-time",
      description: "Contributing to enterprise web product development (PMS & DSMS), building RESTful backend APIs, engineering frontend modules, and managing cloud deployments.",
      achievements: [
        "Built responsive, modern UI/UX web interfaces using React.js, Tailwind CSS, Material UI (MUI), Bootstrap, and React Icons across PMS & DSMS platforms.",
        "Integrated complex REST APIs using Axios and RTK Query (Redux Toolkit) for seamless global state management, cached data fetching, and optimized frontend performance.",
        "Engineered secure backend web services using Node.js, Express.js, MongoDB, and Mongoose with strict request payload validations and database schema design.",
        "Implemented JWT Authentication and Role-Based Access Control (RBAC) to ensure multi-tier role authorization, data privacy, and secure API access.",
        "Developed DSMS features (PDF document uploading & digital signature workflows) and fixed bugs and issues, responsive layout bugs, and API handling errors.",
        "Managed end-to-end cloud deployments, hosting frontend client applications on Vercel, Node/Express backend APIs on Render, and cloud databases on MongoDB Atlas."
      ],
      techStack: ["React.js", "Tailwind CSS", "MUI", "Axios", "RTK Query", "Node.js", "Express.js", "MongoDB, Mongoose & Atlas", "JWT, Auth & RBAC", "Vercel", "Render"]
    }
  ],
  projects: [
    {
      id: "dsms",
      title: "DSMS (Digital Document Management System)",
      subtitle: "PDF Upload, Digital Signing & RBAC Workflow Platform",
      category: "Full Stack MERN",
      description: "An enterprise MERN Stack platform designed for uploading PDF documents, generating digital signatures, managing role-based access control (RBAC), and tracking real-time document workflows.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS", "Axios", "JWT / RBAC", "Vercel", "Render"],
      features: [
        "PDF document upload & digital signature verification workflow",
        "Role-Based Access Control (RBAC) for signers, reviewers & admins",
        "Backend REST APIs built with Express.js, MongoDB, and Mongoose",
        "Cloud deployed on Vercel (Frontend), Render (Backend), and MongoDB Atlas"
      ],
      github: "https://github.com/LogeshPandiyan",
      liveDemo: "#",
      featured: true
    },
    {
      id: "pms",
      title: "PMS (Project Management System)",
      subtitle: "Enterprise Sprint Tracking & Timesheet Management",
      category: "Frontend",
      description: "A comprehensive project and sprint management frontend application empowering teams to monitor project progress, log daily timesheets, manage task statuses, and optimize team productivity.",
      techStack: ["React.js", "Material UI (MUI)", "Bootstrap", "Axios", "RTK Query"],
      features: [
        "Interactive sprint board with Kanban-style task tracking",
        "Daily employee timesheet logger & task progress reports",
        "RTK Query cached data fetching & Axios API integrations",
        "Responsive, intuitive user interfaces built with MUI & Bootstrap"
      ],
      github: "https://github.com/LogeshPandiyan",
      liveDemo: "#",
      featured: true
    },
    {
      id: "music-emotion",
      title: "Music Recommendation System Using Facial Emotion",
      subtitle: "AI/ML Real-Time Emotion Recognition & Music Player",
      category: "AI & Web App",
      description: "A real-time music recommendation system that uses a webcam feed to detect the user's facial expression (happy, sad, angry, neutral) using Deep Learning CNN models and dynamically suggests matched music playlists.",
      techStack: ["Python", "TensorFlow", "CNN", "JavaScript", "HTML5 & CSS3", "REST APIs"],
      features: [
        "Webcam video stream emotion recognition in real-time",
        "Convolutional Neural Network (CNN) trained on facial datasets",
        "Dynamic mood-based playlist recommendation algorithm",
        "Responsive web player interface with instant feedback"
      ],
      github: "https://github.com/LogeshPandiyan",
      liveDemo: "#",
      featured: false
    }
  ],
  education: [
    {
      degree: `Bachelor of Science in Computer Science 
      (B.Sc.,)`,
      institution: "GTN Arts College, Dindigul",
      period: "Aug 2022 – May 2025",
      score: "75%",
      grade: "First Class",
      description: "Studied Computer Science core fundamentals, programming logic, web development (Frontend & Backend), database management systems, and analytical problem-solving."
    },
    {
      degree: "Higher Secondary School Certificate (HSC)",
      institution: "Devangar Higher Secondary School, Chinnalapatti",
      period: "Jun 2020 – May 2022",
      score: "68%",
      grade: "Bio-Maths Stream",
      description: "Specialized in Biology, Mathematics, Physics, and Chemistry Stream under the Tamil Nadu State Board."
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Devangar Higher Secondary School, Chinnalapatti",
      period: "Jun 2019 – May 2020",
      score: "81%",
      grade: "State Board",
      description: "General Science, Mathematics & Core Secondary Curriculum under the Tamil Nadu State Board."
    }
  ]
};
