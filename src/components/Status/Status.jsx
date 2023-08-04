const Status = ({ label }) => {
  return (
    <div
      className={`inline-flex p-[15px] py-[2px] text-xs text-center capitalize rounded-[15px] text-white ${
        label === 'Pending' ||
        label === 'Active' ||
        label === 'Open' ||
        label === 'Finished' ||
        label === 'completed'
          ? 'bg-[#7AB9FF] text-[#FFF]'
          : label === 'Closed' ||
            label === 'On-going' ||
            label === 'unpaid' ||
            label === 'Successful'
          ? 'bg-[#D89C51]'
          : label === 'Offered'
          ? 'bg-[#724de41a] text-[#596080]'
          : label === 'Not verified'
          ? 'bg-[#EDDAC1] text-[0.5rem]'
          : label === 'To-start'
          ? 'bg-[#FF543E] text-white'
          : 'bg-[#FF543E] font-bold'
      }`}
    >
      {label}
    </div>
  );
};

export default Status;
