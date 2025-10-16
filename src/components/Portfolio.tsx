import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Full stack music app',
      image: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['API', 'MVC', 'Development'],
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Free stock photo app',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['API', 'SPA'],
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Recipe app',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['Development', 'API'],
      gradient: 'from-red-400 to-pink-500'
    },
    {
      title: 'Real state website',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['Web-design', 'Development'],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'eCommerce website',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['eCommerce', 'Development'],
      gradient: 'from-pink-400 to-rose-500'
    },
    {
      title: 'vCard Personal portfolio',
      image: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['Web-design', 'Development'],
      gradient: 'from-gray-600 to-gray-800'
    }
  ];

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 relative z-10">
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">My Work</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 mt-2">Featured Projects</h2>
          <p className="text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore my latest projects showcasing modern web development techniques and creative solutions.
          </p>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20 relative z-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 group hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-56">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="w-10 h-10 bg-cyan-500 hover:bg-cyan-600 rounded-xl flex items-center justify-center transition-colors cursor-pointer">
                    <ExternalLink size={16} className="text-white" />
                  </div>
                  <div className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-colors cursor-pointer">
                    <Github size={16} className="text-white" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                <h3 className="text-white font-bold text-xl mb-4 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-2 bg-gray-700/80 text-gray-300 text-xs font-medium rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;