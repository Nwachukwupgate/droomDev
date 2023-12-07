import { useEffect } from 'react';
import { LuCalendarDays } from 'react-icons/lu';
import { BiSolidCopy, BiTimeFive } from 'react-icons/bi';
import { AiOutlineLink } from 'react-icons/ai';
import Button from '../Button';
import OutlineButton from '../Button/OutlineButton';
import { useAcceptInviteMutation } from '../../features/api/apiSlice';
import { useRejectInviteMutation } from '../../features/api/apiSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InvitationDetails = ({invites}) => {
  
  const [acceptInvite, {isLoading, data: acceptData, isSuccess }] = useAcceptInviteMutation()
  const [rejectInvite, {isLoading: rejectLoading, data: rejectData, isSuccess: rejectSuccess }] = useRejectInviteMutation()

  const id = invites.id

  const acceptHandler = async (e) => {
    console.log("button clicked");
    try {     
      await acceptInvite(id).unwrap();     
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
      await rejectInvite(id).unwrap();    
    } catch (error) {
      if(error.status === "FETCH_ERROR") {
        toast.error(`Check Internet ${error.status}`)
      } else {
        toast.error(error?.message)
      }
      console.log(error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(acceptData.message)
      return;
    }
    if (rejectSuccess) {
      toast.success(rejectData.message)
      return;
    }
  }, [isSuccess, rejectSuccess])

  return (
    <div className=''>
      <h2 className='text-xl lg:text-2xl leading-8 mb-3.5 font-semibold'>
        Invitation details
      </h2>
      <div className='inline-flex flex-col gap-20 lg:gap-7 lg:flex-row lg:justify-between lg:items-end lg:w-full'>
        <div className='flex flex-col gap-2.5 pl-5 lg:pl-0'>
          <div className='flex items-center gap-5'>
            <LuCalendarDays size={20} />
            <span className='lg:text-xl'>{invites?.meeting_date}</span>
          </div>
          <div className='flex items-center gap-5'>
            <BiTimeFive size={24} />
            <span className='lg:text-xl'>{invites?.meeting_time}</span>
          </div>
          <div className='flex items-center gap-5'>
            <AiOutlineLink size={16} />
            <span className='lg:text-xl'>
            {invites?.meeting_link}
            </span>
            <BiSolidCopy size={20} />
          </div>
        </div>
        <div className='flex justify-between items-center gap-[22px]'>
          <OutlineButton label={'Decline'} type={'submit'} onClick={rejectHandler} isLoading={rejectLoading}/>
          <Button
            type={'submit'}
            className={'border border-transparent bg-primary text-white'}
            label={'Accept'}
            onClick={acceptHandler}
            // disableButton={!isAgreed}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default InvitationDetails;
