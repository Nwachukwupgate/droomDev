import React from 'react';
import Badge from '../../components/Badge/Badge';
import ClientDetails from '../../components/Cards/ClientDetails';
import Button from '../../components/Button';
import OutlineButton from '../../components/Button/OutlineButton';

const MatchedJobs = () => {
  return (
    <section id='matched-jobs'>
      <div className='pb-[30px] border-b border-divider-grey lg:pb-16'>
        <h1 className='text-xl font-semibold leading-8 mb-[30px] md:mb-6 text-left'>
          Client's Request
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Pharetra varius tristique
          mauris auctor mauris pellentesque odio accumsan eget. Nec at ut
          malesuada elit elementum non nunc. Tellus vel purus consectetur elit
          tempus molestie ut tellus dignissim. Egestas elit eu aliquet euismod
          faucibus suspendisse scelerisque orci pulvinar.
        </p>
      </div>

      {/* REQUIREMENTS */}
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7 pb-[30px] border-b border-divider-grey'>
        <div>
          <h3 className='font-semibold leading-8'>Role</h3>
          <p className='font-semibold'>Node JS Developer</p>
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
        <div>
          <h3 className='font-semibold leading-8 mb-3'>Language</h3>
          <Badge />
        </div>
      </div>

      <ClientDetails />

      <div className='flex gap-8 justify-end'>
        <OutlineButton className={''} label={'Not Available'} />
        <Button label={'Available'} className={'bg-primary text-white'} />
      </div>
    </section>
  );
};

export default MatchedJobs;
