import React from 'react';

const Tools = () => {
  const tools = [
    {
      name: 'Figma',
      category: 'Design tool',
      icon: '🎨', 
      color: 'from-pink-500 to-red-500'
    },
    {
      name: 'CSS',
      category: 'User Interface',
      icon: '💫',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'JavaScript',
      category: 'Interaction',
      icon: '⚡',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'NodeJS',
      category: 'Web Server',
      icon: '🟢',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'ExpressJS',
      category: 'Node Framework',
      icon: '⚙️',
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'MongoDB',
      category: 'Database',
      icon: '🍃',
      color: 'from-green-600 to-green-500'
    },
    {
      name: 'React',
      category: 'Framework',
      icon: '⚛️',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      name: 'TailwindCSS',
      category: 'User Interface',
      icon: '🌊',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <section id="tools" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-800/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 relative z-10">
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">My Arsenal</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 mt-2">Essential Tools I Use</h2>
          <p className="text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover the powerful tools and technologies I use to create 
            exceptional, high-performing websites & applications.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/10 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tool.color} flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {tool.icon}
              </div>
              <h3 className="text-white font-bold text-xl mb-2 group-hover:text-cyan-400 transition-colors">{tool.name}</h3>
              <p className="text-gray-400 text-sm font-medium">{tool.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;