// Color Palette
export const COLORS = {
  primary: '#0ea5e9',
  secondary: '#14b8a6',
  accent: '#facc15',
  white: '#ffffff',
  black: '#000000',
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
};

// Endpoints
export const ENDPOINTS = {
  // Appointments
  APPOINTMENTS: '/appointments',
  APPOINTMENT_CREATE: '/appointments',
  APPOINTMENT_UPDATE: '/appointments/:id',
  APPOINTMENT_DELETE: '/appointments/:id',

  // Services
  SERVICES: '/services',
  SERVICE_DETAIL: '/services/:id',

  // Doctors
  DOCTORS: '/doctors',
  DOCTOR_DETAIL: '/doctors/:id',

  // Contact
  CONTACT_SUBMIT: '/contact',

  // Auth
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  REGISTER: '/auth/register',
};

// Routes
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  SERVICE_DETAIL: '/services/:id',
  DOCTORS: '/doctors',
  APPOINTMENT: '/appointment',
  CONTACT: '/contact',
  NOT_FOUND: '*',
};

// Services Data (Mock)
export const SERVICES_DATA = [
  {
    id: 1,
    title: 'General Dentistry',
    description: 'Comprehensive dental care including cleanings, fillings, and checkups',
    icon: '🦷',
    price: '$50-150',
  },
  {
    id: 2,
    title: 'Orthodontics',
    description: 'Professional teeth alignment and braces treatment',
    icon: '✨',
    price: '$3000-6000',
  },
  {
    id: 3,
    title: 'Root Canal Treatment',
    description: 'Advanced endodontic treatment for severe tooth decay',
    icon: '🔧',
    price: '$500-1500',
  },
  {
    id: 4,
    title: 'Teeth Whitening',
    description: 'Professional teeth whitening for a brighter smile',
    icon: '💎',
    price: '$200-400',
  },
  {
    id: 5,
    title: 'Dental Implants',
    description: 'Permanent tooth replacement solution',
    icon: '🪥',
    price: '$1500-3000',
  },
  {
    id: 6,
    title: 'Cosmetic Dentistry',
    description: 'Veneers, crowns, and aesthetic enhancements',
    icon: '👑',
    price: '$500-2000',
  },
];

export const IMAGES = {
  clinicInterior:
    'https://images.unsplash.com/photo-1629909615184-74f495f0a8d1?auto=format&fit=crop&w=1200&q=80',
  clinicLocation:
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=1200&q=80',
  doctorJohn:
    'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80',
  doctorSarah:
    'https://images.unsplash.com/photo-1594824475270-5e5f6d6c9d3c?auto=format&fit=crop&w=600&q=80',
  doctorMichael:
    'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80',
  patientEmma:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80',
  patientJames:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80',
  patientLisa:
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=160&q=80',
};

// Doctors Data (Mock)
export const DOCTORS_DATA = [
  {
    id: 1,
    name: 'Dr. John Smith',
    specialty: 'General Dentist',
    experience: '15 years',
    image: IMAGES.doctorJohn,
    bio: 'Highly experienced general dentist specialized in preventive care',
    rating: 4.8,
    reviews: 125,
  },
  {
    id: 2,
    name: 'Dr. Sarah Johnson',
    specialty: 'Orthodontist',
    experience: '12 years',
    image: IMAGES.doctorSarah,
    bio: 'Expert in orthodontics and teeth alignment',
    rating: 4.9,
    reviews: 98,
  },
  {
    id: 3,
    name: 'Dr. Michael Brown',
    specialty: 'Endodontist',
    experience: '10 years',
    image: IMAGES.doctorMichael,
    bio: 'Specialist in root canal treatment and endodontic care',
    rating: 4.7,
    reviews: 87,
  },
];

// Testimonials Data (Mock)
export const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: 'Emma Wilson',
    text: 'Great service and professional staff. Highly recommended!',
    rating: 5,
    image: IMAGES.patientEmma,
  },
  {
    id: 2,
    name: 'James Lee',
    text: 'Best dental clinic I have ever visited. Very clean and friendly.',
    rating: 5,
    image: IMAGES.patientJames,
  },
  {
    id: 3,
    name: 'Lisa Anderson',
    text: 'Painless treatment and excellent care. Thank you!',
    rating: 4,
    image: IMAGES.patientLisa,
  },
];

// Clinic Info
export const CLINIC_INFO = {
  name: 'Smile Dental Clinic',
  phone: '+1 (555) 123-4567',
  email: 'info@smiledentalclinic.com',
  address: '123 Dental Street, Medical Plaza, City 12345',
  whatsapp: '+1 (555) 123-4567',
  hours: {
    weekday: '9:00 AM - 6:00 PM',
    saturday: '10:00 AM - 4:00 PM',
    sunday: 'Closed',
  },
};
