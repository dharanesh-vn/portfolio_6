// All your personal data goes here

import profileImage from '../assets/profile.jpg';
export const personalData = {
  name: "Jaison J P",
  profile: '/src/assets/profile.jpg', // Path to your profile picture
  designation: "Software Developer & Data Science Enthusiast",
  description: "Currently pursuing my M.Sc in Decision and Computing Sciences. I have a strong foundation in full-stack development, database management, and problem-solving, with a keen interest in leveraging data to drive insights and solutions.",
  email: "jaijoy888@gmail.com",
  phone: "+91 7358992950",
  address: "Coimbatore, India",
  linkedIn: "https://www.linkedin.com/in/jaisonjp07/",
  github: "https://github.com/jaisonjp",
};

export const education = {
  degree: "M.Sc Decision and Computing Sciences",
  institution: "Coimbatore Institute of Technology",
  duration: "2023 - Present",
};

export const experiences = [
  {
    title: "Melinia Hackathon",
    description: "Collaborated in a four-member team, which was a great experience in teamwork, task coordination, and project execution. We successfully reached the final stage, which was a significant learning opportunity for personal and technical improvement.",
  },
];

export const interests = [
  {
    title: "Full Stack Development",
    description: "Building responsive and scalable web applications from front-end to back-end."
  },
  {
    title: "Database Management",
    description: "Designing and managing efficient, secure, and reliable database systems."
  },
  {
    title: "Logical Coding",
    description: "Solving complex problems through algorithmic thinking and efficient code."
  }
];

export const projects = [
  {
    title: "Examination and Attendance Management System",
    description: "Developed a desktop application using Java Swing and MySQL for managing student examinations and attendance. Features separate portals for tutors (admin) and students, with functionalities like profile management, test creation, attendance tracking, and score reporting.",
    tools: ["Java Swings", "MySQL", "JDBC"],
  },
  {
    title: "Hospital Management System",
    description: "Built a modular hospital management system in Python. It includes features for patient record management, emergency triage using heap queues, and appointment scheduling via topological sort. Integrated SQLite for data persistence and used Pandas/Matplotlib for metrics visualization.",
    tools: ["Python", "SQLite", "Pandas", "Matplotlib"],
  },
  {
    title: "House Price Analysis and Forecasting",
    description: "Conducted a data analysis project on an Indian house price dataset. Applied ARIMA for time series forecasting, K-Means for clustering, and LDA with Random Forest for classification. Utilized PCA for dimensionality reduction to uncover latent data structures.",
    tools: ["Python", "Pandas", "Scikit-learn", "Statsmodels", "ARIMA"],
  },
];


export const skills = {
    database: ["MySQL", "Oracle", "SQLite"],
    languages: ["Python", "Java", "C", "SQL", "Javascript", "HTML"],
    developerTools: ["VS Code", "Jupyter Notebook", "Git", "GitHub"],
    softSkills: ["Communication", "Team Collaboration", "Problem Solving", "Logical Thinking"]
};

export const certifications = [
    "Hackerrank: Python Basics, SQL Intermediate, Problem Solving Basics",
    "Coursera: Search Engine Optimization (SEO) with Squarespace",
    "Great Learning: Principles of Management",
];