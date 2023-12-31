import React from 'react';
import Badge from '../Badge/Badge';

const JobDetails = ({post, projectDetailJobDetail}) => {
  return (
    <div>
      <div className='gap-[30px] pb-7 grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 border-b border-divider-grey'>
        <div>
          <h3 className='font-semibold leading-8 lg:text-xl'>Amount</h3>
          <p className='text-sm leading-8 lg:text-xl'>$2000.0</p>
        </div>
        <div>
          <h3 className='font-semibold leading-8 lg:text-xl'>Payment type</h3>
          <p>{post?.payment_type}</p>
        </div>
        <div>
          <h3 className='font-semibold leading-8 lg:text-xl'>
            Project duration
          </h3>
          <p className='text-sm leading-8 lg:text-xl'>{post?.agreed_duration} months</p>
        </div>
        <div>
          <h3 className='font-semibold leading-8 lg:text-xl'>Role</h3>
          <p>{projectDetailJobDetail?.jobTitle}</p>
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
    </div>
  );
};

export default JobDetails;
