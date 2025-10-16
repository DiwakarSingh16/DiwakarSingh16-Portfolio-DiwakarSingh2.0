import React from 'react';
import { MapPin, Calendar, Building, Award } from 'lucide-react';

const Internships = () => {
  const internships = [
    {
      company: 'TechCorp Solutions',
      position: 'Frontend Developer Intern',
      duration: 'Jun 2023 - Aug 2023',
      location: 'San Francisco, CA',
      description: 'Developed responsive web applications using React and TypeScript. Collaborated with senior developers on user interface improvements and implemented modern design patterns.',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Git'],
      type: 'Remote',
      logo: '🚀'
    },
    {
      company: 'Digital Innovations Inc',
      position: 'Full Stack Developer Intern',
      duration: 'Jan 2023 - May 2023',
      location: 'New York, NY',
      description: 'Built RESTful APIs using Node.js and Express. Worked on database design and optimization. Participated in agile development processes and code reviews.',
      skills: ['Node.js', 'Express', 'MongoDB', 'React'],
      type: 'Hybrid',
      logo: '💡'
    },
    {
      company: 'StartupHub',
      position: 'Web Developer Intern',
      duration: 'Sep 2022 - Dec 2022',
      location: 'Austin, TX',
      description: 'Created landing pages and marketing websites. Optimized website performance and implemented SEO best practices. Gained experience in client communication.',
      skills: ['HTML/CSS', 'JavaScript', 'WordPress', 'SEO'],
      type: 'On-site',
      logo: '🌟'
    },
    {
      company: 'CloudTech Systems',
      position: 'Software Engineering Intern',
      duration: 'Jun 2022 - Aug 2022',
      location: 'Seattle, WA',
      description: 'Assisted in developing cloud-based applications. Learned about microservices architecture and containerization. Contributed to testing and documentation.',
      skills: ['Python', 'Docker', 'AWS', 'Testing'],
      type: 'Remote',
      logo: '☁️'
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-800/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 relative z-10">
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Experience</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 mt-2">My Internship Journey</h2>
          <p className="text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Hands-on experience gained through various internships in the tech industry.
          </p>
        </div>

        {/* Internships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {internships.map((internship, index) => (
            <div
              key={index}
              className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 group hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              {/* Company Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {internship.logo}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1 group-hover:text-cyan-400 transition-colors">
                      {internship.company}
                    </h3>
                    <p className="text-cyan-400 font-semibold text-sm">{internship.position}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  internship.type === 'Remote' ? 'bg-green-500/20 text-green-400' :
                  internship.type === 'Hybrid' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {internship.type}
                </span>
              </div>

              {/* Duration and Location */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar size={16} />
                  <span className="text-sm font-medium">{internship.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin size={16} />
                  <span className="text-sm font-medium">{internship.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {internship.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {internship.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-700/80 text-gray-300 text-xs font-medium rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;