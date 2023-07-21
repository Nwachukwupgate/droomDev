import AvatarCard from '../Cards/AvatarCard';
import SignOut from '../../assets/svgs/logout-icon.svg';
import ToggleSwitch from '../Inputs/ToggleSwitch';
import MenuItems from './MenuItems';

const MobileMenu = ({ showMobileMenu, setShowMobileMenu }) => {
  return (
    <>
      {showMobileMenu && (
        <div
          className={`bg-[#D9D9D9] shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] dark:bg-zinc-800 px-4 py-11 lg:p-[60px] overflow-y-scroll`}
        >
          <div className='flex flex-col justify-between'>
            {/* AVATAR CARD */}
            <div className='mb-11 lg:hidden'>
              <AvatarCard />
            </div>
            <MenuItems setShowMobileMenu={setShowMobileMenu} />
            <div className='px-4 flex justify-between items-center pb-[71px]'>
              <div className='flex gap-3'>
                <div>
                  <img src={SignOut} alt='signout-button' />
                </div>
                <button className='whitespace-nowrap'>Sign out</button>
              </div>
              <div className=''>
                {/* THEME TOGGLE SWITCH */}
                <ToggleSwitch />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
