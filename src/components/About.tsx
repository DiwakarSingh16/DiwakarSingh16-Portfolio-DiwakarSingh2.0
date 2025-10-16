import React from 'react';
import { TrendingUp, Award, Code, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            <div className="mb-6">
              <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">About Me</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2 mb-6">
                Crafting Digital Excellence
              </h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              Welcome! I'm Diwakar Singh, a professional web developer with a knack for crafting 
              visually stunning and highly functional websites. Combining creativity and 
              technical expertise, I transform your vision into digital masterpiece that excels 
              in both appearance and performance.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center lg:text-left group">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <TrendingUp className="text-cyan-400 mr-2" size={24} />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  45<span className="text-cyan-400">+</span>
                </div>
                <div className="text-gray-400 text-sm font-medium">Projects Done</div>
              </div>
              <div className="text-center lg:text-left group">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Award className="text-cyan-400 mr-2" size={24} />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  10<span className="text-cyan-400">+</span>
                </div>
                <div className="text-gray-400 text-sm font-medium">Years Experience</div>
              </div>
              <div className="text-center lg:text-left group">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Code className="text-cyan-400 mr-2" size={24} />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  15<span className="text-cyan-400">+</span>
                </div>
                <div className="text-gray-400 text-sm font-medium">Technologies</div>
              </div>
              <div className="text-center lg:text-left group">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Users className="text-cyan-400 mr-2" size={24} />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  30<span className="text-cyan-400">+</span>
                </div>
                <div className="text-gray-400 text-sm font-medium">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right Content - Logo */}
          <div className="flex justify-center lg:justify-end relative z-10">
            <div className="relative group">
              <div className="w-40 h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-3xl transform rotate-12 flex items-center justify-center group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-2xl transform -rotate-12 flex items-center justify-center shadow-lg">
                  <Code className="text-gray-800" size={32} />
                </div>
              </div>
              {/* Floating elements around logo */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce opacity-80"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-pink-500 rounded-full animate-pulse opacity-80"></div>
              <div className="absolute top-1/2 -right-6 w-4 h-4 bg-green-400 rounded-full animate-ping opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;