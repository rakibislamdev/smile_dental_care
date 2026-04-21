# Smile Dental Clinic

A modern dental clinic website built with Create React App, React, Redux, React Router, and Framer Motion. The app includes a polished landing page, services catalogue, doctor profiles, appointment booking, contact form, and reusable hero sections with rich visuals.

## Features

- Responsive homepage with hero banner, stats, featured services, doctors, and testimonials
- Services listing with a dedicated service detail page
- Doctor profiles with search and filtering
- Appointment booking form with validation and Redux state updates
- Contact form with success notifications
- Global toast notifications for appointment and contact submissions
- Sticky header, footer, and shared layout
- Animated UI with Framer Motion and Swiper testimonials
- Mobile-friendly design

## Tech Stack

- React 19
- Create React App
- Redux Toolkit
- React Router DOM
- React Hook Form
- Framer Motion
- Swiper
- React Icons
- Axios

## Project Structure

```text
src/
	components/     Reusable UI pieces such as HeroSection, cards, spinner, notification
	layouts/        Header, Footer, and the shared page layout
	pages/          Home, About, Services, ServiceDetail, Doctors, Appointment, Contact, NotFound
	redux/          Store, slices, and selectors
	routes/         Route definitions
	utils/          Shared constants, helpers, and API client
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Run the app locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
```

### Run tests

```bash
npm test
```

## Available Scripts

- `npm start` - starts the development server
- `npm run build` - creates an optimized production build
- `npm test` - runs the test runner in watch mode
- `npm run eject` - ejects from Create React App configuration

## Pages

- Home
- About
- Services
- Service Detail
- Doctors
- Appointment
- Contact
- Not Found

## Notes

- The project currently uses mocked content for services, doctors, and testimonials.
- Appointment and contact submissions are stored in Redux state and show a custom in-app notification.
- Hero banners are shared through a reusable component so page visuals stay consistent.

## Deployment

This project can be deployed to platforms such as Vercel or Netlify after running the production build.

## License

No license has been specified yet.
