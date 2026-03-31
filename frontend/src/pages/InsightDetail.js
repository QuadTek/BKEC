import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './InsightDetail.css';

const InsightDetail = () => {
  const { slug } = useParams();
  const [insight, setInsight] = useState(null);
  const [relatedInsights, setRelatedInsights] = useState([]);

  useEffect(() => {
    axios.get(`/api/insights/${slug}`)
      .then(res => {
        setInsight(res.data);
        return axios.get('/api/insights');
      })
      .then(res => {
        setRelatedInsights(res.data.filter(i => i.slug !== slug).slice(0, 3));
      })
      .catch(err => console.error(err));
  }, [slug]);

  if (!insight) {
    return <div className="loading">Loading...</div>;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="insight-detail-page">
      <div className="insight-detail-hero">
        <div className="container">
          <div className="insight-detail-meta">
            <span className="insight-detail-category">{insight.category}</span>
            <span className="insight-detail-date">{formatDate(insight.published_at)}</span>
          </div>
          <h1>{insight.title}</h1>
          <div className="insight-detail-author">By {insight.author}</div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="insight-detail-content">
            <div className="insight-detail-image">
              <img 
                src={insight.image_url || `https://via.placeholder.com/1200x600/003366/ffffff?text=${encodeURIComponent(insight.title)}`} 
                alt={insight.title} 
              />
            </div>

            <div className="insight-detail-body">
              <div className="insight-excerpt">{insight.excerpt}</div>
              <div className="insight-text">
                {insight.content || `
                  <p>India's journey towards technological self-reliance is gaining momentum across multiple sectors. 
                  From agriculture to defence, manufacturing to infrastructure, indigenous innovation is reshaping 
                  the landscape of Indian industry.</p>
                  
                  <h2>The Challenge</h2>
                  <p>For decades, India has relied heavily on imported technology, leading to significant forex 
                  expenditure and limited control over critical systems. This dependency has not only been costly 
                  but has also hindered the development of domestic capabilities.</p>
                  
                  <h2>The Opportunity</h2>
                  <p>Government initiatives like Make in India and Atmanirbhar Bharat have created a conducive 
                  environment for indigenous technology development. Companies like BKEC are at the forefront of 
                  this transformation, delivering practical, affordable, and scalable solutions.</p>
                  
                  <h2>Real-World Impact</h2>
                  <p>The impact of indigenisation extends beyond cost savings. It enables faster deployment, 
                  better customization for Indian conditions, and the development of a robust domestic supply chain. 
                  From precision agriculture to defence systems, indigenous technology is proving its worth.</p>
                  
                  <h2>The Path Forward</h2>
                  <p>The future of Indian technology lies in execution-focused innovation. It's not enough to 
                  develop technology in labs - it must reach the field, the factory, and the frontline. This 
                  requires a unique combination of R&D capability, manufacturing expertise, and deployment experience.</p>
                `}
              </div>
            </div>

            <div className="insight-detail-footer">
              <Link to="/contact" className="btn btn-primary">Discuss This Topic</Link>
            </div>
          </div>
        </div>
      </section>

      {relatedInsights.length > 0 && (
        <section className="section related-insights-section">
          <div className="container">
            <h2 className="section-title">Related Articles</h2>
            <div className="grid grid-3">
              {relatedInsights.map(related => (
                <Link to={`/insights/${related.slug}`} key={related.id} className="card insight-card-small">
                  <div className="insight-category-badge">{related.category}</div>
                  <h3>{related.title}</h3>
                  <p>{related.excerpt}</p>
                  <div className="insight-read-more">Read More →</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default InsightDetail;
