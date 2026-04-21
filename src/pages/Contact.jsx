import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { addMessage, setError } from '../redux/slices/contactSlice';
import { validateEmail, validatePhone, generateId } from '../utils/helpers';
import { CLINIC_INFO, IMAGES } from '../utils/constants';
import HeroSection from '../components/HeroSection';
import './Pages.css';
import './Contact.css';

const Contact = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = (data) => {
    // Validation
    if (!validateEmail(data.email)) {
      dispatch(setError('Please enter a valid email address'));
      return;
    }

    if (data.phone && !validatePhone(data.phone)) {
      dispatch(setError('Please enter a valid phone number'));
      return;
    }

    // Create message object
    const message = {
      id: generateId(),
      ...data,
      createdAt: new Date().toISOString(),
    };

    // Dispatch action
    dispatch(addMessage(message));
    reset();

    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="contact-page">
      <HeroSection
        title="Get In Touch"
        subtitle="Have questions? We'd love to hear from you"
      />

      <section className="section py-4">
        <div className="container">
          <motion.div
            className="contact-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Contact Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
              <h2 className="form-title">Send us a Message</h2>

              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  id="name"
                  type="text"
                  {...register('name', { required: 'Full name is required' })}
                  placeholder="Your name"
                />
                {errors.name && <span className="error">{errors.name.message}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', { required: 'Email is required' })}
                    placeholder="your@email.com"
                  />
                  {errors.email && <span className="error">{errors.email.message}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone (Optional)</label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && <span className="error">{errors.phone.message}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  id="subject"
                  type="text"
                  {...register('subject', { required: 'Subject is required' })}
                  placeholder="What is this about?"
                />
                {errors.subject && <span className="error">{errors.subject.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  {...register('message', { required: 'Message is required' })}
                  placeholder="Your message here..."
                  rows="6"
                />
                {errors.message && <span className="error">{errors.message.message}</span>}
              </div>

              <button type="submit" className="btn btn-primary btn-lg btn-block">
                Send Message
              </button>
            </form>

            {/* Contact Information */}
            <div className="contact-info-section">
              <h2 className="form-title">Contact Information</h2>

              <div className="info-item">
                <div className="info-icon">
                  <FiPhone size={24} />
                </div>
                <div className="info-content">
                  <h3>Phone</h3>
                  <a href={`tel:${CLINIC_INFO.phone}`}>{CLINIC_INFO.phone}</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FiMail size={24} />
                </div>
                <div className="info-content">
                  <h3>Email</h3>
                  <a href={`mailto:${CLINIC_INFO.email}`}>{CLINIC_INFO.email}</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FiMapPin size={24} />
                </div>
                <div className="info-content">
                  <h3>Address</h3>
                  <p>{CLINIC_INFO.address}</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FiClock size={24} />
                </div>
                <div className="info-content">
                  <h3>Office Hours</h3>
                  <p><strong>Mon - Fri:</strong> {CLINIC_INFO.hours.weekday}</p>
                  <p><strong>Saturday:</strong> {CLINIC_INFO.hours.saturday}</p>
                  <p><strong>Sunday:</strong> {CLINIC_INFO.hours.sunday}</p>
                </div>
              </div>

              <div className="quick-links">
                <h3>Quick Links</h3>
                <a href={`tel:${CLINIC_INFO.phone}`} className="btn btn-primary btn-block">
                  Call Us Now
                </a>
                <a href={`mailto:${CLINIC_INFO.email}`} className="btn btn-secondary btn-block">
                  Send Email
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="section py-4 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-4">Find Us On The Map</h2>
          <div className="map-container">
            <img
              src={IMAGES.clinicLocation}
              alt="Clinic Location"
              className="map-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
