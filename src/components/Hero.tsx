import React from 'react';
import myphoto from './myphoto.png';

import { Download, ArrowDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left relative z-10">
            {/* Available for work badge */}
            <div className="inline-flex items-center gap-3 bg-gray-800/80 backdrop-blur-sm rounded-full px-5 py-3 mb-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
              <img
                //src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop&crop=face"
                src={myphoto}
                alt="Profile"
                className="w-7 h-7 rounded-full object-cover ring-2 ring-cyan-500/50"
              />
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">Available for work</span>
              <Sparkles size={14} className="text-cyan-400 animate-pulse" />
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-8 animate-fade-in">
              Building Scalable
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
                Modern Websites
              </span>
              <br />
              for the Future
            </h1>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                <Download size={20} />
                Download CV
              </button>
              <button
                onClick={scrollToAbout}
                className="inline-flex items-center gap-2 bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700/80 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 border border-gray-700 hover:border-cyan-500/50 transform hover:scale-105"
              >
                <ArrowDown size={20} />
                Scroll down
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-shrink-0 relative z-10">
            <div className="relative group">
              <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[520px] bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-600/20 rounded-3xl p-1 transform group-hover:scale-105 transition-all duration-500">
                <img
                  src={myphoto}
                  //src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop&crop=face"
                  alt="Diwakar - Web Developer"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce shadow-lg"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-60 animate-pulse shadow-lg"></div>
              <div className="absolute top-1/4 -left-4 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-ping"></div>
              <div className="absolute bottom-1/4 -right-2 w-4 h-4 bg-gradient-to-r from-red-400 to-pink-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;