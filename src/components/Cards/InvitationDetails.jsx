import { LuCalendarDays } from 'react-icon/lu';
import { BiSolidCopy, BiTimeFive } from 'react-icon/bi';
import { AiOutlineLink } from 'react-icon/ai';
import Button from '../Button';

const InvitationDetails = () => {
  return (
    <div>
      <h2 className='text-xl lg:text-2xl leading-8 mb-3.5'>
        Invitation details
      </h2>
      <div className='flex flex-col gap-7 lg:flex-row lg:justify-between lg:items-end'>
        <div className='flex flex-col gap-2.5'>
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
        <div className='flex items-center gap-[22px]'>
          <Button className={'border border-primary'} label={'Decline'} />
          <Button
            className={'border border-transparent bg-primary'}
            label={'Accept'}
          />
        </div>
      </div>
    </div>
  );
};

export default InvitationDetails;
