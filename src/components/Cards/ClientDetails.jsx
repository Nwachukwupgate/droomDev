import { MdLocationOn } from 'react-icons/md';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

const ClientDetails = ({ showAmount, companyLocation, companyName, companyLogo}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <section id='client-details'>
      <div>
        <h2 className='text-xl lg:text-2xl font-semibold leading-8 mb-3.5'>
          Client's details
        </h2>
        <div className='flex flex-col items-start lg:flex-row lg:flex-wrap  gap-10 lg:gap-20'>
          <div className='flex gap-[18px] items-center'>
            <div className='w-11 h-11'>
              <img
                alt='avatar'
                src={companyLogo}
              />
            </div>
            <span
              className={`${
                theme === 'dark' ? 'text-[#EDEDED]' : 'text-primary'
              } lg:text-lg`}
            >
              {companyName}
            </span>
          </div>
          <div>
            <div className='flex gap-3 items-center'>
              <h3 className='text-xl font-bold'>Location</h3>
              <MdLocationOn width={14} height={20} color='#E27D03' />
            </div>
            <p className='lg:text-lg'>{companyLocation}</p>
          </div>
          <div className=''>
            <h3 className='text-xl font-bold'>Payment Verification</h3>
            <p className='lg:text-lg'>Verified</p>
          </div>
          {showAmount && (
            <div className=''>
              <h3 className='text-xl font-bold'>Proposed amount</h3>
              <p className='lg:text-lg'>$3,000.00 (Negotiable) </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ClientDetails;
