import React from 'react';
import Navbar from '../components/Navigation/Navbar';

const Layout = ({ children }) => {
  return (
    <div className='relative'>
      <header>
        <Navbar />
      </header>
      <main className='mt-36'>{children}</main>
    </div>
  );
};

export default Layout;
