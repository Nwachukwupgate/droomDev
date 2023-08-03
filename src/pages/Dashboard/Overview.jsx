import React from 'react';
import AvatarCard from '../../components/Cards/AvatarCard';
import LinkButton from '../../components/Button/LinkButton';
import MatchedJobsTable from './MatchedJobsTable';
import Pagination from '../../components/Pagination/Pagination';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Earnings from '../../components/Cards/Earnings';
import { useGetDashboardQuery } from '../../features/api/apiSlice';

const Overview = () => {
  const { theme } = useContext(ThemeContext);
  const { data } = useGetDashboardQuery()
  const { pendingInvites = 0, acceptedInvites = 0, declinedInvites = 0 } = data?.data ?? {};

  return (
    <div className=''>
      {/* AVATAR & NAME */}
      <AvatarCard />
      <div className=' mt-[72px] flex flex-col md:flex-row gap-10 flex-wrap justify-start'>
        {/* EARNINGS */}
        <div className='mx-auto'>
        <Earnings {...data?.data}/>
        </div>
        {/* MY OFFER */}
        <div className={`${
              theme === 'dark' ? 'shadow-card-dark' : 'shadow-card-sm lg:shadow-card'
            } mx-auto rounded-[25px] inline-block w-[330px] h-[230px]` }>          <div className='flex flex-col items-start gap-7 p-7 pb-11'>
            <h2 className='text-[1.75rem] font-bold leading-8 '>My offer</h2>
            <div className='flex gap-12 items-end'>
              <div className='flex flex-col justify-center gap-2'>
                <p className='text-xl text-left whitespace-nowrap'>{pendingInvites} pending</p>
                <p className='text-xl text-left whitespace-nowrap'>{acceptedInvites} accepted</p>
                <p className='text-xl text-left whitespace-nowrap'>{declinedInvites} declined</p>
              </div>
              <div>
                <LinkButton
                  href='alloffer'
                  label='see offer'
                  className={`inline-block  ${theme==='dark'? 'bg-[#F58800]' : 'bg-[#001935]'}`}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Invite */}
        <div className={`${
              theme === 'dark' 
              ? 'shadow-card-dark' 
              : 'shadow-card-sm lg:shadow-card'
            } mx-auto rounded-[25px] inline-block  w-[330px] h-[230px]`}>          
            <div className='flex flex-col items-start gap-7 p-7 pb-11'>
            <h2 className='text-[1.75rem] font-bold leading-8 '>invite</h2>
            <div className=''>
              <p className='text-xl mb-10'>{data?.data?.pendingProjOffers} new invites</p>
              <div className='text-left'>
                <LinkButton
                  href='invites'
                  label='Open'
                  className={'inline-block bg-[#F58800]'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TABLE */}
      <div className=' mt-14 px-4'>
        <MatchedJobsTable />
        <Pagination />
      </div>
    </div>
  );
};

export default Overview;
