import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-hero">
        <div className="container">
          <h1>About BKEC</h1>
          <p>Engineering Tomorrow. Empowering India.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="about-intro">
            <h2>Who We Are</h2>
            <p>
              <strong>Bombatkar Kaple Engineering & Consultancy Private Limited (BKEC)</strong> is a 
              multi-sector technology and engineering solutions company based in Pune and Nashik, Maharashtra. 
              We specialize in delivering end-to-end technology solutions across agriculture, defence, 
              manufacturing, infrastructure, and railways.
            </p>
            <p>
              Unlike traditional consultancies that only provide advice, BKEC executes. From R&D and 
              prototyping to manufacturing and deployment, we transform technology challenges into 
              actionable, scalable solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="section mission-vision-section">
        <div className="container">
          <div className="grid grid-2">
            <div className="card mission-card">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To democratize advanced technology across India's critical sectors by delivering 
                affordable, accessible, and actionable solutions that drive real-world impact.
              </p>
            </div>
            <div className="card vision-card">
              <div className="mv-icon">🚀</div>
              <h3>Our Vision</h3>
              <p>
                To be India's leading execution-focused technology partner, enabling indigenous 
                innovation and reducing dependency on foreign technology across all major industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="grid grid-4">
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3>Execution</h3>
              <p>We deliver results, not just recommendations</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🇮🇳</div>
              <h3>Indigenisation</h3>
              <p>Building self-reliant India through local innovation</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Partnership</h3>
              <p>Long-term relationships built on trust and results</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>Practical solutions for real-world challenges</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <h2 className="section-title">Leadership Team</h2>
          <div className="grid grid-2">
            <div className="card team-card">
              <div className="team-image">
                <img src="https://via.placeholder.com/300x300/003366/ffffff?text=ASK" alt="Aditya Shyam Kaple" />
              </div>
              <div className="team-info">
                <h3>Aditya Shyam Kaple</h3>
                <div className="team-position">Director & CEO</div>
                <p>
                  Engineering expert with deep experience in defence R&D, robotics education, and 
                  project execution. Leads BKEC's technology strategy and innovation initiatives.
                </p>
              </div>
            </div>
            <div className="card team-card">
              <div className="team-image">
                <img src="https://via.placeholder.com/300x300/003366/ffffff?text=SSB" alt="Saurav Suresh Bombatkar" />
              </div>
              <div className="team-info">
                <h3>Saurav Suresh Bombatkar</h3>
                <div className="team-position">Director</div>
                <p>
                  Operational management and strategy expert. Oversees execution across all sectors 
                  and ensures seamless delivery of complex multi-sector projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section differentiators-section">
        <div className="container">
          <h2 className="section-title">What Makes Us Different</h2>
          <div className="differentiators-grid">
            <div className="differentiator-item">
              <div className="diff-number">01</div>
              <div className="diff-content">
                <h3>End-to-End Execution</h3>
                <p>From consultation to deployment, we handle the complete technology lifecycle</p>
              </div>
            </div>
            <div className="differentiator-item">
              <div className="diff-number">02</div>
              <div className="diff-content">
                <h3>Multi-Sector Expertise</h3>
                <p>Deep domain knowledge across agriculture, defence, manufacturing, and infrastructure</p>
              </div>
            </div>
            <div className="differentiator-item">
              <div className="diff-number">03</div>
              <div className="diff-content">
                <h3>Indigenous Focus</h3>
                <p>Reducing import dependency through local component manufacturing and innovation</p>
              </div>
            </div>
            <div className="differentiator-item">
              <div className="diff-number">04</div>
              <div className="diff-content">
                <h3>Grassroots Deployment</h3>
                <p>Technology solutions designed for Indian conditions and accessible to all scales</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">85+</div>
              <div className="stat-label">Satisfied Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">6+</div>
              <div className="stat-label">Industries Served</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
