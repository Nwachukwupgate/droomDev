import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const WithdrawalDetails = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        theme === 'dark' ? 'shadow-card-dark' : 'shadow-card'
      } max-w-[487px] m-auto rounded-[25px] px-8 pt-9 pb-11`}
    >
      <h1 className='text-xl mb-14 font-semibold'>Withdrawal details</h1>
      <div className='flex flex-col gap-5'>
        <div className='flex justify-between'>
          <p className=' '>Status</p>
          <p
            className={`${
              theme === 'dark' ? 'text-white' : 'text-black'
            } text-lg`}
          >
            Completed
          </p>
        </div>
        <div className='flex justify-between'>
          <p className=' '>Date</p>
          <p
            className={`${
              theme === 'dark' ? 'text-white' : 'text-black'
            } text-lg`}
          >
            Feb. 19, 2023
          </p>
        </div>
        <div className='flex justify-between'>
          <p className=' '>Amount</p>
          <p
            className={`${
              theme === 'dark' ? 'text-white' : 'text-black'
            } text-lg`}
          >
            $300
          </p>
        </div>
        <div className='flex justify-between'>
          <p className=' '>Account name</p>
          <p
            className={`${
              theme === 'dark' ? 'text-white' : 'text-black'
            } text-lg`}
          >
            Drew Ofuenweuche
          </p>
        </div>
        <div className='flex justify-between'>
          <p className=' '>Account number</p>
          <p
            className={`${
              theme === 'dark' ? 'text-white' : 'text-black'
            } text-lg`}
          >
            1234567890
          </p>
        </div>
        <div className='flex justify-between'>
          <p className=' '>Bank</p>
          <p
            className={`${
              theme === 'dark' ? 'text-white' : 'text-black'
            } text-lg`}
          >
            UBA
          </p>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalDetails;
