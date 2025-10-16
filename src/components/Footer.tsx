import React from 'react';

const Footer = () => {
  return (
    <footer className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        {/* CTA Section */}
        <div className="text-center mb-20 relative z-10">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Let's work
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
              together
            </span>
          </h2>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-12 border-t border-gray-800/50 relative z-10">
          {/* Sitemap */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Sitemap</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-medium">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-medium">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-medium">Work</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-medium">Experience</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Socials</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-medium">GitHub</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-medium">LinkedIn</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-medium">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-medium">Instagram</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-medium">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-medium">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-medium">Consulting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-medium">Maintenance</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400 font-medium">ds6918821@gmail.com</span></li>
              <li><span className="text-gray-400 font-medium">+91 9955246650</span></li>
              <li><span className="text-gray-400 font-medium">Dhanbad , Jharkhand , India</span></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center pt-12 mt-12 border-t border-gray-800/50 relative z-10">
          <p className="text-gray-500 font-medium">
            © 2025 Diwakar. All rights reserved. Built with ❤️ and React.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;