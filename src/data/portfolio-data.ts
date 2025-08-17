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
          "Developed the frontend for Eniro using React, Next.js, and Tailwind within a monorepo (Turborepo) structure. Integrated OpenStreetMap and custom mapping using Valhalla and Turf.js to visualize spatial offers, replacing Google Maps with full control and customization.",
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
          "Led the frontend team for PiHr, a microfrontend-based HR software used by 500+ businesses in Bangladesh. Architected and developed key modules using React, TypeScript, and Vite, improving scalability and team velocity.",
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
          "Contributed to a government-funded registration platform under USAID. Worked as a full-stack Java Spring Boot developer on a monolithic architecture for digitalizing RJSC’s business registration processes for Bangladeshi citizens.",
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
          "Served as tech lead for a confidential roster management and secure communication app for Bangladesh’s Special Security Force (SSF). Integrated SIP-based voice/video calling and secure messaging using Openfire XMPP. Focused on privacy, military-grade security, and reliability.",
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
          "Spearheaded the development of DROBBOO, a scalable microservices-based eCommerce platform. Built with Next.js (frontend), Hapi.js (backend), MongoDB, PostgreSQL, and Elasticsearch. Managed full deployment pipeline and conducted load testing with Artillery. Design the core system with up to date technologies and frameworks as well as web services for communication between microservices. Created dynamic form engine for back office panel web applications.",
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
          "Developed two Android apps (Java) for water utility providers and rural consumers. Supported backend data integration with Laravel. Enabled mobile communication and monitoring in underserved areas.",
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
          "Revamped the Android agent app for bKash—Bangladesh’s leading fintech. Rewrote legacy code using MVVM in Java, resolving stability issues and implementing the new UI based on updated design specs.",
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
          "Worked on UNDP-funded OpenCRVS as a frontend developer. Built birth and death registration interfaces using React, TypeScript, Tailwind, GraphQL, and Lerna in a modular, scalable system deployed in multiple countries.",
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
          "REAMO is a startup for real estate management. Developed the system is based on Node.js using Hapi for API framework. Developed the customer facing web app using React.js, Next.js, Redux.js and many libraries and for styling and design used Styled-Components, FlexBox, Formik with Yup. Developed and lead the customer facing Android app where followed the best practices as of structure like MVP. Retrofit for remote data fetching. Room for local data fetching. Developed the admin facing panel which is a web application using Java, Spring Boot, Hibernate and MySQL as database.",
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
          "A software program which is an Document Editing Service (like Dropbox Paper) with version control (like GitHub). The back-end system is based on GraphQL server in Node.js with Apollo Server. The customer facing web app Developed using Node.js, React.js, HTML, CSS, MongoDB.",
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
          "Olwel is an innovative startup that connects patients to their nearest doctors who would visit the patient at their house. Developed the Android apps and redesigned the both app one for patient and another for doctor. Technology stacks are Java, Android things for frontend and the backend on Node.js, using Hapi.js as framework. The NoSQL database RethinkDB is used for storage. Heavy use of WebSocket. The operator frontend is an Electron based app written with React, Redux.",
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
          "Shonchoy an Android application for people to keep track of money in daily life. Developed the android app using Java, Android as Framework. Developed the backend using PHP.",
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
        description: "An e-cash app developed using Java, Android.",
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
          "SocialCam is an innovative app that facilitates people to share images in certain location within range and within saved contact. Developed the android app in Java using Firebase SDK for store images and push notification. Developed backend in Java using Jersey as the API framework.",
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
          "An app for easily sharing your current location to someone, or a invitation venue to individuals. Using android and its features like Geocoders for getting latitudes, longitudes and many more.",
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
          "A windows desktop application that automate the routine management of AUST using C# as language and MySQL for local storage.",
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
          "An android app that facilitates people to find restaurant menu card, search nearby restaurants. Designed and developed in Java, Android. Used volley for fetching data from cloud server.",
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
          "Architected, designed and developed A windows software for manage rents, tenants management, saving the account and many more using C# and MS SQL Server for storage locally.",
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
          "Architected, designed and developed a windows desktop application that automate the management of school using C# and MySQL for storage locally.",
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
          "Developed a cross app using android webView component where render UI from server. Used JS to interact with android and web app. Web app developed using PHP as language and JS as client side interactions. An app that facilitates list down the people who interested to give blood and who wanted to search blood. HTML CSS Bootstrap for UI",
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
          "Designed and recreated a eCommerce web app using PHP for server side programming and JavaScript using JQuery framework for client side interactive things, HTML, CSS, Bootstrap for UI styling.",
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
          "Designed and recreated a web app for medical services using PHP for server side programming and JavaScript using JQuery framework for client side interactive things, HTML, CSS, Bootstrap for UI styling.",
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
          "Designed and Developed an android app that facilitates people to know the recent possible condition of street by sharing pin point on map. Using java as language, Google Map SDK for mapping. Used volley for service to get data from REST API. Used Shared Preference for keep session as user credentials.",
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
        description:
          "Worked on PHP to made a library management web app for university library. Using MySQL as storage.",
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
          "An android app that facilitates travel budget tracking, checked-in place tracking, to do things using Java. The SQLite is used for local database.",
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
