import React from 'react';
import Badge from '../Badge/Badge';

const JobDetails = () => {
  return (
    <div>
      <div className='gap-[30px] grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 '>
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
    </div>
  );
};

export default JobDetails;
