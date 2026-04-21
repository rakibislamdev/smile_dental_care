import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Notification from '../components/Notification';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Notification />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
