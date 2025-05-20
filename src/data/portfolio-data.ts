export const portfolioData = {
  navItems: [
    { label: "Summary", href: "#summary" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Interests", href: "#interests" },
  ],

  hero: {
    name: "Maruf Hossain",
    title: "Senior Software Engineer L-3",
    description:
      "Full-stack developer with 8+ years of experience specializing in Java, JavaScript, and system design.",
    ctaButtons: {
      primary: {
        text: "View Experience",
        href: "#experience",
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
    text: "Highly qualified software developer with 8+ years of experience, a B.Sc. in CSE, and expertise in Java, Android, JavaScript, Node.js, Hapi.js, Nest.js, React.js, and Next.js. Possesses a proven track record in system design, automation, and large-scale deployment optimization. Skilled in Agile development, team building, and collaboration, recognized for innovative problem-solving and positive attitude.",
    contactInfo: {
      location: "Dhaka, Bangladesh",
      email: "mhtamun@gmail.com",
      linkedin: "mhtamun",
      github: "mhtamun",
    },
  },

  experience: {
    items: [
      {
        title: "Senior Software Engineer L-III",
        company: "Vivasoft Ltd.",
        period: "March 2024 – Present",
        description:
          "Currently developing the frontend for the Eniro project using React, Next.js, Tailwind, TypeScript within a Turborepo monorepo structure, focusing on maintainability and scalability. Previously led the frontend team in revamping PiHr, a SaaS HR software, using React and microfrontend technology, contributing to architecture and integration with a C# backend.",
      },
      {
        title: "Tech Lead (Remote Consultant)",
        company: "Ahsan Technologies Ltd.",
        period: "December 2020 – Present",
        description:
          "Leading the design and architecture of in-house and client products, managing teams using Agile methodology for efficient collaboration and delivery, researching and disseminating industry best practices among the software team, and demonstrating technical proficiency in React.js, Next.js, NestJs, PostgreSQL, and MongoDB.",
      },
      {
        title: "Senior Software Engineer",
        company: "Dynamic Solution Innovators Ltd.",
        period: "November 2016 – March 2024",
        responsibilities: [
          "Designed and developed mission-critical software solutions for clients.",
          "Improved code quality and productivity via TDD/BDD, refactoring, and Agile techniques.",
          "Participated in product development decision-making processes.",
          "Technical Skills: Java, Android, Javascript, Node.js, Hapi.js, React.js, PostgreSQL, MongoDB.",
        ],
      },
      {
        title: "Junior Software Engineer",
        company: "Dcastalia Limited",
        period: "September 2016 – November 2016",
        responsibilities: [
          "Developed and maintained Android apps for an educational digital system.",
          "Implemented MVP, TDD, and Agile practices.",
          "Utilized Dagger (DI), Room, Retrofit, RXJava, RXAndroid.",
        ],
        isHidden: true,
      },
      {
        title: "Junior Software Engineer",
        company: "AB Software Limited",
        period: "October 2015 – August 2016",
        description: "Developed a restaurant review app using PHP and Java (Android).",
        isHidden: true,
      },
      {
        title: "Junior Web Developer (Intern)",
        company: "Aparajito Enabler Limited",
        period: "November 2014 – January 2016",
        description:
          "Worked on website development and client-facing web applications focusing on UI/UX.",
        isHidden: true,
      },
    ],
  },

  projects: {
    categories: [
      { id: "all", name: "All" },
      { id: "frontend", name: "Frontend" },
      { id: "backend", name: "Backend" },
      { id: "mobile", name: "Mobile" },
      { id: "fullstack", name: "Full Stack" },
    ],
    items: [
      {
        title: "Eniro",
        description:
          "Frontend development using React, Next.js, Tailwind CSS, and TypeScript within a Turborepo monorepo.",
        category: "frontend",
        icon: "fa-globe",
        tags: ["Next.js", "TypeScript", "TurboRepo"],
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
          "Led front-end team in developing UI using React and implementing micro-frontend architecture.",
        category: "frontend",
        icon: "fa-users-cog",
        tags: ["React", "TypeScript", "Micro-frontend"],
        timeline: {
          start: "Apr 2024",
          end: "Mar 2025",
        },
        company: "Vivasoft Limited",
      },
      {
        title: "RJSC",
        description:
          "Streamlined business registration platform for government sector, USAID funded.",
        category: "fullstack",
        icon: "fa-building",
        tags: ["Spring Boot", "Thymeleaf"],
        timeline: {
          start: "Jun 2023",
          end: "Apr 2024",
        },
        company: "Dynamic Solution Innovators Ltd.",
      },
      {
        title: "SSF App",
        description:
          "Started working as a team lead of an already formed team. Design audio/video calling mechanism using a free opensource calling library.",
        category: "fullstack",
        icon: "fa-phone",
        tags: ["Node.js", "PostgreSQL", "Android", "Java", "Team Management"],
        timeline: {
          start: "May 2021",
          end: "Jun 2023",
        },
        company: "Dynamic Solution Innovators Ltd.",
      },
      {
        title: "Tapp Water App",
        description:
          "Two android mobile app solution for communication between water service provider and consumer. As well as data administration web app for water system organization. This solution made for the people live in the rural areas.",
        category: "fullstack",
        icon: "fa-water",
        tags: ["Java", "Android", "PHP", "Laravel"],
        timeline: {
          start: "May 2020",
          end: "Sep 2022",
        },
        company: "Dynamic Solution Innovators Ltd.",
      },
      {
        title: "DROBBOO",
        description:
          "Manage the project and team. Design the core system with up to date technologies and frameworks as well as web services for communication between microservices. Developed the backend services and frontend web applications. Created dynamic form engine for back office panel web applications.",
        category: "fullstack",
        icon: "fa-cogs",
        tags: ["Node.js", "Next.js", "React", "PostgreSQL", "AWS Lambda"],
        timeline: {
          start: "Dec 2020",
          end: "Aug 2022",
        },
        company: "Ahsan Technologies Ltd.",
      },
      {
        title: "bKash Business App",
        description:
          "Revamped the new design of bKash agent app. Fixes exiting issues from the previous version.",
        category: "mobile",
        icon: "fa-mobile-alt",
        tags: ["Java", "Android", "PostgreSQL"],
        timeline: {
          start: "Feb 2020",
          end: "Apr 2021",
        },
        company: "Dynamic Solution Innovators Ltd.",
      },
      {
        title: "OpenCRVS",
        description:
          "A global solution for civil registration. Making a system to ensure that every individual on the planet is recognized, protected and provided for from birth. Built a platform that does all the hard work for civil registration.",
        category: "fullstack",
        icon: "fa-id-card",
        tags: ["Node.js", "Hapi.js", "React", "PostgreSQL"],
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
        tags: ["React", "Next.js", "Node.js", "Spring Boot", "Android"],
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
        tags: ["Java", "Android", "PHP"],
        timeline: {
          start: "May 2017",
          end: "Dec 2017",
        },
        company: "Dynamic Solution Innovators Ltd.",
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
        category: "fullstack",
        icon: "fa-camera",
        tags: ["Java", "Android", "Firebase", "Jersey"],
        timeline: {
          start: "Nov 2016",
          end: "Jun 2017",
        },
        company: "Dynamic Solution Innovators Ltd.",
      },
      {
        title: "Easy Notepad",
        description:
          "Developed an app that facilitates people to write important things on the go. Developed the app in Java, Android as framework.",
        category: "mobile",
        icon: "fa-sticky-note",
        tags: ["Java", "Android", "SQLite"],
        timeline: {
          start: "May 2016",
          end: "Dec 2016",
        },
        company: "Dynamic Solution Innovators Ltd.",
      },
      {
        title: "Instant Location Share",
        description:
          "An app for easily sharing your current location to someone, or a invitation venue to individuals. Using android and its features like Geocoders for getting latitudes, longitudes and many more.",
        category: "mobile",
        icon: "fa-map-marker-alt",
        tags: ["Java", "Android", "Geocoding"],
        timeline: {
          start: "Jul 2016",
          end: "Dec 2016",
        },
        company: "Dynamic Solution Innovators Ltd.",
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
        tags: ["Java", "Android", "Volley", "Google Maps"],
        timeline: {
          start: "Oct 2015",
          end: "Jun 2016",
        },
        company: "AB Software Limited",
      },
      {
        title: "Islamic Daily Rewards",
        description:
          "An app facilitates people with some islamic things such as daily Qur'an and Hadith, Salat times and many more. Developed using Java and open source APIs for data fetching from cloud.",
        category: "mobile",
        icon: "fa-mosque",
        tags: ["Java", "Android", "REST API"],
        timeline: {
          start: "Jun 2016",
          end: "Jun 2016",
        },
        company: "Dynamic Solution Innovators Ltd.",
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
        company: "Dynamic Solution Innovators Ltd.",
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
        company: "Dynamic Solution Innovators Ltd.",
      },
      {
        title: "Blood Mates",
        description:
          "Developed a cross app using android webView component where render UI from server. Used JS to interact with android and web app. Web app developed using PHP as language and JS as client side interactions. An app that facilitates list down the people who interested to give blood and who wanted to search blood. HTML CSS Bootstrap for UI",
        category: "fullstack",
        icon: "fa-heartbeat",
        tags: ["Java", "Android", "PHP", "WebView"],
        timeline: {
          start: "Mar 2015",
          end: "Jun 2015",
        },
        company: "Dynamic Solution Innovators Ltd.",
      },
      {
        title: "AUSTPC",
        description:
          "Architect-ed and developed a website for university photography club. Using PHP as language, HTML, CSS and Bootstrap for UI design and styling. MySQL as database.",
        category: "fullstack",
        icon: "fa-camera-retro",
        tags: ["PHP", "MySQL", "Bootstrap"],
        timeline: {
          start: "Sep 2014",
          end: "Jan 2015",
        },
        company: "Ahsanullah University of Science and Technology",
      },
      {
        title: "Traffic Buddy",
        description:
          "Designed and Developed an android app that facilitates people to know the recent possible condition of street by sharing pin point on map. Using java as language, Google Map SDK for mapping. Used volley for service to get data from REST API. Used Shared Preference for keep session as user credentials.",
        category: "mobile",
        icon: "fa-traffic-light",
        tags: ["Java", "Android", "Google Maps", "Volley"],
        timeline: {
          start: "Oct 2014",
          end: "Nov 2014",
        },
        company: "Play It Solution",
      },
      {
        title: "AUST CGPA",
        description:
          "An android app that facilitates student to store their result and calculate as well. The app on Java using Android as framework. Used the latest technologies of that time. For storage used SQLite.",
        category: "mobile",
        icon: "fa-graduation-cap",
        tags: ["Java", "Android", "SQLite"],
        timeline: {
          start: "Sep 2014",
          end: "Oct 2014",
        },
        company: "Play It Solution",
      },
      {
        title: "AustLiMS",
        description:
          "Worked on PHP to made a library management web app for university library. Using MySQL as storage.",
        category: "fullstack",
        icon: "fa-book",
        tags: ["PHP", "MySQL", "Bootstrap"],
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
        tags: ["Java", "Android", "SQLite"],
        timeline: {
          start: "Oct 2013",
          end: "Jan 2014",
        },
        company: "Ahsanullah University of Science and Technology",
      },
    ],
  },

  skills: {
    categories: [
      {
        title: "Frontend Development",
        icon: "fa-laptop-code",
        mainSkills: [
          { name: "React.js / Next.js", percentage: 90 },
          { name: "TypeScript", percentage: 90 },
          { name: "Tailwind CSS", percentage: 85 },
        ],
        otherSkills: [
          {
            title: "Other Frontend Skills",
            skills: ["Svelte", "Preact.js", "Vue.js"],
          },
        ],
      },
      {
        title: "Backend Development",
        icon: "fa-server",
        mainSkills: [
          { name: "Express.js / NestJS", percentage: 85 },
          { name: "GraphQL", percentage: 50 },
          { name: "Spring Boot", percentage: 50 },
        ],
        otherSkills: [
          {
            title: "Other Backend Skills",
            skills: ["HapiJS", "Fastify", "Django", "FastAPI", "Laravel"],
          },
        ],
      },
      {
        title: "Mobile Development",
        icon: "fa-mobile-alt",
        mainSkills: [
          { name: "Android (Java)", percentage: 90 },
          { name: "React Native", percentage: 20 },
          { name: "Flutter", percentage: 20 },
        ],
        otherSkills: [
          {
            title: "Other Mobile Skills",
            skills: ["Ionic", "Cordova"],
          },
        ],
      },
      {
        title: "Databases & ORMs",
        icon: "fa-database",
        mainSkills: [
          { name: "PostgreSQL", percentage: 90 },
          { name: "MongoDB", percentage: 85 },
        ],
        otherSkills: [
          {
            title: "Databases",
            skills: ["MySQL", "SQLite", "Oracle", "RethinkDB"],
          },
          {
            title: "ORMs & Query Builders",
            skills: ["PrismaJS", "SequilizeJS", "Mongoose", "Hibernate", "Supabase"],
          },
        ],
      },
      {
        title: "Tools & DevOps",
        icon: "fa-tools",
        mainSkills: [
          { name: "Docker", percentage: 80 },
          { name: "Git / GitHub", percentage: 95 },
        ],
        otherSkills: [
          {
            title: "Cloud & Deployment",
            skills: ["AWS (EC2, Lambda)", "GCP", "Firebase", "Cloudflare"],
          },
          {
            title: "Build Tools & Environments",
            skills: ["Vite", "Bun", "Turborepo", "Nginx", "Linux"],
          },
        ],
      },
      {
        title: "Methodologies & Practices",
        icon: "fa-sitemap",
        mainSkills: [
          { name: "Agile Development", percentage: 90 },
          { name: "System Design", percentage: 85 },
        ],
        otherSkills: [
          {
            title: "Development Practices",
            skills: [
              "TDD",
              "BDD",
              "Code Review",
              "Microservices",
              "Microfrontends",
              "MVP (Android)",
            ],
          },
        ],
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
    title: "Senior Software Engineer L-3",
    social: {
      linkedin: "mhtamun",
      github: "mhtamun",
      email: "mhtamun@gmail.com",
    },
  },
};
