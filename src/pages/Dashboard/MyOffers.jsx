import React from 'react';
import Badge from '../../components/Badge/Badge';
import MilestoneTable from '../../components/Table/MilestoneTable';
import Client from '../../components/Cards/Client';

const MyOffer = () => {
  return (
    <div className='px-4 py-11 text-left flex flex-col gap-[25px] xl:pr-[62px]'>
      <div className='pb-[30px] border-b border-divider-grey xl:mt-[82px]'>
        <h1 className='text-xl font-semibold leading-8 mb-[30px] md:mb-6 text-left lg:text-2xl'>
          Job Description
        </h1>
        <p className='xl:text-xl'>
          Lorem ipsum dolor sit amet consectetur. Pharetra varius tristique
          mauris auctor mauris pellentesque odio accumsan eget. Nec at ut
          malesuada elit elementum non nunc. Tellus vel purus consectetur elit
          tempus molestie ut tellus dignissim. Egestas elit eu aliquet euismod
          faucibus suspendisse scelerisque orci pulvinar.
        </p>
      </div>

      {/* TALENT DETAILS */}
      <div className='gap-[30px] pb-7 grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 border-b border-divider-grey'>
        <div>
          <h3 className='font-semibold leading-8 lg:text-xl'>Amount</h3>
          <p className='text-sm leading-8 lg:text-xl'>$2000.0</p>
        </div>
        <div>
          <h3 className='font-semibold leading-8 lg:text-xl'>Payment type</h3>
          <p>Milestone</p>
        </div>
        <div>
          <h3 className='font-semibold leading-8 lg:text-xl'>
            Project duration
          </h3>
          <p className='text-sm leading-8 lg:text-xl'>2 months</p>
        </div>
        <div>
          <h3 className='font-semibold leading-8 lg:text-xl'>Role</h3>
          <p>Node JS Developer</p>
        </div>
        <div>
          <h3 className='font-semibold leading-8 lg:text-xl  mb-3'>Skills</h3>
          <Badge />
        </div>
        <div>
          <h3 className='font-semibold leading-8 lg:text-xl  mb-3'>Stack</h3>
          <Badge />
        </div>
        <div>
          <h3 className='font-semibold leading-8 lg:text-xl mb-3'>Framework</h3>
          <Badge />
        </div>
      </div>

      {/* CLIENT DETAILS */}
      <div className='pb-[51px] border-b border-divider-grey'>
        <Client />
      </div>

      {/* MILESTONE */}
      <div>
        <h2 className=' leading-8 mb-8 text-2xl font-extrabold'>
          Milestone Progress
        </h2>

        <MilestoneTable />
      </div>
    </div>
    // </Layout>
  );
};

export default MyOffer;
