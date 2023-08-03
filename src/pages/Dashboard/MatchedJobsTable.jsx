import React, { useMemo } from 'react';
import Table from '../../components/Table/Table';
import { tableList } from '../../mockData';
import { useGetMyMatchedJobsQuery } from '../../features/api/apiSlice';
import { Link } from 'react-router-dom';
import Status from '../../components/Status/Status';

const MatchedJobsTable = () => {
  const {data} = useGetMyMatchedJobsQuery()
  const tableHeader = useMemo(
    () => [
      {
        title: 'Client',
        key: 'client',
      },
      {
        title: 'Request',
        key: 'request',
      },
      {
        title: 'Date',
        key: 'date',
      },
      {
        title: 'Status',
        key: 'status',
      },
      {
        title: '',
        key: 'details',
      },
    ],
    []
  );

  const mergedData = useMemo(() => {
    return data?.data?.data?.map((item, index) => {
      const profileImgUrl = item.profileImg ?? 'https://tecdn.b-cdn.net/img/new/avatars/2.webp';
      const apiDataRow = [
        <div className='flex gap-[18px] items-center' key={index}>
          <div className='w-11 h-11'>
            <img src={profileImgUrl} alt='profile' />
          </div>
          <p>{item?.client}</p>
        </div>,
        item?.request,
        item?.date,
        <Status label={item?.status} />,
        <Link
          className='inline-block rounded-md py-[2px] px-3 border border-[#575555] text-[#8D8989]'
          to={`/alloffer/${item?.id}`}
        >
          Details
        </Link>,
      ];

      // Combine the pre-defined JSX elements with the API data for each row
      return tableList[index].map((cell, cellIndex) => {
        // Use the API data cell if available, otherwise use the pre-defined cell
        return apiDataRow[cellIndex] || cell;
      });
    });
  }, [data]);

  return (
    <div>
      <Table header={tableHeader} label='Matched Jobs' column={mergedData} />
    </div>
  );
};

export default MatchedJobsTable;
