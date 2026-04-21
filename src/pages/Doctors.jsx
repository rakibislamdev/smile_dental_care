import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import DoctorCard from '../components/DoctorCard';
import { DOCTORS_DATA, IMAGES, ROUTES } from '../utils/constants';
import './Pages.css';

const Doctors = () => {
  const [filteredDoctors, setFilteredDoctors] = useState(DOCTORS_DATA);
  const [search, setSearch] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const filtered = DOCTORS_DATA.filter(doctor =>
      doctor.name.toLowerCase().includes(search.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredDoctors(filtered);
  }, [search]);

  return (
    <div className="doctors-page">
      <HeroSection
        title="Meet Our Dental Experts"
        subtitle="Highly qualified and experienced dentists dedicated to your care"
        backgroundImage={IMAGES.heroDoctorBackground}
        eyebrow="Your care team"
      />

      <section className="section py-4">
        <div className="container">
          <motion.div
            className="search-container mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <input
              type="text"
              placeholder="Search doctors by name or specialty..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
          </motion.div>

          {filteredDoctors.length > 0 ? (
            <div className="grid grid-3">
              {filteredDoctors.map((doctor, index) => (
                <DoctorCard key={doctor.id} doctor={doctor} index={index} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>No doctors found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* More Doctors Info */}
      <section className="section py-4 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-4">Why Our Doctors Excel</h2>
          <motion.div
            className="doctors-features"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="feature-item">
              <h3>🎓 Education & Training</h3>
              <p>All doctors are highly educated with advanced degrees and continuous professional development</p>
            </div>
            <div className="feature-item">
              <h3>⭐ Experience</h3>
              <p>Extensive experience in various dental specialties and procedures</p>
            </div>
            <div className="feature-item">
              <h3>💼 Professionalism</h3>
              <p>Committed to ethical practice and patients' best interests</p>
            </div>
            <div className="feature-item">
              <h3>🤝 Patient Care</h3>
              <p>Compassionate approach to achieve patient satisfaction and comfort</p>
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
          <h2>Ready to be Treated by Our Experts?</h2>
          <p>Schedule your appointment with one of our skilled dentists</p>
          <a href={ROUTES.APPOINTMENT} className="btn btn-accent btn-lg">Book Now</a>
        </motion.div>
      </section>
    </div>
  );
};

export default Doctors;
