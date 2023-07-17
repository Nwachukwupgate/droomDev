import React from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import SkeletonBox from '../SkeletonBox/SkeletonBox';

const Table = ({ header, column, loader, url, setOpen }) => {
  return (
    <div className='flex flex-col w-full xl'>
      <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='overflow-hidden rounded-xl border border-grey-input border-opacity-40'>
            <SkeletonTheme>
              <table className='min-w-full'>
                <thead className='bg-[#F8F9FF]'>
                  <tr>
                    {header.map((item, index) => (
                      <th
                        key={index}
                        scope='col'
                        className='text-[14px] px-8 font-semibold text-grey-label  py-4 text-left capitalize'
                      >
                        {item?.title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {!loader ? (
                    column?.map((row, i) => (
                      <tr
                        className='bg-white border-t border-t-grey-input border-opacity-20 transition duration-300 ease-in-out hover:bg-gray-100'
                        key={i}
                      >
                        {row.map((item, index) =>
                          url || setOpen ? (
                            <td
                              className={`px-8 py-4 text-sm text-grey-text capitalize max-w-[200px] break-words ${
                                (url || setOpen) && 'cursor-pointer'
                              }`}
                              key={index}
                            >
                              {item?.item ? item?.item : item}
                            </td>
                          ) : (
                            <td
                              className={`px-8 py-4 text-sm text-grey-text capitalize max-w-[200px] break-words`}
                              key={index}
                            >
                              {item}
                            </td>
                          )
                        )}
                      </tr>
                    ))
                  ) : (
                    <SkeletonBox row={header.length} />
                  )}
                </tbody>
              </table>
            </SkeletonTheme>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
