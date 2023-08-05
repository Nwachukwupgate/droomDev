import React from 'react';
import Intro from '../../components/Intro/Intro';
import Button from '../../components/Button';
import Divider from '../../components/Divider';
import LinkButton from '../../components/Button/LinkButton';

const Test = () => {
  return (
    <div>
      <Intro
        title={'CBT Test'}
        description={
          'Lorem ipsum dolor sit amet consectetur. Pharetra varius tristique mauris auctor mauris pellentesque odio accumsan eget. Nec at ut malesuada elit elementum non nunc. Tellus vel purus consectetur elit tempus molestie ut tellus dignissim. Egestas elit eu aliquet euismod faucibus suspendisse scelerisque orci pulvinar.'
        }
      />
      <div className='mt-10 md:mt-11 mb-16'>
        <LinkButton
          label={'Take Test'}
          className={'bg-primary text-white'}
          href={'test/retake'}
        />
      </div>
      <div>
        <h2 className='text-xl  lg:text-[1.75rem] font-bold'>
          CBT Test Result
        </h2>
        <Divider className={'mb-10 mt-3'} />
      </div>
      <div className='grid grid-cols-2 gap-[30px] md;grid-cols-3 xl:grid-cols-4'>
        <div>
          <h3 className='font-semibold leading-8 mb-2.5 md:text-lg lg:text-xl'>
            Framework
          </h3>
          <div className='inline-grid justify-between grid-cols-2 gap-2'>
            <p>Point:</p>
            <p>2</p>
            <p>Score:</p>
            <p>2</p>
          </div>
        </div>
        <div>
          <h3 className='font-semibold leading-8 mb-2.5 md:text-lg lg:text-xl'>
            Language
          </h3>
          <div className='inline-grid justify-between grid-cols-2 gap-2'>
            <p>Point:</p>
            <p>2</p>
            <p>Score:</p>
            <p>2</p>
          </div>
        </div>
        <div>
          <h3 className='font-semibold leading-8 mb-2.5 md:text-lg lg:text-xl'>
            Skills
          </h3>
          <div className='inline-grid justify-between grid-cols-2 gap-2'>
            <p>Point:</p>
            <p>2</p>
            <p>Score:</p>
            <p>2</p>
          </div>
        </div>
        <div>
          <h3 className='font-semibold leading-8 mb-2.5 md:text-lg lg:text-xl'>
            Internet knowledge
          </h3>
          <div className='inline-grid justify-between grid-cols-2 gap-2'>
            <p>Point:</p>
            <p>2</p>
            <p>Score:</p>
            <p>2</p>
          </div>
        </div>
        <div>
          <h3 className='font-semibold leading-8 mb-2.5 md:text-lg lg:text-xl'>
            Version control knowledge{' '}
          </h3>
          <div className='inline-grid justify-between grid-cols-2 gap-2'>
            <p>Point:</p>
            <p>2</p>
            <p>Score:</p>
            <p>2</p>
          </div>
        </div>
        <div>
          <h3 className='font-semibold leading-8 mb-2.5 md:text-lg lg:text-xl'>
            Security knowledge
          </h3>
          <div className='inline-grid justify-between grid-cols-2 gap-2'>
            <p>Point:</p>
            <p>2</p>
            <p>Score:</p>
            <p>2</p>
          </div>
        </div>
      </div>
      <Divider className={'mt-7 mb-8'} />
      <div className='flex justify-between items-center'>
        <Button label={'share'} className={'text-white bg-primary'} />
        <div className='flex gap-4'>
          <p className='text-xl text-primary lg:text-[1.75rem] font-bold'>
            Total score:
          </p>
          <p className='text-xl text-primary lg:text-[1.75rem] font-medium'>
            24
          </p>
        </div>
      </div>
    </div>
  );
};

export default Test;
