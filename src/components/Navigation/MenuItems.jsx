import { NavLink, useLocation } from 'react-router-dom';
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
  const location = useLocation();
  let currentPath;
  console.log(location.pathname.split(' '));

  return (
    <div>
      <div className='overflow-y-scroll scrollbar-hide lg:mb-16'>
        <nav id='sidenav' className=''>
          <ul className='flex flex-col gap-2.5 justify-center lg:gap-5'>
            {sideNavItems.map(({ label, key, path, src }) => (
              <li className='' key={key}>
                <NavLink
                  id={key}
                  className={`px-4 flex gap-4 items-center p-3 ${
                    location.pathname.split(' ')[0].includes(`/${path}`) &&
                    'bg-white round-[0.675rem] rounded-[10px]'
                  }`}
                  to={`/${path}`}
                  onClick={(e) => {
                    if (
                      setShowMobileMenu &&
                      typeof setShowMobileMenu === 'function'
                    ) {
                      setShowMobileMenu(false);
                    }
                    // setActive(key);
                  }}
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
