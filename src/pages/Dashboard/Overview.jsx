import React, { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import AvatarCard from '../../components/Cards/AvatarCard';
import LinkButton from '../../components/Button/LinkButton';
import MatchedJobsTable from './MatchedJobsTable';
import Pagination from '../../components/Pagination/Pagination';

const Overview = () => {
  const [showEarnings, setShowEarnings] = useState(true);

  const amount = '$8,690.62';
  return (
    <div className=''>
      {/* AVATAR & NAME */}
      <AvatarCard />
      <div className=' mt-[72px] flex flex-col md:flex-row gap-10 flex-wrap justify-start'>
        {/* EARNINGS */}
        <div className='mx-auto shadow-md rounded-[25px] inline-block'>
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
              <span className='text-[1.75rem] font-semibold leading-10'>
                14
              </span>
              <span className='text-xl leading-10 text-black'>
                completed projects
              </span>
            </div>
          </div>
        </div>
        {/* MY OFFER */}
        <div className='mx-auto shadow-md rounded-[25px] inline-block '>
          <div className='flex flex-col items-start gap-7 p-7 pb-11'>
            <h2 className='text-[1.75rem] font-bold leading-8 '>My offer</h2>
            <div className='flex gap-12 items-end'>
              <div className='flex flex-col justify-center gap-2'>
                <p className='text-xl text-left'>1 pending</p>
                <p className='text-xl text-left'>1 accepted</p>
                <p className='text-xl text-left'>1 declined</p>
              </div>
              <div>
                <LinkButton
                  href='alloffer'
                  label='see offer'
                  className={'inline-block bg-[#001935]'}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Invite */}
        <div className='mx-auto shadow-md rounded-[25px] inline-block w-[300px]'>
          <div className='flex flex-col items-start gap-7 p-7 pb-11'>
            <h2 className='text-[1.75rem] font-bold leading-8 '>invite</h2>
            <div className=''>
              <p className='text-xl mb-10'>2 new invites</p>
              <div className='text-left'>
                <LinkButton
                  href='invites'
                  label='Open'
                  className={'inline-block bg-[#F58800]'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TABLE */}
      <div className=' mt-14 px-4'>
        <MatchedJobsTable />
        <Pagination />
      </div>
    </div>
  );
};

export default Overview;
