import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3 className="footer-title">BKEC</h3>
              <p className="footer-desc">
                Multi-Sector Technology & Engineering Solutions. Engineering Tomorrow. Empowering India.
              </p>
              <div className="footer-locations">
                <p><strong>Locations:</strong></p>
                <p>Pune & Nashik, Maharashtra</p>
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/solutions">Solutions</Link></li>
                <li><Link to="/industries">Industries</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/insights">Insights</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Contact</h4>
              <ul className="footer-contact">
                <li>
                  <strong>Email:</strong><br />
                  <a href="mailto:bkec.pvt.ltd@gmail.com">bkec.pvt.ltd@gmail.com</a>
                </li>
                <li>
                  <strong>Phone:</strong><br />
                  <a href="tel:+919970628052">+91 99706 28052</a>
                </li>
                <li>
                  <strong>Address:</strong><br />
                  Shop No 8, Plot No 118, Siddhai Apartment,<br />
                  Near Old Haveli Chinchwad,<br />
                  Pimpri Chinchwad, Pune - 411019
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} BKEC. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
