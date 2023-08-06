import { Link } from 'react-router-dom';
import Status from '../components/Status/Status';
import { IoEllipseSharp } from 'react-icons/io5';

export const tableList = [
  [
    <div className='flex gap-[18px] items-center'>
      <div className='relative w-11 h-11'>
        <img
          src='https://tecdn.b-cdn.net/img/new/avatars/2.webp'
          alt='profile'
          className='rounded-md'
        />
        <div className='absolute -right-1 bottom-1'>
          <IoEllipseSharp fill='#1FAF2D' color='#1FAF2D' size={10} />
        </div>
      </div>
      <p>{'Lopez Lawrence'}</p>
    </div>,
    'Node JS Developer',
    'Feb 19th 2023',
    <Status label='Open' />,
    <Link
      className='inline-block rounded-md py-[2px] px-3 border border-[#575555] text-[#8D8989]'
      to='/alloffer/:1'
    >
      Details
    </Link>,
  ],
  [
    <div className='flex gap-[18px] items-center'>
      <div className='relative w-11 h-11'>
        <img
          src='https://tecdn.b-cdn.net/img/new/avatars/2.webp'
          alt='profile'
          className='rounded-md'
        />
        <div className='absolute -right-1 bottom-1'>
          <IoEllipseSharp fill='#1FAF2D' color='#1FAF2D' size={10} />
        </div>
      </div>
      <p>{'Lopez Lawrence'}</p>
    </div>,
    'Node JS Developer',
    'Feb 19th 2023',
    <Status label='Closed' />,
    <Link
      className='inline-block rounded-md py-[2px] px-3 border border-[#575555] text-[#8D8989]'
      to='/alloffer/:1'
    >
      Details
    </Link>,
  ],
  [
    <div className='flex gap-[18px] items-center'>
      <div className='relative w-11 h-11'>
        <img
          src='https://tecdn.b-cdn.net/img/new/avatars/2.webp'
          alt='profile'
          className='rounded-md'
        />
        <div className='absolute -right-1 bottom-1'>
          <IoEllipseSharp fill='#1FAF2D' color='#1FAF2D' size={10} />
        </div>
      </div>
      <p>{'Lopez Lawrence'}</p>
    </div>,
    'Node JS Developer',
    'Feb 19th 2023',
    <Status label='Offered' />,
    <Link
      className='inline-block rounded-md py-[2px] px-3 border border-[#575555] text-[#8D8989]'
      to='/alloffer/:1'
    >
      Details
    </Link>,
  ],
];

export const milestoneProgressList = [
  [
    'LoFi Wireframes',
    '100',
    '19-02-23',
    '19-02-23',
    'Open',
    'Approved',
    <Status label='unpaid' />,
  ],
  [
    'HiFi Wireframes',
    '100',
    '19-02-23',
    '19-02-23',
    'Open',
    'Approved',
    <Status label='unpaid' />,
  ],
  [
    'Mockups',
    '100',
    '19-02-23',
    '19-02-23',
    'Open',
    'Approved',
    <Status label='unpaid' />,
  ],
  [
    'Prototyping',
    '100',
    '19-02-23',
    '19-02-23',
    'Open',
    'Approved',
    <Status label='unpaid' />,
  ],
];
export const projectList = [
  [
    'Lopez Lawrence',
    'Node JS Developer',
    'Feb 19, 2023',
    <Status label='To-start' />,
    <Link
      className='inline-block rounded-md py-[2px] px-3 border border-[#575555] text-[#8D8989]'
      to='/alloffer/:1'
    >
      Details
    </Link>,
  ],
  [
    'Lopez Lawrence',
    'Node JS Developer',
    'Feb 19, 2023',
    <Status label='On-going' />,
    <Link
      className='inline-block rounded-md py-[2px] px-3 border border-[#575555] text-[#8D8989]'
      to='/alloffer/:1'
    >
      Details
    </Link>,
  ],
  [
    'Lopez Lawrence',
    'Node JS Developer',
    'Feb 19, 2023',
    <Status label='On-going' />,
    <Link
      className='inline-block rounded-md py-[2px] px-3 border border-[#575555] text-[#8D8989]'
      to='/alloffer/:1'
    >
      Details
    </Link>,
  ],
  [
    'Lopez Lawrence',
    'Node JS Developer',
    'Feb 19, 2023',
    <Status label='Finished' />,
    <Link
      className='inline-block rounded-md py-[2px] px-3 border border-[#575555] text-[#8D8989]'
      to='/alloffer/:1'
    >
      Details
    </Link>,
  ],
  [
    'Lopez Lawrence',
    'Node JS Developer',
    'Feb 19, 2023',
    <Status label='Finished' />,
    <Link
      className='inline-block rounded-md py-[2px] px-3 border border-[#575555] text-[#8D8989]'
      to='/alloffer/:1'
    >
      Details
    </Link>,
  ],
];

export const workHistoryList = [
  [
    'Lopez Lawrence',
    'Node JS Developer',
    'Feb 19, 2023',
    <Status label='To-start' />,
    <Link
      className='inline-block rounded-md py-[2px] px-3 border border-[#575555] text-[#8D8989]'
      to='/project/:1'
    >
      Details
    </Link>,
  ],
  [
    'Lopez Lawrence',
    'Node JS Developer',
    'Feb 19, 2023',
    <Status label='On-going' />,
    <Link
      className='inline-block rounded-md py-[2px] px-3 border border-[#575555] text-[#8D8989]'
      to='/project/:1'
    >
      Details
    </Link>,
  ],
  [
    'Lopez Lawrence',
    'Node JS Developer',
    'Feb 19, 2023',
    <Status label='On-going' />,
    <Link
      className='inline-block rounded-md py-[2px] px-3 border border-[#575555] text-[#8D8989]'
      to='/project/:1'
    >
      Details
    </Link>,
  ],
  [
    'Lopez Lawrence',
    'Node JS Developer',
    'Feb 19, 2023',
    <Status label='Finished' />,
    <Link
      className='inline-block rounded-md py-[2px] px-3 border border-[#575555] text-[#8D8989]'
      to='/project/:1'
    >
      Details
    </Link>,
  ],
  [
    'Lopez Lawrence',
    'Node JS Developer',
    'Feb 19, 2023',
    <Status label='Finished' />,
    <Link
      className='inline-block rounded-md py-[2px] px-3 border border-[#575555] text-[#8D8989]'
      to='/project/:1'
    >
      Details
    </Link>,
  ],
];

export const recentTransactionList = [
  ['Withdrawal', '100', 'Feb 19, 2023', <Status label='Pending' />],
  ['Withdrawal', '100', 'Feb 19, 2023', <Status label='Successful' />],
  ['Withdrawal', '100', 'Feb 19, 2023', <Status label='Successful' />],
  ['Withdrawal', '100', 'Feb 19, 2023', <Status label='Successful' />],
  ['Withdrawal', '100', 'Feb 19, 2023', <Status label='Successful' />],
];
