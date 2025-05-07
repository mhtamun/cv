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
      title: "Senior Software Engineer",
      description: "Full-stack developer with 8+ years of experience specializing in Java, JavaScript frameworks, TypeScript, and system design.",
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
          description: "Currently developing the frontend for the Eniro project using React, Next.js, Tailwind, TypeScript within a Turborepo monorepo structure, focusing on maintainability and scalability. Previously led the frontend team in revamping PiHr, a SaaS HR software, using React and microfrontend technology, contributing to architecture and integration with a C# backend.",
        },
        {
          title: "Tech Lead (Remote Consultant)",
          company: "Ahsan Technologies Ltd.",
          period: "December 2020 – Present",
          responsibilities: [
            "Led the design and architecture of in-house and client products.",
            "Managed teams using Agile methodology for efficient collaboration and delivery.",
            "Researched and disseminated industry best practices among the software team.",
            "Technical Proficiency: React.js, NestJs, PostgreSQL, MongoDB.",
          ],
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
          description: "Worked on website development and client-facing web applications focusing on UI/UX.",
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
          description: "Frontend development using React, Next.js, Tailwind CSS, and TypeScript within a Turborepo monorepo.",
          category: "frontend",
          icon: "fa-globe",
          tags: ["React", "Next.js", "TypeScript"],
        },
        {
          title: "PiHr",
          description: "Led front-end team in developing UI using React and implementing micro-frontend architecture.",
          category: "frontend",
          icon: "fa-users-cog",
          tags: ["React", "Micro-frontend", "C# Integration"],
        },
        {
          title: "RJSC",
          description: "Streamlined business registration platform for government sector, USAID funded.",
          category: "fullstack",
          icon: "fa-building",
          tags: ["Oracle", "Spring Boot", "Thymeleaf"],
        },
        {
          title: "SSF App",
          description: "Team Lead enhancing a communication/roster app for agents with audio/video calling.",
          category: "mobile",
          icon: "fa-mobile-alt",
          tags: ["Android", "Java", "Spring Boot"],
          isHidden: true,
        },
        {
          title: "Restaurant Review App",
          description: "Developed a restaurant review application with web and mobile interfaces.",
          category: "fullstack",
          icon: "fa-utensils",
          tags: ["PHP", "Android", "MySQL"],
          isHidden: true,
        },
        {
          title: "E-commerce Platform",
          description: "Built a scalable e-commerce platform with payment integration and inventory management.",
          category: "fullstack",
          icon: "fa-shopping-cart",
          tags: ["React", "Node.js", "MongoDB"],
          isHidden: true,
        },
        {
          title: "CRM System",
          description: "Developed a customer relationship management system with reporting and analytics.",
          category: "backend",
          icon: "fa-tasks",
          tags: ["NestJS", "PostgreSQL", "GraphQL"],
          isHidden: true,
        },
        {
          title: "Health Monitoring App",
          description: "Created a mobile application for tracking health metrics and providing insights.",
          category: "mobile",
          icon: "fa-heartbeat",
          tags: ["Android", "Room", "Retrofit"],
          isHidden: true,
        },
        {
          title: "Content Management System",
          description: "Built a custom CMS with role-based access control and workflow management.",
          category: "backend",
          icon: "fa-file-alt",
          tags: ["Node.js", "HapiJS", "PostgreSQL"],
          isHidden: true,
        },
      ],
    },
    
    skills: {
      categories: [
        {
          title: "Frontend Development",
          icon: "fa-laptop-code",
          mainSkills: [
            { name: "React.js / Next.js", percentage: 95 },
            { name: "TypeScript", percentage: 90 },
            { name: "Tailwind CSS", percentage: 85 },
            { name: "Redux", percentage: 90 },
          ],
          otherSkills: [
            {
              title: "Other Frontend Skills",
              skills: ["Styled Components", "Formik/Yup", "Webpack", "FlexBox"],
            },
          ],
        },
        {
          title: "Backend Development",
          icon: "fa-server",
          mainSkills: [
            { name: "Node.js", percentage: 90 },
            { name: "NestJS", percentage: 85 },
            { name: "Spring Boot", percentage: 80 },
            { name: "GraphQL", percentage: 75 },
          ],
          otherSkills: [
            {
              title: "Other Backend Skills",
              skills: ["HapiJS", "Jersey (Java API)", "PHP (Laravel)"],
            },
          ],
        },
        {
          title: "Mobile Development",
          icon: "fa-mobile-alt",
          mainSkills: [
            { name: "Android SDK (Java)", percentage: 90 },
            { name: "Retrofit", percentage: 85 },
            { name: "Room", percentage: 80 },
            { name: "RXJava/RXAndroid", percentage: 75 },
          ],
          otherSkills: [
            {
              title: "Other Mobile Skills",
              skills: ["Dagger (DI)", "Volley", "Google Map SDK"],
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
            { name: "Docker", percentage: 85 },
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
              skills: ["TDD", "BDD", "Code Review", "Microservices", "Microfrontends", "MVP (Android)"],
            },
          ],
        },
      ],
    },
    
    education: {
      items:[
        {
          degree: "B.Sc. in Computer Science and Engineering",
          institution: "Ahsanullah University of Science and Technology",
          period: "June 2012 – May 2016",
          icon: "fa-university"
        },
        {
          degree: "Higher Secondary Certificate (HSC)",
          institution: "Dhaka College",
          period: "April 2009 – May 2011",
          icon: "fa-school"
        }
      ]
    },
    
    interests: {
      items: [
        {
          name: "Home Automation",
          icon: "fa-home"
        },
        {
          name: "Robotics",
          icon: "fa-robot"
        },
        {
          name: "Artificial Intelligence",
          icon: "fa-brain"
        },
        {
          name: "Video Games",
          icon: "fa-gamepad"
        },
        {
          name: "Traveling",
          icon: "fa-plane"
        }
      ]
    },
    
    footer: {
      name: "Maruf Hossain",
      title: "Senior Software Engineer",
      social: {
        linkedin: "mhtamun",
        github: "mhtamun",
        email: "mhtamun@gmail.com"
      }
    }
  };