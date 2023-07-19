import { NavLink } from 'react-router-dom';
import AvatarCard from '../Cards/AvatarCard';
import { Icon } from '../Icons';
import Dashboard from '../../assets/svgs/dashboard-icon.svg';
import Profile from '../../assets/svgs/profile-icon.svg';
import Project from '../../assets/svgs/project-icon.svg';
import Search from '../../assets/svgs/search-icon.svg';
import Wallet from '../../assets/svgs/wallet.svg';
import Test from '../../assets/svgs/test-icon.svg';
import Support from '../../assets/svgs/support.svg';
import SignOut from '../../assets/svgs/logout-icon.svg';
import ToggleSwitch from '../Inputs/ToggleSwitch';

const sideNavItems = [
  { label: 'dashboard', id: 'dashboard-icon', src: Dashboard },
  { label: 'profile', id: 'profile-icon', src: Profile },
  { label: 'project', id: 'project-icon', src: Project },
  { label: 'wallet', id: 'wallet-icon', src: Wallet },
  { label: 'test', id: 'test-icon', src: Test },
  { label: 'support', id: 'support-icon', src: Support },
  { label: 'find jobs', id: 'search-icon', src: Search },
];

const SideNav = ({ showSideNav }) => {
  return (
    <div
      className={`${
        !showSideNav && 'translate-x-0'
      } -translate-x-full  bg-[#D9D9D9] shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] dark:bg-zinc-800 px-4 py-11 lg:p-[60px]`}
    >
      <div className='max-h-full flex flex-col justify-between'>
        {/* AVATAR CARD */}
        <div className='mb-11 lg:hidden'>
          <AvatarCard />
        </div>
        <div className='overflow-y-scroll scrollbar-hide lg:mb-16'>
          <nav id='sidenav' className=''>
            <ul className='flex flex-col gap-2.5 justify-center lg:gap-5'>
              {sideNavItems.map(({ label, id, src }) => (
                <li className='' key={id}>
                  <NavLink
                    className={`px-4 flex gap-4 items-center p-3`}
                    to='/'
                  >
                    {/* <Icon name={id} width={20} height={20} /> */}
                    {src && (
                      <div>
                        <img src={src} alt='id' />
                      </div>
                    )}
                    <p className='leading-8 text-primary capitalize'>{label}</p>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className='px-4 text-left mt-7 lg:hidden mb-24'>
            <p className='text-lg font-semibold leading-8'>Refer & Earn</p>
          </div>
        </div>
        <div className='px-4 flex justify-between items-center pb-[71px]'>
          <div className='flex gap-3'>
            <div>
              <img src={SignOut} alt='signout-button' />
            </div>
            <button className='whitespace-nowrap'>Sign out</button>
          </div>
          <div className='lg:hidden'>
            {/* THEME TOGGLE SWITCH */}
            <ToggleSwitch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
