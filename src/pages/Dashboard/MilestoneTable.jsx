import React, { useMemo } from 'react';
import Table from '../../components/Table/Table';
import { milestoneProgressList } from '../../mockData';

const MilestoneTable = () => {
  const tableHeader = useMemo(
    () => [
      {
        title: 'Milestone',
        key: 'milestone',
      },
      {
        title: 'Amount',
        key: 'amount',
      },
      {
        title: 'Start',
        key: 'start',
      },
      {
        title: 'End',
        key: 'end',
      },
      {
        title: 'State',
        key: 'state',
      },
      {
        title: 'Payment',
        key: 'payment',
      },
      {
        title: 'Status',
        key: 'status',
      },
    ],
    []
  );
  return (
    <div>
      <Table header={tableHeader} column={milestoneProgressList}/>
    </div>
  );
};

export default MilestoneTable;
