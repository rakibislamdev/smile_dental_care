import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = ({ title, subtitle, cta, ctaLink, backgroundImage, children }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      className="hero-section"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className="hero-overlay"></div>
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="hero-title" variants={itemVariants}>
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p className="hero-subtitle" variants={itemVariants}>
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div variants={itemVariants}>
            {children}
          </motion.div>
        )}
        {cta && (
          <motion.div variants={itemVariants} className="hero-cta">
            <Link to={ctaLink} className="btn btn-primary btn-lg">
              {cta}
              <FiArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
            </Link>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default HeroSection;
