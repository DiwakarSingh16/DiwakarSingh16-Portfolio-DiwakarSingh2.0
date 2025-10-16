import React, { useState } from 'react';
import { Mail, User, MessageCircle, Globe, Linkedin, Twitter, Instagram } from 'lucide-react';

interface ContactProps {
  onFormSubmit: () => void;
}

const Contact = ({ onFormSubmit }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      onFormSubmit();
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 mt-2">
              Contact me for
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">collaboration</span>
            </h2>
            <p className="text-gray-400 text-lg lg:text-xl mb-10 leading-relaxed">
              Reach out today to discuss your project 
              needs and start collaborating on 
              something amazing!
            </p>

            {/* Social Links */}
            <div className="flex gap-6">
              <a href="#" className="w-14 h-14 bg-gray-800/80 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-cyan-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg border border-gray-700 hover:border-cyan-500">
                <Globe size={20} className="text-white" />
              </a>
              <a href="#" className="w-14 h-14 bg-gray-800/80 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-cyan-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg border border-gray-700 hover:border-cyan-500">
                <Linkedin size={20} className="text-white" />
              </a>
              <a href="#" className="w-14 h-14 bg-gray-800/80 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-cyan-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg border border-gray-700 hover:border-cyan-500">
                <Twitter size={20} className="text-white" />
              </a>
              <a href="#" className="w-14 h-14 bg-gray-800/80 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-cyan-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg border border-gray-700 hover:border-cyan-500">
                <Instagram size={20} className="text-white" />
              </a>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="relative z-10">
            <form onSubmit={handleSubmit} className="space-y-8 bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-3">Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="codewithDiwakar"
                      className="w-full bg-gray-900/80 border border-gray-600 rounded-xl px-4 py-4 text-white focus:border-cyan-500 focus:outline-none transition-all duration-300 hover:border-gray-500"
                      required
                    />
                    <User size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-3">Email</label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="diwakar@example.com"
                      className="w-full bg-gray-900/80 border border-gray-600 rounded-xl px-4 py-4 text-white focus:border-cyan-500 focus:outline-none transition-all duration-300 hover:border-gray-500"
                      required
                    />
                    <Mail size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm font-medium mb-3">Message</label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi!"
                    rows={4}
                    className="w-full bg-gray-900/80 border border-gray-600 rounded-xl px-4 py-4 text-white focus:border-cyan-500 focus:outline-none transition-all duration-300 resize-none hover:border-gray-500"
                    required
                  />
                  <MessageCircle size={16} className="absolute right-3 top-3 text-gray-400" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;