import React, { useMemo } from 'react';
import Table from '../../components/Table/Table';

const TransactionTable = () => {
  const tableHeader = useMemo(
    () => [
      {
        title: 'Type',
        key: 'type',
      },
      {
        title: 'Amount',
        key: 'amount',
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
      <Table header={tableHeader} label='Recent Transaction' />
    </div>
  );
};

export default TransactionTable;
