import React from 'react';
import ProjectTable from './ProjectTable';
import Pagination from '../../components/Pagination/Pagination';
import OverallRating from '../../components/Rating/OverallRating';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';
import LinkButton from '../../components/Button/LinkButton';

const Project = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <div className='mx-auto shadow-card-sm lg:shadow-card rounded-[25px] inline-block mb-[72px] pt-7 px-[30px] pb-10 '>
        <div className=''>
          <h1 className='text-[1.75rem] leading-8 font-extrabold'>
            Active Project
          </h1>
          <p
            className={`${
              theme === 'dark' ? 'text-[#EDEDED]' : 'text-grey'
            } mb-10 `}
          >
            1 project ongoing
          </p>
          <LinkButton
            className={'text-white bg-[#F58800]'}
            label={'See detail'}
            href={'project/:1'}
          />
        </div>
      </div>

      {/* OVERALL RATINGS */}
      <div className='mb-[76px]'>
        <OverallRating />
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
