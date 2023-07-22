import React, { useMemo } from 'react';
import Table from './Table';

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
      <Table header={tableHeader} />
    </div>
  );
};

export default MilestoneTable;
