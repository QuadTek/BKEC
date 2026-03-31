import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('/api/services').then(res => setServices(res.data));
  }, []);

  const getIcon = (iconName) => {
    const icons = {
      'lightbulb': '💡',
      'cog': '⚙️',
      'flag': '🇮🇳',
      'network': '🔗',
      'wrench': '🔧',
      'flask': '🧪'
    };
    return icons[iconName] || '⚡';
  };

  return (
    <div className="services-page">
      <div className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive technology solutions from consultation to deployment</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="services-intro">
            <h2>End-to-End Technology Solutions</h2>
            <p>
              BKEC provides complete technology lifecycle services - from initial consultation and R&D 
              through to manufacturing, deployment, and ongoing support. Our integrated approach ensures 
              seamless execution and measurable results.
            </p>
          </div>

          <div className="grid grid-2">
            {services.map(service => (
              <div key={service.id} className="card service-detail-card">
                <div className="service-detail-icon">{getIcon(service.icon)}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-category">{service.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section approach-section">
        <div className="container">
          <h2 className="section-title">Our Approach</h2>
          <div className="grid grid-4">
            <div className="approach-card">
              <div className="approach-number">01</div>
              <h3>Consultation</h3>
              <p>Understanding your challenges and defining technology requirements</p>
            </div>
            <div className="approach-card">
              <div className="approach-number">02</div>
              <h3>Design & Development</h3>
              <p>R&D, prototyping, and solution engineering</p>
            </div>
            <div className="approach-card">
              <div className="approach-number">03</div>
              <h3>Implementation</h3>
              <p>Manufacturing, integration, and deployment</p>
            </div>
            <div className="approach-card">
              <div className="approach-number">04</div>
              <h3>Support</h3>
              <p>Maintenance, optimization, and continuous improvement</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section differentiators-section">
        <div className="container">
          <h2 className="section-title">Why Choose BKEC</h2>
          <div className="grid grid-3">
            <div className="card differentiator-card">
              <h3>Execution Focus</h3>
              <p>We don't just advise - we execute. From concept to completion, we deliver working solutions.</p>
            </div>
            <div className="card differentiator-card">
              <h3>Indigenous Innovation</h3>
              <p>Reduce import dependency with locally developed, cost-effective technology solutions.</p>
            </div>
            <div className="card differentiator-card">
              <h3>Multi-Sector Expertise</h3>
              <p>Deep experience across agriculture, defence, manufacturing, and infrastructure sectors.</p>
            </div>
            <div className="card differentiator-card">
              <h3>Scalable Solutions</h3>
              <p>Technology designed for Indian conditions - affordable, practical, and scalable.</p>
            </div>
            <div className="card differentiator-card">
              <h3>Proven Track Record</h3>
              <p>150+ successful projects delivered across multiple industries.</p>
            </div>
            <div className="card differentiator-card">
              <h3>End-to-End Support</h3>
              <p>Comprehensive lifecycle management from deployment through ongoing optimization.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
