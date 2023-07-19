import React from 'react';

const Badge = () => {
  return (
    <div className='relative inline-flex  px-4 justify-center items-center rounded-[10px] border border-divider-grey '>
      <span className='text-sm text-[#575555]'>Lorem ipsum</span>
      <span className='absolute -right-3 -top-2 z-[2] text-white bg-primary text-[0.625rem] rounded-md px-1'>
        4yrs
      </span>
    </div>
  );
};

export default Badge;
