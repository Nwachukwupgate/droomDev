import React, { useState } from 'react';
import MilestoneTable from './MilestoneTable';
import ClientDetails from '../../components/Cards/ClientDetails';
import OutlineButton from '../../components/Button/OutlineButton';
import Button from '../../components/Button';
import CongratulationsModal from '../../components/Modal/CongratulationsModal';
import { useParams } from 'react-router-dom';
import { useGetMyWorkHistoryQuery, useAcceptOfferMutation, useRejectOfferMutation } from '../../features/api/apiSlice';
import JobDetails from '../../components/JobDetails/JobDetails';
import Divider from '../../components/Divider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyOffer = () => {
  const { id } = useParams();
  const idAsInteger = parseInt(id, 10); 
  const [showModal, setShowModal] = useState(false)
  const [isAgreed, setIsAgreed] = useState(false);
  
  const handleAgreeChange = (event) => {
    setIsAgreed(event.target.checked);
  };


  const [acceptOffer, {isLoading, data: acceptData }] = useAcceptOfferMutation()
  const [rejectOffer, {isLoading: rejectLoading, data: rejectData }] = useRejectOfferMutation()
  const { post } = useGetMyWorkHistoryQuery(undefined, {
    selectFromResult: ({ data }) => {
      const posts = (data && data.data.data) || [];  
      const selectedPost = posts.find((post) => post.id === idAsInteger);
      return {
        post: selectedPost,
      };
    },
  });

  const {projectDetailJobDetail ={}, projectDetailMilestone =[] } = post ?? {}
  console.log("this pop", post)

 

  const acceptHandler = async (e) => {
    console.log("button clicked");
    try {
      if (isAgreed) {
        await acceptOffer(idAsInteger).unwrap();
        toast.success(acceptData.message)
        setShowModal(true);
        console.log(acceptData);
      } else {
        toast.error("check the button to accept")
      } 
    } catch (error) {
      if(error.status === "FETCH_ERROR") {
        toast.error(`Check Internet ${error.status}`)
      } else {
        toast.error(error?.message)
      }
      console.log(error);
    }
  };

  const rejectHandler = async (e) => {
    e.preventDefault();
    try {
      await rejectOffer(idAsInteger).unwrap();
      toast.success(rejectData.message)    
    } catch (error) {
      if(error.status === "FETCH_ERROR") {
        toast.error(`Check Internet ${error.status}`)
      } else {
        toast.error(error?.message)
      }
      console.log(error);
    }
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
          {projectDetailJobDetail.jobDescription}
        </p>
      </div>

      {/* CLIENT DETAILS */}
      <JobDetails post={post} projectDetailJobDetail={projectDetailJobDetail} />
      <Divider />
      <div className='pb-[51px] border-b border-divider-grey'>
        <ClientDetails {...projectDetailJobDetail} showAmount = {true} />
      </div>
      <div>
        <h2 className=' leading-8 mb-8 text-2xl font-extrabold'>
          Milestone Progress
        </h2>
        <MilestoneTable projectDetailMilestone={projectDetailMilestone}/>
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
              checked={isAgreed}
              onChange={handleAgreeChange}
            />
            I have read, understood, and accepted the offer
          </label>
          <div className='flex gap-5'>
            <OutlineButton type={'submit'} label={'Decline'} onClick={rejectHandler} isLoading={rejectLoading} />
            <Button
              type={'submit'}
              label={'Accept'}
              className={'bg-primary text-white'}
              onClick={acceptHandler}
              disableButton={!isAgreed}
              isLoading={isLoading}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default MyOffer;
