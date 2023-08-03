import React, { useContext, useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { ThemeContext } from '../../context/ThemeContext';

const Earnings = ({finishedProjOffers, myTotalEarnings}) => {
  const [showEarnings, setShowEarnings] = useState(true);
  const { theme } = useContext(ThemeContext);

  const amount = `$${myTotalEarnings}`;

  return (
    <div>
        <div className={`${
              theme === 'dark' ? 'shadow-card-dark' : 'shadow-card-sm lg:shadow-card'
            } mx-auto rounded-[25px] inline-block w-[330px] h-[230px]`}>
        <div className='flex flex-col items-start gap-7 p-7 pb-11'>
          <h2 className='text-[1.75rem] font-bold leading-8 '>Earnings</h2>
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
            <span className='text-[1.75rem] font-semibold leading-10'>{finishedProjOffers}</span>
            <span className={`${
              theme === 'dark' ? 'text-white' : 'text-black'
            } text-xl leading-10`}>
              completed projects
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earnings;
