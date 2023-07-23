import React from 'react';

const Divider = ({ className }) => {
  return (
    <div>
      <hr
        className={`${
          className && className
        } h-[1px] border-t-0 bg-[rgba(141_137_137/0.83)] opacity-100 dark:opacity-50`}
      />
    </div>
  );
};

export default Divider;
