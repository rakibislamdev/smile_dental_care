import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { addAppointment, setError, clearError } from '../redux/slices/appointmentSlice';
import { selectContactSuccess } from '../redux/selectors';
import { generateId, validateEmail, validatePhone } from '../utils/helpers';
import { ROUTES, SERVICES_DATA, DOCTORS_DATA } from '../utils/constants';
import HeroSection from '../components/HeroSection';
import './Pages.css';
import './Appointment.css';

const Appointment = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, formState: { errors }, watch } = useForm({
    mode: 'onChange',
    defaultValues: {
      date: '',
      time: '',
      service: '',
      doctor: '',
      name: '',
      email: '',
      phone: '',
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

    if (!validatePhone(data.phone)) {
      dispatch(setError('Please enter a valid phone number'));
      return;
    }

    // Create appointment object
    const appointment = {
      id: generateId(),
      ...data,
      status: 'Pending',
      createdAt: new Date().toISOString(),
    };

    // Dispatch action
    dispatch(addAppointment(appointment));
    dispatch(clearError());
    reset();

    // Show success message
    alert('Appointment booked successfully! We will contact you soon.');
  };

  const selectedService = watch('service');
  const selectedDoctor = watch('doctor');

  return (
    <div className="appointment-page">
      <HeroSection
        title="Book Your Appointment"
        subtitle="Schedule a visit with our experienced dentists"
      />

      <section className="section py-4">
        <div className="container">
          <motion.div
            className="appointment-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="appointment-form">
              <h2 className="form-title">Book Your Appointment</h2>

              {/* Patient Information */}
              <fieldset className="form-section">
                <legend className="section-legend">Patient Information</legend>

                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    {...register('name', { required: 'Full name is required' })}
                    placeholder="Enter your full name"
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
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      id="phone"
                      type="tel"
                      {...register('phone', { required: 'Phone number is required' })}
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && <span className="error">{errors.phone.message}</span>}
                  </div>
                </div>
              </fieldset>

              {/* Appointment Details */}
              <fieldset className="form-section">
                <legend className="section-legend">Appointment Details</legend>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date">Preferred Date *</label>
                    <input
                      id="date"
                      type="date"
                      {...register('date', { required: 'Date is required' })}
                    />
                    {errors.date && <span className="error">{errors.date.message}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="time">Preferred Time *</label>
                    <input
                      id="time"
                      type="time"
                      {...register('time', { required: 'Time is required' })}
                    />
                    {errors.time && <span className="error">{errors.time.message}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="service">Service *</label>
                    <select
                      id="service"
                      {...register('service', { required: 'Please select a service' })}
                    >
                      <option value="">Select a service</option>
                      {SERVICES_DATA.map(service => (
                        <option key={service.id} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                    {errors.service && <span className="error">{errors.service.message}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="doctor">Preferred Doctor</label>
                    <select
                      id="doctor"
                      {...register('doctor')}
                    >
                      <option value="">Select a doctor (optional)</option>
                      {DOCTORS_DATA.map(doctor => (
                        <option key={doctor.id} value={doctor.name}>
                          {doctor.name} - {doctor.specialty}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </fieldset>

              {/* Additional Notes */}
              <fieldset className="form-section">
                <legend className="section-legend">Additional Information</legend>

                <div className="form-group">
                  <label htmlFor="message">Message (Optional)</label>
                  <textarea
                    id="message"
                    {...register('message')}
                    placeholder="Any additional information you'd like us to know?"
                  />
                </div>
              </fieldset>

              {/* Submit Button */}
              <div className="form-actions">
                <button type="submit" className="btn btn-primary btn-lg">
                  Book Appointment
                </button>
                <p className="form-note">We'll contact you to confirm your appointment</p>
              </div>
            </form>

            {/* Sidebar */}
            <aside className="appointment-sidebar">
              <div className="info-box">
                <h3>📋 How It Works</h3>
                <ol>
                  <li>Fill out the form with your information</li>
                  <li>Choose your preferred date and time</li>
                  <li>Select the service you need</li>
                  <li>We'll confirm your appointment</li>
                  <li>Arrive 10 minutes early</li>
                </ol>
              </div>

              <div className="info-box">
                <h3>⏰ Office Hours</h3>
                <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
                <p><strong>Sunday:</strong> Closed</p>
              </div>

              <div className="info-box">
                <h3>📞 Contact Us</h3>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Email:</strong> info@smiledentalclinic.com</p>
                <p><strong>WhatsApp:</strong> Available 24/7</p>
              </div>

              <div className="info-box urgent">
                <h3>🚨 Emergency?</h3>
                <p>For dental emergencies, please call us immediately or visit our clinic.</p>
              </div>
            </aside>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
