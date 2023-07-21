import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Dashboard from '../../assets/svgs/dashboard-icon.svg';
import Profile from '../../assets/svgs/profile-icon.svg';
import Project from '../../assets/svgs/project-icon.svg';
import Search from '../../assets/svgs/search-icon.svg';
import Wallet from '../../assets/svgs/wallet.svg';
import Test from '../../assets/svgs/test-icon.svg';
import Support from '../../assets/svgs/support.svg';

const sideNavItems = [
  {
    label: 'dashboard',
    id: 'dashboard-icon',
    path: 'dashboard',
    src: Dashboard,
  },
  { label: 'profile', id: '0', path: 'profile', src: Profile },
  { label: 'project', id: '1', path: 'project', src: Project },
  { label: 'wallet', id: '2', path: 'wallet', src: Wallet },
  { label: 'test', id: '3', path: 'test', src: Test },
  { label: 'support', id: '4', path: 'support', src: Support },
  { label: 'find jobs', id: '5', path: 'jobs', src: Search },
];

const MenuItems = ({ setShowMobileMenu }) => {
  const [active, setActive] = useState(0);

  const linkHandler = (id) => {
    setShowMobileMenu(false);
    setActive(id);
  };

  return (
    <div>
      <div className='overflow-y-scroll scrollbar-hide lg:mb-16'>
        <nav id='sidenav' className=''>
          <ul className='flex flex-col gap-2.5 justify-center lg:gap-5'>
            {sideNavItems.map(({ label, id, path, src }) => (
              <li className='' key={id}>
                <NavLink
                  className={`px-4 flex gap-4 items-center p-3 ${
                    id === active && 'bg-white round-[0.675rem]'
                  }`}
                  to={`/${path}`}
                  onClick={(id) => linkHandler(id)}
                >
                  {/* <Icon name={id} width={20} height={20} /> */}
                  {src && (
                    <div>
                      <img src={src} alt='id' />
                    </div>
                  )}
                  <p className='leading-8 text-primary capitalize  lg:text-lg xl:text-[1.375rem] '>
                    {label}
                  </p>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className='px-4 text-left mt-7 lg:hidden mb-24'>
          <p className='text-lg font-semibold leading-8'>Refer & Earn</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
