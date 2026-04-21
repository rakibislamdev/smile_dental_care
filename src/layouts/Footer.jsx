import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { ROUTES, CLINIC_INFO } from '../utils/constants';
import { generateWhatsAppLink } from '../utils/helpers';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h3 className="footer-title">
            <span className="title-icon">🦷</span>
            Smile Dental Clinic
          </h3>
          <p className="footer-description">
            Providing high-quality dental care with a personal touch. We're committed to giving you a bright, healthy smile.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4 className="footer-section-title">Quick Links</h4>
          <ul className="footer-links">
            <li>
              <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li>
              <Link to={ROUTES.ABOUT}>About Us</Link>
            </li>
            <li>
              <Link to={ROUTES.SERVICES}>Services</Link>
            </li>
            <li>
              <Link to={ROUTES.DOCTORS}>Our Doctors</Link>
            </li>
            <li>
              <Link to={ROUTES.CONTACT}>Contact</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4 className="footer-section-title">Services</h4>
          <ul className="footer-links">
            <li>
              <a href={ROUTES.SERVICES}>General Dentistry</a>
            </li>
            <li>
              <a href={ROUTES.SERVICES}>Orthodontics</a>
            </li>
            <li>
              <a href={ROUTES.SERVICES}>Teeth Whitening</a>
            </li>
            <li>
              <a href={ROUTES.SERVICES}>Dental Implants</a>
            </li>
            <li>
              <a href={ROUTES.SERVICES}>Cosmetic Dentistry</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4 className="footer-section-title">Contact Info</h4>
          <div className="contact-info">
            <div className="contact-item">
              <FiPhone className="contact-icon" />
              <div>
                <a href={`tel:${CLINIC_INFO.phone}`}>{CLINIC_INFO.phone}</a>
              </div>
            </div>
            <div className="contact-item">
              <FiMail className="contact-icon" />
              <div>
                <a href={`mailto:${CLINIC_INFO.email}`}>{CLINIC_INFO.email}</a>
              </div>
            </div>
            <div className="contact-item">
              <FiMapPin className="contact-icon" />
              <div>{CLINIC_INFO.address}</div>
            </div>
            <div className="contact-item">
              <FiClock className="contact-icon" />
              <div>
                <p>Mon-Fri: {CLINIC_INFO.hours.weekday}</p>
                <p>Sat: {CLINIC_INFO.hours.saturday}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href={generateWhatsAppLink(CLINIC_INFO.whatsapp, 'Hello, I need help!')}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        title="Chat on WhatsApp"
      >
        💬
      </a>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2024 Smile Dental Clinic. All rights reserved.</p>
        <div className="footer-links-bottom">
          <a href="#privacy">Privacy Policy</a>
          <span>•</span>
          <a href="#terms">Terms of Service</a>
          <span>•</span>
          <a href="#cookies">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
