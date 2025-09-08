import React from 'react';
import { Code2, Zap, Users, HardHat } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Java Expertise',
      description: 'Specialized in Java development with Spring Boot, building robust backend systems, RESTful APIs, and secure web applications following industry best practices.'
    },
    {
      icon: HardHat,
      title: 'Engineering Background',
      description: 'Mechanical Engineering graduate with hands-on industrial experience at NNPC and NPDC, bringing systematic problem-solving skills to software development.'
    },
    {
      icon: Zap,
      title: 'AI Integration',
      description: 'Currently working on AI-integrated bot systems and automation solutions, combining traditional software development with modern AI technologies.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Experience working in cross-functional teams, handling API integrations, and collaborating with frontend developers on enterprise-level projects.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bridging engineering excellence with modern software development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              From Mechanical Engineering to Software Innovation
            </h3>

            <div className="space-y-4 text-gray-700">
              <p>
                I'm a passionate Java Developer with a unique engineering foundation. After completing my Mechanical Engineering degree at Benson Idahosa University, I discovered my true calling in software development, where I can apply the same systematic thinking and problem-solving skills that engineering taught me.
              </p>

              <p>
                My journey includes valuable industrial experience through internships at NNPC Enserv and NPDC, where I worked on mechanical systems and gained insights into large-scale operations. This background gives me a unique perspective on building software solutions that work in real-world, mission-critical environments.
              </p>

              <p>
               Currently, I'm working as a Software Engineering Intern at IISPPR, where I collaborate with cross-functional teams to build AI-integrated bots and develop RESTful APIs. I specialize in Java and Spring Boot, focusing on creating secure, scalable backend systems that power modern web applications.
              </p>

              <p>
                When I'm not coding, I'm exploring new technologies, contributing to open-source projects, or working on personal projects that challenge me to grow as a developer. I believe in continuous learning and the power of technology to solve real-world problems.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Let's Work Together
              </a>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-200"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="text-blue-600" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
