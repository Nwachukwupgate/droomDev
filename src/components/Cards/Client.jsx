import { IoLocationSharp } from 'react-icons/io5';
const Client = () => {
  return (
    <section id='client-details'>
      <div>
        <h2 className='text-[1.75rem] font-bold leading-8 mb-3.5'>
          Client's details
        </h2>
        <div className='flex items-center gap-20'>
          <div className='flex gap-[18px] items-center'>
            <div className='w-11 h-11'>
              <img
                alt='avatar'
                src='https://tecdn.b-cdn.net/img/new/avatars/2.webp'
              />
            </div>
            <span className='text-primary lg:text-lg'>Lopez Lawrence</span>
          </div>
          <div>
            <div className='flex gap-3 items-center'>
              <h3 className='text-xl font-bold'>Location</h3>
              <IoLocationSharp width={14} height={20} fill='#E27D03' />
            </div>
            <p className='lg:text-lg'>London, United Kingdom</p>
          </div>
          <div className=''>
            <h3 className='text-xl font-bold'>Payment Verification</h3>
            <p className='lg:text-lg'>Verified</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
