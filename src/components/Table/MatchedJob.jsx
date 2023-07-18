import React, { useMemo } from 'react';
import Table from './Table';
import { tableList } from '../../mockData/index';

const MatchedJob = () => {
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

export default MatchedJob;
