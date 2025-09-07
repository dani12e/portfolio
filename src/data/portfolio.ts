import { Project, Skill, Experience } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React and Node.js',
    longDescription: 'A comprehensive e-commerce platform built with modern technologies. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API', 'JWT'],
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://your-ecommerce.vercel.app',
    imageUrl: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/3b82f6/ffffff?text=E-Commerce+Platform',
    featured: true,
    category: 'web'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'React Native mobile app for productivity tracking',
    longDescription: 'A cross-platform mobile application for task management and productivity tracking. Features include task creation, categorization, progress tracking, and team collaboration.',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux Toolkit'],
    githubUrl: 'https://github.com/yourusername/task-manager',
    imageUrl: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/10b981/ffffff?text=Task+Manager',
    featured: true,
    category: 'mobile'
  },
  {
    id: '3',
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for business analytics',
    longDescription: 'An interactive dashboard for visualizing business data and analytics. Built with D3.js and React, featuring real-time updates and multiple chart types.',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
    githubUrl: 'https://github.com/yourusername/data-dashboard',
    liveUrl: 'https://analytics-dashboard.vercel.app',
    imageUrl: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/8b5cf6/ffffff?text=Analytics+Dashboard',
    featured: false,
    category: 'web'
  },
  {
    id: '4',
    title: 'AI Chatbot',
    description: 'Intelligent chatbot using natural language processing',
    longDescription: 'An AI-powered chatbot that uses natural language processing to understand and respond to user queries. Built with Python and integrated with various APIs.',
    technologies: ['Python', 'OpenAI API', 'Flask', 'React', 'WebSocket'],
    githubUrl: 'https://github.com/yourusername/ai-chatbot',
    imageUrl: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/f59e0b/ffffff?text=AI+Chatbot',
    featured: false,
    category: 'ai'
  },
  {
    id: '5',
    title: 'Portfolio Website',
    description: 'Personal portfolio built with React and TypeScript',
    longDescription: 'A responsive portfolio website showcasing projects and skills. Built with React, TypeScript, and Tailwind CSS with smooth animations and modern design.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/yourusername/portfolio',
    liveUrl: 'https://yourportfolio.com',
    imageUrl: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/ef4444/ffffff?text=Portfolio+Site',
    featured: false,
    category: 'web'
  },
  {
    id: '6',
    title: 'Weather App',
    description: 'Mobile weather application with location services',
    longDescription: 'A beautiful weather application that provides current weather and forecasts. Features location-based weather, interactive maps, and weather alerts.',
    technologies: ['React Native', 'OpenWeather API', 'Geolocation', 'Redux'],
    githubUrl: 'https://github.com/yourusername/weather-app',
    imageUrl: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/06b6d4/ffffff?text=Weather+App',
    featured: false,
    category: 'mobile'
  }
];

export const skills: Skill[] = [
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'JavaScript', level: 95, category: 'frontend' },
  { name: 'Tailwind CSS', level: 85, category: 'frontend' },
  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'Python', level: 75, category: 'backend' },
  { name: 'MongoDB', level: 70, category: 'database' },
  { name: 'PostgreSQL', level: 75, category: 'database' },
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'Docker', level: 65, category: 'tools' },
  { name: 'AWS', level: 60, category: 'tools' },
  { name: 'React Native', level: 80, category: 'frontend' }
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Tech Solutions Inc.',
    position: 'Senior Frontend Developer',
    duration: '2022 - Present',
    description: [
      'Lead frontend development for enterprise web applications',
      'Mentor junior developers and conduct code reviews',
      'Implemented responsive designs and improved performance by 40%',
      'Collaborated with UX/UI designers and backend teams'
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS']
  },
  {
    id: '2',
    company: 'Digital Agency',
    position: 'Full Stack Developer',
    duration: '2020 - 2022',
    description: [
      'Developed and maintained client websites and web applications',
      'Built RESTful APIs and database schemas',
      'Managed cloud deployments and CI/CD pipelines',
      'Worked directly with clients to gather requirements'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'AWS']
  },
  {
    id: '3',
    company: 'Startup XYZ',
    position: 'Frontend Developer',
    duration: '2019 - 2020',
    description: [
      'Built responsive web applications from scratch',
      'Implemented modern JavaScript frameworks and libraries',
      'Optimized applications for performance and SEO',
      'Participated in agile development processes'
    ],
    technologies: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Redux']
  }
];
