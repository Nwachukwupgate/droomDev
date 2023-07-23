import React, { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';

const Balance = () => {
  const [showEarnings, setShowEarnings] = useState(true);
  const amount = '$8,690.62';

  return (
    <div>
      <div>
        <div className='mx-auto shadow-card-sm lg:shadow-card rounded-[25px] inline-block'>
          <div className='flex flex-col items-start gap-7 p-7 pb-11'>
            <h2 className='text-[1.75rem] font-bold leading-8 '>My Balance</h2>
            <div className='flex justify-between w-full items-center gap-10'>
              <span className='text-4xl font-semibold leading-8 text-[#575555] '>
                {showEarnings ? amount : '****.**'}
              </span>
              <span onClick={() => setShowEarnings((o) => !o)}>
                {!showEarnings && <IoEye size={25} />}
                {showEarnings && <IoEyeOff size={25} />}
              </span>
            </div>
            <div className='flex gap-4'>
              <span className='text-xl leading-10 text-black'>Coupon Bal:</span>
              <span className='text-[1.75rem] font-semibold leading-10'>
                $14
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
