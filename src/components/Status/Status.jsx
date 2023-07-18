import React from 'react';

const Status = ({ label }) => {
  return (
    <div
      className={`inline-flex p-[15px] py-[2px] text-12px] text-center capitalize rounded-[15px] text-white ${
        label === 'successful' ||
        label === 'Active' ||
        label === 'Open' ||
        label === 'completed'
          ? 'bg-[#7AB9FF] text-[#FFF]'
          : label === 'Closed' || label === 'Inactive'
          ? 'bg-[#001935]'
          : label === 'Offered'
          ? 'bg-[#724de41a] text-[#596080]'
          : label === 'Pending' || 'Processing'
          ? 'bg-[#FFC043] bg-opacity-10 text-[#FFC043]'
          : 'bg-[#05944F] bg-opacity-10 text-[#05944F] font-bold'
      }`}
    >
      {label}
    </div>
  );
};

export default Status;
