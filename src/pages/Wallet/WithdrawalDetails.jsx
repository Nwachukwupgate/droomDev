import React from 'react';

const WithdrawalDetails = () => {
  return (
    <div>
      <h1 className='text-xl mb-14'>Withdrawal details</h1>
      <div className='flex flex-col gap-5'>
        <div className='flex justify-between'>
          <p className='text-grey '>Status</p>
          <p className='text-black'>Completed</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-grey '>Date</p>
          <p className='text-black'>Feb. 19, 2023</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-grey '>Amount</p>
          <p className='text-black'>$300</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-grey '>Account name</p>
          <p className='text-black'>Completed</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-grey '>Account number</p>
          <p className='text-black'>Completed</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-grey '>Bank</p>
          <p className='text-black'>UBA</p>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalDetails;
