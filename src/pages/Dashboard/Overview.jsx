import React from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import Layout from '../../Layout/Layout';
import AvatarCard from '../../components/Cards/AvatarCard';
import Button from '../../components/Button';
import Table from '../../components/Table/Table';
import MatchedJob from '../../components/Table/MatchedJob';

const Overview = () => {
  return (
    <Layout>
      <div className='pt-11 px-4'>
        {/* AVATAR & NAME */}
        <AvatarCard />
        <div className=' mt-[72px] flex flex-col md:flex-row gap-10'>
          {/* EARNINGS */}
          <div className='mx-auto shadow-md rounded-[25px] inline-block'>
            <div className='flex flex-col items-start gap-7 p-7 pb-11'>
              <h2 className='text-[1.75rem] font-bold leading-8 '>Earnings</h2>
              <div className='flex items-center gap-10'>
                <span className='text-4xl font-semibold leading-8'>
                  $8,690.62
                </span>
                <span>
                  <IoEye />
                  <IoEyeOff />
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
          <div className='mx-auto shadow-md rounded-[25px] inline-block'>
            <div className='flex flex-col items-start gap-7 p-7 pb-11'>
              <h2 className='text-[1.75rem] font-bold leading-8 '>My offer</h2>
              <div className='flex gap-12 items-end'>
                <div className='flex flex-col justify-center gap-2'>
                  <p className='text-xl text-left'>1 pending</p>
                  <p className='text-xl text-left'>1 accepted</p>
                  <p className='text-xl text-left'>1 declined</p>
                </div>
                <div>
                  <Button label='see offer' className={'inline-block'} />
                </div>
              </div>
            </div>
          </div>
          {/* Invite */}
          <div className='mx-auto shadow-md rounded-[25px] inline-block'>
            <div className='flex flex-col items-start gap-7 p-7 pb-11'>
              <h2 className='text-[1.75rem] font-bold leading-8 '>My offer</h2>
              <div className='inline-flex gap-10'>
                <p className='text-xl'>2 new invites</p>
                <div>
                  <Button label='offfer' className={'inline-block'} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* TABLE */}
        <div className=' mt-14 px-4'>
          <MatchedJob />
        </div>
      </div>
    </Layout>
  );
};

export default Overview;
