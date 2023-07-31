import { useContext } from 'react';
import Navbar from '../components/Navigation/Navbar';
import SideNav from '../components/Navigation/SideNav';
import { ThemeContext } from '../context/ThemeContext';

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className='relative'>
      <header className='mb-[113px]'>
        <Navbar />
      </header>
      <div className='relative min-h-screen flex lg:gap-x-60 xl:gap-x-80 '>
        <div className='hidden lg:block'>
          <div
            className={`fixed left-0 lg:w-60 xl:w-80 z-20 h-screen overflow-y-scroll scrollbar-hide ${
              theme === 'dark' ? 'bg-[#444444]' : 'bg-[#D9D9D9]'
            }`}
          >
            <SideNav />
          </div>
        </div>
        <main className='w-full pt-11 px-4 pb-20 sm:px-8 md:px-12 lg:p-14 lg:pl-[60px] xl:py-[60px] xl:pl-[84px] min-h-screen overflow-x-hidden'>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
