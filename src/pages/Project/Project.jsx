import React from 'react';
import Button from '../../components/Button';
import Rating from '../../components/Rating/Rating';
import ProjectTable from './ProjectTable';
import Pagination from '../../components/Pagination/Pagination';

const Project = () => {
  return (
    <div>
      <div className='mx-auto shadow-card-sm lg:shadow-card rounded-[25px] inline-block mb-[72px] pt-7 px-[30px] pb-10 '>
        <div className=''>
          <h1 className='text-[1.75rem] leading-8 font-extrabold'>
            Active Project
          </h1>
          <p className='mb-10 text-grey'>1 project ongoing</p>
          <Button className={'text-white bg-[#F58800]'} label={'See detail'} />
        </div>
      </div>

      {/* OVERALL RATINGS */}
      <div className='mb-[76px]'>
        <h2>Overall Rating</h2>
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

      {/* WORK HISTORY */}
      <div>
        <ProjectTable />
        <div>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Project;
