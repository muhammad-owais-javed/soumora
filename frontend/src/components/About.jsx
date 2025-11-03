// About.jsx
import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen,
  Briefcase,
  Users,
  Target,
  Heart,
  Zap,
  TrendingUp,
  Award,
  ArrowRight,
  Sparkles,
  Play,
  CheckCircle2,
  Globe2,
  Lightbulb
} from 'lucide-react';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    years: 0,
    clients: 0,
    projects: 0,
    satisfaction: 0
  });
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!hasAnimated.current) {
            animateCounters();
            hasAnimated.current = true;
          }
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const targets = { years: 10, clients: 500, projects: 1000, satisfaction: 98 };
    
    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        years: Math.floor(targets.years * progress),
        clients: Math.floor(targets.clients * progress),
        projects: Math.floor(targets.projects * progress),
        satisfaction: Math.floor(targets.satisfaction * progress)
      });

      if (step >= steps) {
        clearInterval(interval);
        setCounters(targets);
      }
    }, duration / steps);
  };

  const values = [
    {
      icon: Heart,
      title: 'Client-Centric',
      desc: 'Your success is our mission. We build lasting partnerships.',
      color: '#ef4444'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      desc: 'Pushing boundaries with cutting-edge solutions.',
      color: '#f59e0b'
    },
    {
      icon: Award,
      title: 'Excellence',
      desc: 'Delivering quality that exceeds expectations.',
      color: '#3b82f6'
    },
    {
      icon: Users,
      title: 'Collaboration',
      desc: 'Teamwork drives our collective success.',
      color: '#8b5cf6'
    }
  ];

  const milestones = [
    { year: '2015', title: 'Company Founded', desc: 'Started with a vision to transform digital experiences' },
    { year: '2017', title: 'First Major Client', desc: 'Landed enterprise partnership, scaling our operations' },
    { year: '2019', title: 'Global Expansion', desc: 'Opened offices in 5 countries worldwide' },
    { year: '2022', title: 'Innovation Award', desc: 'Recognized for groundbreaking tech solutions' },
    { year: '2025', title: 'Industry Leader', desc: 'Serving 500+ clients across 30+ countries' }
  ];

  const benefits = [
    { icon: TrendingUp, title: 'Career Growth', desc: 'Continuous learning and development opportunities' },
    { icon: Globe2, title: 'Remote-First', desc: 'Work from anywhere with flexible schedules' },
    { icon: Heart, title: 'Health & Wellness', desc: 'Comprehensive health coverage and wellness programs' },
    { icon: Zap, title: 'Cutting-Edge Tech', desc: 'Work with the latest tools and technologies' }
  ];

  return (
    <section 
      id="about" 
      className="about-section"
      ref={sectionRef}
    >
      {/* Background Elements */}
      <div className="about-bg-gradient"></div>
      <div className="about-mesh-pattern"></div>

      <div className="about-container">
        {/* Section Header */}
        <div className={`about-header ${isVisible ? 'visible' : ''}`}>
          <div className="section-badge">
            <Sparkles size={16} />
            <span>About Soumora</span>
          </div>
          <h2 className="section-title">
            Building the Future of
            <span className="title-highlight"> Digital Innovation</span>
          </h2>
          <p className="section-description">
            We're not just developers—we're digital architects crafting experiences 
            that inspire, engage, and transform businesses worldwide.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={`about-tabs ${isVisible ? 'visible' : ''}`}>
          <button 
            className={`tab-button ${activeTab === 'story' ? 'active' : ''}`}
            onClick={() => setActiveTab('story')}
          >
            <BookOpen size={20} />
            <span>Our Story</span>
          </button>
          <button 
            className={`tab-button ${activeTab === 'careers' ? 'active' : ''}`}
            onClick={() => setActiveTab('careers')}
          >
            <Briefcase size={20} />
            <span>Careers</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {/* Our Story Tab */}
          {activeTab === 'story' && (
            <div className="story-content">
              {/* Story Hero */}
              <div className="story-hero">
                <div className="story-hero-content">
                  <h3 className="story-title">A Journey of Innovation</h3>
                  <p className="story-text">
                    Founded in 2015, Soumora began with a simple yet powerful vision: to bridge 
                    the gap between technology and human experience. What started as a small team 
                    of passionate developers has grown into a global force driving digital 
                    transformation for hundreds of businesses worldwide.
                  </p>
                  <p className="story-text">
                    Today, we're proud to be at the forefront of innovation, combining creative 
                    excellence with technical expertise to deliver solutions that don't just meet 
                    expectations—they exceed them.
                  </p>
                  <button className="story-video-btn">
                    <div className="video-play-icon">
                      <Play size={24} fill="#ffffff" />
                    </div>
                    <span>Watch Our Story</span>
                  </button>
                </div>
                <div className="story-hero-visual">
                  <div className="visual-card card-main">
                    <img 
                      src="/api/placeholder/400/300" 
                      alt="Team" 
                      className="visual-img"
                    />
                    <div className="card-overlay">
                      <Target size={32} />
                    </div>
                  </div>
                  <div className="floating-stat stat-1">
                    <div className="stat-icon">
                      <Users size={20} />
                    </div>
                    <div>
                      <div className="stat-number">500+</div>
                      <div className="stat-label">Happy Clients</div>
                    </div>
                  </div>
                  <div className="floating-stat stat-2">
                    <div className="stat-icon">
                      <Award size={20} />
                    </div>
                    <div>
                      <div className="stat-number">50+</div>
                      <div className="stat-label">Awards Won</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Counter */}
              <div className="stats-section">
                <div className="stat-card">
                  <div className="stat-value">{counters.years}+</div>
                  <div className="stat-text">Years of Excellence</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">{counters.clients}+</div>
                  <div className="stat-text">Satisfied Clients</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">{counters.projects}+</div>
                  <div className="stat-text">Projects Delivered</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">{counters.satisfaction}%</div>
                  <div className="stat-text">Client Satisfaction</div>
                </div>
              </div>

              {/* Values */}
              <div className="values-section">
                <h3 className="subsection-title">Our Core Values</h3>
                <div className="values-grid">
                  {values.map((value, index) => {
                    const Icon = value.icon;
                    return (
                      <div key={index} className="value-card">
                        <div 
                          className="value-icon"
                          style={{ background: `linear-gradient(135deg, ${value.color}, ${value.color}dd)` }}
                        >
                          <Icon size={24} />
                        </div>
                        <h4 className="value-title">{value.title}</h4>
                        <p className="value-desc">{value.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Timeline */}
              <div className="timeline-section">
                <h3 className="subsection-title">Our Journey</h3>
                <div className="timeline">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-marker">
                        <div className="marker-dot"></div>
                        <div className="marker-line"></div>
                      </div>
                      <div className="timeline-content">
                        <div className="timeline-year">{milestone.year}</div>
                        <h4 className="timeline-title">{milestone.title}</h4>
                        <p className="timeline-desc">{milestone.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Careers Tab */}
          {activeTab === 'careers' && (
            <div className="careers-content">
              {/* Careers Hero */}
              <div className="careers-hero">
                <div className="careers-hero-visual">
                  <div className="visual-card card-main">
                    <img 
                      src="/api/placeholder/400/300" 
                      alt="Team Working" 
                      className="visual-img"
                    />
                    <div className="card-overlay">
                      <Briefcase size={32} />
                    </div>
                  </div>
                  <div className="floating-badge badge-1">
                    <CheckCircle2 size={16} />
                    <span>Remote-First</span>
                  </div>
                  <div className="floating-badge badge-2">
                    <CheckCircle2 size={16} />
                    <span>Flexible Hours</span>
                  </div>
                </div>
                <div className="careers-hero-content">
                  <h3 className="careers-title">Join Our Team</h3>
                  <p className="careers-text">
                    At Soumora, we believe that great work comes from great people. We're 
                    building a diverse, inclusive team of talented individuals who are 
                    passionate about technology and driven to make a difference.
                  </p>
                  <p className="careers-text">
                    Whether you're a seasoned professional or just starting your career, 
                    we offer an environment where you can grow, innovate, and thrive.
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="benefits-section">
                <h3 className="subsection-title">Why Work With Us</h3>
                <div className="benefits-grid">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={index} className="benefit-card">
                        <div className="benefit-icon">
                          <Icon size={24} />
                        </div>
                        <h4 className="benefit-title">{benefit.title}</h4>
                        <p className="benefit-desc">{benefit.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Open Positions */}
              <div className="positions-section">
                <h3 className="subsection-title">Open Positions</h3>
                <div className="positions-list">
                  <div className="position-item">
                    <div className="position-info">
                      <h4 className="position-title">Senior Full-Stack Developer</h4>
                      <div className="position-meta">
                        <span className="meta-badge">Full-Time</span>
                        <span className="meta-badge">Remote</span>
                        <span className="meta-text">Engineering</span>
                      </div>
                    </div>
                    <button className="position-apply-btn">
                      <span>Apply Now</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                  <div className="position-item">
                    <div className="position-info">
                      <h4 className="position-title">UI/UX Designer</h4>
                      <div className="position-meta">
                        <span className="meta-badge">Full-Time</span>
                        <span className="meta-badge">Remote</span>
                        <span className="meta-text">Design</span>
                      </div>
                    </div>
                    <button className="position-apply-btn">
                      <span>Apply Now</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                  <div className="position-item">
                    <div className="position-info">
                      <h4 className="position-title">DevOps Engineer</h4>
                      <div className="position-meta">
                        <span className="meta-badge">Full-Time</span>
                        <span className="meta-badge">Hybrid</span>
                        <span className="meta-text">Operations</span>
                      </div>
                    </div>
                    <button className="position-apply-btn">
                      <span>Apply Now</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
                <div className="positions-cta">
                  <p>Don't see a role that fits? We're always looking for talented people!</p>
                  <button className="general-apply-btn">
                    <span>Send General Application</span>
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;