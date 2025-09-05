import image from './WLU-Hero.png';
import imageStartup from './startupWLU.avif';
import Blueprint from './Blueprint.jpg';
import Lazsicc from './Lazsicc.png';
import Lazsoc from './Lazsoc.png';
import City from './CityGuessr.png';
import pop from './PopulationVI.png';

const projectData = [
  { 
    id: "Uw Blueprint", 
    name: "", 
    category: "cs", 
    image: Blueprint,
    softskills: ["Agile Collaboration", "Teamwork", "Communication"],
    technicalskills: ["TypeScript", "React.js", "Node.js/Express", "PostgreSQL", "Docker"],
    description: "Worked in a 15-member agile team at UW Blueprint to build a full-stack volunteer management system for the Oakville & Milton Humane Society. My main contributions included developing secure email-based authentication and an intuitive filter-search feature, allowing 500+ volunteers to easily find and sign up for opportunities. I implemented backend routes in Express, optimized PostgreSQL queries for performance, and added caching to deliver sub-second results. Additionally, I containerized the entire app with Docker, reducing developer onboarding time by 80% and improving CI/CD workflows, which sped up feature delivery significantly.",
    link: "https://uwblueprint.org/about",
    View: "View Project"
  },
  { 
    id: "LazSoc", 
    name: "", 
    category: "cs", 
    image: Lazsoc, 
    softskills: ["Leadership", "Process Optimization", "Cross-Functional Collaboration"],
    technicalskills: ["Node.js", "React.js", "Contentful CMS", "PayPal API", "Google Apps Script"],
    description: "Led the technical development of a modular, React + Contentful-based website for 2,000+ business students as VP of Tech at LazSoc. Designed the site for ease of maintenance, enabling non-technical team members to update content quickly. Additionally, automated the reimbursement process by integrating Google Forms, Sheets, and PayPal API to streamline approvals and cut 4+ hours of manual processing weekly. This improvement significantly improved turnaround time for student reimbursements and reduced administrative overhead.",
    link: "https://lazsoc.ca",
    View: "View Project"
  },
  { 
    id: "CityGuessr", 
    name: "", 
    category: "cs", 
    image: City, 
    softskills: ["Creativity", "Problem-Solving", "Backend Design"],
    technicalskills: ["React.js", "Node.js/Express", "SQLite", "OpenAI GPT API"],
    description: "Built a full-stack city-guessing game inspired by GeoGuessr. The game fetches a random city from a SQLite database and uses the OpenAI API to generate a unique riddle describing that city. Players guess the city name and receive feedback based on calculated distances between their guess and the correct answer. Implemented backend endpoints to handle city selection, riddle generation, and distance computation. Designed a responsive frontend with React that delivers smooth gameplay and interactive feedback.",
    link: "https://github.com/mehul-cityguessr",
    View: "View Project"
  },
  { 
    id: "Worldpop", 
    name: "World Population Visualizer", 
    category: "cs", 
    image: pop, 
    softskills: ["Data Analysis", "Visualization", "Attention to Detail"],
    technicalskills: ["D3.js", "React.js", "CSS/SCSS", "Python", "SQL"],
    description: "Developed an interactive React+D3 application to visualize population growth trends from 1 CE to 2025. Cleaned, normalized, and indexed 50,000+ population records across countries and regions using Python and SQL. Implemented efficient aggregations with caching to achieve sub-second load times even for high-volume data. Built a dynamic timeline control to allow users to scrub through time, with the map re-rendering smoothly to show population boxes (1M people = 1 box) stacked geographically. Created custom D3 animations for smooth transitions between years, making the visualization highly engaging and educational.",
    link: "https://github.com/mehul-worldpop",
    View: "View Project"
  },
  { 
    id: "Email-Script", 
    name: "Automated Email Outreach Script", 
    category: "cs", 
    image: image,
    softskills: ["Process Automation", "Efficiency Improvement"],
    technicalskills: ["Python", "Gmail API", "Excel", "Task Scheduling"],
    description: "Created a Python automation script for Startup Laurier’s Wintership program that read a list of 100+ employer contacts from Excel, generated personalized emails, and sent them automatically through the Gmail API with a standardized attachment. Added error handling, logging, and a scheduling function to avoid exceeding Gmail rate limits. This automation increased outreach efficiency by 90% and freed organizers to focus on relationship building instead of repetitive emailing.",
    link: "https://github.com/mehul-email-script",
    View: "View Project"
  },
  { 
    id: "Lazsicc", 
    name: "", 
    category: "business", 
    image: Lazsicc, 
    softskills: ["Technical Leadership", "Event Coordination", "Team Management"],
    technicalskills: ["Event Platform Management", "Live-Streaming", "Slack Automation"],
    description: "As VP of Technology for LazSICC, managed all technical aspects of the case competition, including live-streaming setup, event platform infrastructure, and participant communication workflows. Led the tech team to create automated email flows and Slack integrations that kept 200+ competitors, judges, and volunteers aligned in real time. Provided live troubleshooting support during the competition to ensure a seamless experience for all participants.",
    link: "https://lazsicc.com",
    View: "View Project"
  },
  { 
    id: "AOT-Cof", 
    name: "AOT: The Cost of Freedom", 
    category: "business", 
    image: image,
    softskills: ["Research", "Team Collaboration", "Creative Problem Solving"],
    technicalskills: ["Weebly CMS", "Content Writing", "UX Design"],
    description: "Collaborated with a team to create a themed website analyzing Attack on Titan’s narrative from a philosophical and socio-political perspective. Conducted in-depth research, wrote content sections, and built the site using Weebly CMS. Focused on clean, accessible design and an intuitive reading flow to present complex topics in an engaging format.",
    link: "https://aot-thecostoffreedom.weebly.com/134.html",
    View: "View Project"
  },
  { 
    id: "WebsiteCeption", 
    name: "Portfolio Website", 
    category: "cs", 
    image: image,
    softskills: ["Design Thinking", "Front-End Development"],
    technicalskills: ["React.js", "JavaScript", "Tailwind CSS"],
    description: "Built a personal portfolio website to showcase my technical and business projects in one place. Implemented a component-based structure with React, dynamically rendering projects from a data array. Designed a minimal, modern interface with Tailwind CSS for responsiveness across devices. Added custom animations and hover effects to improve user experience.",
    link: "http://localhost:3000/",
    View: "View Project"
  },
  { 
    id: "Startup", 
    name: "", 
    category: "business", 
    image: imageStartup,
    softskills: ["Project Management", "Marketing", "Networking"],
    technicalskills: ["Event Planning Tools", "CRM Systems", "Social Media Marketing"],
    description: "Worked as part of the Startup Laurier executive team to foster entrepreneurship across campus. Organized workshops, pitch competitions, and networking events that connected aspiring entrepreneurs with mentors and investors. Supported marketing campaigns, managed social media content calendars, and optimized internal processes. Collaborated with startups on go-to-market strategies and provided feedback on business models, strengthening Laurier’s entrepreneurial ecosystem.",
    link: "https://artyomg.com/",
    View: "View Project"
  },
];

export default projectData;
