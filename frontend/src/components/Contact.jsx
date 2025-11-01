// src/components/Contact.jsx
import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission (page reload)
    if (formData.name && formData.email && formData.message) {
      alert(`Thank you, ${formData.name}! Your message has been received.`);
      // Reset the form
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's discuss your next project.</p>
        
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <Mail size={24} color="#6366f1" />
              <div>
                <h4 className="contact-item-title">Email</h4>
                <a href="mailto:contact@soumora.fi" className="contact-item-text">contact@soumora.fi</a>
              </div>
            </div>
            <div className="contact-item">
              <Phone size={24} color="#6366f1" />
              <div>
                <h4 className="contact-item-title">Phone</h4>
                <p className="contact-item-text">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="contact-item">
              <MapPin size={24} color="#6366f1" />
              <div>
                <h4 className="contact-item-title">Location</h4>
                <p className="contact-item-text">Helsinki, Finland</p>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
              rows="5"
              required
            ></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
