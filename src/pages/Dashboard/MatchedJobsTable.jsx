import React, { useMemo } from 'react';
import Table from '../../components/Table/Table';
import { tableList } from '../../mockData';

const MatchedJobsTable = () => {
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

  return (
    <div>
      <Table header={tableHeader} label='Matched Jobs' column={tableList} />
    </div>
  );
};

export default MatchedJobsTable;
