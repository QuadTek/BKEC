import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Solutions.css';

const Solutions = () => {
  const [solutions, setSolutions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    if (selectedCategory === 'all') {
      axios.get('/api/solutions').then(res => setSolutions(res.data));
    } else {
      axios.get(`/api/solutions?category=${selectedCategory}`).then(res => setSolutions(res.data));
    }
  }, [selectedCategory]);

  const categories = [
    { value: 'all', label: 'All Solutions' },
    { value: 'Advertisement Screens', label: 'Advertisement Screens' },
    { value: 'Industrial Display', label: 'Industrial Display Systems' },
    { value: 'E-Mobility', label: 'E-Mobility Solutions' },
    { value: 'Embedded AIML', label: 'Embedded AI/ML' }
  ];

  return (
    <div className="solutions-page">
      <div className="page-hero">
        <div className="container">
          <h1>Our Solutions</h1>
          <p>Innovative technology products designed for real-world impact</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="category-filter">
            {categories.map(cat => (
              <button
                key={cat.value}
                className={`filter-btn ${selectedCategory === cat.value ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="solutions-grid">
            {solutions.map(solution => (
              <div key={solution.id} className="card solution-card">
                <div className="solution-image">
                  <img 
                    src={solution.image_url || `https://via.placeholder.com/400x250/003366/ffffff?text=${encodeURIComponent(solution.name)}`} 
                    alt={solution.name} 
                  />
                  <div className="solution-category-badge">{solution.category}</div>
                </div>
                <div className="solution-content">
                  <h3>{solution.name}</h3>
                  <p>{solution.description}</p>
                  {solution.specifications && (
                    <div className="solution-specs">
                      {solution.specifications.split('|').map((spec, idx) => (
                        <span key={idx} className="spec-badge">{spec.trim()}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section solution-benefits">
        <div className="container">
          <h2 className="section-title">Solution Benefits</h2>
          <div className="grid grid-3">
            <div className="card benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Precision Engineering</h3>
              <p>Industrial-grade components designed for reliability and performance</p>
            </div>
            <div className="card benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>Cost Effective</h3>
              <p>Affordable solutions without compromising on quality or features</p>
            </div>
            <div className="card benefit-card">
              <div className="benefit-icon">🔧</div>
              <h3>Easy Integration</h3>
              <p>Seamless compatibility with existing systems and infrastructure</p>
            </div>
            <div className="card benefit-card">
              <div className="benefit-icon">🇮🇳</div>
              <h3>Made for India</h3>
              <p>Designed specifically for Indian operating conditions and requirements</p>
            </div>
            <div className="card benefit-card">
              <div className="benefit-icon">📈</div>
              <h3>Scalable</h3>
              <p>Solutions that grow with your business needs</p>
            </div>
            <div className="card benefit-card">
              <div className="benefit-icon">🛠️</div>
              <h3>Full Support</h3>
              <p>Comprehensive installation, training, and maintenance services</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
