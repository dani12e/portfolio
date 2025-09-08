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
    // liveUrl: 'https://your-portfolio-url.com', // Replace with your actual portfolio URL
    category: 'web',
    featured: false
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
      'Assisted with maintenance and routine checks of mechanical systems.',
      'Shadowed field engineers and contributed to on-site safety inspections.',
      'Prepared daily technical reports, gaining insight into upstream oil & gas operations.'
    ],
    technologies: ['AutoCAD', 'SolidWorks', 'MS Excel', 'Technical Documentation']
  },
  {
    id: '2',
    position: 'Industrial Trainee (SIWES)',
    company: 'NPDC',
    duration: 'April 2024 - Sept 2024',
    description: [
      'Conducted mechanical equipment inspections and diagnostics.',
      'Assisted with maintenance on pumps, compressors, and pipeline systems.',
      'Documented technical issues and contributed to knowledge-sharing sessions.'
    ],
    technologies: ['AutoCAD', 'Revit', 'Technical Reporting', 'Diagnostics']
  },
  {
    id: '3',
    position: 'Software Engineering Intern / Team Lead',
    company: 'IISPPR (International Institute of Strategic Policies and Research)',
    duration: 'June 2025 - Present',
    description: [
      'Lead a development team to design and deploy AI-integrated client solutions.',
      'Develop backend microservices and RESTful APIs with Spring Boot and PostgreSQL.',
      'Oversee controller logic, API integration, Docker containerization, and performance optimization.',
      'Deploy full-stack applications on Render and Vercel for client and internal use.',
      'Guide testing cycles, code reviews, and iterative improvements to ensure scalable, secure software delivery.'
    ],
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'Docker', 'React', 'Vite', 'Render', 'Vercel', 'Agile', 'HTML', 'CSS', 'JavaScript', 'Laravel', 'PHP', 'MySQL']
  }
];