export const SITE_CONFIG = {
  name: "Adarsh Singh",
  logo: "/as-logo-3.png",
  url: "https://adarshsingh.dev", // Update with your actual domain
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

type ProjectDetail = {
  name: string;
  role: string;
  summary: string;
  responsibilities?: string[];
  techStack: string[];
  url?: string;
};

type EducationEntry = {
  degree?: string;
  level?: string;
  institution?: string;
  years?: string;
  score?: number;
  subjects?: string[];
};

export const RESUME_DATA = {
  name: "Adarsh Singh",
  title: "Senior Software Engineer | Certified ScrumMaster® (CSM®)",
  summary:
    "I am a self-motivated, front-end developer with 8+ years of experience designing and developing web applications. I'm adept at managing cross-functional teams and can contribute to the backend team as and when needed.",
  location: "Noida/Delhi, IN",
  contact: {
    email: {
      label: "adarshsingh1407@gmail.com",
      value: "adarshsingh1407@gmail.com",
    },
    phone: {
      label: "+91 8800877179",
      value: "+91 8800877179",
    },
    website: {
      label: "https://adarshsingh14.com/",
      value: "https://adarshsingh14.com/",
    },
    linkedin: {
      label: "adarshsingh1407",
      value: "https://www.linkedin.com/in/adarshsingh1407",
    },
    github: {
      label: "adarshsingh1407",
      value: "https://github.com/adarshsingh1407",
    },
    stackoverflow: {
      label: "https://stackoverflow.com/users/6921247/adarsh-singh",
      value: "https://stackoverflow.com/users/6921247/adarsh-singh",
    },
    medium: {
      label: "https://medium.com/@adarshsingh1407",
      value: "https://medium.com/@adarshsingh1407",
    },
    npm: {
      label: "adarshsingh1407",
      value: "https://www.npmjs.com/~adarshsingh1407",
    },
    leetcode: {
      label: "adarshsingh1407",
      value: "https://leetcode.com/u/adarshsingh1407/",
    },
  },
  workExperience: [
    {
      title: "Senior Software Engineer",
      company: "Velotio Technologies Pvt Ltd",
      duration: "10/2022 - Present",
      location: "Noida, IN",
      description:
        "Working as a Scrum Team Member for a US-based start-up(Kintent) on a contract from Velotio",
      projects: [
        {
          name: "TrustCloud (Kintent)",
          role: "Senior React Engineer",
          summary:
            "Led Product-Led Growth (PLG) initiatives to drive self-serve capabilities and identify revenue opportunities. Built reusable paywall framework, developed core frontend features, and contributed to the design system. Collaborated with cross-functional teams and conducted peer reviews and training.",
          techStack: [
            "ReactJS",
            "ReactQuery",
            "React Testing Library",
            "Mabl",
            "MixPanel",
          ],
          url: "https://www.trustcloud.ai",
        },
        {
          name: "PlayFi DTS (TV WebApp)",
          role: "Senior React Engineer",
          summary:
            "Sole developer responsible for architecture, development, and delivery of a React-based TV WebApp on WebOS. Integrated with native C++ modules via Luna Bus IPC. Built Dpad-compatible design system using Enact and authored onboarding documentation.",
          techStack: ["ReactJS", "ReactQuery", "WebOS", "Enact"],
          url: "https://play-fi.com",
        },
        {
          name: "Headlamp",
          role: "Senior React Engineer",
          summary:
            "Developed clinician-patient platform with NextJS. Integrated patient data APIs with ReactQuery, created reusable hooks, implemented workflow mechanisms, and ensured code quality through reviews and linting practices.",
          techStack: ["ReactJS", "TypeScript", "ReactQuery"],
          url: "https://www.headlamp.com",
        },
        {
          name: "Transcarent",
          role: "Senior React/GraphQL Engineer",
          summary:
            "Built and integrated GraphQL queries/mutations for user data. Used Apollo Client in NextJS, fixed production bugs, and maintained code quality with automated checks and reviews.",
          url: "https://transcarent.com",
        },
      ] as ProjectDetail[],
    },
    {
      title: "Lead - Product Engineering",
      company: "FactoryOne Pvt Ltd",
      duration: "12/2021 - 10/2022",
      location: "Noida, IN",
      description:
        "Managed the front-end and back-end teams to create a SAAS-based platform for factory(MSME) management. Contributed to the back-end team to create RESTful APIs using NodeJS(ExpressJS).",
      projects: [
        {
          name: "FactoryPlus",
          role: "Lead Product Engineer & Senior React Engineer",
          summary:
            "Led 10-member frontend and backend teams for an MSME factory management platform. Architected the ReactJS/NextJS frontend and NodeJS backend. Managed JIRA workflows, conducted training, and enforced quality standards. Individually delivered core features like Analytics and Reports. Enhanced report performance with AWS Lambda, and improved site performance using React Profiler and Lighthouse. Built reusable component libraries and custom hooks.",
          url: "https://factoryplus.in",
        },
      ] as ProjectDetail[],
    },
    {
      title: "Associate Level 2",
      company: "Publicis Sapient",
      duration: "05/2019 - 12/2021",
      location: "Gurgaon, IN",
      description:
        "Worked on GraphQL and React in both internal and client projects in the E-Commerce Vertical. Improved performance of a legacy web app in React (60% lighter bundle and 30% reduction in build time).",
      projects: [
        {
          name: "The Children's Place",
          role: "Senior React Engineer",
          summary:
            "Developed the complete Cart and Checkout frontend using ReactJS and GraphQL. Implemented single-page UX transitions and animations. Led a successful POC for GraphQL federation (NodeJS + SpringBoot) to enable cross-platform backend development.",
          url: "https://www.childrensplace.com",
        },
        {
          name: "Bed Bath and Beyond",
          role: "Senior React Engineer",
          summary:
            "Built discounting features across product pages, cart, and checkout. Supported live product launches during night shifts and resolved post-deployment issues in the Cart and Checkout modules.",
          url: "https://www.bedbathandbeyond.com",
        },
        {
          name: "Commerce on Cloud",
          role: "Senior React Engineer & Senior NodeJS Engineer",
          summary:
            "Owned the frontend for an internal e-commerce demo platform. Developed end-to-end shopping flows (home, listing, detail, cart, checkout). Enhanced performance using React Profiler and Lighthouse. Implemented a federated GraphQL BFF layer for API orchestration.",
        },
      ] as ProjectDetail[],
    },
    {
      title: "Lead Software Engineer",
      company: "PetroIT, Chimes Pvt Ltd",
      duration: "01/2019 - 05/2019",
      location: "Gurgaon, IN",
      description:
        "PetroIT is a division of Chimes Pvt Ltd. It provides IT solutions to petroleum companies worldwide. I got transferred internally from the ABCplusD division to PetroIT by the Chimes management and continued my role as a lead software engineer. Tenure: 1 Jan 2019(transferred) - 24 May 2019",
      projects: [
        {
          name: "Stack61",
          role: "Team Lead",
          summary:
            "Led a 10+ member full-stack team to deliver inventory, personnel, and process management features for petroleum pipeline clients in Europe and the Gulf. Transitioned a legacy app from Vanilla JS/jQuery to a hybrid ReactJS architecture. Conducted React/Redux training and built microservices in SpringBoot and Dropwizard.",
          techStack: ["ReactJS", "Redux", "jQuery", "SpringBoot", "Java"],
          url: "https://petroit.us/solutions/stack-61/",
        },
      ] as ProjectDetail[],
    },
    {
      title: "Lead Software Engineer",
      company: "ABCplusD, Chimes Pvt Ltd",
      duration: "06/2018 - 12/2018",
      location: "Gurgaon, IN",
      description:
        "ABCplusD was an internal division of Chimes Pvt Ltd which provided technical solutions to another division of Chimes - PetroIT. Designed and developed applications for resource management of various petroleum companies worldwide. Tenure: 15 Jun 2018 - 31 Dec 2018 (transferred to PetroIT, Chimes Group)",
      projects: [
        {
          name: "Stack61",
          role: "Team Lead",
          summary:
            "Led a 10+ member full-stack team to deliver inventory, personnel, and process management features for petroleum pipeline clients in Europe and the Gulf. Transitioned a legacy app from Vanilla JS/jQuery to a hybrid ReactJS architecture. Conducted React/Redux training and built microservices in SpringBoot and Dropwizard.",
          techStack: ["ReactJS", "Redux", "jQuery", "SpringBoot", "Java"],
          url: "https://petroit.us/solutions/stack-61/",
        },
      ] as ProjectDetail[],
    },
    {
      title: "Frontend Developer",
      company: "FarmGuide India (Lennon AgriTech Pvt Ltd)",
      duration: "01/2018 - 06/2018",
      location: "Gurgaon, IN",
      description:
        "Worked as a Frontend Developer for FarmGuide India (Lennon AgriTech Pvt Ltd). Built and maintained web applications for the agri-tech sector. Tenure: 11 Jan 2018 - 14 Jun 2018.",
      projects: [
        {
          name: "FarmGuide",
          role: "Frontend Developer",
          summary:
            "A SaaS-based platform for helping the farmers of the country to get government benefits(in collaboration with the Indian Government) from schemes like PMFBY. It also provided the farmers with useful farming-related queries and advisories.",
          responsibilities: [
            "Set up, designed, and developed multiple websites which were used to provide benefits and advisories to farmers by the Indian Government under schemes like PMFBY.",
            "Created atomic components for reuse and set up page skeletons for junior developers to work upon.",
            "Code reviews and organized training sessions.",
            "Created microservices using NodeJS, ExpressJS, MySQL",
          ],
        },
      ] as ProjectDetail[],
    },
    {
      title: "Lead - Software Development",
      company: "Chimes Group",
      duration: "06/2018 - 05/2019",
      location: "Gurgaon, IN",
      description:
        "Led cross-functional teams to deliver tight deadline product-based projects for the petroleum pipeline companies. Created roadmap to move legacy web applications(jQuery) to a modern framework (ReactJS).",
      projects: [
        {
          name: "Stack61",
          role: "Team Lead",
          summary:
            "Led a 10+ member full-stack team to deliver inventory, personnel, and process management features for petroleum pipeline clients in Europe and the Gulf. Transitioned a legacy app from Vanilla JS/jQuery to a hybrid ReactJS architecture. Conducted React/Redux training and built microservices in SpringBoot and Dropwizard.",
          url: "https://petroit.us/solutions/stack-61/",
        },
        {
          name: "Dauble",
          role: "Team Lead / Software Engineer",
          summary:
            "As a Team Lead, managed a frontend team to build a B2C social media app for artists and collectors using AngularJS. Developed reusable components, set up admin panel, and resolved SEO challenges with prerender.io. As a Software Engineer, created user-facing AngularJS apps, reusable components, and trained junior developers. Built supporting backend services with SpringBoot and Dropwizard.",
        },
      ] as ProjectDetail[],
    },
    {
      title: "Software Engineer",
      company: "ABCplusD, Chimes Pvt Ltd",
      duration: "07/2016 - 01/2018",
      location: "Gurgaon, IN",
      description:
        "Full-stack Developer (Angular and Dropwizard). Tenure: 25 Jul 2016 - 6 Jan 2018.",
      projects: [
        {
          name: "Dauble",
          role: "Team Lead / Software Engineer",
          summary:
            "As a Team Lead, managed a frontend team to build a B2C social media app for artists and collectors using AngularJS. Developed reusable components, set up admin panel, and resolved SEO challenges with prerender.io. As a Software Engineer, created user-facing AngularJS apps, reusable components, and trained junior developers. Built supporting backend services with SpringBoot and Dropwizard.",
          techStack: ["AngularJS", "SpringBoot", "Java", "Dropwizard"],
        },
      ] as ProjectDetail[],
    },
    {
      title: "Software Engineer",
      company: "Kwench - Employee Engagement Redefined (Thanks by O.C.Tanner)",
      duration: "07/2015 - 07/2016",
      location: "Noida, IN",
      description:
        "Full-stack Developer (Angular and Dropwizard). Tenure: 13 Jul 2015 - 22 Jul 2016.",
      projects: [
        {
          name: "KFit",
          role: "Software Engineer",
          summary:
            "A B2B app for employees of different companies to get rewarded for completing fitness challenges.",
          responsibilities: [
            "Contributor as an AngularJS developer.",
            "Worked with the backend team and designed and developed RESTful APIs using Dropwizard (Java)",
          ],
          techStack: ["AngularJS", "Java", "Dropwizard"],
        },
      ] as ProjectDetail[],
    },
  ],
  education: [
    {
      degree: "B.Tech. - Information Technology",
      institution: "Dr. A P J Abdul Kalam Technical University",
      years: "2011 - 2015",
      score: 65,
      subjects: [
        "Data Structures",
        "Algorithms",
        "Operating Systems",
        "Computer Networks",
        "Database Management Systems",
      ],
    },
    {
      degree: "12th - ISC Board",
      institution: "City Montessori School, Lucknow",
      years: "2011",
      score: 91,
      subjects: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "English",
        "Computer Science",
      ],
    },
    {
      degree: "10th - ICSE Board",
      institution: "City Montessori School, Lucknow",
      years: "2009",
      score: 95,
      subjects: [
        "Mathematics",
        "Science",
        "Social Studies",
        "English",
        "Hindi",
        "Computer Science",
      ],
    },
  ] as EducationEntry[],
  skills: [
    "ReactJS",
    "JavaScript",
    "TypeScript",
    "NextJS",
    "GraphQL",
    "NodeJS",
    "Redux",
    "Redux-Saga",
    "Serverless Stack",
    "Test Driven Development",
    "Agile Methodologies",
    "Scrum Framework",
  ],
  projects: [
    {
      name: "GraphQL Federation Starter (cross-platform)",
      year: 2021,
      link: "https://github.com/adarshsingh1407/federation-cross-platform",
      description:
        "Starter pack for cross-platform Apollo Federation GraphQL setup using SpringBoot and Node servers",
    },
    {
      name: "Audio Player (React)",
      year: 2017,
      link: "https://github.com/adarshsingh1407/nextjs-audio-player",
      description: "Audio Player Component for React Applications",
      stars: 3,
    },
    {
      name: "PWA Boilerplate (React)",
      year: 2017,
      link: "https://github.com/adarshsingh1407/neo-cra",
      description: "Server-rendered, progressive web application starter",
      stars: 11,
      forks: 4,
    },
  ],
  certifications: [
    {
      title: "Certified ScrumMaster® (CSM®)",
      issuer: "Scrum Alliance, Inc.",
      validity: "06/2023 - 06/2025",
      image: "/csm-2.png",
    },
  ],
  achievements: [
    {
      title: "Senior Discipline In-Charge - Student Council",
      organization: "CMS, Lucknow",
      year: "2009 - 2011",
      image: "/cms.png",
    },
    {
      title:
        "Qualified State Round of NTSE (National Talent Search Examination)",
      organization:
        "NCERT (National Council of Educational Research and Training)",
      year: 2009,
      image: "/ntse.png",
    },
  ],
} as const;
