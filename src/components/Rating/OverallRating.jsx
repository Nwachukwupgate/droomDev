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
          <Rating rating={0} />
          <p>Productivity</p>
          <Rating rating={2} />
          <p className='whitespace-nowrap'>Consistency & Reliability</p>
          <Rating rating={3} />
          <p>Communication</p>
          <Rating rating={4} />
          <p>Timelines</p>
          <Rating rating={5} />
        </div>
      </div>
    </div>
  );
};

export default OverallRating;
