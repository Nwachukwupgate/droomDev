import { NavLink } from 'react-router-dom';
import Dashboard from '../../assets/svgs/dashboard-icon.svg';
import Profile from '../../assets/svgs/profile-icon.svg';
import Project from '../../assets/svgs/project-icon.svg';
import Search from '../../assets/svgs/search-icon.svg';
import Wallet from '../../assets/svgs/wallet.svg';
import Test from '../../assets/svgs/test-icon.svg';
import Support from '../../assets/svgs/support.svg';

const sideNavItems = [
  { label: 'dashboard', id: 'dashboard-icon', src: Dashboard },
  { label: 'profile', id: 'profile-icon', src: Profile },
  { label: 'project', id: 'project-icon', src: Project },
  { label: 'wallet', id: 'wallet-icon', src: Wallet },
  { label: 'test', id: 'test-icon', src: Test },
  { label: 'support', id: 'support-icon', src: Support },
  { label: 'find jobs', id: 'search-icon', src: Search },
];

const MenuItems = ({ setShowMobileMenu }) => {
  return (
    <div>
      <div className='overflow-y-scroll scrollbar-hide lg:mb-16'>
        <nav id='sidenav' className=''>
          <ul className='flex flex-col gap-2.5 justify-center lg:gap-5'>
            {sideNavItems.map(({ label, id, src }) => (
              <li className='' key={id}>
                <NavLink
                  className={`px-4 flex gap-4 items-center p-3`}
                  to='/'
                  onClick={() => setShowMobileMenu(false)}
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
    </div>
  );
};

export default MenuItems;
