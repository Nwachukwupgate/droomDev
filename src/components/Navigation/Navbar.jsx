import { FiMenu, FiSearch } from 'react-icons/fi';
import Logo from '../../assets/images/logo.png';
import React, { useState } from 'react';
import ToggleSwitch from '../Inputs/ToggleSwitch';
import { IoMdNotifications } from 'react-icons/io';
import Button from '../Button';
import AvatarCard from '../Cards/AvatarCard';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className='relative pb-16'>
      <div className=' fixed top-0 left-0 w-full z-50'>
        <div className='relative flex justify-between items-center py-8 px-[18px] lg:py-11 lg:px-[60px] shadow-md bg-white z-[1035]'>
          {/* MENU AND LOGO  */}
          <div className='flex items-center gap-7'>
            <div className='lg:hidden'>
              {/* MOBILE HAMBURGER MENU ICON */}
              <FiMenu size={40} onClick={() => setShowMobileMenu((o) => !o)} />
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
          <div className='hidden lg:flex items-center gap-7'>
            <ToggleSwitch />
            <Button
              label={'Refer & Earn'}
              className={'bg-primary text-white'}
            />
            <div className='inline-block h-[42px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50 m-auto'></div>
            <div className='flex items-center gap-10'>
              <IoMdNotifications size={32} />
              <AvatarCard />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className=' '>
          <MobileMenu
            showMobileMenu={showMobileMenu}
            setShowMobileMenu={setShowMobileMenu}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
