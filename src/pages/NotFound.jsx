import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiHome, FiArrowLeft } from 'react-icons/fi';
import { ROUTES } from '../utils/constants';
import './Pages.css';
import './NotFound.css';

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="not-found-page">
      <motion.div
        className="not-found-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="not-found-content">
          <motion.div
            className="not-found-code"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            404
          </motion.div>

          <motion.h1
            className="not-found-title"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Page Not Found
          </motion.h1>

          <motion.p
            className="not-found-message"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
          </motion.p>

          <motion.div
            className="not-found-actions"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link to={ROUTES.HOME} className="btn btn-primary btn-lg">
              <FiHome size={20} />
              Back to Home
            </Link>
            <button onClick={() => window.history.back()} className="btn btn-outline btn-lg">
              <FiArrowLeft size={20} />
              Go Back
            </button>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            className="helpful-links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <h3>Perhaps you're looking for:</h3>
            <ul>
              <li>
                <Link to={ROUTES.SERVICES}>View Our Services</Link>
              </li>
              <li>
                <Link to={ROUTES.DOCTORS}>Meet Our Doctors</Link>
              </li>
              <li>
                <Link to={ROUTES.APPOINTMENT}>Book an Appointment</Link>
              </li>
              <li>
                <Link to={ROUTES.CONTACT}>Contact Us</Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Animated Background */}
        <div className="not-found-background">
          <motion.div
            className="background-shape shape-1"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
            }}
            transition={{ duration: 20, repeat: Infinity }}
          >
            🦷
          </motion.div>
          <motion.div
            className="background-shape shape-2"
            animate={{
              y: [0, 30, 0],
              rotate: [360, 0],
            }}
            transition={{ duration: 25, repeat: Infinity }}
          >
            ✨
          </motion.div>
          <motion.div
            className="background-shape shape-3"
            animate={{
              x: [0, 30, 0],
              rotate: [0, -360],
            }}
            transition={{ duration: 30, repeat: Infinity }}
          >
            💎
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
