import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiShield, FiZap } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const defaultHighlights = ['Gentle care', 'Modern technology', 'Trusted experts'];

const HeroSection = ({
  title,
  subtitle,
  cta,
  ctaLink,
  backgroundImage,
  children,
  eyebrow = 'Smile Dental Clinic',
  highlights = defaultHighlights,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: 'easeOut' },
    },
  };

  return (
    <section
      className="hero-section"
      style={backgroundImage ? { '--hero-background-image': `url(${backgroundImage})` } : {}}
    >
      <div className="hero-shape hero-shape-one" />
      <div className="hero-shape hero-shape-two" />
      <div className="hero-shape hero-shape-three" />
      <div className="hero-overlay" />

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-panel" variants={itemVariants}>
          <div className="hero-eyebrow">
            <FiZap size={16} />
            <span>{eyebrow}</span>
          </div>

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

          <motion.div className="hero-highlights" variants={itemVariants}>
            {highlights.map((highlight) => (
              <span key={highlight} className="hero-highlight-pill">
                <FiShield size={14} />
                {highlight}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
