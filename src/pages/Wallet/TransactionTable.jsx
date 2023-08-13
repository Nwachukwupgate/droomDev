import React, { useMemo } from 'react';
import Table from '../../components/Table/Table';
import { useGetAllMyTransactionsQuery } from '../../features/api/apiSlice';
import moment from 'moment';
import Status from '../../components/Status/Status';

const TransactionTable = () => {
  const {data} = useGetAllMyTransactionsQuery()

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

  const mergedData = useMemo(() => {
    return data?.data?.data?.map((item) => {
      return [
        item?.gateway,
        item?.amount,
        item?.trxHistoryProjectDetail?.startDate ? moment(item?.trxHistoryProjectDetail?.startDate).format("YYYY-MM-DD") : null,
        <Status label={item?.status} />,
      ];
    });
  }, [data]);

  return (
    <div>
      <Table
        header={tableHeader}
        label='Recent Transaction'
        column={mergedData}
      />
    </div>
  );
};

export default TransactionTable;
