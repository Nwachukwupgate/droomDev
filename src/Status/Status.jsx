import React from 'react';

const Status = ({ label }) => {
  return (
    <div
      className={`px-2 py-1 text-12px] text-center capitalize rounded-[8px] ${
        label === 'successful' ||
        label === 'Active' ||
        label === 'Open' ||
        label === 'completed'
          ? 'bg-[#05944F] bg-opacity-10 text-[#05944F]'
          : label === 'failed' || label === 'Inactive'
          ? 'bg-[#FCF4F6] text-[#F76659]'
          : label === 'Signed Up'
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
