import { BsFillPatchCheckFill } from 'react-icons/bs';
import Status from '../Status/Status';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const AvatarCard = ({ bigSize, verified, showStatus }) => {
  const { theme } = useContext(ThemeContext);

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
          <img
            src='https://tecdn.b-cdn.net/img/new/avatars/2.webp'
            className='rounded-full'
            alt='Avatar'
          />
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
          } leading-8 font-semibold ${theme==='dark'? 'text-white' : 'text-[#001935]'}`}
        >
          Alli Hussnain
        </p>
        <p
          className={`${
            bigSize ? 'lg:text-xl text-sm' : 'text-sm'
          } text-left font-semibold text-[#8D8989] whitespace-nowrap`}
        >
          Node JS Developer
        </p>
        {!verified && <Status label={'Not verified'} />}
      </div>
    </div>
  );
};

export default AvatarCard;
