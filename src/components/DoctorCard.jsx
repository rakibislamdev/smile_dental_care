import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import './DoctorCard.css';

const DoctorCard = ({ doctor, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <FiStar
          key={i}
          size={16}
          className={i < Math.floor(rating) ? 'star-filled' : 'star-empty'}
        />
      ));
  };

  return (
    <motion.div
      className="doctor-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="doctor-image-container">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="doctor-image"
        />
        <div className="doctor-overlay">
          <button className="btn-book-appointment">Book Appointment</button>
        </div>
      </div>
      <div className="doctor-info">
        <h3 className="doctor-name">{doctor.name}</h3>
        <p className="doctor-specialty">{doctor.specialty}</p>
        <p className="doctor-experience">Experience: {doctor.experience}</p>
        <p className="doctor-bio">{doctor.bio}</p>
        <div className="doctor-rating">
          <div className="stars">{renderStars(doctor.rating)}</div>
          <span className="rating-text">
            {doctor.rating} ({doctor.reviews} reviews)
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default DoctorCard;
