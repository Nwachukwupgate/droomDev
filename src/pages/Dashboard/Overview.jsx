import React from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import Layout from '../../Layout/Layout';

const Overview = () => {
  return (
    <Layout>
      <div className='pt-11'>
        {/* AVATAR & NAME */}
        <div className='flex items-center'>
          <div className='w-[60px] h-[60px]'>
            <img className='rounded-full' alt='profile avatar' />
          </div>
          <div>
            <p className='font-semibold text-lg leading-8 text-[#575555]'>
              Ali Hussnain
            </p>
            <p className='text-sm leading-8 text-[#8D8989]'>
              Node JS Developer
            </p>
          </div>
        </div>

        <div>
          {/* EARNINGS */}
          <div className='mt-[72px]'>
            <h2>Earnings</h2>
            <div>
              <span>$8,690.62</span>
              <IoEye />
              <IoEyeOff />
            </div>
            <div>
              <span>14</span>
              <span>completed projects</span>
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
