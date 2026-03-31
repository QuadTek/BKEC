import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Industries.css';

const Industries = () => {
  const [industries, setIndustries] = useState([]);

  useEffect(() => {
    axios.get('/api/industries').then(res => setIndustries(res.data));
  }, []);

  const getIcon = (iconName) => {
    const icons = {
      'leaf': '🌾',
      'shield': '🛡️',
      'industry': '🏭',
      'building': '🏢',
      'train': '🚄',
      'graduation-cap': '🎓'
    };
    return icons[iconName] || '⚡';
  };

  const industryDetails = {
    'Agriculture': {
      solutions: ['Agri-spraying drones', 'Lidar-based weedicide systems', 'Dharti Netra weather monitoring', 'Precision farming technology'],
      impact: ['Increased crop yield', 'Reduced chemical usage', 'Lower operational costs', 'Data-driven farming decisions']
    },
    'Defence': {
      solutions: ['Reconnaissance drones', 'Swamp terrain drones', 'Surveillance systems', 'Indigenous defence technology'],
      impact: ['Cost-efficient deployment', 'Reduced foreign dependency', 'Enhanced surveillance capabilities', 'Rapid response systems']
    },
    'Manufacturing': {
      solutions: ['Traction motor components', 'Industrial automation', 'Production monitoring systems', 'Quality control solutions'],
      impact: ['Reduced import dependency', 'Improved supply chain resilience', 'Enhanced production efficiency', 'Cost savings']
    },
    'Infrastructure': {
      solutions: ['Smart city solutions', 'IoT dashboards', 'Automation systems', 'Modernisation projects'],
      impact: ['Faster modernisation', 'Operational efficiency', 'Cost reduction', 'Improved service delivery']
    },
    'Railways': {
      solutions: ['Traction motor indigenisation', 'Power consultancy', 'Rail automation', 'Component manufacturing'],
      impact: ['Millions saved in forex', 'Improved reliability', 'Faster deployment', 'Enhanced performance']
    },
    'Education': {
      solutions: ['AI Voice Hub', 'Campus automation', 'Smart learning infrastructure', 'Digital signage systems'],
      impact: ['Enhanced communication', 'Automated scheduling', 'Improved campus management', 'Modern learning environment']
    }
  };

  return (
    <div className="industries-page">
      <div className="page-hero">
        <div className="container">
          <h1>Industries We Serve</h1>
          <p>Delivering specialized technology solutions across multiple sectors</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="industries-intro">
            <h2>Multi-Sector Expertise</h2>
            <p>
              BKEC brings deep domain knowledge and proven execution capabilities across India's most 
              critical industries. Our solutions are tailored to address sector-specific challenges 
              while leveraging cross-industry innovations.
            </p>
          </div>

          <div className="industries-detailed">
            {industries.map(industry => (
              <div key={industry.id} className="industry-detail-section">
                <div className="industry-detail-header">
                  <div className="industry-detail-icon">{getIcon(industry.icon)}</div>
                  <div>
                    <h2>{industry.name}</h2>
                    <p>{industry.description}</p>
                  </div>
                </div>
                
                {industryDetails[industry.name] && (
                  <div className="industry-detail-content">
                    <div className="industry-detail-col">
                      <h3>Our Solutions</h3>
                      <ul>
                        {industryDetails[industry.name].solutions.map((solution, idx) => (
                          <li key={idx}>{solution}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="industry-detail-col">
                      <h3>Impact & Benefits</h3>
                      <ul>
                        {industryDetails[industry.name].impact.map((impact, idx) => (
                          <li key={idx}>{impact}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cross-industry-section">
        <div className="container">
          <h2 className="section-title">Cross-Industry Innovation</h2>
          <p className="section-subtitle">
            Our multi-sector approach enables us to bring innovations from one industry to solve 
            challenges in another, creating unique competitive advantages.
          </p>
          <div className="grid grid-3">
            <div className="card innovation-card">
              <h3>Technology Transfer</h3>
              <p>Adapting defence-grade technology for industrial and agricultural applications</p>
            </div>
            <div className="card innovation-card">
              <h3>Integrated Solutions</h3>
              <p>Combining IoT, AI, and automation across multiple sectors</p>
            </div>
            <div className="card innovation-card">
              <h3>Shared Infrastructure</h3>
              <p>Leveraging common platforms for cost-effective deployment</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
