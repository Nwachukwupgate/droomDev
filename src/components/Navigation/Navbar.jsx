import { FiMenu, FiSearch } from 'react-icons/fi';
import Logo from '../../assets/images/logo.png';
import React, { useState } from 'react';
import SideNav from './SideNav';
import ToggleSwitch from '../Inputs/ToggleSwitch';
import { IoMdNotifications } from 'react-icons/io';
import Button from '../Button';
import AvatarCard from '../Cards/AvatarCard';

const Navbar = () => {
  const [showSideNav, setShowSideNav] = useState(false);

  return (
    <div className='relative'>
      <div className=' fixed top-0 left-0 w-full z-50'>
        <div className='relative flex justify-between items-center px-5 py-11 lg:px-[60px] shadow-md bg-white z-[1035]'>
          {/* MENU AND LOGO  */}
          <div className='flex items-center gap-7'>
            <div className='lg:hidden'>
              {/* MOBILE HAMBURGER MENU ICON */}
              <FiMenu size={40} onClick={() => setShowSideNav((o) => !o)} />
            </div>
            <div className='w-[50px] h-[50px]'>
              <img src={Logo} alt='droomwork-logo' />
            </div>
          </div>
          {/* Search */}
          <div className='lg:hidden'>
            <FiSearch size={24} />
          </div>

          {/* LARGER SCREEN BUTTONS */}
          <div class='hidden lg:flex items-center gap-7'>
            <ToggleSwitch />
            <Button label={'Refer & Earn'} />
            <div class='inline-block h-[42px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50'></div>
            <div className='flex items-center gap-10'>
              <IoMdNotifications size={32} />
              <AvatarCard />
            </div>
          </div>
        </div>

        {/* Mobile SideBar */}
        <div className='lg:hidden overflow-y-scroll w-72 -mt-1 '>
          <SideNav showSideNav={showSideNav} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
