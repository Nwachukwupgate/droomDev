import AvatarCard from '../Cards/AvatarCard';
import SignOut from '../../assets/svgs/logout-icon.svg';
import ToggleSwitch from '../Inputs/ToggleSwitch';
import MenuItems from './MenuItems';
import { useState } from 'react';
import ReferralModal from '../Modal/ReferralModal';

const MobileMenu = ({ showMobileMenu, setShowMobileMenu }) => {
  const [showReferralModal, setShowReferralModal] = useState(false);

  const handleReferral = () => {
    setShowReferralModal(true);
  };

  const closeModal = () => {
    setShowReferralModal(false);
  };
  return (
    <>
      {showMobileMenu && (
        <div
          className={`lg:hidden w-72 h-screen bg-[#D9D9D9] shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] dark:bg-zinc-800 px-4 py-11 lg:p-[60px] overflow-y-scroll`}
        >
          <div className='flex flex-col justify-between'>
            {/* AVATAR CARD */}
            <div className='mb-11 lg:hidden'>
              <AvatarCard />
            </div>
            <MenuItems setShowMobileMenu={setShowMobileMenu} />
            <div className='px-4 text-left mt-7 lg:hidden mb-24'>
              <button
                className='text-lg font-semibold leading-8'
                onClick={handleReferral}
              >
                Refer & Earn
              </button>
            </div>
            <ReferralModal open={showReferralModal} closeModal={closeModal} />
            <div className='px-4 flex justify-between items-center pb-32'>
              <div className='flex gap-3'>
                <div>
                  <img src={SignOut} alt='signout-button' />
                </div>
                <button className='whitespace-nowrap'>Sign out</button>
              </div>
              {/* THEME TOGGLE SWITCH */}
              <ToggleSwitch />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
