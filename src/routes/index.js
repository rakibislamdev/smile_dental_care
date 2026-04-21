import { ROUTES } from '../utils/constants';

// Lazy load pages for code splitting
const Home = require('../pages/Home').default;
const About = require('../pages/About').default;
const Services = require('../pages/Services').default;
const ServiceDetail = require('../pages/ServiceDetail').default;
const Doctors = require('../pages/Doctors').default;
const Appointment = require('../pages/Appointment').default;
const Contact = require('../pages/Contact').default;
const NotFound = require('../pages/NotFound').default;

export const routes = [
  {
    path: ROUTES.HOME,
    component: Home,
    title: 'Home',
  },
  {
    path: ROUTES.ABOUT,
    component: About,
    title: 'About Us',
  },
  {
    path: ROUTES.SERVICES,
    component: Services,
    title: 'Services',
  },
  {
    path: ROUTES.SERVICE_DETAIL,
    component: ServiceDetail,
    title: 'Service Details',
  },
  {
    path: ROUTES.DOCTORS,
    component: Doctors,
    title: 'Our Doctors',
  },
  {
    path: ROUTES.APPOINTMENT,
    component: Appointment,
    title: 'Book Appointment',
  },
  {
    path: ROUTES.CONTACT,
    component: Contact,
    title: 'Contact Us',
  },
  {
    path: ROUTES.NOT_FOUND,
    component: NotFound,
    title: 'Not Found',
  },
];
