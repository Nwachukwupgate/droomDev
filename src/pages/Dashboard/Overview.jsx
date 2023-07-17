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
          <div className='mt-[72px]'>
            <h2 className='text-[1.75rem] font-bold leading-8'>Earnings</h2>
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
