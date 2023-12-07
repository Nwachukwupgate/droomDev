import { useEffect } from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import Status from '../Status/Status';
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { useGetUserProfileMutation } from '../../features/api/apiSlice';
import { useSelector } from 'react-redux';
import PageLoader from '../Loader/PageLoader';

const AvatarCard = ({ bigSize, verified, showStatus }) => {
  const { token } = useSelector((store) => store.user);
  const { theme } = useContext(ThemeContext);
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
  const role = data?.data[0]?.role
  const photo = data?.data[0]?.photo

 
  return (
    <div className='flex items-end gap-5'>
      <div className='relative'>
        <div
          className={`${
            bigSize
              ? 'w-[60px] h-[60px] lg:w-[138px] lg:h-[138px]'
              : 'w-[60px] h-[60px]'
          }`}
        >
          {photo ? (
            <img src={photo} alt={firstName} className='rounded-full' />
          ) : (
            <img src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" alt={firstName} className='rounded-full'/>
          )}
        </div>
        {verified && (
          <BsFillPatchCheckFill
            className='absolute right-1 top-[80%]'
            size={bigSize ? 20 : 16}
            color='#F58800'
          />
        )}
      </div>
      <div>
        <p
          className={`text-left ${
            bigSize ? 'lg:text-[1.75rem] text-lg' : 'text-lg'
          } leading-8 font-semibold ${
            theme === 'dark' ? 'text-white' : 'text-[#001935]'
          }`}
        >
          {firstName} {lastName}
        </p>
        <p
          className={`${
            bigSize ? 'lg:text-xl text-sm' : 'text-sm'
          } text-left font-semibold text-[#8D8989] whitespace-nowrap`}
        >
          {role}
        </p>
        {!verified && <Status label={'Not verified'} />}
      </div>
    </div>
  );
};

export default AvatarCard;
