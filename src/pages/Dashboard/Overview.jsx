import React from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import Layout from '../../Layout/Layout';
import AvatarCard from '../../components/Cards/AvatarCard';

const Overview = () => {
  return (
    <Layout>
      <div className='pt-11 px-4'>
        {/* AVATAR & NAME */}
        <AvatarCard />
        <div>
          {/* EARNINGS */}
          <div className='mx-auto shadow-md rounded-[25px] mt-[72px] inline-block'>
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
          <div className='mt-[72px]'>
            <h2>My offer</h2>
            <p>1 pending offer</p>
            <div>
              <button>See offer</button>
            </div>
          </div>
          {/* Invite */}
          <div className='mt-[72px]'>
            <h2>Invite</h2>
            <p>2 new invites</p>
            <div>
              <button>Open</button>
            </div>
          </div>
        </div>
        {/* TABLE */}
        <div></div>
      </div>
    </Layout>
  );
};

export default Overview;
