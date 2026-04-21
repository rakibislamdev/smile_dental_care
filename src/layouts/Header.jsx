import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { ROUTES, CLINIC_INFO } from '../utils/constants';
import './Header.css';
import logo from '../assets/logo/smile_dental.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: 'Home', path: ROUTES.HOME },
    { label: 'About', path: ROUTES.ABOUT },
    { label: 'Services', path: ROUTES.SERVICES },
    { label: 'Doctors', path: ROUTES.DOCTORS },
    { label: 'Contact', path: ROUTES.CONTACT },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to={ROUTES.HOME} className="logo">
          <img src={logo} alt="Smile Dental Clinic" className="logo-image" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <ul className="nav-menu">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="header-actions">
          <Link to={ROUTES.APPOINTMENT} className="btn-appointment">
            Book Now
          </Link>
          <a href={`tel:${CLINIC_INFO.phone}`} className="btn-phone">
            <FiPhone size={20} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="nav-mobile">
          <ul className="mobile-menu">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`mobile-nav-link ${isActive(item.path) ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to={ROUTES.APPOINTMENT}
                className="mobile-nav-link appointment"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
