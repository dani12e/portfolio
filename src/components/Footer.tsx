import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Gbede Daniel</h3>
            <p className="text-gray-300 mb-4">
              Java Developer and Full-Stack Developer passionate about building functional, scalable applications that solve real-world problems. Experienced in Java, Spring Boot, RESTful APIs, React, and database management, with a track record of deploying projects on platforms like Render and Vercel.            </p>
            <p className="text-gray-400 text-sm">
              © 2025 Gbede Daniel. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'Experience', href: '#experience' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 danielgbede2@gmail.com</p>
              <p>📱 +234 903 791 9639</p>
              <p>📍 Nigeria</p> {/* Replace with your actual city */}
            </div>

            <div className="mt-6">
              <p className="text-gray-400 text-sm mb-2">Available for:</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  Freelance
                </span>
                <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                  Full-time
                </span>
                <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded">
                  Consulting
                </span>
                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
                  Full-stack Projects
                </span>
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  Contracts
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="text-red-500 mx-1" size={16} /> using React & TypeScript
            </p>

            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors duration-200"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;