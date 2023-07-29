import React from 'react';
import Intro from '../../components/Intro/Intro';
import Button from '../../components/Button';

const Support = () => {
  return (
    <div>
      <Intro
        title={'Support'}
        description={
          'Lorem ipsum dolor sit amet consectetur. Pharetra varius tristique mauris auctor mauris pellentesque odio accumsan eget. Nec at ut malesuada elit elementum non nunc. Tellus vel purus consectetur elit tempus molestie ut tellus dignissim. Egestas elit eu aliquet euismod faucibus suspendisse scelerisque orci pulvinar.'
        }
      />
      <div className='flex justify-between items-center mt-10 md:mt-24'>
        <Button
          label={'Become a supporter'}
          className={'bg-primary text-white'}
        />
        <Button label={'Get support'} className={'bg-primary text-white'} />
      </div>
    </div>
  );
};

export default Support;
