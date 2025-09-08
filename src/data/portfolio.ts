import { Project, Experience } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Notepad Web App',
    description: 'Full-stack React/Java app, deployed on Render/Vercel, for note-taking and local storage.',
    longDescription: 'A full-stack web application built with React on the frontend and Java on the backend. It enables users to create, edit, and store notes using local storage for persistence. Deployed on Render and Vercel for seamless accessibility.',
    imageUrl: 'https://placehold.co/600x400/png?text=Notepad+Web+App',
    technologies: ['React', 'Java', 'Vite', 'Render', 'Vercel', 'Local Storage'],
    // githubUrl: 'https://github.com/danielgbede2/notepad-web-app',
    liveUrl: 'https://notes-frontend-topaz-nine.vercel.app', // Placeholder; replace with actual
    category: 'web',
    featured: true
  },
  {
    id: '2',
    title: 'MotorHub - Vehicle Selling Web App',
    description: 'Full-stack Java app with user authentication, posting system, image uploads, PostgreSQL backend, and Dockerized deployment.',
    longDescription: 'A comprehensive vehicle selling platform (MotorHub Nigeria) featuring user authentication, a posting system for listings, image uploads, and a robust PostgreSQL backend. Containerized with Docker for easy deployment and scalability.',
    imageUrl: 'https://placehold.co/600x400/png?text=MotorHub+Vehicle+Selling+App',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'User Authentication', 'Image Uploads'],
    // githubUrl: 'https://github.com/danielgbede2/motorhub-vehicle-selling-app',
    // liveUrl: 'https://motorhub-ng.onrender.com', // Placeholder; replace with actual
    category: 'web',
    featured: false
  },
  {
    id: '3',
    title: 'Blog App with Spring Boot',
    description: 'CRUD blog with role-based access and user profiles.',
    longDescription: 'A blog application developed using Spring Boot, supporting CRUD operations for posts, role-based access control, and user profiles for personalized experiences.',
    imageUrl: 'https://placehold.co/600x400/png?text=Blog+App',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Thymeleaf', 'Role-Based Access'],
    // githubUrl: 'https://github.com/danielgbede2/blog-app-spring-boot',
    // liveUrl: 'https://blog-app.onrender.com', // Placeholder; replace with actual
    category: 'web',
    featured: false
  },
  {
    id: '4',
    title: 'AI Argument Extraction LMS Project',
    description: 'Led development of a learning management system leveraging AI to extract arguments.',
    longDescription: 'An AI-powered Learning Management System (LMS) where I led the team in integrating AI capabilities to extract and analyze arguments from educational content, enhancing learning outcomes.',
    imageUrl: 'https://placehold.co/600x400/png?text=AI+Argument+Extraction+LMS',
    technologies: ['Java', 'Spring Boot', 'AI Integration', 'PostgreSQL', 'React'],
    // githubUrl: 'https://github.com/danielgbede2/ai-argument-lms',
    // liveUrl: 'https://ai-lms.onrender.com', // Placeholder; replace with actual
    category: 'ai',
    featured: false
  },
  {
    id: '5',
    title: 'Portfolio Website',
    description: 'Built with Dualite, showcasing projects, deployments, and technical skills.',
    longDescription: 'A personal portfolio website created using Dualite, highlighting my projects, technical skills, and deployments in a clean, modern interface.',
    imageUrl: 'https://placehold.co/600x400/png?text=Portfolio+Website',
    technologies: ['Dualite', 'React', 'Vite', 'Figma', 'Render', 'Vercel'],
    // githubUrl: 'https://github.com/danielgbede2/portfolio-website',
    liveUrl: 'https://danielgbede.netlify.app/', // Replace with your actual portfolio URL
    category: 'web',
    featured: true
  },
  {
    id: '6',
    title: 'Password Reset Module',
    description: 'Secure, token-based email password reset system.',
    longDescription: 'A modular password reset system implementing secure token-based authentication via email, designed for integration into larger applications.',
    imageUrl: 'https://placehold.co/600x400/png?text=Password+Reset+Module',
    technologies: ['Java', 'Spring Boot', 'Email Integration', 'Token Authentication'],
    // githubUrl: 'https://github.com/danielgbede2/password-reset-module',
    liveUrl: undefined, // No live demo mentioned
    category: 'other',
    featured: false
  },
  {
    id: '7',
    title: 'Microservices & API Development',
    description: 'Designed modular backend services for scalable applications.',
    longDescription: 'Development of microservices architecture and RESTful APIs using Spring Boot, focused on modularity, scalability, and efficient API integration for various applications.',
    imageUrl: 'https://placehold.co/600x400/png?text=Microservices+API',
    technologies: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'Docker', 'PostgreSQL'],
    // githubUrl: 'https://github.com/danielgbede2/microservices-api',
    liveUrl: undefined, // No specific live demo
    category: 'other',
    featured: false
  }
];
export const experiences: Experience[] = [
  {
    id: '1',
    position: 'Engineering Intern (SIWES)',
    company: 'NNPC Enserv',
    duration: 'July 2023 - Sept 2023',
    description: [
      'Improved system reliability by contributing to preventive maintenance, reducing recurring equipment failures by 15%.',
      'Supported safety inspections that achieved zero incident reports throughout the internship period.',
      'Delivered structured technical reports that enhanced upstream operational decision-making.'
    ],
    technologies: ['AutoCAD', 'SolidWorks', 'MS Excel', 'Technical Documentation']
  },
  {
    id: '2',
    position: 'Industrial Trainee (SIWES)',
    company: 'NPDC',
    duration: 'April 2024 - Sept 2024',
    description: [
      'Boosted equipment efficiency by 20% through diagnostics and inspections of pumps, compressors, and pipelines.',
      'Collaborated on maintenance schedules that minimized downtime and increased equipment uptime.',
      'Created clear technical documentation that reduced troubleshooting time by 10%.'
    ],
    technologies: ['AutoCAD', 'Revit', 'Technical Reporting', 'Diagnostics']
  },
  {
    id: '3',
    position: 'Software Engineering Intern / Team Lead',
    company: 'IISPPR (International Institute of Strategic Policies and Research)',
    duration: 'June 2025 - Present',
    description: [
      'Leading a development team to deliver AI-integrated software solutions, including an LMS for argument extraction, aimed at enhancing research and policy decision-making.',
      'Architected backend microservices and RESTful APIs with Spring Boot and PostgreSQL to ensure scalability and modularity.',
      'Reduced deployment times by 40% through Docker containerization and streamlined CI/CD practices.',
      'Facilitated deployment of applications on Render and Vercel, enabling accessibility for early testers and stakeholders.',
      'Directed testing and code reviews that maintained a 98% bug-free release rate in development builds.'
    ],
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'Docker', 'React', 'Vite', 'Render', 'Vercel', 'Agile']
  },
  {
    id: '4',
    position: 'Founder & Full-Stack Developer',
    company: 'MotorHub (Startup in Development)',
    duration: '2024 - Present',
    description: [
      'Founded MotorHub, a vehicle-selling platform designed with distinct buyer and seller sections to ensure seamless transactions.',
      'Developed a commission-based sales model (10% profit share) for sustainability and scalability.',
      'Built backend services for user authentication, vehicle listings, and sales tracking with Spring Boot and SQL.',
      'Designed an interactive frontend with HTML, CSS, and JavaScript to improve engagement and usability.',
      'Implemented remote-first operations with Google Chat & Meet, successfully onboarding the first wave of employees.'
    ],
    technologies: ['Spring Boot', 'REST APIs', 'SQL', 'HTML', 'CSS', 'JavaScript', 'Agile', 'Business Development']
  },
  {
    id: '5',
    position: 'Software Developer',
    company: 'Personal Projects',
    duration: '2023 - Present',
    description: [
      'Built and deployed a NotePad App with React and Node.js, offering a clean interface for intuitive note-taking (hosted on Vercel).',
      'Created a personal portfolio website with Dualite to showcase projects and technical expertise to clients and employers.',
      'Experimented with PostgreSQL and Docker in deployment pipelines, expanding knowledge of backend scalability and modern DevOps practices.'
    ],
    technologies: ['React', 'Node.js', 'Spring Boot', 'PostgreSQL', 'Docker', 'Dualite', 'Vercel', 'Render']
  }
];
