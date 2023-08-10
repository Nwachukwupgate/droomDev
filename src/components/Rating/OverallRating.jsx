import React from 'react';
import Rating from './Rating';
import { useGetMyOverAllRatingQuery } from '../../features/api/apiSlice';

const OverallRating = () => {
  const {data} = useGetMyOverAllRatingQuery ()

  const {code_quality ="0", communications="0", productivity ="0", reliability  ="0", timelines= "0"} = data?.data ?? {}
  return (
    <div>
      <div className=''>
        <h2 className='text-xl lg:text-2xl font-semibold mb-3.5'>
          Overall Rating
        </h2>
        <div className='grid grid-cols-2 gap-3'>
          <p>Code Quality</p>
          <Rating rating={code_quality} />
          <p>Productivity</p>
          <Rating rating={productivity} />
          <p className='whitespace-nowrap'>Consistency & Reliability</p>
          <Rating rating={reliability} />
          <p>Communication</p>
          <Rating rating={communications} />
          <p>Timelines</p>
          <Rating rating={timelines} />
        </div>
      </div>
    </div>
  );
};

export default OverallRating;
