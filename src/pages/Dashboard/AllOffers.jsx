import React, { useMemo } from 'react';
import { tableList } from '../../mockData/index';
import Table from '../../components/Table/Table';

const AllOffers = () => {
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
      <div>
        <h1 className='text-xl font-extrabold leading-8 mb-[85px] md:mb-6 text-left'>
          All Offers
        </h1>

        <Table header={tableHeader} column={tableList} />
      </div>
    </div>
  );
};

export default AllOffers;
