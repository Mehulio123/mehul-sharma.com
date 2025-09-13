import image from './WLU-Hero.png';
import imageStartup from './startupWLU.avif';
import Blueprint from './Blueprint.jpg';
import Lazsicc from './Lazsicc.png';
import Lazsoc from './Lazsoc.png';
import Citylogo from './CityGuessrlogo.png';
import CityBanner from './CityGuessr.png';
import pop from './PopulationVI.png';
import me from './mehu.png';
import cof from './coffy.png';
const projectData = [
  { 
    id: "Uw Blueprint", 
    name: "", 
    category: "cs", 
    image: Blueprint,
    banner: Blueprint,
    softskills: ["Agile Collaboration", "Teamwork", "Communication"],
    technicalskills: ["TypeScript", "React.js", "Node.js/Express", "PostgreSQL", "Docker"],
description: [
    ["What is Blueprint?", 
        "Blueprint is a non-profit, student-led organization at the University of Waterloo that partners with non-profits and charities to build meaningful software solutions. The goal is to help organizations that often don’t have the budget or technical expertise to develop custom tools, so student developers and designers collaborate to create real-world products that directly benefit communities. I personally worked on the Hamilton and Oakville Humane Society project, which involved building a volunteer management platform to streamline scheduling, communication, and task tracking for their team of 500+ volunteers."],
    ["My Role", 
        "I worked as a Software Developer on a cross-functional team of 20+ developers, designers, and product managers. Our project focused on building a volunteer management platform for a non-profit client that needed a better way to track, schedule, and communicate with their volunteers. My specific contributions spanned both the front end and back end: on the front end, I used React.js to create intuitive, accessible user interfaces that made it easier for volunteers and coordinators to interact with the platform; on the back end, I contributed to API development in Node.js and Express, ensuring that data was passed efficiently and securely between the client and server. I collaborated closely with designers to translate mockups into code and with other developers to ensure features were integrated smoothly across the stack."],
    ["Technologies Used", 
        "The tech stack included React.js for building reusable UI components, Node.js and Express for server-side logic and API development, and PostgreSQL for database management. We used Docker to containerize the application for consistent deployment across environments, and GitHub for version control and team collaboration. This setup gave me hands-on experience with full-stack web development in a professional-style workflow."],
    ["Challenges Faced", 
        "A key challenge was integrating the front end with the back end in a way that was seamless for the user. For example, handling asynchronous data fetching from the database and ensuring the UI updated smoothly required debugging and coordination across multiple parts of the stack. Another challenge was working in a large team, merging code, resolving conflicts, and maintaining a consistent code style forced me to become much more disciplined with Git workflows and communication. These experiences improved my ability to contribute to larger-scale, collaborative codebases."],
    ["Outcome", 
        "The final product was a fully functional volunteer management platform that the client could immediately deploy. The tool simplified tasks like volunteer scheduling, tracking participation, and sending updates, making operations significantly more efficient. The platform is now actively used by over 500 volunteers, directly improving the organization’s ability to engage with its community. For me, the experience reinforced not only technical skills in full-stack development but also the importance of building software that has a real, positive impact."]
    ],

    link: "https://uwblueprint.org/about",
    View: "View Project"
  },
  { 
    id: "LazSoc", 
    name: "", 
    category: "cs", 
    image: Lazsoc, 
    banner: Blueprint,
    softskills: ["Leadership", "Process Optimization", "Cross-Functional Collaboration"],
    technicalskills: ["Node.js", "React.js", "Contentful CMS", "PayPal API", "Google Apps Script"],
    description:
    [
        ["What is LazSoc?",
        "LazSoc, or the Lazaridis Students’ Society, is the official student government representing over 2,000 business and economics students at Wilfrid Laurier University. It organizes academic, social, and professional events, manages club funding, and acts as the main liaison between students and the university administration. As such, LazSoc requires strong communication tools and efficient internal processes to serve its large student body effectively."],
        ["My Role",
        "I served as member of the Tech Portfolio on LazSoc’s executive team. My main responsibility was to design, develop, and maintain the society’s technical infrastructure. This included building a modular, React-based website powered by Contentful as a headless CMS. By structuring the website this way, I enabled non-technical executives to update content, like event announcements or resources, without needing coding knowledge, making the platform far more sustainable for future teams."],
        ["Technologies Used",
        "For the website, I used React.js to build a modular and responsive front end, while integrating Contentful as a headless CMS. This combination allowed for easy content management, so executives without technical knowledge could update pages quickly and reliably. Separately, for the reimbursement automation system, I used Google Forms to collect requests, Google Sheets to track and validate submissions, and the PayPal API to automate payment processing. By keeping these systems distinct, I was able to optimize each one for its specific use case while still reducing overall administrative overhead."],
        ["Challenges Faced",
        "One challenge was balancing technical scalability with usability. While I could build advanced tools, the real test was making sure that future LazSoc executives, many without a technical background, could easily update and maintain them. Another challenge was automating financial processes in a way that complied with school and club policies, which required careful testing and iteration to ensure accuracy and reliability of reimbursements."],
        ["Outcome",
        "The new website became the central hub for over 2,000 students to access event information, resources, and club updates, while also empowering non-technical executives to manage content independently. The reimbursement automation saved the finance team more than 4 hours of manual work each week, accelerating turnaround time for student reimbursements and improving transparency. These improvements reduced administrative overhead, improved student experience, and created a stronger digital foundation for LazSoc going forward." ]],
    link: "https://lazsoc.ca",
    View: "View Project"
  },
  { 
    id: "CityGuessr", 
    name: "", 
    category: "cs", 
    image: Citylogo, 
    banner: CityBanner,
    softskills: ["Creativity", "Problem-Solving", "Backend Design", "API Integration"],
    technicalskills: ["React.js", "Node.js/Express", "SQLite", "OpenAI GPT API", "Axios", "Geolocation", "JavaScript", "CSS/SCSS", "HTML", "Git"],
    description: [
        ["What is City Guessr?",
            "City Guessr is a full-stack game I built, inspired by GeoGuessr, where players try to identify a random city based on a riddle-style clue. Unlike traditional map-based guessing, the game uses AI-generated riddles to describe cities, making it both a test of geography knowledge and creative problem-solving."],
        ["My Role",
            "I designed and built the game end-to-end, from the backend logic to the interactive frontend. On the backend, I set up a SQLite database of global cities and created endpoints that fetch a random city, generate a unique riddle using the OpenAI API, and calculate distance feedback when players make guesses. On the frontend, I built a responsive React application with an intuitive UI for entering guesses, receiving hints, and viewing results."],
        ["Technologies Used",
            "The backend was built with Node.js and Express, using SQLite as the database to store and randomly select cities. I integrated the OpenAI API to dynamically generate riddles that describe the selected city in creative ways. On the frontend, I used React for state management and UI, focusing on smooth interactivity and feedback. Axios was used for API calls, and the distance calculation logic was implemented to give players real-time accuracy feedback."],
        ["Challenges Faced",
            "One challenge was designing riddles that were challenging but fair, since the OpenAI API sometimes generated clues that were too vague or too easy, I had to experiment with prompt engineering and filtering to keep gameplay fun. Another challenge was implementing accurate distance calculations between cities, which required working with geographic coordinates and converting them into meaningful feedback for players. Ensuring the game stayed responsive and didn’t lag when fetching riddles or checking guesses was another technical hurdle."],
        ["Outcome",
            "The final product is a functional, interactive game that provides an engaging twist on city-guessing. Players can test their geography knowledge while enjoying riddles generated in real time. Building City Guessr gave me experience in full-stack development, API integration, and prompt engineering, while also letting me create a unique project that blends AI, databases, and game design. The project stands out as a fun, creative showcase of both technical skills and user-focused design."]],
    link: "https://github.com/mehul-cityguessr",
    View: "View Project"
  },
  { 
    id: "Worldpop", 
    name: "World Population Visualizer", 
    category: "cs", 
    image: pop, 
    banner: Blueprint,
    softskills: ["Data Analysis", "Visualization", "Attention to Detail"],
    technicalskills: ["D3.js", "React.js", "CSS/SCSS", "Python", "SQL"],
   description: [
    ["What is the World Population Visualizer?",
        "The World Population Visualizer is an interactive data visualization tool designed to showcase global population growth trends from the year 1 CE through 2025. The application uses a world map where each country or region is represented by colored population blocks, with each block representing one million people. As users scrub through the timeline, they can observe population growth, migration patterns, and regional demographic shifts in an engaging, visual way."
    ],
    ["My Role",
        "I designed and built the application from scratch, handling the data processing, backend setup, and frontend visualization. I cleaned and normalized more than 50,000 historical and modern population records using Python and SQL, ensuring accuracy across multiple regions and centuries. I then developed the interactive frontend in React and implemented D3.js to create custom animations and visualizations. The system was optimized with caching and efficient data aggregation so that the app could load and render smoothly even with very large datasets."
    ],
    ["Technologies Used",
        "The frontend was built with React.js for modular UI components, paired with D3.js for advanced data visualization and animations. For data cleaning and preparation, I used Python (Pandas, NumPy) and SQL to normalize and structure the dataset. The backend services leveraged Node.js and Express to serve the processed data efficiently, while caching mechanisms ensured sub-second responses for timeline changes. Styling was done with SCSS to maintain a consistent and clean dark-themed interface."
    ],
    ["Challenges Faced",
        "One of the main challenges was efficiently handling such a massive dataset (50,000+ records) without creating performance bottlenecks. Optimizing D3 rendering so that transitions were smooth when moving across hundreds of years was particularly complex. Another challenge was creating intuitive controls for users, such as a timeline scrubber and continent filters, while keeping the UI minimal and educational. Finally, ensuring that blocks representing population scaled properly across all continents required careful balancing of data accuracy and visualization clarity."
    ],
    ["Outcome",
        "The final application is a highly interactive and visually engaging tool that makes population data both accessible and educational. It enables users to explore demographic trends over two millennia, filter by continent, and visually grasp how global population distribution has shifted. The project demonstrates my ability to combine data engineering, backend efficiency, and frontend visualization into a single cohesive product. It’s a strong example of my skills in building end-to-end data-driven applications."]],
    link: "https://github.com/mehul-worldpop",
    View: "View Project"
  },
  { 
    id: "Email-Script", 
    name: "Automated Email Outreach Script", 
    category: "cs", 
    image: image,
    banner: Blueprint,
    softskills: ["Process Automation", "Efficiency Improvement"],
    technicalskills: ["Python", "Gmail API", "Excel", "Task Scheduling"],
    description: [
    ["What is the Project?", 
        "The Automated Email Outreach Script was designed to streamline Startup Laurier’s Wintership employer outreach process. Instead of manually drafting and sending over 100 personalized emails with attachments, the script automated the entire workflow."],
    
    ["My Role", 
        "I independently designed and implemented the script in Python, integrating the Gmail API to handle email delivery and using Excel as the data source for employer information. I also added logging and error-handling features to ensure reliable execution."],
    
    ["Impact", 
        "This automation cut the time required for outreach by 90%. What used to take organizers several hours of repetitive emailing was reduced to a few minutes of setup and script execution. This allowed the team to focus on higher-value tasks like relationship building with employers and improving the program."],
    
    ["Technologies Used", 
        "Python, Gmail API, Excel integration, and task scheduling for timed runs."]
    ],
    link: "https://github.com/mehul-email-script",
    View: "View Project"
  },
  { 
    id: "Lazsicc", 
    name: "", 
    category: "business", 
    image: Lazsicc,
    banner: Blueprint, 
    softskills: ["Technical Leadership", "Event Coordination", "Team Management"],
    technicalskills: ["Event Platform Management", "Live-Streaming", "Slack Automation"],
 description: [
  ["What is LazSICC?", 
    "LazSICC (Lazaridis International Case Conference) is one of the largest student-run international case competitions in Canada, bringing together top business students from around the world to compete in solving real-world business problems. The event spans multiple days and involves 200+ competitors, judges, and volunteers."],
  
  ["My Role", 
    "As VP of Technology, I led all technical operations for the competition. This included setting up and managing the live-streaming infrastructure, configuring the event platform, and building automated workflows to streamline communication and scheduling."],
  
  ["Key Contributions", 
    "I developed automated email pipelines and Slack integrations to ensure real-time updates for competitors, judges, and staff. These tools reduced the risk of miscommunication during the fast-paced event and saved the organizing team several hours of manual coordination."],
  
  ["Challenges Faced", 
    "Coordinating a hybrid event with international participants required ensuring that technology worked seamlessly across time zones and devices. I also had to troubleshoot live issues under pressure, such as stream interruptions or delayed notifications, while keeping the event running smoothly."],
  
  ["Outcome", 
    "The competition ran seamlessly with no major technical issues, receiving positive feedback from both participants and sponsors. The automated systems I built not only improved communication but also set a precedent for future organizing teams, making LazSICC’s technical operations more efficient and scalable."]
],
  link: "https://lazsicc.com",
    View: "View Project"
  },
  { 
    id: "AOT-Cof", 
    name: "AOT: The Cost of Freedom", 
    category: "business", 
    image: cof,
    banner: Blueprint,
    softskills: ["Research", "Team Collaboration", "Creative Problem Solving"],
    technicalskills: ["Weebly CMS", "Content Writing", "UX Design"],
    description: [
  ["What is AOT: The Cost of Freedom?", 
    "AOT: The Cost of Freedom was a collaborative project that explored the anime Attack on Titan through a socio-political, philosophical, and ethical lens. The goal was to analyze themes of freedom, power, and morality in a way that was both academically rigorous and accessible to a wider audience."],

  ["My Role", 
    "I worked as part of a small creative team to research, design, and build the digital platform for the project. My main focus was developing a clean and engaging website using Weebly CMS, where we could publish our analysis and make the content visually appealing and easy to navigate."],

  ["Research & Content Creation", 
    "I conducted in-depth research on specific themes within the story—such as cycles of violence, the burden of leadership, and the ethics of freedom—and co-authored analytical pieces that drew parallels between the fictional world and real-world political theory. I also ensured that complex arguments were written in a way that was clear, digestible, and compelling for both fans and casual readers."],

  ["Design & User Experience", 
    "On the technical side, I focused on building a user-friendly reading flow. This meant organizing sections of the site logically, applying accessible design principles, and using visuals and layouts that complemented the tone of the content. The site emphasized readability, with consistent formatting and navigation that allowed readers to explore themes intuitively."],

  ["Outcome", 
    "The final website successfully combined thoughtful research with engaging design, creating an experience that was both educational and interactive. It received positive feedback from peers and faculty for its originality, depth of analysis, and clarity of presentation. The project demonstrated my ability to merge creative storytelling with digital design and collaborative research."]
],
    link: "https://aot-thecostoffreedom.weebly.com/134.html",
    View: "View Project"
  },
  { 
    id: "WebsiteCeption", 
    name: "Porfolio Website", 
    category: "cs", 
    image: me,
    banner: Blueprint,
    softskills: ["Design Thinking", "Front-End Development"],
    technicalskills: ["React.js", "JavaScript", "Tailwind CSS"],
  description: [
  ["What is the Portfolio Website?", 
    "This is the personal website I designed and built to showcase my projects, experiences, and technical/business background in one centralized space. The goal was to create an interactive, professional platform that reflects my personality while also making it easy for recruiters, peers, and collaborators to explore my work."],

  ["My Role", 
    "I was solely responsible for the design, development, and deployment of the site. This included planning the structure, building reusable components, ensuring responsiveness across devices, and fine-tuning the overall user experience."],

  ["Design & User Experience", 
    "I focused on creating a minimal but modern interface that feels clean and engaging. Using a component-based structure in React, I implemented smooth transitions, hover animations, and a grid-based project layout. I also optimized for readability by balancing typography and spacing, ensuring that content such as project descriptions and images were both professional and approachable."],

  ["Technical Implementation", 
    "The site was built with React.js for modularity and scalability, and styled with Tailwind CSS for rapid, consistent design. I created a dynamic project data array, allowing new projects to be added by updating a single file instead of rewriting components. The site also features custom animations, responsive scaling, and an embedded contact form for direct communication."],

  ["Challenges Faced", 
    "One challenge was balancing aesthetics with performance. I had to carefully optimize image sizes, CSS transitions, and component re-renders to keep the site lightweight while still maintaining a polished, animated look. Another challenge was ensuring responsiveness across all screen sizes, requiring iterative testing on desktop, tablet, and mobile views."],

  ["Outcome", 
    "The final product is a polished and responsive portfolio website that clearly communicates my story and showcases my projects in an engaging format. It demonstrates my ability to merge technical implementation with thoughtful design and has already proven useful as a tool for networking, applications, and personal branding."]],
    link: "http://localhost:3000/",
    View: "View Project"
  },
  { 
    id: "Startup", 
    name: "", 
    category: "business", 
    image: imageStartup,
    banner: Blueprint,
    softskills: ["Project Management", "Marketing", "Networking"],
    technicalskills: ["Event Planning Tools", "CRM Systems", "Social Media Marketing"],
    description: [
    [
        "What is Startup Laurier?",
        "Startup Laurier is a student-led entrepreneurial society at Wilfrid Laurier University that fosters innovation, networking, and venture creation through events and programs."
    ],
    [
        "My Role",
        "As an executive team member, I organized pitch competitions, networking events, and workshops to connect aspiring entrepreneurs with mentors and investors. I also supported marketing and internal process improvements."
    ],
    [
        "Technologies Used",
        "Event planning tools for logistics, CRM systems for managing relationships, and social media platforms for marketing campaigns."
    ],
    [
        "Challenges Faced",
        "Coordinating large-scale events with many moving parts was a challenge, especially balancing sponsor relationships, student needs, and logistics. Keeping everything aligned required strong communication and planning."
    ],
    [
        "Outcome",
        "Our initiatives strengthened Laurier’s entrepreneurial ecosystem by providing real opportunities for students to test their ideas, get mentorship, and connect with the startup community."
    ]
    ],

    link: "https://artyomg.com/",
    View: "View Project"
  },
];

export default projectData;
