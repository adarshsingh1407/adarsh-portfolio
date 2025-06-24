import personalData from "./data/personal.json";
import educationData from "./data/education.json";
import workExperienceData from "./data/work-experience.json";
import skillsData from "./data/skills.json";
import projectsData from "./data/projects.json";
import achievementsData from "./data/achievements.json";
import certificationsData from "./data/certifications.json";
import introData from "./data/intro.json";

export const APOS = "’";

export const SITE_CONFIG = {
  name: "Adarsh Singh",
  logo: "/adarsh-dp.png",
  url: "https://adarshsingh14.com",
} as const;

export const BLOG_IMAGES = [
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
] as const;

export const TECH_STACK_COLORS: Record<string, { bg: string }> = {
  // Frontend
  ReactJS: { bg: "#087EA4" },
  ReactNative: { bg: "#61dafb" }, // Official React Native blue
  TypeScript: { bg: "#3178C6" },
  JavaScript: { bg: "#ff9800" },
  NextJS: { bg: "#1A1A1A" },
  GraphQL: { bg: "#E10098" },
  "Apollo Client": { bg: "#402B9C" },
  ReactQuery: { bg: "#FF4154" },
  WebOS: { bg: "#00A0DC" },
  Enact: { bg: "#34495E" },
  Redux: { bg: "#764ABC" },
  "Redux-Saga": { bg: "#555555" },
  "Redux Thunk": { bg: "#6E4C1E" },
  Tailwind: { bg: "#06B6D4" },
  Rechart: { bg: "#8864D8" },
  SASS: { bg: "#CC6699" },
  HTML5: { bg: "#E34F26" },
  HTML: { bg: "#E44D26" },
  CSS: { bg: "#1572B6" },
  AngularJS: { bg: "#DD0031" },
  jQuery: { bg: "#0769AD" },
  Bootstrap: { bg: "#7952B3" },

  // Testing
  Jest: { bg: "#C21325" },
  "React Testing Library": { bg: "#E33332" },
  Mabl: { bg: "#0078D7" },

  // Analytics & Monitoring
  MixPanel: { bg: "#5C6BC0" },
  ApiDeck: { bg: "#2E2E2E" },

  // Backend
  NodeJS: { bg: "#339933" },
  ExpressJS: { bg: "#333333" },
  MySQL: { bg: "#00758F" },
  TypeORM: { bg: "#F29111" },
  SpringBoot: { bg: "#6DB33F" },
  Java: { bg: "#ED8B00" },
  "Core Java": { bg: "#007396" },
  Dropwizard: { bg: "#5C5C5C" },
  "J2EE Application Development": { bg: "#007396" },
  "Java Enterprise Edition": { bg: "#5382A1" },
  "J2EE Web Services": { bg: "#005B94" },
  SQL: { bg: "#336791" },
  MongoDB: { bg: "#47A248" },

  // Cloud & Infrastructure
  "Serverless Framework (AWS Lambda)": { bg: "#FF9900" },
  "Serverless Stack": { bg: "#FF9900" },

  // Version Control
  Git: { bg: "#F05032" },

  // General
  "Test Driven Development": { bg: "#FF0000" },
  "Agile Methodologies": { bg: "#007396" },
  "Scrum Framework": { bg: "#007396" },
} as const;

export const RESUME_DATA = {
  personal: { ...personalData },
  intro: { ...introData },
  education: [...educationData],
  workExperience: [...workExperienceData],
  skills: [...skillsData],
  projects: [...projectsData],
  achievements: [...achievementsData],
  certifications: [...certificationsData],
} as const;

// Technology data with icons
export const PRIMARY_TECHNOLOGIES = [
  {
    name: "ReactJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "GraphQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
];
