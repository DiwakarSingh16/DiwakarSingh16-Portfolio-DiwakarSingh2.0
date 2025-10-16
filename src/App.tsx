import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Tools from './components/Tools';
import Portfolio from './components/Portfolio';
import Internships from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SuccessPage from './components/SuccessPage';

function App() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFormSubmit = () => {
    setShowSuccess(true);
  };

  const handleBackToMain = () => {
    setShowSuccess(false);
  };

  if (showSuccess) {
    return <SuccessPage onBack={handleBackToMain} />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Tools />
        <Portfolio />
        <Internships />
        <Contact onFormSubmit={handleFormSubmit} />
        <Footer />
      </main>
    </div>
  );
}

export default App;