import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiUsers, FiAward, FiTrendingUp } from 'react-icons/fi';
import HeroSection from '../components/HeroSection';
import { ROUTES } from '../utils/constants';
import './Pages.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <FiCheckCircle size={32} />,
      title: 'Quality Care',
      description: 'Highest standards of dental care and patient safety',
    },
    {
      icon: <FiUsers size={32} />,
      title: 'Expert Team',
      description: 'Highly trained and certified dental professionals',
    },
    {
      icon: <FiAward size={32} />,
      title: 'Accredited',
      description: 'Fully accredited and recognized by national bodies',
    },
    {
      icon: <FiTrendingUp size={32} />,
      title: 'Modern Tech',
      description: 'Latest technology and equipment for best results',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="about-page">
      <HeroSection
        title="About Smile Dental Clinic"
        subtitle="Committed to providing exceptional dental care since 2004"
      />

      {/* Our Story */}
      <section className="section py-4">
        <div className="container">
          <motion.div
            className="story-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="section-title">Our Story</h2>
            <p>
              Smile Dental Clinic was founded with a simple mission: to provide world-class dental care to our community. 
              Over the past 20 years, we have grown into one of the most trusted dental clinics in the region, serving thousands of happy patients.
            </p>
            <p>
              Our success is built on three pillars: expertise, compassion, and innovation. We continue to invest in the latest 
              technology and training to ensure our patients receive the best possible care in a comfortable environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section py-4 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-4">Our Values</h2>
          <motion.div
            className="grid grid-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="value-card"
                variants={itemVariants}
              >
                <div className="value-icon">{feature.icon}</div>
                <h3 className="value-title">{feature.title}</h3>
                <p className="value-description">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section py-4">
        <div className="container">
          <h2 className="section-title text-center mb-3">Why Trust Us</h2>
          <motion.div
            className="trust-list"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="trust-item">
              <span className="check-mark">✓</span>
              <p>Over 20 years of experience in dental care</p>
            </div>
            <div className="trust-item">
              <span className="check-mark">✓</span>
              <p>State-of-the-art dental equipment and facilities</p>
            </div>
            <div className="trust-item">
              <span className="check-mark">✓</span>
              <p>Highly qualified and certified dentists</p>
            </div>
            <div className="trust-item">
              <span className="check-mark">✓</span>
              <p>Personalized treatment plans for each patient</p>
            </div>
            <div className="trust-item">
              <span className="check-mark">✓</span>
              <p>Focus on patient comfort and satisfaction</p>
            </div>
            <div className="trust-item">
              <span className="check-mark">✓</span>
              <p>Transparent pricing and flexible payment options</p>
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
          <h2>Experience the Smile Difference</h2>
          <p>Schedule your appointment today and discover why thousands choose us</p>
          <a href={ROUTES.APPOINTMENT} className="btn btn-accent btn-lg">Schedule Appointment</a>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
