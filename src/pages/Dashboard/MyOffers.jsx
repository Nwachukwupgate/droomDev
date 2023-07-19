import React from 'react';
import Layout from '../../Layout/Layout';
import Badge from '../../components/Badge/Badge';
import MilestoneTable from '../../components/Table/MilestoneTable';

const MyOffer = () => {
  return (
    <Layout>
      <div className='px-4 py-11 text-left flex flex-col gap-[25px]'>
        <div className='pb-[30px] border-b border-divider-grey'>
          <h1 className='text-xl font-semibold leading-8 mb-[30px] md:mb-6 text-left'>
            Description
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Pharetra varius tristique
            mauris auctor mauris pellentesque odio accumsan eget. Nec at ut
            malesuada elit elementum non nunc. Tellus vel purus consectetur elit
            tempus molestie ut tellus dignissim. Egestas elit eu aliquet euismod
            faucibus suspendisse scelerisque orci pulvinar.
          </p>
        </div>

        {/* TALENT DETAILS */}
        <div className='flex flex-col gap-[30px] pb-7'>
          <div className='flex gap-9'>
            <div>
              <h3 className='font-semibold leading-8'>Amount</h3>
              <p className='text-sm leading-8'>$2000.0</p>
            </div>
            <div>
              <h3 className='font-semibold leading-8'>Payment type</h3>
              <p>Milestone</p>
            </div>
          </div>
          <div className='flex gap-9'>
            <div>
              <h3 className='font-semibold leading-8'>Project duration</h3>
              <p className='text-sm leading-8'>2 months</p>
            </div>
            <div>
              <h3 className='font-semibold leading-8'>Role</h3>
              <p>Node JS Developer</p>
            </div>
          </div>
          <div>
            <h3 className='font-semibold leading-8  mb-3'>Skills</h3>
            <Badge />
          </div>
          <div>
            <h3 className='font-semibold leading-8  mb-3'>Stack</h3>
            <Badge />
          </div>
          <div>
            <h3 className='font-semibold leading-8 mb-3'>Framework</h3>
            <Badge />
          </div>
        </div>

        {/* CLIENT DETAILS */}
        <div></div>

        {/* MILESTONE */}
        <div>
          <h2 className=' leading-8 mb-8 text-2xl font-extrabold'>
            Milestone Progress
          </h2>

          <MilestoneTable />
        </div>
      </div>
    </Layout>
  );
};

export default MyOffer;
