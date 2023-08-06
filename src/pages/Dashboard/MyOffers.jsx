import React, { useState } from 'react';
// import Badge from '../../components/Badge/Badge';
import MilestoneTable from './MilestoneTable';
import ClientDetails from '../../components/Cards/ClientDetails';
import OutlineButton from '../../components/Button/OutlineButton';
import Button from '../../components/Button';
import CongratulationsModal from '../../components/Modal/CongratulationsModal';
import JobDetails from '../../components/JobDetails/JobDetails';
import Divider from '../../components/Divider';

const MyOffer = () => {
  const [showModal, setShowModal] = useState(false);

  const acceptHandler = (e) => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='text-left flex flex-col gap-[25px]'>
      <CongratulationsModal open={showModal} closeModal={closeModal} />
      <div className='pb-[30px] border-b border-divider-grey xl:mt-[82px]'>
        <h1 className='text-xl font-semibold leading-8 mb-[30px] md:mb-6 text-left lg:text-2xl'>
          Job Description
        </h1>
        <p className='xl:text-xl'>
          Lorem ipsum dolor sit amet consectetur. Pharetra varius tristique
          mauris auctor mauris pellentesque odio accumsan eget. Nec at ut
          malesuada elit elementum non nunc. Tellus vel purus consectetur elit
          tempus molestie ut tellus dignissim. Egestas elit eu aliquet euismod
          faucibus suspendisse scelerisque orci pulvinar.
        </p>
      </div>
      <JobDetails />
      <Divider />
      <div className='pb-[51px] border-b border-divider-grey'>
        <ClientDetails />
      </div>
      <div>
        <h2 className=' leading-8 mb-8 text-2xl font-extrabold'>
          Milestone Progress
        </h2>
        <MilestoneTable />
      </div>
      <form>
        <div className='flex flex-col gap-8 xl:flex-row md:justify-between mt-10'>
          <label
            htmlFor='acceptOfferCheckbox'
            className='flex items-center gap-3'
          >
            <input
              type='checkbox'
              name='acceptOffer'
              id='acceptOfferCheckbox'
            />
            I have read, understood, and accepted the offer
          </label>
          <div className='flex gap-5'>
            <OutlineButton type={'submit'} label={'Decline'} />
            <Button
              type={'submit'}
              label={'Accept'}
              className={'bg-primary text-white'}
              onClick={acceptHandler}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default MyOffer;
