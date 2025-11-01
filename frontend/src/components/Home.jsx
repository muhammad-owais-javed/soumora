// src/components/Home.jsx
import React from 'react';
import { ChevronRight } from 'lucide-react';
import './Home.css'; // Import the CSS for this component

const Home = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">
            Transform Your Digital Presence
          </h1>
          <p className="home-subtitle">
            We craft innovative web solutions that drive growth and deliver exceptional user experiences.
          </p>
          <div className="home-buttons">
            <button className="primary-btn" onClick={() => scrollToSection('contact')}>
              Get Started <ChevronRight size={20} />
            </button>
            <button className="secondary-btn" onClick={() => scrollToSection('services')}>
              Our Services
            </button>
          </div>
        </div>
        <div className="home-graphic">
          <div className="floating-card card1"></div>
          <div className="floating-card card2"></div>
          <div className="floating-card card3"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
