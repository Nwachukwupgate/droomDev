import { NavLink } from 'react-router-dom';
import Icon from '../Icons/Icon';
import AvatarCard from '../Cards/AvatarCard';

const sideNavItems = [
  { label: 'dashboard', id: 'dashboard-icon' },
  { label: 'profile', id: 'profile-icon' },
  { label: 'project', id: 'project-icon' },
  { label: 'wallet', id: 'wallet-icon' },
  { label: 'test', id: 'test-icon' },
  { label: 'support', id: 'support-icon' },
  { label: 'find jobs', id: 'search-icon' },
];

const SideNav = ({ showSideNav }) => {
  return (
    <div
      class={`${
        !showSideNav && 'translate-x-0'
      } z-50 h-full w-60 -translate-x-full overflow-scroll bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] dark:bg-zinc-800 min-h-screen px-4 py-11`}
    >
      {/* AVATAR CARD */}
      <div className='mb-11'>
        <AvatarCard />
      </div>
      <nav id='sidenav'>
        <ul class='flex flex-col gap-2.5 justify-center'>
          {sideNavItems.map(({ label, id }) => (
            <li class='' key={id}>
              <NavLink className={`px-4 flex gap-4 items-center p-3`} to='/'>
                <Icon name={id} width={20} height={20} />
                <p className='leading-8 text-primary capitalize'>{label}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
