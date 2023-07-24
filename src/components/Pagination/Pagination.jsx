import React from 'react';
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';

const Pagination = () => {
  return (
    <div aria-label='table pagination' className='m-auto'>
      <ul className=' flex gap-11 justify-center items-center'>
        <li>
          <div
            className='text-[#BCBCBC] dark:text-white  dark:hover:text-white'
            aria-label='Previous'
          >
            <CiCircleChevLeft size={64} />
          </div>
        </li>
        <li>
          <div className='text-lg text-[#BCBCBC] dark:text-white  dark:hover:text-white'>
            1
          </div>
        </li>
        <li aria-current='page'>
          <div className='text-lg text-[#BCBCBC] dark:text-white  dark:hover:text-white'>
            2
          </div>
        </li>
        <li>
          <div className='text-lg  text-[#BCBCBC] dark:text-white  dark:hover:text-white'>
            3
          </div>
        </li>
        <li>
          <div
            className='text-[#BCBCBC] dark:text-white  dark:hover:text-white'
            aria-label='Next'
          >
            <CiCircleChevRight size={64} />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
