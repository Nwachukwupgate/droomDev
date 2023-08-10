import React, { useMemo } from 'react';
import Table from '../../components/Table/Table';
import Status from '../../components/Status/Status';
import moment from 'moment';


const MilestoneTable = ({projectDetailMilestone}) => {
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

  const mergedData = useMemo(() => {
    return projectDetailMilestone.map((item) => {
      return [
        item?.description.slice(0, 15),
        item?.amountPayable,
        item?.startDate ? moment(item?.startDate).format("YYYY-MM-DD") : null,
        item?.endDate ? moment(item?.endDate).format("YYYY-MM-DD") : null,
        item?.state,
        'Approved',
        <Status label={item?.status} />,
      ];
    });
  }, [projectDetailMilestone]);
  return (
    <div>
      <Table header={tableHeader} column={mergedData}/>
    </div>
  );
};

export default MilestoneTable;
