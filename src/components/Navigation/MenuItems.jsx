import { NavLink, useLocation } from 'react-router-dom';
import Dashboard from '../../assets/svgs/dashboard-icon.svg';
import Profile from '../../assets/svgs/profile-icon.svg';
import Project from '../../assets/svgs/project-icon.svg';
import Search from '../../assets/svgs/search-icon.svg';
import Wallet from '../../assets/svgs/wallet.svg';
import Test from '../../assets/svgs/test-icon.svg';
import Support from '../../assets/svgs/support.svg';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Icon from '../Icons/Icon';

const sideNavItems = [
  {
    label: 'dashboard',
    key: '0',
    path: 'dashboard',
    src: Dashboard,
  },
  { label: 'profile', key: '1', path: 'profile', src: Profile },
  { label: 'project', key: '2', path: 'project', src: Project },
  { label: 'wallet', key: '3', path: 'wallet', src: Wallet },
  { label: 'test', key: '4', path: 'test', src: Test },
  { label: 'support', key: '5', path: 'support', src: Support },
  { label: 'find jobs', key: '6', path: 'jobs', src: Search },
];

const MenuItems = ({ setShowMobileMenu }) => {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();

  return (
    <div>
      <div className='overflow-y-scroll scrollbar-hide lg:mb-16'>
        <nav id='sidenav' className=''>
          <ul className='flex flex-col gap-2.5 justify-center lg:gap-5'>
            {sideNavItems.map(({ label, key, path, src }) => {
              const isActive =
                ['/', '/dashboard', '/invites', '/alloffer'].includes(
                  location.pathname
                ) && path === 'dashboard'
                  ? true
                  : location.pathname.split(' ')[0].includes(`/${path}`);

              return (
                <li className='' key={key}>
                  <NavLink
                    id={key}
                    className={`px-4 flex gap-3 items-center p-3 ${
                      isActive && theme === 'dark'
                        ? 'bg-[#F58800] round-[0.675rem] rounded-[10px] font-semibold'
                        : isActive && theme === 'light'
                        ? 'bg-white round-[0.675rem] rounded-[10px] font-semibold text-primary'
                        : !isActive && theme === 'dark'
                        ? 'text-[#BBB] '
                        : ' '
                    }`}
                    to={`/${path}`}
                    onClick={(e) => {
                      if (
                        setShowMobileMenu &&
                        typeof setShowMobileMenu === 'function'
                      ) {
                        setShowMobileMenu(false);
                      }
                    }}
                  >
                    {/* {src && (
                      <div>
                        <img src={src} alt='id' />
                      </div>
                    )} */}
                    <Icon
                      name={label}
                      color={`${
                        isActive && theme === 'dark'
                          ? '#EDEDED'
                          : isActive && theme === 'light'
                          ? '#001935'
                          : !isActive && theme === 'dark'
                          ? '#BBB'
                          : '#575555'
                      }`}
                    />
                    <p
                      className={`${
                        theme === 'dark' ? 'text-[#ededed]' : 'text-primary'
                      } leading-8 capitalize  lg:text-lg xl:text-[1.375rem]`}
                    >
                      {label}
                    </p>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MenuItems;
