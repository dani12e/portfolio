import React from 'react';
import { Code2, Palette, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'I write maintainable, scalable code that follows best practices and industry standards.'
    },
    {
      icon: Palette,
      title: 'UI/UX Focus',
      description: 'Creating beautiful and intuitive user interfaces that provide excellent user experiences.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency to deliver the best possible performance.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams and stakeholders to deliver projects on time and within scope.'
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
            Passionate developer with a love for creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Building the Future, One Line of Code at a Time
            </h3>
            
            <div className="space-y-4 text-gray-700">
              <p>
                I'm a passionate full-stack developer with over {new Date().getFullYear() - 2019} years of experience 
                creating web and mobile applications. I started my journey in computer science and have been 
                fascinated by the endless possibilities of technology ever since.
              </p>
              
              <p>
                My expertise spans across modern frontend frameworks like React and React Native, 
                backend technologies including Node.js and Python, and various databases and cloud services. 
                I'm always eager to learn new technologies and apply them to solve real-world problems.
              </p>
              
              <p>
                When I'm not coding, you can find me contributing to open-source projects, writing technical 
                blog posts, or exploring the latest trends in web development. I believe in continuous learning 
                and sharing knowledge with the developer community.
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
