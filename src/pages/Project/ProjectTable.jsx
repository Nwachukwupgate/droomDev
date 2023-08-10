import React, { useMemo } from 'react';
import Table from '../../components/Table/Table';
import moment from 'moment';
import { projectList } from '../../mockData';
import { Link } from 'react-router-dom';
import Status from '../../components/Status/Status';
import { useGetMyWorkHistoryQuery } from '../../features/api/apiSlice';

const ProjectTable = () => {
  const {data} = useGetMyWorkHistoryQuery()
  const tableHeader = useMemo(
    () => [
      {
        title: 'Client',
        key: 'client',
      },
      {
        title: 'Project',
        key: 'project',
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
    return data?.data?.data?.map((item) => {
      return [
        item?.projectDetailJobDetail?.companyName,
        item?.projectDetailJobDetail?.jobTitle,
        item?.startDate ? moment(item?.startDate).format("YYYY-MM-DD") : null,
        <Status label={item?.status} key={item.id}/>,
        <Link
          className='inline-block rounded-md py-[2px] px-3 border border-[#575555] text-[#8D8989]'
          to={`/alloffer/${item?.id}`}
        >
          Details
        </Link>,
      ];
    });
  }, [data]);

  return (
    <div>
      <Table header={tableHeader} label='Work History' column={mergedData} />
    </div>
  );
};

export default ProjectTable;
