import React from 'react';

const AvatarCard = () => {
  return (
    <div className='flex items-end gap-5'>
      <div className='w-[60px] '>
        <img
          src='https://tecdn.b-cdn.net/img/new/avatars/2.webp'
          className='rounded-full'
          alt='Avatar'
        />
      </div>
      <div>
        <p className='text-left text-lg leading-8 font-semibold text-[#575555]'>
          Alli Hussnain
        </p>
        <p className='text-left text-sm font-semibold text-[#8D8989]'>
          Node JS Developer
        </p>
      </div>
    </div>
  );
};

export default AvatarCard;
