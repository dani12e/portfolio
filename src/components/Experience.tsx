import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { experiences } from '../data/portfolio';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and the experiences that have shaped my career
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative">
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-full bg-gray-300 hidden md:block" />
              )}
              
              <div className="flex flex-col md:flex-row gap-8 mb-12">
                {/* Timeline Dot */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg hidden md:flex">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow bg-white rounded-xl shadow-lg p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {experience.position}
                      </h3>
                      <h4 className="text-lg font-semibold text-blue-600 mb-2">
                        {experience.company}
                      </h4>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4 lg:mb-0">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{experience.duration}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div>
                    <h5 className="text-sm font-semibold text-gray-900 mb-3">
                      Technologies Used:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Education
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    Bachelor of Science in Computer Science
                  </h4>
                  <h5 className="text-lg text-blue-600 mb-2">
                    Your University Name
                  </h5>
                  <p className="text-gray-700">
                    Graduated with honors. Focused on software engineering, algorithms, and web development.
                  </p>
                </div>
                <div className="mt-4 lg:mt-0 flex items-center text-gray-600">
                  <Calendar size={16} className="mr-2" />
                  <span>2015 - 2019</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
