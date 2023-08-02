import { FaChevronDown } from 'react-icons/fa';

const UserInfo = () => {
  return (
    <div className='flex items-end gap-5'>
      <div className='relative'>
        <div className={`w-[60px] h-[60px]`}>
          <img
            src='https://tecdn.b-cdn.net/img/new/avatars/2.webp'
            className='rounded-full'
            alt='Avatar'
          />
        </div>
      </div>
      <div>
        <div className='flex items-center gap-2 font-semibold'>
          <p
            className={`text-left text-lg leading-8 font-semibold text-[#8D8989]`}
          >
            Alli Hussnain
          </p>
          <FaChevronDown />
        </div>
        <p
          className={`text-sm
           text-left text-[#8D8989] whitespace-nowrap`}
        >
          Coupon Earnings: $23
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
