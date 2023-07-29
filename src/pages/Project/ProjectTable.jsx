import React, { useMemo } from 'react';
import Table from '../../components/Table/Table';

const ProjectTable = () => {
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

  return (
    <div>
      <Table header={tableHeader} label='Work History' />
    </div>
  );
};

export default ProjectTable;
