import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import { ROUTES, SERVICES_DATA } from '../utils/constants';
import './Pages.css';

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = SERVICES_DATA.find(s => s.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="section py-4">
        <div className="container">
          <div className="not-found">
            <h2>Service Not Found</h2>
            <p>The service you're looking for doesn't exist.</p>
            <Link to={ROUTES.SERVICES} className="btn btn-primary">
              Back to Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const relatedServices = SERVICES_DATA.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div className="service-detail-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container">
          <button onClick={() => navigate(-1)} className="breadcrumb-item">
            <FiArrowLeft size={18} /> Back
          </button>
          <span className="breadcrumb-separator"> / </span>
          <Link to={ROUTES.SERVICES} className="breadcrumb-item">Services</Link>
          <span className="breadcrumb-separator"> / </span>
          <span className="breadcrumb-current">{service.title}</span>
        </div>
      </div>

      {/* Main Content */}
      <section className="section py-4">
        <div className="container">
          <motion.div
            className="detail-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="detail-header">
              <span className="service-icon-large">{service.icon}</span>
              <h1 className="detail-title">{service.title}</h1>
              <p className="detail-price">{service.price}</p>
            </div>

            <div className="detail-grid">
              <div className="detail-main">
                <h2>About This Service</h2>
                <p>
                  {service.description}
                </p>

                <h3>What to Expect</h3>
                <ul className="detail-list">
                  <li>Professional assessment by experienced dentist</li>
                  <li>Personalized treatment plan</li>
                  <li>Latest technology and equipment</li>
                  <li>Comfortable and pain-free experience</li>
                  <li>Follow-up care and recommendations</li>
                </ul>

                <h3>Benefits</h3>
                <ul className="detail-list">
                  <li>Improved dental health and function</li>
                  <li>Enhanced appearance and confidence</li>
                  <li>Long-lasting results</li>
                  <li>Professional care and expertise</li>
                </ul>

                <div className="cta-buttons">
                  <Link to={ROUTES.APPOINTMENT} className="btn btn-primary btn-lg">
                    Book Appointment
                  </Link>
                  <Link to={ROUTES.CONTACT} className="btn btn-outline btn-lg">
                    Ask a Question
                  </Link>
                </div>
              </div>

              <div className="detail-sidebar">
                <div className="info-card">
                  <h3>Service Information</h3>
                  <div className="info-item">
                    <span className="label">Treatment Type:</span>
                    <span className="value">{service.title}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Price Range:</span>
                    <span className="value">{service.price}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Duration:</span>
                    <span className="value">30-60 minutes</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Recovery:</span>
                    <span className="value">None - Same day</span>
                  </div>
                </div>

                <div className="info-card">
                  <h3>Need Help?</h3>
                  <p>Our team is ready to answer any questions you have about this service.</p>
                  <Link to={ROUTES.CONTACT} className="btn btn-primary btn-block">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="section py-4 bg-light">
          <div className="container">
            <h2 className="section-title text-center mb-4">Related Services</h2>
            <div className="grid grid-3">
              {relatedServices.map((service, index) => (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="service-card-link"
                >
                  <div className="service-card-small">
                    <div className="service-icon-small">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ServiceDetail;
