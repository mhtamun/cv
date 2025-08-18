export const portfolioData = {
  navItems: [
    { label: "Summary", href: "#summary" },
    { label: "Experiences", href: "#experiences" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Interests", href: "#interests" },
  ],

  hero: {
    name: "Maruf Hossain",
    title: "Senior Software Engineer",
    description:
      "Senior Software Engineer passionate about designing scalable frontend focused fullstack systems and leading cross-functional teams. Seeking impactful roles in SaaS or product-based companies.",
    ctaButtons: {
      primary: {
        text: "View Experiences",
        href: "#experiences",
        icon: "fa-briefcase",
      },
      secondary: {
        text: "See Projects",
        href: "#projects",
        icon: "fa-project-diagram",
      },
    },
  },

  summary: {
    textBig:
      "As a Senior Software Engineer with over nine years of experience, I specialize in building scalable, frontend focused full-stack web applications using JavaScript and TypeScript. My expertise is centered around the React and Node.js ecosystems, where I use frameworks like Next.js and Nest.js to create robust, user-first solutions with a focus on clean, performant code. Throughout my career, I've led development on enterprise SaaS platforms, e-commerce systems, and mission-critical government applications. I have a strong background in designing both microservice and microfrontend architectures, which has been key to improving team velocity and system scalability. I enjoy collaborating closely with product teams, mentoring fellow engineers, and championing modern development practices like CI/CD and test-driven development.",
    textSmall:
      "Senior Software Engineer with nine years of experience building scalable web applications using JavaScript and TypeScript. Skilled in React, Node.js, Next.js, and Nest.js, with a track record of leading projects across SaaS, e-commerce, and government platforms. Strong background in microservices, microfrontends, and modern practices like CI/CD and testing, with experience mentoring teams and working closely with product managers.",
    contactInfo: {
      location: "Dhaka, Bangladesh",
      email: "mhtamun@gmail.com",
      phone: "+8801671010143",
      github: "https://github.com/mhtamun",
      portfolio: "https://mhtamun.github.io",
      linkedin: "https://linkedin.com/in/mhtamun",
    },
  },

  experiences: {
    items: [
      {
        title: "Senior Software Engineer L-III",
        company: "Vivasoft Limited",
        period: "March 2024 – Present",
        description: [
          "Led the frontend architecture of the PiHr SaaS platform using React, microfrontends, and C# integration, resulting in a 40% improvement in development speed.",
          "Currently developing scalable UI components for the Eniro project in a monorepo setup (Turborepo, Next.js, Tailwind).",
          "Focused on system maintainability and frontend performance.",
        ],
      },
      {
        title: "Tech Lead (Part-time Consultant)",
        company: "Ahsan Technologies Ltd.",
        period: "December 2020 – Present",
        description: [
          "Designed system architecture and managed a distributed team using Agile methodologies.",
          "Mentored junior developers and implemented CI/CD pipelines for client projects using React.js, NestJS, and PostgreSQL.",
          "Championed adoption of scalable backend patterns and clean code principles.",
        ],
      },
      {
        title: "Senior Software Engineer",
        company: "Dynamic Solution Innovators Ltd.",
        period: "November 2016 – March 2024",
        description: [
          "Delivered mission-critical applications for enterprise clients.",
          "Increased codebase stability by introducing TDD and refactoring legacy modules.",
          "Collaborated closely with product teams on solution architecture and business logic.",
          "Spearheaded team-wide adoption of Agile best practices.",
        ],
      },
      {
        title: "Junior Software Engineer",
        company: "Dcastalia Limited",
        period: "September 2016 – November 2016",
        description: [
          "Built Android applications for an educational platform using MVP architecture.",
          "Applied TDD and used Dagger, Room, Retrofit, and RxJava to ensure scalable and testable code.",
        ],
        isHidden: true,
      },
      {
        title: "Junior Software Engineer",
        company: "AB Software Limited",
        period: "October 2015 – August 2016",
        description: [
          "Developed a restaurant review mobile app using PHP for the backend and Java for Android.",
          "Ensured intuitive user experience through iterative UI improvements and bug fixing.",
        ],
        isHidden: true,
      },
      {
        title: "Junior Web Developer (Intern)",
        company: "Aparajito Enabler Limited",
        period: "November 2014 – January 2016",
        description: [
          "Contributed to client websites with a focus on front-end user experience.",
          "Worked closely with designers to build responsive, user-friendly UIs.",
        ],
        isHidden: true,
      },
    ],
  },

  skills: {
    categories: [
      {
        title: "Programming Languages",
        mainSkills: [
          { name: "JavaScript (TypeScript)" },
          { name: "PHP" },
          { name: "Java" },
          { name: "HTML" },
          { name: "CSS" },
        ],
        otherSkills: [
          { name: "Kotlin" },
          { name: "Svelte" },
          { name: "Vue.js" },
          { name: "Preact.js" },
        ],
      },
      {
        title: "Frontend",
        mainSkills: [
          { name: "React.js" },
          { name: "Next.js" },
          { name: "Vite" },
          { name: "Microfrontends" },
        ],
        otherSkills: [
          { name: "Redux" },
          { name: "Styled Components" },
          { name: "Formik" },
          { name: "Yup" },
          { name: "Lerna" },
          { name: "GraphQL" },
        ],
      },
      {
        title: "Backend / Server",
        mainSkills: [
          { name: "Node.js" },
          { name: "Hapi.js" },
          { name: "Nest.js" },
          { name: "Express.js" },
          { name: "Prisma" },
          { name: "Mongoose" },
          { name: "Bull (Node.js)" },
          { name: "Nginx" },
        ],
        otherSkills: [
          { name: "Fastify" },
          { name: "Django" },
          { name: "FastAPI" },
          { name: "Laravel" },
          { name: "Supabase" },
          { name: "Sequelize" },
          { name: "Hibernate" },
          { name: "Spring Boot" },
          { name: "Thymeleaf" },
          { name: "Spring Security" },
          { name: "Jersey" },
          { name: "REST API" },
        ],
      },
      {
        title: "Mobile",
        mainSkills: [
          { name: "Android (Java)" },
          { name: "MVP" },
          { name: "MVVM" },
          { name: "Retrofit" },
          { name: "RxJava" },
          { name: "Dependency Injection" },
        ],
        otherSkills: [{ name: "Cordova" }, { name: "WebView" }],
      },
      {
        title: "Databases",
        mainSkills: [
          { name: "MySQL" },
          { name: "PostgreSQL" },
          { name: "MongoDB" },
          { name: "ElasticSearch" },
          { name: "DynamoDB" },
          { name: "Firebase Realtime Database" },
        ],
        otherSkills: [{ name: "SQLite" }, { name: "MS SQL Server" }],
      },
      {
        title: "DevOps / Cloud / Deployment",
        mainSkills: [
          { name: "Linux" },
          { name: "Docker" },
          { name: "AWS (Cognito, Lambda, IAM, DynamoDB)" },
          { name: "Firebase (Hosting, Notifications, Database)" },
          { name: "CPanel" },
          { name: "phpMyAdmin" },
        ],
        otherSkills: [{ name: "Cloudflare" }, { name: "GCP" }],
      },
      {
        title: "Other Tools / Technologies",
        mainSkills: [
          { name: "Openfire XMPP" },
          { name: "SIP (3CX)" },
          { name: "Bun" },
          { name: "Git" },
          { name: "GitHub" },
        ],
        otherSkills: [
          { name: "Electron" },
          { name: "WebSocket" },
          { name: "Artillery" },
          { name: "Team Management" },
          { name: "Windows Forms" },
          { name: "FlexBox" },
        ],
      },
      {
        title: "Architecture / Methodologies",
        mainSkills: [
          { name: "Microservices" },
          { name: "Microfrontends" },
          { name: "Load Balancing" },
          { name: "Agile" },
          { name: "Scrum" },
          { name: "TDD" },
          { name: "BDD" },
          { name: "Clean Code" },
          { name: "Refactoring" },
        ],
        otherSkills: [],
      },
    ],
  },

  projects: {
    categories: [
      { id: "all", name: "All" },
      { id: "frontend", name: "Frontend" },
      { id: "backend", name: "Backend" },
      { id: "mobile", name: "Mobile" },
      { id: "desktop", name: "Desktop" },
      { id: "fullstack", name: "Full Stack" },
    ],
    items: [
      {
        title: "Eniro",
        description:
          "Built React/Next.js frontend for Eniro, integrating OpenStreetMap and custom mapping with Valhalla and Turf.js for advanced spatial offers.",
        category: "frontend",
        icon: "fa-globe",
        tags: [
          "Next.js",
          "TypeScript",
          "TurboRepo",
          "Tailwind",
          "Zustand",
          "OpenStreetMap",
          "Valhalla",
          "Turf.js",
          "Mapbox",
          "Maplibre",
        ],
        timeline: {
          start: "Apr 2025",
          end: "Present",
        },
        company: "Vivasoft Limited",
        url: "https://eniro.se",
      },
      {
        title: "PiHr",
        description:
          "Led frontend team for PiHr HR SaaS, architecting microfrontend modules with React, TypeScript, and Vite to boost scalability and team velocity.",
        category: "frontend",
        icon: "fa-users-cog",
        tags: [
          "React",
          "TypeScript",
          "Micro-frontend",
          "Vite",
          "Tailwind",
          "React Query",
          "Zustand",
        ],
        timeline: {
          start: "Apr 2024",
          end: "Mar 2025",
        },
        company: "Vivasoft Limited",
        url: "https://mypihr.com",
      },
      {
        title: "RJSC",
        description:
          "Developed core modules for a government registration platform using Java Spring Boot, digitalizing business processes for Bangladeshi citizens.",
        category: "fullstack",
        icon: "fa-building",
        tags: [
          "Spring Boot",
          "Thymeleaf",
          "Java",
          "Spring Security",
          "PostgreSQL",
          "Microservices",
          "Docker",
          "CI/CD",
          "Load Testing",
          "MVC",
        ],
        timeline: {
          start: "Jun 2023",
          end: "Apr 2024",
        },
        company: "Dynamic Solution Innovators Ltd.",
        url: "https://roc.gov.bd",
      },
      {
        title: "SSF App",
        description:
          "Tech lead for secure roster and communication app for Bangladesh SSF, integrating SIP/XMPP for military-grade privacy and reliability.",
        category: "fullstack",
        icon: "fa-phone",
        tags: [
          "Node.js",
          "PostgreSQL",
          "Android",
          "Java",
          "Team Management",
          "Openfire",
          "XMPP",
          "SIP",
          "MVP",
        ],
        timeline: {
          start: "May 2021",
          end: "Jun 2023",
        },
        company: "Dynamic Solution Innovators Ltd.",
      },
      {
        title: "DROBBOO",
        description:
          "Led development of a microservices eCommerce platform with Next.js, Hapi.js, and PostgreSQL; managed deployment and built dynamic admin tools.",
        category: "fullstack",
        icon: "fa-cogs",
        tags: [
          "Node.js",
          "Next.js",
          "React",
          "PostgreSQL",
          "AWS Lambda",
          "Hapi.js",
          "Nest.js",
          "MongoDB",
          "Elasticsearch",
          "Artillery",
          "Microservices",
          "Docker",
          "CI/CD",
          "Load Testing",
        ],
        timeline: {
          start: "Dec 2020",
          end: "Aug 2022",
        },
        company: "Ahsan Technologies Ltd.",
      },
      {
        title: "Tapp Water App",
        description:
          "Developed Android apps for water utilities, enabling mobile monitoring and backend integration with Laravel for rural areas.",
        category: "mobile",
        icon: "fa-water",
        tags: ["Java", "Android", "PHP", "Laravel", "MVP", "Firebase", "Retrofit"],
        timeline: {
          start: "May 2020",
          end: "Sep 2022",
        },
        company: "Other Projects",
      },
      {
        title: "bKash Business App",
        description:
          "Revamped bKash agent app, rewriting legacy code in Java (MVVM) and implementing new UI for improved stability and usability.",
        category: "mobile",
        icon: "fa-mobile-alt",
        tags: ["Java", "Android", "MVVM", "Kotlin", "Coroutines"],
        timeline: {
          start: "Feb 2020",
          end: "Apr 2021",
        },
        company: "Dynamic Solution Innovators Ltd.",
      },
      {
        title: "OpenCRVS",
        description:
          "Built React/TypeScript interfaces for UNDP OpenCRVS, enabling scalable birth/death registration across multiple countries.",
        category: "fullstack",
        icon: "fa-id-card",
        tags: ["Node.js", "Hapi.js", "React", "PostgreSQL", "GraphQL", "Lerna"],
        timeline: {
          start: "Jun 2019",
          end: "Jan 2020",
        },
        company: "Dynamic Solution Innovators Ltd.",
      },
      {
        title: "REAMO",
        description:
          "Developed real estate management system with Node.js, React, and Android; led both web and mobile app development.",
        category: "fullstack",
        icon: "fa-home",
        tags: ["React", "Next.js", "Node.js", "Java", "Android"],
        timeline: {
          start: "Jun 2018",
          end: "May 2019",
        },
        company: "Dynamic Solution Innovators Ltd.",
      },
      {
        title: "Twisker",
        description:
          "Built document editing service with version control using Node.js, GraphQL, and React, enabling collaborative editing.",
        category: "fullstack",
        icon: "fa-file-alt",
        tags: ["Node.js", "GraphQL", "React", "MongoDB"],
        timeline: {
          start: "Apr 2019",
          end: "May 2019",
        },
        company: "Twisker",
      },
      {
        title: "Olwel",
        description:
          "Developed Android and web apps for doctor-patient home visits, using Node.js, Hapi.js, and RethinkDB for real-time data.",
        category: "fullstack",
        icon: "fa-user-md",
        tags: ["Java", "Android", "Node.js", "React", "WebSocket"],
        timeline: {
          start: "Jul 2017",
          end: "Dec 2018",
        },
        company: "Dynamic Solution Innovators Ltd.",
      },
      {
        title: "Shonchoy",
        description:
          "Created Android app and PHP backend for personal finance tracking, supporting daily money management.",
        category: "fullstack",
        icon: "fa-wallet",
        tags: ["Java", "Android", "PHP API", "MVP", "Volley", "Firebase", "Retrofit"],
        timeline: {
          start: "May 2017",
          end: "Dec 2017",
        },
        company: "Other Projects",
      },
      {
        title: "DigiMoney",
        description: "Developed e-cash Android app in Java for digital payments.",
        category: "mobile",
        icon: "fa-money-bill-wave",
        tags: ["Java", "Android"],
        timeline: {
          start: "Jun 2017",
          end: "Sep 2017",
        },
        company: "Dynamic Solution Innovators Ltd.",
      },
      {
        title: "SocialCam",
        description:
          "Built Android app for location-based image sharing using Java, Firebase, and Jersey API backend.",
        category: "mobile",
        icon: "fa-camera",
        tags: [
          "Java",
          "Android",
          "Firebase",
          "Jersey",
          "Google Maps SDK",
          "AWS SDK",
          "MVP",
          "Retrofit",
        ],
        timeline: {
          start: "Nov 2016",
          end: "Jun 2017",
        },
        company: "Dynamic Solution Innovators Ltd.",
      },
      {
        title: "Instant Location Share",
        description:
          "Created Android app for sharing current or event locations, leveraging geocoding and Google Maps SDK.",
        category: "mobile",
        icon: "fa-map-marker-alt",
        tags: [
          "Java",
          "Android",
          "Geocoding",
          "MVP",
          "Volley",
          "Firebase",
          "Scheduler",
          "Google Maps SDK",
        ],
        timeline: {
          start: "Jul 2016",
          end: "Dec 2016",
        },
        company: "Other Projects",
      },
      {
        title: "AUST Routine Automation",
        description:
          "Automated university routine management with a C# desktop app and MySQL storage.",
        category: "desktop",
        icon: "fa-calendar-alt",
        tags: ["C#", "MySQL", "Windows Forms"],
        timeline: {
          start: "Jul 2015",
          end: "Jun 2016",
        },
        company: "Ahsanullah University of Science and Technology",
      },
      {
        title: "Get Menu Card",
        description:
          "Developed Android app to find restaurant menus and nearby places, using Java and cloud data fetching.",
        category: "mobile",
        icon: "fa-utensils",
        tags: [
          "Java",
          "Android",
          "Volley",
          "Google Maps SDK",
          "MVP",
          "Firebase",
          "Dependency Injection",
        ],
        timeline: {
          start: "Oct 2015",
          end: "Jun 2016",
        },
        company: "AB Software Limited",
      },
      {
        title: "Rent Management System",
        description:
          "Built C# desktop app for managing rents and tenants, with MS SQL Server for local storage.",
        category: "desktop",
        icon: "fa-key",
        tags: ["C#", "MS SQL Server", "Windows Forms"],
        timeline: {
          start: "Jul 2015",
          end: "Jul 2015",
        },
        company: "Other Projects",
      },
      {
        title: "School Management System",
        description:
          "Developed C# desktop app to automate school management, using MySQL for local storage.",
        category: "desktop",
        icon: "fa-school",
        tags: ["C#", "MySQL", "Windows Forms"],
        timeline: {
          start: "Jun 2015",
          end: "Dec 2015",
        },
        company: "Other Projects",
      },
      {
        title: "Blood Mates",
        description:
          "Built cross-platform blood donor app using Android WebView, PHP, and JS for real-time matching.",
        category: "fullstack",
        icon: "fa-heartbeat",
        tags: ["Java", "Android", "PHP", "HTML", "CSS", "Bootstrap", "WebView", "JavaScript"],
        timeline: {
          start: "Mar 2015",
          end: "Jun 2015",
        },
        company: "Other Projects",
      },
      {
        title: "Karbar",
        description:
          "Developed eCommerce web app with PHP backend and jQuery/Bootstrap frontend for interactive shopping.",
        category: "fullstack",
        icon: "fa-shopping-cart",
        tags: ["PHP", "jQuery", "Bootstrap", "MySQL"],
        timeline: {
          start: "Jan 2015",
          end: "Jan 2016",
        },
        company: "Aparajito Enabler Limited",
      },
      {
        title: "Shasthjito",
        description:
          "Created medical services web app using PHP, jQuery, and Bootstrap for patient management.",
        category: "fullstack",
        icon: "fa-hospital",
        tags: ["PHP", "jQuery", "Bootstrap", "MySQL"],
        timeline: {
          start: "Nov 2014",
          end: "Dec 2015",
        },
        company: "Aparajito Enabler Limited",
      },
      {
        title: "Traffic Buddy",
        description:
          "Built Android app for real-time street condition sharing, using Java, Google Maps SDK, and REST API.",
        category: "mobile",
        icon: "fa-traffic-light",
        tags: ["Java", "Android", "Google Maps SDK", "Volley", "MVP"],
        timeline: {
          start: "Oct 2014",
          end: "Nov 2014",
        },
        company: "Play It Solution",
      },
      {
        title: "AustLiMS",
        description: "Developed PHP/MySQL library management web app for university libraries.",
        category: "fullstack",
        icon: "fa-book",
        tags: ["HTML", "CSS", "PHP", "MySQL", "Bootstrap", "CodeIgniter"],
        timeline: {
          start: "Apr 2014",
          end: "Jun 2014",
        },
        company: "Ahsanullah University of Science and Technology",
      },
      {
        title: "BlackCat Trip Organizer",
        description:
          "Created Android app for travel budgeting and place tracking, using Java and SQLite.",
        category: "mobile",
        icon: "fa-suitcase",
        tags: ["Java", "Android", "SQLite", "MVP", "OKHTTP"],
        timeline: {
          start: "Oct 2013",
          end: "Jan 2014",
        },
        company: "Ahsanullah University of Science and Technology",
      },
    ],
  },

  education: {
    items: [
      {
        degree: "B.Sc. in Computer Science and Engineering",
        institution: "Ahsanullah University of Science and Technology",
        period: "June 2012 – May 2016",
        icon: "fa-university",
      },
      {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Dhaka College",
        period: "April 2009 – May 2011",
        icon: "fa-school",
      },
      {
        degree: "Secondary School Certificate (SSC)",
        institution: "Tanjimul Ummah Cadet Madrasah",
        period: "January 2007 – March 2009",
        icon: "fa-school",
      },
    ],
  },

  interests: {
    items: [
      {
        name: "Home Automation",
        icon: "fa-home",
      },
      {
        name: "Robotics",
        icon: "fa-robot",
      },
      {
        name: "Artificial Intelligence",
        icon: "fa-brain",
      },
      {
        name: "Video Games",
        icon: "fa-gamepad",
      },
      {
        name: "Traveling",
        icon: "fa-plane",
      },
    ],
  },

  // reference
  footer: {
    name: "Maruf Hossain",
    title: "Senior Software Engineer",
    social: {
      linkedin: "mhtamun",
      github: "mhtamun",
      email: "mhtamun@gmail.com",
    },
  },
};
