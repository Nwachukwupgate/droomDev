import { FiMenu, FiSearch } from 'react-icons/fi';
import Logo from '../../assets/images/logo.png';
import React, { useState } from 'react';
import ToggleSwitch from '../Inputs/ToggleSwitch';
import { IoMdNotifications } from 'react-icons/io';
import Button from '../Button';
import AvatarCard from '../Cards/AvatarCard';

const HorizontalHeader = () => {
  const [showSideNav, setShowSideNav] = useState(false);

  return (
    <div>
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
    </div>
  );
};

export default HorizontalHeader;
