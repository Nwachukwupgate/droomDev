import Status from '../components/Status/Status';

export const tableList = [
  [
    <div className='flex gap-[18px] items-center'>
      <div className='w-11 h-11'>
        <img
          src='https://tecdn.b-cdn.net/img/new/avatars/2.webp'
          alt='profile'
        />
      </div>
      <p>{'Lopez Lawrence'}</p>
    </div>,
    'Node JS Developer',
    'Feb 19th 2023',
    <Status label='Open' />,
    <button className='inline-block rounded-md py-[2px] px-3 border border-[#575555] text-[#8D8989]'>
      Details
    </button>,
  ],
];
