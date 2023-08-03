const Status = ({ label }) => {
  return (
    <div
      className={`inline-flex p-[15px] py-[2px] text-xs text-center capitalize rounded-[15px] text-white ${
        label === 'successful' ||
        label === 'Active' ||
        label === 'Open' ||
        label === 'Finished' ||
        label === 'completed'
          ? 'bg-[#7AB9FF] text-[#FFF]'
          : label === 'Closed' || label === 'On-going' || label === 'unpaid'
          ? 'bg-[#D89C51]'
          : label === 'Offered'
          ? 'bg-[#724de41a] text-[#596080]'
          : label === 'Pending' || 'Processing'
          ? 'bg-[#FFC043] bg-opacity-10 text-[#FFC043]'
          : label === 'Not verified'
          ? 'bg-[#EDDAC1] text-[0.5rem]'
          : label === 'To-start'
          ? 'bg-[#FF543E]'
          : 'bg-[#FF543E] font-bold'
      }`}
    >
      {label}
    </div>
  );
};

export default Status;
