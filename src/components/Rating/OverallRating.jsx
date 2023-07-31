import React from 'react';
import Rating from './Rating';

const OverallRating = () => {
  return (
    <div>
      <div className=''>
        <h2 className='text-xl lg:text-2xl font-semibold mb-3.5'>
          Overall Rating
        </h2>
        <div className='grid grid-cols-2 gap-3'>
          <p>Code Quality</p>
          <Rating />
          <p>Productivity</p>
          <Rating />
          <p>Consistency & Reliability</p>
          <Rating />
          <p>Communication</p>
          <Rating />
          <p>Timelines</p>
          <Rating />
        </div>
      </div>
    </div>
  );
};

export default OverallRating;
