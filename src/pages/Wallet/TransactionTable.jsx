import React, { useMemo } from 'react';
import Table from '../../components/Table/Table';
import { recentTransactionList } from '../../mockData';

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
    ],
    []
  );
  return (
    <div>
      <Table
        header={tableHeader}
        label='Recent Transaction'
        column={recentTransactionList}
      />
    </div>
  );
};

export default TransactionTable;
