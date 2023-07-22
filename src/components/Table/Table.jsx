import React from 'react';
// import { SkeletonTheme } from 'react-loading-skeleton';
// import SkeletonBox from '../SkeletonBox/SkeletonBox';

const Table = ({ header, column, loader, url, label }) => {
  console.log(column);
  console.log(header);
  return (
    <div className='rounded-[25px] border border-[rgba(141, 137, 137, 0.50] p-4 lg:p-8'>
      {/* HEADING */}
      {label && (
        <div className='pb-6 border-b border-[#8d8989] border-opacity-80'>
          <h2 className='text-2xl font-extrabold text-primary text-left'>
            {label}
          </h2>
        </div>
      )}

      <div className='flex flex-col'>
        <div className='overflow-x-auto'>
          <div className='inline-block min-w-full'>
            <div className='overflow-hidden'>
              <table className=' min-w-full text-left text-sm font-light'>
                <thead className=' font-medium border-b-[0.5px] border-[#8d8989] border-opacity-80'>
                  <tr className=''>
                    {header?.map(({ title, key }) => (
                      <th
                        scope='col'
                        className='pt-6 pb-3 font-semibold'
                        key={key}
                      >
                        {title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {column?.map((row, i) => (
                    <tr
                      className='transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600 border-b-[0.5px] border-[#8d8989] border-opacity-80'
                      key={i}
                    >
                      {row?.map((item, index) => (
                        <td className='whitespace-nowrap py-3 pr-4' key={index}>
                          {item}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* LARGE SCREEN TABLE */}
              {/* <table className='hidden md:block min-w-full text-left text-sm font-light'>
                <thead className=' font-medium border-b-[0.5px] border-[#8d8989] border-opacity-80'>
                  <tr className=''>
                    {largeHeader?.map(({ title, key }) => (
                      <th scope='col' className='pt-6 pb-3' key={key}>
                        {title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {largeColumn.map((row, i) => (
                    <tr className='transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600 border-b-[0.5px] border-[#8d8989] border-opacity-80'>
                      {row.map((item, index) => (
                        <td className='whitespace-nowrap py-3 '>{item}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
