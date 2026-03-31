import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Insights.css';

const Insights = () => {
  const [insights, setInsights] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    axios.get('/api/insights').then(res => setInsights(res.data));
  }, []);

  const categories = ['all', 'Agriculture', 'Defence', 'Manufacturing', 'Technology', 'Infrastructure'];

  const filteredInsights = selectedCategory === 'all' 
    ? insights 
    : insights.filter(insight => insight.category === selectedCategory);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="insights-page">
      <div className="page-hero">
        <div className="container">
          <h1>Insights & Perspectives</h1>
          <p>Industry trends, technology insights, and thought leadership</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="category-filter">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat === 'all' ? 'All Articles' : cat}
              </button>
            ))}
          </div>

          <div className="insights-grid">
            {filteredInsights.map(insight => (
              <Link to={`/insights/${insight.slug}`} key={insight.id} className="card insight-card">
                <div className="insight-image">
                  <img 
                    src={insight.image_url || `https://via.placeholder.com/400x250/003366/ffffff?text=${encodeURIComponent(insight.title)}`} 
                    alt={insight.title} 
                  />
                  <div className="insight-category-badge">{insight.category}</div>
                </div>
                <div className="insight-content">
                  <div className="insight-meta">
                    <span className="insight-author">{insight.author}</span>
                    <span className="insight-date">{formatDate(insight.published_at)}</span>
                  </div>
                  <h3>{insight.title}</h3>
                  <p>{insight.excerpt}</p>
                  <div className="insight-read-more">Read More →</div>
                </div>
              </Link>
            ))}
          </div>

          {filteredInsights.length === 0 && (
            <div className="no-insights">
              <p>No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="section newsletter-section">
        <div className="container">
          <div className="newsletter-card">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for the latest insights and industry updates</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;
