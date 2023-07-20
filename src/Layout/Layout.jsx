import Navbar from '../components/Navigation/Navbar';
import SideNav from '../components/Navigation/SideNav';

const Layout = ({ children }) => {
  return (
    <div className='relative'>
      <header>
        <Navbar />
      </header>
      <div className='relative mt-[144px] md:mt-36 flex md:gap-14 lg:gap-20'>
        <div className='relative min-h-full -mt-1.5 lg:w-60 hidden lg:block lg:basis-[22%] '>
          <div className='fixed left-0'>
            <SideNav />
          </div>
        </div>
        <main className='lg:mt-0 lg:w-[78%] lg:basis-[78%] min-h-screen overflow-x-hidden'>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
