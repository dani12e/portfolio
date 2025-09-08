import React, { useState } from 'react';
import { ArrowDown, Download } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


const Hero: React.FC = () => {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const downloadResume = () => {
    const input = document.getElementById('cv-content');
    if (!input) {
      console.error('CV content element not found');
      return;
    }

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      if (pdfHeight > 297) {
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, 297);
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, -297 + (pdfHeight - 297), pdfWidth, pdfHeight - 297);
      } else {
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      }

      pdf.save('Gbede_Daniel_CV.pdf');
    }).catch((error) => {
      console.error('Error generating PDF:', error);
    });
  };

  const handleImageClick = () => {
    setIsImageExpanded(true);
  };

  const handleCloseImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsImageExpanded(false);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <img
              src="images/WhatsApp Image 2025-09-08 at 13.23.27_7a4ce336.jpg"
              alt="Profile"
              className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-xl cursor-pointer transition-all duration-300 hover:shadow-2xl"
              onClick={handleImageClick}
            />
          </div>

          {/* Main Content */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Gbede Daniel</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Java Developer | Engineering Graduate | Full-Stack & API Integration Specialist
          </p>

          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            Java Developer with an engineering foundation and hands-on experience in building web applications, developing RESTful APIs, and managing backend services with Spring Boot and MySQL. Skilled in full-stack development, integrating React on the frontend, and deploying applications with Render and Vercel. Passionate about creating efficient, user-friendly systems that connect software with real-world use.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
            >
              View My Work
              <ArrowDown size={20} />
            </a>
            <button
              onClick={downloadResume}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200 flex items-center gap-2"
            >
              Download Resume
              <Download size={20} />
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">8+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{new Date().getFullYear() - 2023}+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-gray-600">Industry Internships</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a href="#about" className="animate-bounce">
          <ArrowDown className="text-gray-600" size={24} />
        </a>
      </div>

      {/* Hidden CV Content for PDF Generation */}
      <div id="cv-content" style={{ position: 'absolute', left: '-9999px', top: '0', padding: '20px', fontFamily: 'Arial, sans-serif', color: '#000', width: '210mm', background: '#fff' }}>
        <div style={{ padding: '20px' }}>
          <h1 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '10px' }}>Gbede Daniel</h1>
          <p style={{ textAlign: 'center', fontSize: '14px', marginBottom: '20px' }}>
            09037919639 • <a href="mailto:danielgbede2@gmail.com">danielgbede2@gmail.com</a> • <a href="https://linkedin.com">LinkedIn</a> | <a href="https://github.com/danielgbede2">GitHub</a>
          </p>
          <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>Java Developer | Full-Stack Developer | API & AI Integration Specialist</h2>

          <h3 style={{ fontSize: '16px', marginTop: '20px', marginBottom: '10px' }}>Professional Summary</h3>
          <p style={{ marginBottom: '10px' }}>
            Full-Stack Java Developer and Mechanical Engineering graduate with hands-on experience in AI-integrated applications, microservices, and cloud deployment. Skilled in designing and deploying RESTful APIs, full-stack web apps, and AI-powered solutions. Proven leadership in development teams, and experienced with PostgreSQL, Docker, React + Vite, and modern deployment platforms (Render, Vercel). Completed technical internships at NNPC Enserv and NPDC, gaining strong problem-solving and engineering experience.
          </p>

          <h3 style={{ fontSize: '16px', marginTop: '20px', marginBottom: '10px' }}>Technical Skills</h3>
          <ul style={{ marginBottom: '10px' }}>
            <li>Languages & Tools: Java, JavaScript, Spring Boot, REST APIs, Microservices, PostgreSQL, Git, Postman, Docker</li>
            <li>Frameworks & Libraries: Spring MVC, Thymeleaf, React, Vite</li>
            <li>Development & Deployment: VS Code, IntelliJ IDEA, GitHub, Figma, Render, Vercel</li>
            <li>Engineering Tools: AutoCAD, SolidWorks, Revit, MS Excel</li>
            <li>Other Skills: Agile methodology, Technical Documentation, Debugging, API Integration, Team Leadership</li>
          </ul>

          <h3 style={{ fontSize: '16px', marginTop: '20px', marginBottom: '10px' }}>Work Experience</h3>
          <p><strong>Software Engineering Intern / Team Lead</strong></p>
          <p>IISPPR (International Institute of Strategic Policies and Research) — June 2025 – Present</p>
          <ul style={{ marginBottom: '10px' }}>
            <li>Lead a development team to design and deploy AI-integrated client solutions.</li>
            <li>Develop backend microservices and RESTful APIs with Spring Boot and PostgreSQL.</li>
            <li>Oversee controller logic, API integration, Docker containerization, and performance optimization.</li>
            <li>Deploy full-stack applications on Render and Vercel for client and internal use.</li>
            <li>Guide testing cycles, code reviews, and iterative improvements to ensure scalable, secure software delivery.</li>
          </ul>
          <p><strong>Engineering Intern (SIWES)</strong></p>
          <p>NNPC Enserv — July 2023 – Sept 2023</p>
          <ul style={{ marginBottom: '10px' }}>
            <li>Assisted with maintenance and routine checks of mechanical systems.</li>
            <li>Shadowed field engineers and contributed to on-site safety inspections.</li>
            <li>Prepared daily technical reports, gaining insight into upstream oil & gas operations.</li>
          </ul>
          <p><strong>Industrial Trainee (SIWES)</strong></p>
          <p>NPDC — April 2024 – Sept 2024</p>
          <ul style={{ marginBottom: '10px' }}>
            <li>Conducted mechanical equipment inspections and diagnostics.</li>
            <li>Assisted with maintenance on pumps, compressors, and pipeline systems.</li>
            <li>Documented technical issues and contributed to knowledge-sharing sessions.</li>
          </ul>

          <h3 style={{ fontSize: '16px', marginTop: '20px', marginBottom: '10px' }}>Education</h3>
          <p>Benson Idahosa University</p>
          <p>Bachelor of Engineering (B.Eng), Mechanical Engineering — 2025</p>

          <h3 style={{ fontSize: '16px', marginTop: '20px', marginBottom: '10px' }}>Projects & Highlights</h3>
          <ul style={{ marginBottom: '10px' }}>
            <li>Notepad Web App: Full-stack React/Java app, deployed on Render/Vercel, for note-taking and local storage.</li>
            <li>Vehicle Selling Web App: Full-stack Java app with user authentication, posting system, image uploads, PostgreSQL backend, and Dockerized deployment.</li>
            <li>Blog App with Spring Boot: CRUD blog with role-based access and user profiles.</li>
            <li>AI Argument Extraction LMS Project: Led development of a learning management system leveraging AI to extract arguments.</li>
            <li>Portfolio Website: Built with Dualite, showcasing projects, deployments, and technical skills.</li>
            <li>Password Reset Module: Secure, token-based email password reset system.</li>
            <li>Microservices & API Development: Designed modular backend services for scalable applications.</li>
          </ul>

          <h3 style={{ fontSize: '16px', marginTop: '20px', marginBottom: '10px' }}>Certifications</h3>
          <ul style={{ marginBottom: '10px' }}>
            <li>Java Full Stack Development (Ongoing)</li>
            <li>Git & GitHub for Teams</li>
            <li>Basic AI Automation with APIs</li>
            <li>LCAT (Labmentrix Certificate of Technical Proficiency)</li>
          </ul>
        </div>
      </div>

      {/* Expanded Image Modal */}
      {isImageExpanded && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleCloseImage}
        >
          <div className="relative">
            <img
              src="images/WhatsApp Image 2025-09-08 at 13.23.27_7a4ce336.jpg"
              alt="Profile Expanded"
              className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
            />
            <button
              onClick={handleCloseImage}
              className="absolute top-2 right-2 text-white text-3xl bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;