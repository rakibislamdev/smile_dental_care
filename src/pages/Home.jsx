import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiAward, FiSmile, FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import DoctorCard from '../components/DoctorCard';
import TestimonialSlider from '../components/TestimonialSlider';
import { ROUTES, SERVICES_DATA, DOCTORS_DATA, TESTIMONIALS_DATA, IMAGES } from '../utils/constants';
import './Pages.css';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { icon: <FiSmile size={32} />, label: 'Happy Patients', value: '500+' },
    { icon: <FiAward size={32} />, label: 'Years Experience', value: '20+' },
    { icon: <FiUsers size={32} />, label: 'Expert Doctors', value: '15+' },
    { icon: <FiCheckCircle size={32} />, label: 'Successful Cases', value: '5000+' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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
    <div className="home-page">
      {/* Hero Section */}
      <HeroSection
        title="Your Smile, Our Priority"
        subtitle="Experience professional dental care with the latest technology and compassionate team"
        cta="Book Appointment"
        ctaLink={ROUTES.APPOINTMENT}
        backgroundImage={IMAGES.heroBackground}
        eyebrow="Trusted dental care"
      />

      {/* Stats Section */}
      <section className="section py-4">
        <div className="container">
          <motion.div
            className="stats-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                variants={itemVariants}
              >
                <div className="stat-icon">{stat.icon}</div>
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section py-4 bg-light">
        <div className="container">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="about-text">
              <h2 className="section-title">Why Choose Smile Dental Clinic?</h2>
              <p>
                At Smile Dental Clinic, we believe that everyone deserves a bright, healthy smile. Our team of experienced dentists and staff are dedicated to providing the highest quality dental care in a comfortable and welcoming environment.
              </p>
              <ul className="about-list">
                <li>✓ State-of-the-art equipment and technology</li>
                <li>✓ Experienced and certified dentists</li>
                <li>✓ Personalized treatment plans</li>
                <li>✓ Comfortable and modern facilities</li>
                <li>✓ Competitive pricing and flexible payment options</li>
              </ul>
              <Link to={ROUTES.ABOUT} className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="about-image">
              <img
                src={IMAGES.clinicInterior}
                alt="Clinic"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section py-4">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="section-title text-center mb-3">Our Services</h2>
            <p className="section-subtitle text-center mb-4">
              Comprehensive dental care solutions for the whole family
            </p>
          </motion.div>
          <div className="grid grid-3">
            {SERVICES_DATA.slice(0, 6).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to={ROUTES.SERVICES} className="btn btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="section py-4 bg-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="section-title text-center mb-3">Meet Our Doctors</h2>
            <p className="section-subtitle text-center mb-4">
              Highly skilled and experienced dental professionals
            </p>
          </motion.div>
          <div className="grid grid-3">
            {DOCTORS_DATA.map((doctor, index) => (
              <DoctorCard key={doctor.id} doctor={doctor} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section py-4">
        <div className="container">
          <h2 className="section-title text-center mb-3">What Our Patients Say</h2>
          <p className="section-subtitle text-center mb-4">
            Real feedback from our satisfied patients
          </p>
          <TestimonialSlider testimonials={TESTIMONIALS_DATA} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-overlay"></div>
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>Ready for Your Perfect Smile?</h2>
          <p>Book an appointment with our expert dentists today</p>
          <Link to={ROUTES.APPOINTMENT} className="btn btn-accent btn-lg">
            Book Now
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
