import SignOut from '../../assets/svgs/logout-icon.svg';
import MenuItems from './MenuItems';

const SideNav = () => {
  return (
    <div
      className={` bg-[#D9D9D9] shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] dark:bg-zinc-800 lg:px-7 lg:py-[60px] xl:px-[60px]`}
    >
      <div className=' flex flex-col justify-between'>
        <MenuItems />
        <div className='px-4 flex justify-between items-center mb-[69px]'>
          <div className='flex gap-3 items-center'>
            <div>
              <img src={SignOut} alt='signout-button' />
            </div>
            <button className='whitespace-nowrap leading-8 text-primary lg:text-lg xl:text-[1.375rem]'>
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
