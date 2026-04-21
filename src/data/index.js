import { SERVICES_DATA, DOCTORS_DATA, TESTIMONIALS_DATA } from '../utils/constants';

export const services = SERVICES_DATA;

export const doctors = DOCTORS_DATA;

export const testimonials = TESTIMONIALS_DATA;

export const appointments = [
  {
    id: 1,
    patientName: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    date: '2024-05-20',
    time: '10:00 AM',
    service: 'General Dentistry',
    doctor: 'Dr. John Smith',
    notes: 'First appointment',
    status: 'Confirmed',
  },
];
