
import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  ChevronRight, 
  ExternalLink, 
  Code2, 
  Briefcase, 
  GraduationCap, 
  Trophy, 
  Download, 
  Terminal,
  Cpu,
  Layers,
  Globe,
  Database
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  EXPERTISE, 
  ACCOMPLISHMENTS, 
  EXPERIENCE_HISTORY, 
  EDUCATION_HISTORY 
} from './data';
import { Project, Experience } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');

  // Navigation handlers
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'accomplishments', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 glass-effect border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 text-white p-1.5 rounded-lg">
                <Terminal size={24} />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">{PERSONAL_INFO.name}</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              {['about', 'skills', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollTo(section)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 capitalize ${
                    activeSection === section ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
                  }`}
                >
                  {section}
                </button>
              ))}
            </nav>
            <div className="hidden md:block">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-sm hover:shadow-md"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="about" className="relative pt-20 pb-24 overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-8 lg:text-left">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                  19+ Years of Professional Experience
                </span>
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  Senior <span className="text-blue-600">Full Stack</span> .NET Engineer
                </h1>
                <p className="mt-6 text-lg text-gray-500 sm:text-xl leading-relaxed">
                  {PERSONAL_INFO.summary}
                </p>
                <div className="mt-10 sm:flex sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="rounded-md shadow">
                    <button 
                      onClick={() => scrollTo('experience')}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all"
                    >
                      View Experience
                    </button>
                  </div>
                  <div className="rounded-md shadow">
                    <button 
                      onClick={() => scrollTo('contact')}
                      className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-all"
                    >
                      Contact Details
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-12 lg:mt-0 lg:col-span-4 flex justify-center items-center">
                <div className="relative">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                        <Terminal size={100} className="text-white opacity-20 absolute top-10 right-10" />
                        <Code2 size={120} className="text-white" />
                    </div>
                    {/* Decorative Blobs */}
                    <div className="absolute -z-10 -top-4 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                    <div className="absolute -z-10 -bottom-4 -right-4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Strip */}
        <div className="bg-blue-600 text-white py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center space-x-2 hover:text-blue-100 transition-colors">
                    <Mail size={20} />
                    <span className="font-medium">{PERSONAL_INFO.email}</span>
                </a>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center space-x-2 hover:text-blue-100 transition-colors">
                    <Phone size={20} />
                    <span className="font-medium">{PERSONAL_INFO.phone}</span>
                </a>
            </div>
        </div>

        {/* Expertise Section */}
        <section id="skills" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Technical Expertise</h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                A diverse skillset honed over two decades of enterprise development.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {EXPERTISE.map((category, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600 mr-3">
                        {category.category.includes('Language') && <Terminal size={20} />}
                        {category.category.includes('Patterns') && <Layers size={20} />}
                        {category.category.includes('.NET') && <Cpu size={20} />}
                        {category.category.includes('Web') && <Globe size={20} />}
                        {category.category.includes('Database') && <Database size={20} />}
                        {category.category.includes('Tools') && <Briefcase size={20} />}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{category.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Career Journey</h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Proven track record in high-stakes public sector projects.
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

              <div className="space-y-12">
                {EXPERIENCE_HISTORY.map((exp, idx) => (
                  <div key={idx} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Circle on Timeline */}
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white z-10 hidden md:block"></div>
                    
                    {/* Content Card */}
                    <div className={`w-full md:w-[45%] ${idx % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all border-l-4 border-l-blue-600">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{exp.company}</h3>
                            <p className="text-blue-600 font-semibold">{exp.role}</p>
                          </div>
                          <span className="text-sm font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded">{exp.period}</span>
                        </div>

                        {exp.generalDescription && (
                          <div className="mb-4 space-y-2">
                            {exp.generalDescription.map((desc, dIdx) => (
                              <p key={dIdx} className="text-gray-600 text-sm">{desc}</p>
                            ))}
                          </div>
                        )}

                        {exp.projects && exp.projects.map((project, pIdx) => (
                          <div key={pIdx} className="mt-6 border-t border-gray-100 pt-4">
                            <div className="flex items-center text-sm font-bold text-gray-800 mb-2">
                              <ChevronRight className="text-blue-600 mr-1" size={16} />
                              {project.name}
                              {project.client && <span className="ml-2 font-normal text-gray-400 text-xs">({project.client})</span>}
                            </div>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 mb-3 ml-4">
                              {project.description.map((bullet, bIdx) => (
                                <li key={bIdx} className="leading-relaxed">{bullet}</li>
                              ))}
                            </ul>
                            <div className="flex flex-wrap gap-1.5 ml-4">
                                {project.tools.map((tool, tIdx) => (
                                    <span key={tIdx} className="text-[10px] px-2 py-0.5 bg-blue-50 text-blue-700 rounded border border-blue-100">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                          </div>
                        ))}

                        {exp.tools && !exp.projects && (
                            <div className="mt-4 pt-4 border-t border-gray-100">
                                <p className="text-xs font-bold text-gray-400 uppercase mb-2">Key Stack</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {exp.tools.map((tool, tIdx) => (
                                        <span key={tIdx} className="text-[10px] px-2 py-0.5 bg-gray-50 text-gray-600 rounded border border-gray-200">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Accomplishments & Education Section */}
        <section id="accomplishments" className="py-24 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Accomplishments */}
              <div>
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-yellow-400/10 rounded-xl text-yellow-400 mr-4">
                    <Trophy size={32} />
                  </div>
                  <h2 className="text-3xl font-bold">Key Accomplishments</h2>
                </div>
                <div className="space-y-6">
                  {ACCOMPLISHMENTS.map((item, idx) => (
                    <div key={idx} className="flex space-x-4 items-start group">
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-yellow-400 group-hover:scale-150 transition-transform"></div>
                      <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div id="education">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-blue-400/10 rounded-xl text-blue-400 mr-4">
                    <GraduationCap size={32} />
                  </div>
                  <h2 className="text-3xl font-bold">Education</h2>
                </div>
                <div className="space-y-8">
                  {EDUCATION_HISTORY.map((edu, idx) => (
                    <div key={idx} className="relative pl-8 border-l-2 border-blue-400/30">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-400"></div>
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <p className="text-blue-400">{edu.institution}</p>
                      {edu.location && <p className="text-sm text-gray-500 mt-1">{edu.location}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-600 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
              <div className="p-12 lg:w-1/2">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Get in touch</h2>
                <p className="mt-4 text-lg text-blue-100">
                  Ready to collaborate or have a position that fits my expertise? Let's talk.
                </p>
                <div className="mt-10 space-y-6">
                  <div className="flex items-center text-white">
                    <Mail className="flex-shrink-0 h-6 w-6 text-blue-200" />
                    <span className="ml-4 text-lg font-medium">{PERSONAL_INFO.email}</span>
                  </div>
                  <div className="flex items-center text-white">
                    <Phone className="flex-shrink-0 h-6 w-6 text-blue-200" />
                    <span className="ml-4 text-lg font-medium">{PERSONAL_INFO.phone}</span>
                  </div>
                </div>
              </div>
              <div className="bg-blue-700 p-12 lg:w-1/2 flex flex-col justify-center items-center text-center">
                <div className="bg-white/10 p-4 rounded-full mb-6">
                    <Terminal size={48} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise-Grade Solutions</h3>
                <p className="text-blue-100 mb-8 max-w-sm">
                    Combining 19 years of legacy system maintenance with modern architectural patterns.
                </p>
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-blue-700 bg-white hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Send a Message
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Terminal className="text-blue-600" size={24} />
              <span className="font-bold text-xl tracking-tight text-gray-900">{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button onClick={() => window.print()} className="text-gray-400 hover:text-blue-600 flex items-center space-x-1 text-sm transition-colors">
                <Download size={16} />
                <span>Save as PDF</span>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
