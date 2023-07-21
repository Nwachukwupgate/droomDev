import Navbar from '../components/Navigation/Navbar';
import SideNav from '../components/Navigation/SideNav';

const Layout = ({ children }) => {
  return (
    <div className='relative'>
      <header>
        <Navbar />
      </header>
      <div className='relative mt-[144px] md:mt-36 flex lg:gap-14 xl:gap-[83px] lg:px-[60px]'>
        <div className='lg:w-60 xl:w-80 hidden lg:block '>
          <div className='fixed left-0 lg:w-60 xl:w-80 z-20'>
            <SideNav />
          </div>
        </div>
        <main className='w-full lg:mt-0  min-h-screen overflow-x-hidden'>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
