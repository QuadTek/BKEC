import React, { useState } from 'react';
import axios from 'axios';
import './Careers.css';

const Careers = () => {
  const [formData, setFormData] = useState({
    position: '',
    name: '',
    email: '',
    phone: '',
    coverLetter: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const positions = [
    {
      title: 'Embedded Systems Engineer',
      department: 'Engineering',
      location: 'Pune, Maharashtra',
      type: 'Full-time',
      description: 'Design and develop embedded systems for industrial and agricultural applications.'
    },
    {
      title: 'Drone Technology Specialist',
      department: 'R&D',
      location: 'Pune, Maharashtra',
      type: 'Full-time',
      description: 'Work on drone systems for agriculture and defence applications.'
    },
    {
      title: 'IoT Solutions Architect',
      department: 'Engineering',
      location: 'Nashik, Maharashtra',
      type: 'Full-time',
      description: 'Design and implement IoT solutions for industrial monitoring and control.'
    },
    {
      title: 'Project Manager - Defence',
      department: 'Operations',
      location: 'Pune, Maharashtra',
      type: 'Full-time',
      description: 'Manage defence technology projects from conception to deployment.'
    },
    {
      title: 'Manufacturing Engineer',
      department: 'Production',
      location: 'Nashik, Maharashtra',
      type: 'Full-time',
      description: 'Oversee manufacturing processes for electronic components and systems.'
    },
    {
      title: 'Business Development Manager',
      department: 'Sales',
      location: 'Pune, Maharashtra',
      type: 'Full-time',
      description: 'Drive business growth across agriculture, defence, and industrial sectors.'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/careers/apply', formData)
      .then(() => {
        setSubmitted(true);
        setFormData({ position: '', name: '', email: '', phone: '', coverLetter: '' });
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="careers-page">
      <div className="page-hero">
        <div className="container">
          <h1>Join Our Team</h1>
          <p>Build the future of Indian technology with BKEC</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="careers-intro">
            <h2>Why Work at BKEC?</h2>
            <p>
              At BKEC, you'll work on cutting-edge technology projects that make a real difference 
              to India's technological independence. From agriculture to defence, your work will 
              have tangible impact across multiple critical sectors.
            </p>
          </div>

          <div className="grid grid-3">
            <div className="card benefit-card">
              <div className="benefit-icon">🚀</div>
              <h3>Impactful Work</h3>
              <p>Work on projects that transform industries and strengthen national capabilities</p>
            </div>
            <div className="card benefit-card">
              <div className="benefit-icon">📚</div>
              <h3>Learning & Growth</h3>
              <p>Continuous learning opportunities across multiple technology domains</p>
            </div>
            <div className="card benefit-card">
              <div className="benefit-icon">🤝</div>
              <h3>Collaborative Culture</h3>
              <p>Work with passionate professionals in a supportive, innovation-driven environment</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section positions-section">
        <div className="container">
          <h2 className="section-title">Open Positions</h2>
          <div className="positions-grid">
            {positions.map((position, idx) => (
              <div key={idx} className="card position-card">
                <div className="position-header">
                  <h3>{position.title}</h3>
                  <span className="position-type">{position.type}</span>
                </div>
                <div className="position-meta">
                  <span>📍 {position.location}</span>
                  <span>🏢 {position.department}</span>
                </div>
                <p>{position.description}</p>
                <button 
                  className="btn btn-secondary"
                  onClick={() => {
                    setFormData({ ...formData, position: position.title });
                    document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section application-section" id="application-form">
        <div className="container">
          <div className="application-container">
            <h2 className="section-title">Submit Your Application</h2>
            
            {submitted && (
              <div className="success-message">
                Thank you for your application! We will review it and get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="application-form">
              <div className="form-group">
                <label>Position *</label>
                <select 
                  name="position" 
                  value={formData.position} 
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a position</option>
                  {positions.map((pos, idx) => (
                    <option key={idx} value={pos.title}>{pos.title}</option>
                  ))}
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email *</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Phone Number *</label>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Cover Letter *</label>
                <textarea 
                  name="coverLetter" 
                  value={formData.coverLetter} 
                  onChange={handleChange}
                  rows="6"
                  placeholder="Tell us why you'd be a great fit for this position..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">Submit Application</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
