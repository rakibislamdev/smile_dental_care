import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import { ROUTES, SERVICES_DATA } from '../utils/constants';
import './Pages.css';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services-page">
      <HeroSection
        title="Our Dental Services"
        subtitle="Comprehensive dental care for the whole family"
      />

      <section className="section py-4">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="intro-text">
              We offer a wide range of dental services to meet all your oral health needs. Our experienced dentists use the latest 
              technology to provide effective and comfortable treatments.
            </p>
          </motion.div>

          <div className="grid grid-3">
            {SERVICES_DATA.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="section py-4 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-4">Why Choose Our Services</h2>
          <motion.div
            className="benefits-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="benefit-item">
              <h3>✓ Expert Care</h3>
              <p>Treated by highly trained dental specialists with years of experience</p>
            </div>
            <div className="benefit-item">
              <h3>✓ Advanced Technology</h3>
              <p>Using the latest equipment for accurate diagnosis and treatment</p>
            </div>
            <div className="benefit-item">
              <h3>✓ Comfortable Environment</h3>
              <p>Modern, clean, and comfortable facilities for your peace of mind</p>
            </div>
            <div className="benefit-item">
              <h3>✓ Affordable Pricing</h3>
              <p>Transparent pricing with flexible payment options available</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-overlay"></div>
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>Ready to Schedule Your Service?</h2>
          <p>Book an appointment with our expert dentists today</p>
          <Link to={ROUTES.APPOINTMENT} className="btn btn-accent btn-lg">Book Now</Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
