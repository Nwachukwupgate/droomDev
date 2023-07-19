import moment from 'moment';
import React, { useCallback, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Icon } from '../../Icons';
import LoadingSpinner from '../../Loader/LoadingSpinner';
import Announcement from '../Announcement/Announcement';
import Header from './Header';

const Notification = ({ close, data, announcement }) => {
  const [skip, setSkip] = React.useState(true);
  const [tab, toggleTab] = React.useState(true);
  const [id, setId] = React.useState(null);
  const { isFetching, isSuccess } = useMarkReadQuery(id, { skip });

  const handleMarkRead = useCallback((id) => {
    setId(id);
    setSkip(false);
  }, []);

  useEffect(() => {
    if (isSuccess) {
      setSkip(true);
      toast.success('Notification marked as read');
    }
  }, [isSuccess]);

  return (
    <div className='text-grey-text md:w-[30vw] overflow-y-scroll scrollbar-hide max-h-[80vh]'>
      <Header tab={tab} toggleTab={toggleTab} close={close} />
      <hr className='border-b border-b-[#eeeeee] w-full' />
      {isFetching ? (
        <LoadingSpinner />
      ) : tab ? (
        <>
          {data?.data.map((item, index) => (
            <div
              className='border border-b-grey-input rounded-xl mx-[26px] p-[20px] my-[21px]'
              key={index}
            >
              <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                  <div className='rounded-full flex items-center justify-center uppercase bg-[#F8F9FF] h-9 w-9  text-[#596080]'>
                    {item?.name?.split(' ').map((item) => item[0])}
                  </div>
                  <p className='text-[12px] font-semibold text-grey-label'>
                    {item?.name}
                  </p>
                </div>
                {!item?.read && (
                  <div className='flex gap-5'>
                    <p
                      className='text-[#758089] text-[12px] cursor-pointer hover:text-primary'
                      onClick={() => handleMarkRead(item?.id)}
                    >
                      Mark as read{' '}
                    </p>
                    <div className='rounded-full flex items-center justify-center  bg-red-text h-[6px] w-[6px]'></div>
                  </div>
                )}
              </div>
              <p className='pl-[46px] pr-[19px] flex mt-[6px] flex-col'>
                {item?.message}
                <span className='mt-2.5'>
                  {moment(item?.created_at).format('DD.MM.YYYY hh:mma')}
                </span>
              </p>
            </div>
          ))}
          <div className='text-grey-label w-[200px] mx-auto mb-1 flex items-center justify-center gap-[13px] rounded-[60px] border bg-white border-grey-label px-[13px] py-3'>
            Scroll to see more <Icon width='9' height='12' id={'arrow-down'} />
          </div>
        </>
      ) : (
        <Announcement data={[announcement?.data]} />
      )}
    </div>
  );
};

export default Notification;
