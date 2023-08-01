import { Link } from 'react-router-dom';
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
    <Link className='inline-block rounded-md py-[2px] px-3 border border-[#575555] text-[#8D8989]' to='/alloffer/:1'>
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
