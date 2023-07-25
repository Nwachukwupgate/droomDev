import Divider from '../Divider';
import ControlledModal from '../Modal/ControlledModal';

const Notification = ({ onOpen }) => {
  return (
    <ControlledModal open={onOpen}>
      <div className='w-[320px] sm:w-[390px] lg:w-[530px] h-screen px-4 lg:px-6 pt-8 pb-20'>
        <div className='justify-between flex'>
          <h2 className='text-xl lg:text-2xl'>Notifcations</h2>
          <p>Mark all as read</p>
        </div>
        <Divider className={'mt-[26px] mb-8'} />
        <div>
          {/* Notification Card */}
          <div>
            <div className='flex gap-[4.5px] md:gap-2.5'>
              <div className='w-[50px] h-[50px]'>
                <img
                  src='https://tecdn.b-cdn.net/img/new/avatars/2.webp'
                  className=''
                  alt='Avatar'
                />
              </div>
              <div>
                <p className='font-semibold'>New job match</p>
                <p className='text-sm'>1 hour ago</p>
              </div>
            </div>
            <Divider className={'my-3'} />
          </div>
        </div>
      </div>
    </ControlledModal>
  );
};

export default Notification;
