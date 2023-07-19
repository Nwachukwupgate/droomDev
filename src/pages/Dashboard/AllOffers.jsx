import React, { useMemo } from 'react';
import Layout from '../../Layout/Layout';
import Table from './Table';
import { tableList } from '../../mockData/index';

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
      <Layout>
        <>
          <h1 className='text-primary mb-[85px]'>All Offers</h1>

          <Table header={tableHeader} label='Matched Jobs' column={tableList} />
        </>
      </Layout>
    </div>
  );
};

export default AllOffers;
