import { LuCalendarDays } from 'react-icons/lu';
import { BiSolidCopy, BiTimeFive } from 'react-icons/bi';
import { AiOutlineLink } from 'react-icons/ai';
import Button from '../Button';
import OutlineButton from '../Button/OutlineButton';

const InvitationDetails = () => {
  return (
    <div className=''>
      <h2 className='text-xl lg:text-2xl leading-8 mb-3.5 font-semibold'>
        Invitation details
      </h2>
      <div className='inline-flex flex-col gap-20 lg:gap-7 lg:flex-row lg:justify-between lg:items-end'>
        <div className='flex flex-col gap-2.5 pl-5 lg:pl-0'>
          <div className='flex items-center gap-5'>
            <LuCalendarDays size={20} />
            <span className='lg:text-xl'>20/06/2023</span>
          </div>
          <div className='flex items-center gap-5'>
            <BiTimeFive size={24} />
            <span className='lg:text-xl'>3:00pm GMT</span>
          </div>
          <div className='flex items-center gap-5'>
            <AiOutlineLink size={16} />
            <span className='lg:text-xl'>
              https://meet.google.com/ryj-htku-snq
            </span>
            <BiSolidCopy size={20} />
          </div>
        </div>
        <div className='flex justify-between items-center gap-[22px]'>
          <OutlineButton label={'Decline'} />
          <Button
            className={'border border-transparent bg-primary text-white'}
            label={'Accept'}
          />
        </div>
      </div>
    </div>
  );
};

export default InvitationDetails;
