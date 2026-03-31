// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import './Home.css';

// const Home = () => {
//   const [services, setServices] = useState([]);
//   const [industries, setIndustries] = useState([]);
//   const [testimonials, setTestimonials] = useState([]);
//   const [stats, setStats] = useState({});

//   useEffect(() => {
//     axios.get('/api/services').then(res => setServices(res.data.slice(0, 6)));
//     axios.get('/api/industries').then(res => setIndustries(res.data));
//     axios.get('/api/testimonials').then(res => setTestimonials(res.data));
//     axios.get('/api/stats').then(res => setStats(res.data));
//   }, []);

//   return (
//     <div className="home">
//       {/* Hero Section */}
//       <section className="hero">
//         <div className="hero-overlay"></div>
//         <div className="container">
//           <div className="hero-content">
//             <h1 className="hero-title">Engineering Tomorrow.<br />Empowering India.</h1>
//             <p className="hero-subtitle">
//               Multi-Sector Technology & Engineering Solutions for Agriculture, Defence, Manufacturing & Infrastructure
//             </p>
//             <div className="hero-buttons">
//               <Link to="/solutions" className="btn btn-primary">Explore Solutions</Link>
//               <Link to="/contact" className="btn btn-secondary">Get in Touch</Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="stats-section">
//         <div className="container">
//           <div className="stats-grid">
//             <div className="stat-card">
//               <div className="stat-number">{stats.projectsCompleted}+</div>
//               <div className="stat-label">Projects Completed</div>
//             </div>
//             <div className="stat-card">
//               <div className="stat-number">{stats.clientsSatisfied}+</div>
//               <div className="stat-label">Satisfied Clients</div>
//             </div>
//             <div className="stat-card">
//               <div className="stat-number">{stats.industriesServed}+</div>
//               <div className="stat-label">Industries Served</div>
//             </div>
//             <div className="stat-card">
//               <div className="stat-number">{stats.yearsExperience}+</div>
//               <div className="stat-label">Years Experience</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Business Consulting Section */}
//       <section className="section consulting-section">
//         <div className="container">
//           <div className="consulting-grid">
//             <div className="consulting-content">
//               <h2 className="section-title" style={{textAlign: 'left'}}>Technology That Executes</h2>
//               <p className="consulting-text">
//                 Unlike traditional consultancies that only provide advice, BKEC delivers end-to-end execution. 
//                 From R&D and prototyping to manufacturing and deployment, we transform technology challenges 
//                 into actionable solutions.
//               </p>
//               <ul className="consulting-features">
//                 <li>✓ Consultation + Execution Model</li>
//                 <li>✓ Indigenous Technology Development</li>
//                 <li>✓ Multi-Sector Expertise</li>
//                 <li>✓ Affordable & Scalable Solutions</li>
//               </ul>
//               <Link to="/about" className="btn btn-primary">Learn More</Link>
//             </div>
//             <div className="consulting-image">
//               <img src="https://via.placeholder.com/600x400/003366/ffffff?text=BKEC+Technology" alt="Technology Execution" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Challenges Section */}
//       <section className="section challenges-section">
//         <div className="container">
//           <h2 className="section-title">Navigating Business Challenges</h2>
//           <p className="section-subtitle">
//             We solve the critical technology gaps holding India's growth back
//           </p>
//           <div className="grid grid-4">
//             <div className="challenge-card">
//               <div className="challenge-icon">🌾</div>
//               <h3>Agriculture</h3>
//               <p>Low yields, chemical dependency, lack of precision technology</p>
//             </div>
//             <div className="challenge-card">
//               <div className="challenge-icon">🏭</div>
//               <h3>Manufacturing</h3>
//               <p>Import dependency, inefficient production, supply chain gaps</p>
//             </div>
//             <div className="challenge-card">
//               <div className="challenge-icon">🛡️</div>
//               <h3>Defence</h3>
//               <p>Foreign technology reliance, high costs, slow indigenisation</p>
//             </div>
//             <div className="challenge-card">
//               <div className="challenge-icon">🚄</div>
//               <h3>Infrastructure</h3>
//               <p>Slow modernisation, operational inefficiency, forex spending</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="section services-section">
//         <div className="container">
//           <h2 className="section-title">Our Services</h2>
//           <p className="section-subtitle">
//             Comprehensive technology solutions from consultation to deployment
//           </p>
//           <div className="grid grid-3">
//             {services.map(service => (
//               <div key={service.id} className="card service-card">
//                 <div className="service-icon">{getIcon(service.icon)}</div>
//                 <h3>{service.title}</h3>
//                 <p>{service.description}</p>
//               </div>
//             ))}
//           </div>
//           <div style={{textAlign: 'center', marginTop: '2rem'}}>
//             <Link to="/services" className="btn btn-primary">View All Services</Link>
//           </div>
//         </div>
//       </section>

//       {/* Industry Expertise Section */}
//       <section className="section industry-section">
//         <div className="container">
//           <h2 className="section-title">Our Industry Expertise</h2>
//           <p className="section-subtitle">
//             Delivering specialized solutions across multiple sectors
//           </p>
//           <div className="grid grid-3">
//             {industries.map(industry => (
//               <div key={industry.id} className="card industry-card">
//                 <div className="industry-icon">{getIcon(industry.icon)}</div>
//                 <h3>{industry.name}</h3>
//                 <p>{industry.description}</p>
//               </div>
//             ))}
//           </div>
//           <div style={{textAlign: 'center', marginTop: '2rem'}}>
//             <Link to="/industries" className="btn btn-primary">Explore Industries</Link>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="section testimonials-section">
//         <div className="container">
//           <h2 className="section-title">What Our Clients Say</h2>
//           <p className="section-subtitle">
//             Trusted by leading organizations across India
//           </p>
//           <div className="grid grid-3">
//             {testimonials.map(testimonial => (
//               <div key={testimonial.id} className="card testimonial-card">
//                 <div className="testimonial-rating">
//                   {'⭐'.repeat(testimonial.rating)}
//                 </div>
//                 <p className="testimonial-text">"{testimonial.testimonial}"</p>
//                 <div className="testimonial-author">
//                   <strong>{testimonial.client_name}</strong>
//                   <span>{testimonial.position}</span>
//                   <span>{testimonial.company}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="cta-section">
//         <div className="container">
//           <div className="cta-content">
//             <h2>Ready to Transform Your Business?</h2>
//             <p>Let's discuss how BKEC can help you achieve your technology goals</p>
//             <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// const getIcon = (iconName) => {
//   const icons = {
//     'lightbulb': '💡',
//     'cog': '⚙️',
//     'flag': '🇮🇳',
//     'network': '🔗',
//     'wrench': '🔧',
//     'flask': '🧪',
//     'leaf': '🌾',
//     'shield': '🛡️',
//     'industry': '🏭',
//     'building': '🏢',
//     'train': '🚄',
//     'graduation-cap': '🎓'
//   };
//   return icons[iconName] || '⚡';
// };

// export default Home;









import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [services, setServices] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [stats, setStats] = useState({});

  useEffect(() => {
    axios.get('/api/services').then(res => setServices(res.data.slice(0, 6)));
    axios.get('/api/industries').then(res => setIndustries(res.data));
    axios.get('/api/testimonials').then(res => setTestimonials(res.data));
    axios.get('/api/stats').then(res => setStats(res.data));
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Engineering the Impossible.<br />Delivering Excellence.</h1>
            <p className="hero-subtitle">
              BKEC delivers advanced engineering, manufacturing, automation and strategic consultancy infrastructure across railways, energy, defence and industrial sectors.
            </p>
            <div className="hero-buttons">
              <Link to="/solutions" className="btn btn-primary">Explore Our Solutions</Link>
              <Link to="/contact" className="btn btn-secondary">Work With Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container"> <p>Our Impact</p>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">{stats.projectsCompleted}+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{stats.clientsSatisfied}+</div>
              <div className="stat-label">Satisfied Clients</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{stats.industriesServed}+</div>
              <div className="stat-label">Industries Served</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{stats.yearsExperience}+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Consulting Section */}
      <section className="section consulting-section">
        <div className="container">
          <div className="consulting-grid">
            <div className="consulting-content">
              <h2 className="section-title" style={{textAlign: 'left'}}>Technology That Executes</h2>
              <p className="consulting-text">
                Unlike traditional consultancies that only provide advice, BKEC delivers end-to-end execution. 
                From R&D and prototyping to manufacturing and deployment, we transform technology challenges 
                into actionable solutions.
              </p>
              <ul className="consulting-features">
                <li>✓ Consultation + Execution Model</li>
                <li>✓ Indigenous Technology Development</li>
                <li>✓ Multi-Sector Expertise</li>
                <li>✓ Affordable & Scalable Solutions</li>
              </ul>
              <Link to="/about" className="btn btn-primary">Learn More</Link>
            </div>
            <div className="consulting-image">
              <img src="https://via.placeholder.com/600x400/003366/ffffff?text=BKEC+Technology" alt="Technology Execution" />
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="section challenges-section">
        <div className="container">
          <h2 className="section-title">Navigating Business Challenges</h2>
          <p className="section-subtitle">
            We solve the critical technology gaps holding India's growth back
          </p>
          <div className="grid grid-4">
            <div className="challenge-card">
              <div className="challenge-icon">🌾</div>
              <h3>Agriculture</h3>
              <p>Low yields, chemical dependency, lack of precision technology</p>
            </div>
            <div className="challenge-card">
              <div className="challenge-icon">🏭</div>
              <h3>Manufacturing</h3>
              <p>Import dependency, inefficient production, supply chain gaps</p>
            </div>
            <div className="challenge-card">
              <div className="challenge-icon">🛡️</div>
              <h3>Defence</h3>
              <p>Foreign technology reliance, high costs, slow indigenisation</p>
            </div>
            <div className="challenge-card">
              <div className="challenge-icon">🚄</div>
              <h3>Infrastructure</h3>
              <p>Slow modernisation, operational inefficiency, forex spending</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive technology solutions from consultation to deployment
          </p>
          <div className="grid grid-3">
            {services.map(service => (
              <div key={service.id} className="card service-card">
                <div className="service-icon">{getIcon(service.icon)}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
          <div style={{textAlign: 'center', marginTop: '2rem'}}>
            <Link to="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="section industry-section">
        <div className="container">
          <h2 className="section-title">Our Industry Expertise</h2>
          <p className="section-subtitle">
            Delivering specialized solutions across multiple sectors
          </p>
          <div className="grid grid-3">
            {industries.map(industry => (
              <div key={industry.id} className="card industry-card">
                <div className="industry-icon">{getIcon(industry.icon)}</div>
                <h3>{industry.name}</h3>
                <p>{industry.description}</p>
              </div>
            ))}
          </div>
          <div style={{textAlign: 'center', marginTop: '2rem'}}>
            <Link to="/industries" className="btn btn-primary">Explore Industries</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Trusted by leading organizations across India
          </p>
          <div className="grid grid-3">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="card testimonial-card">
                <div className="testimonial-rating">
                  {'⭐'.repeat(testimonial.rating)}
                </div>
                <p className="testimonial-text">"{testimonial.testimonial}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.client_name}</strong>
                  <span>{testimonial.position}</span>
                  <span>{testimonial.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss how BKEC can help you achieve your technology goals</p>
            <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const getIcon = (iconName) => {
  const icons = {
    'lightbulb': '💡',
    'cog': '⚙️',
    'flag': '🇮🇳',
    'network': '🔗',
    'wrench': '🔧',
    'flask': '🧪',
    'leaf': '🌾',
    'shield': '🛡️',
    'industry': '🏭',
    'building': '🏢',
    'train': '🚄',
    'graduation-cap': '🎓'
  };
  return icons[iconName] || '⚡';
};

export default Home;
