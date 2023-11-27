import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  const layoutStyle = {
    backgroundColor: '#f5f5f5',
    minHeight: '100vh', 
    padding: '20px', 
  };

  return (
    <div style={layoutStyle}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
