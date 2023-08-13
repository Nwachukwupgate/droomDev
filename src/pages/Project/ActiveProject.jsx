import React, { useState } from 'react';
import MilestoneTable from '../Dashboard/MilestoneTable';
import ClientDetails from '../../components/Cards/ClientDetails';
import Divider from '../../components/Divider';
import JobDetails from '../../components/JobDetails/JobDetails';
import PageIntro from '../../components/PageIntro/PageIntro';
import Status from '../../components/Status/Status';

const ActiveProject = ({ title, description }) => {
  const [showModal, setShowModal] = useState(false);

  const acceptHandler = (e) => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='text-left flex flex-col gap-[25px]'>
      {/* <CongratulationsModal open={showModal} closeModal={closeModal} /> */}
      <PageIntro
        title={'Job Details'}
        description={
          'Lorem ipsum dolor sit amet consectetur. Pharetra varius tristique mauris auctor mauris pellentesque odio accumsan eget. Nec at ut malesuada elit elementum non nunc. Tellus vel purus consectetur elit tempus molestie ut tellus dignissim. Egestas elit eu aliquet euismod faucibus suspendisse scelerisque orci pulvinar.'
        }
      />
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
      <div className='flex gap-4 items-center'>
        <p>Project Status:</p>
        <Status label={'On-going'} />
      </div>
    </div>
  );
};
export default ActiveProject;
