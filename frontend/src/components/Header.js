import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // const navLinks = [
  //   { path: '/', label: 'Home' },
  //   { path: '/services', label: 'Services' },
  //   { path: '/solutions', label: 'Solutions' },
  //   { path: '/industries', label: 'Industries' },
  //   { path: '/insights', label: 'Insights' },
  //   { path: '/about', label: 'About Us' },
  //   { path: '/careers', label: 'Careers' },
  //   { path: '/contact', label: 'Contact Us' }
  // ];

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/solutions', label: 'Solutions' },
    { path: '/services', label: 'Services' },
    { path: '/industries', label: 'Industries' },
    { path: '/insights', label: 'Projects' },
    { path: '/about', label: 'About Us' },
    // { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact Us' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <div className="logo-text">
              <span className="logo-main">BKEC</span>
              <span className="logo-sub">Engineering Tomorrow</span>
            </div>
          </Link>

          <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
