import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Layout from './layouts/Layout';
import { ROUTES } from './utils/constants';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Doctors = lazy(() => import('./pages/Doctors'));
const Appointment = lazy(() => import('./pages/Appointment'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path={ROUTES.HOME} element={<Home />} />
              <Route path={ROUTES.ABOUT} element={<About />} />
              <Route path={ROUTES.SERVICES} element={<Services />} />
              <Route path={ROUTES.SERVICE_DETAIL} element={<ServiceDetail />} />
              <Route path={ROUTES.DOCTORS} element={<Doctors />} />
              <Route path={ROUTES.APPOINTMENT} element={<Appointment />} />
              <Route path={ROUTES.CONTACT} element={<Contact />} />
              <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
