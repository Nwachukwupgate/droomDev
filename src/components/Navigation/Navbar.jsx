import { FiMenu, FiSearch } from 'react-icons/fi';
import Logo from '../../assets/images/logo.png';
import SideNav from './SideNav';
import React, { useState } from 'react';

const Navbar = () => {
  const [showSideNav, setShowSideNav] = useState(false);

  return (
    <div className='relative'>
      <div className=' fixed top-0 left-0 w-full'>
        <div className='relative flex justify-between items-center px-5 py-11 shadow-md bg-white z-[1035]'>
          {/* MENU AND LOGO  */}
          <div className='flex items-center gap-7'>
            <FiMenu size={40} onClick={() => setShowSideNav((o) => !o)} />
            <div className='w-[50px] h-[50px]'>
              <img src={Logo} alt='droomwork-logo' />
            </div>
          </div>
          {/* Search */}
          <div>
            <FiSearch size={24} />
          </div>
        </div>
        {/* SideBar */}
        <SideNav showSideNav={showSideNav} />
      </div>
    </div>
  );
};

export default Navbar;
