import { useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import PageLoader from '../Loader/PageLoader';
import { useGetUserProfileMutation, useGetDashboardQuery } from '../../features/api/apiSlice';



const UserInfo = () => {
  const { token } = useSelector((store) => store.user);
  const { data: userAmount } = useGetDashboardQuery();
  const { myCashBackBalance = '...' } = userAmount?.data ?? {};
  const amount = `$${myCashBackBalance}`;
  const [getUserProfile, {data, isLoading}] = useGetUserProfileMutation()

  const userProfile = async (e) => {
    await getUserProfile({userToken: token})
  }

  useEffect(()=> {
    userProfile()
  }, [])

  if (isLoading) {
    return <PageLoader />;
  }
  const firstName = data?.data[0]?.firstName
  const lastName = data?.data[0]?.lastName
  const photo = data?.data[0]?.photo
  
  return (
    <div className='flex items-end gap-5'>
      <div className='relative'>
        <div className={`w-[60px] h-[60px]`}>
        {photo ? (
            <img src={photo} alt={firstName} className='rounded-full' />
          ) : (
            <img src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" alt={firstName} className='rounded-full'/>
          )}
        </div>
      </div>
      <div>
        <div className='flex items-center gap-2 font-semibold'>
          <p
            className={`text-left text-lg leading-8 font-semibold text-[#8D8989]`}
          >
            {firstName} {lastName}
          </p>
          <FaChevronDown />
        </div>
        <p
          className={`text-sm
           text-left text-[#8D8989] whitespace-nowrap`}
        >
          Coupon Earnings: {amount}
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
