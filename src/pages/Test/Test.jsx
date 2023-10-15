import React from 'react';
import Intro from '../../components/Intro/Intro';
import Button from '../../components/Button';
import Divider from '../../components/Divider';
import LinkButton from '../../components/Button/LinkButton';
import { useGetAllMyCbtDetailsQuery } from '../../features/api/apiSlice';

const Test = () => {
  const {data} = useGetAllMyCbtDetailsQuery()
  const { userCbtResult = [] } = data?.data ?? {}

  return (
    <div>
      <Intro
        title={'CBT Test'}
        description={
          'Lorem ipsum dolor sit amet consectetur. Pharetra varius tristique mauris auctor mauris pellentesque odio accumsan eget. Nec at ut malesuada elit elementum non nunc. Tellus vel purus consectetur elit tempus molestie ut tellus dignissim. Egestas elit eu aliquet euismod faucibus suspendisse scelerisque orci pulvinar.'
        }
      />
      <div className='mt-1 md:mt-11 mb-16'>
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
        <Divider className={'mb-1 mt-3'} />
      </div>

      {userCbtResult.map((result) => (
        <div key={result.id} className='grid grid-cols-2 gap-[3px] md;grid-cols-3 xl:grid-cols-4'>
          <div>
            <h3 className='font-semibold leading-8 mb-2.5 md:text-lg lg:text-xl'>
              
              {result?.framework1_name}
            </h3>
            <div className='inline-grid justify-between grid-cols-2 gap-2'>
              <p>Point:</p>
              <p>{result?.framework1_point}</p>
              <p>Score:</p>
              <p>{result?.framework1_percent_score}</p>
            </div>
          </div>
          <div>
            <h3 className='font-semibold leading-8 mb-2.5 md:text-lg lg:text-xl'>
              {result?.framework2_name}
            </h3>
            <div className='inline-grid justify-between grid-cols-2 gap-2'>
              <p>Point:</p>
              <p>{result?.framework2_point}</p>
              <p>Score:</p>
              <p>{result?.framework2_percent_score}</p>
            </div>
          </div>
          <div>
            <h3 className='font-semibold leading-8 mb-2.5 md:text-lg lg:text-xl'>
              {result?.framework3_name}
            </h3>
            <div className='inline-grid justify-between grid-cols-2 gap-2'>
              <p>Point:</p>
              <p>{result?.framework3_point}</p>
              <p>Score:</p>
              <p>{result?.framework3_percent_score}</p>
            </div>
          </div>
          <div>
            <h3 className='font-semibold leading-8 mb-2.5 md:text-lg lg:text-xl'>
              {result?.framework4_name}
            </h3>
            <div className='inline-grid justify-between grid-cols-2 gap-2'>
              <p>Point:</p>
              <p>{result?.framework4_point}</p>
              <p>Score:</p>
              <p>{result?.framework4_percent_score}</p>
            </div>
          </div>
          <div>
            <h3 className='font-semibold leading-8 mb-2.5 md:text-lg lg:text-xl'>
              {result?.framework5_name}{' '}
            </h3>
            <div className='inline-grid justify-between grid-cols-2 gap-2'>
              <p>Point:</p>
              <p>{result?.framework5_point}</p>
              <p>Score:</p>
              <p>{result?.framework5_percent_score}</p>
            </div>
          </div>
          <div>
            <h3 className='font-semibold leading-8 mb-2.5 md:text-lg lg:text-xl'>
              {result?.framework6_name}
            </h3>
            <div className='inline-grid justify-between grid-cols-2 gap-2'>
              <p>Point:</p>
              <p>{result?.framework6_point}</p>
              <p>Score:</p>
              <p>{result?.framework6_point}</p>
            </div>
          </div>
        </div>
      ))}

      {userCbtResult.map((result) => (
        <div key={result.id} className='grid grid-cols-2 gap-[3px] md;grid-cols-3 xl:grid-cols-4 mt-8'>
          <div>
            <h3 className='font-semibold leading-8 mb-2.5 md:text-lg lg:text-xl'>
              {result?.language1_name}
            </h3>
            <div className='inline-grid justify-between grid-cols-2 gap-2'>
              <p>Point:</p>
              <p>{result?.language1_point}</p>
              <p>Score:</p>
              <p>{result?.language1_percent_score}</p>
            </div>
          </div>
          <div>
            <h3 className='font-semibold leading-8 mb-2.5 md:text-lg lg:text-xl'>
              {result?.language2_name}
            </h3>
            <div className='inline-grid justify-between grid-cols-2 gap-2'>
              <p>Point:</p>
              <p>{result?.language2_point}</p>
              <p>Score:</p>
              <p>{result?.language2_percent_score}</p>
            </div>
          </div>
          <div>
            <h3 className='font-semibold leading-8 mb-2.5 md:text-lg lg:text-xl'>
              {result?.language3_name}
            </h3>
            <div className='inline-grid justify-between grid-cols-2 gap-2'>
              <p>Point:</p>
              <p>{result?.language3_point}</p>
              <p>Score:</p>
              <p>{result?.language3_percent_score}</p>
            </div>
          </div>
          <div>
            <h3 className='font-semibold leading-8 mb-2.5 md:text-lg lg:text-xl'>
              {result?.language4_name}
            </h3>
            <div className='inline-grid justify-between grid-cols-2 gap-2'>
              <p>Point:</p>
              <p>{result?.language4_point}</p>
              <p>Score:</p>
              <p>{result?.language4_percent_score}</p>
            </div>
          </div>
          <div>
            <h3 className='font-semibold leading-8 mb-2.5 md:text-lg lg:text-xl'>
              {result?.language5_name}{' '}
            </h3>
            <div className='inline-grid justify-between grid-cols-2 gap-2'>
              <p>Point:</p>
              <p>{result?.language5_point}</p>
              <p>Score:</p>
              <p>{result?.language5_percent_score}</p>
            </div>
          </div>
          <div>
            <h3 className='font-semibold leading-8 mb-2.5 md:text-lg lg:text-xl'>
              {result?.language6_name}
            </h3>
            <div className='inline-grid justify-between grid-cols-2 gap-2'>
              <p>Point:</p>
              <p>{result?.language6_point}</p>
              <p>Score:</p>
              <p>{result?.language6_point}</p>
            </div>
          </div>
          <div>
            <h3 className='font-semibold leading-8 mb-2.5 md:text-lg lg:text-xl'>
              {result?.language7_name}
            </h3>
            <div className='inline-grid justify-between grid-cols-2 gap-2'>
              <p>Point:</p>
              <p>{result?.language7_point}</p>
              <p>Score:</p>
              <p>{result?.language7_point}</p>
            </div>
          </div>
          <div>
            <h3 className='font-semibold leading-8 mb-2.5 md:text-lg lg:text-xl'>
              {result?.language8_name}
            </h3>
            <div className='inline-grid justify-between grid-cols-2 gap-2'>
              <p>Point:</p>
              <p>{result?.language8_point}</p>
              <p>Score:</p>
              <p>{result?.language8_point}</p>
            </div>
          </div>
        </div>
      ))}

      {userCbtResult.map((result) => (
        <div key={result.id} className='grid grid-cols-2 gap-[3px] md;grid-cols-3 xl:grid-cols-4 mt-8'>
          <div>
            <h3 className='font-semibold leading-8 mb-2.5 md:text-lg lg:text-xl'>
              {result?.skill1_name}
            </h3>
            <div className='inline-grid justify-between grid-cols-2 gap-2'>
              <p>Point:</p>
              <p>{result?.skill1_point}</p>
              <p>Score:</p>
              <p>{result?.skill1_percent_score}</p>
            </div>
          </div>
          <div>
            <h3 className='font-semibold leading-8 mb-2.5 md:text-lg lg:text-xl'>
              {result?.skill2_name}
            </h3>
            <div className='inline-grid justify-between grid-cols-2 gap-2'>
              <p>Point:</p>
              <p>{result?.skill2_point}</p>
              <p>Score:</p>
              <p>{result?.skill2_percent_score}</p>
            </div>
          </div>
          <div>
            <h3 className='font-semibold leading-8 mb-2.5 md:text-lg lg:text-xl'>
              {result?.skill3_name}
            </h3>
            <div className='inline-grid justify-between grid-cols-2 gap-2'>
              <p>Point:</p>
              <p>{result?.skill3_point}</p>
              <p>Score:</p>
              <p>{result?.skill3_percent_score}</p>
            </div>
          </div>
          <div>
            <h3 className='font-semibold leading-8 mb-2.5 md:text-lg lg:text-xl'>
              {result?.skill4_name}
            </h3>
            <div className='inline-grid justify-between grid-cols-2 gap-2'>
              <p>Point:</p>
              <p>{result?.skill4_point}</p>
              <p>Score:</p>
              <p>{result?.skill4_percent_score}</p>
            </div>
          </div>
          <div>
            <h3 className='font-semibold leading-8 mb-2.5 md:text-lg lg:text-xl'>
              {result?.skill5_name}{' '}
            </h3>
            <div className='inline-grid justify-between grid-cols-2 gap-2'>
              <p>Point:</p>
              <p>{result?.skill5_point}</p>
              <p>Score:</p>
              <p>{result?.skill5_percent_score}</p>
            </div>
          </div>
          <div>
            <h3 className='font-semibold leading-8 mb-2.5 md:text-lg lg:text-xl'>
              {result?.skill6_name}
            </h3>
            <div className='inline-grid justify-between grid-cols-2 gap-2'>
              <p>Point:</p>
              <p>{result?.skill6_point}</p>
              <p>Score:</p>
              <p>{result?.skill6_point}</p>
            </div>
          </div>
          <div>
            <h3 className='font-semibold leading-8 mb-2.5 md:text-lg lg:text-xl'>
              {result?.skill7_name}
            </h3>
            <div className='inline-grid justify-between grid-cols-2 gap-2'>
              <p>Point:</p>
              <p>{result?.skill7_point}</p>
              <p>Score:</p>
              <p>{result?.skill7_point}</p>
            </div>
          </div>
          <div>
            <h3 className='font-semibold leading-8 mb-2.5 md:text-lg lg:text-xl'>
              {result?.skill8_name}
            </h3>
            <div className='inline-grid justify-between grid-cols-2 gap-2'>
              <p>Point:</p>
              <p>{result?.skill8_point}</p>
              <p>Score:</p>
              <p>{result?.skill8_point}</p>
            </div>
          </div>
        </div>
      ))}

      {userCbtResult.map((result) => (
        <div key={result.id} className='grid grid-cols-2 gap-[3px] md;grid-cols-3 xl:grid-cols-4 mt-8'>
          <div>
            <h3 className='font-semibold leading-8 mb-2.5 md:text-lg lg:text-xl'>
              Internet
            </h3>
            <div className='inline-grid justify-between grid-cols-2 gap-2'>
              <p>Point:</p>
              <p>{result?.internet_point}</p>
              <p>Score:</p>
              <p>{result?.internet_score}</p>
            </div>
          </div>
          <div>
            <h3 className='font-semibold leading-8 mb-2.5 md:text-lg lg:text-xl'>
              Security
            </h3>
            <div className='inline-grid justify-between grid-cols-2 gap-2'>
              <p>Point:</p>
              <p>{result?.security_point}</p>
              <p>Score:</p>
              <p>{result?.security_score}</p>
            </div>
          </div>
          <div>
            <h3 className='font-semibold leading-8 mb-2.5 md:text-lg lg:text-xl'>
              Version Control
            </h3>
            <div className='inline-grid justify-between grid-cols-2 gap-2'>
              <p>Point:</p>
              <p>{result?.version_control_point}</p>
              <p>Score:</p>
              <p>{result?.version_control_score}</p>
            </div>
          </div>
          
        </div>
      ))}
      
      <Divider className={'mt-7 mb-8'} />
      <div className='flex justify-between items-center'>
        <Button label={'share'} className={'text-white bg-primary'} />
        <div className='flex gap-4'>
          <p className='text-xl text-primary lg:text-[1.75rem] font-bold'>
            Total score:
          </p>
          <p className='text-xl text-primary lg:text-[1.75rem] font-medium'>
            {userCbtResult.map((result) => (
              <React.Fragment key={result?.id}>
                {result?.total_score}
              </React.Fragment>             
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Test;
