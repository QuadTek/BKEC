import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/contact', formData)
      .then(() => {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Let's discuss how we can help transform your business</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                Whether you're looking to modernize your operations, develop indigenous technology 
                solutions, or explore partnership opportunities, we're here to help.
              </p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-icon">📧</div>
                  <div>
                    <h3>Email</h3>
                    <a href="mailto:bkec.pvt.ltd@gmail.com">bkec.pvt.ltd@gmail.com</a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon">📞</div>
                  <div>
                    <h3>Phone</h3>
                    <a href="tel:+919970628052">+91 99706 28052</a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <h3>Address</h3>
                    <p>
                      Shop No 8, Plot No 118, Siddhai Apartment,<br />
                      Near Old Haveli Chinchwad,<br />
                      Pimpri Chinchwad, Pune - 411019<br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon">🏢</div>
                  <div>
                    <h3>Locations</h3>
                    <p>Pune & Nashik, Maharashtra</p>
                  </div>
                </div>
              </div>

              <div className="business-hours">
                <h3>Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              
              {submitted && (
                <div className="success-message">
                  Thank you for contacting us! We will get back to you within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
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
                  <label>Company / Organization</label>
                  <input 
                    type="text" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Message *</label>
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange}
                    rows="6"
                    placeholder="Tell us about your project or inquiry..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-grid">
            <div className="cta-card">
              <h3>Request a Consultation</h3>
              <p>Schedule a free consultation to discuss your technology needs</p>
              <button className="btn btn-secondary">Book Now</button>
            </div>
            <div className="cta-card">
              <h3>Download Brochure</h3>
              <p>Learn more about our solutions and capabilities</p>
              <button className="btn btn-secondary">Download PDF</button>
            </div>
            <div className="cta-card">
              <h3>Partnership Opportunities</h3>
              <p>Explore collaboration and partnership possibilities</p>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
