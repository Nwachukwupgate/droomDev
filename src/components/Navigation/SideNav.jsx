import SignOut from '../../assets/svgs/logout-icon.svg';
import MenuItems from './MenuItems';

const SideNav = () => {
  return (
    <div
      className={` bg-[#D9D9D9] dark:bg-zinc-800 lg:px-7 lg:pt-[60px] xl:px-[60px] lg:pb-36`}
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
