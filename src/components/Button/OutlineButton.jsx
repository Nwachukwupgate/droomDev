import React from 'react';

const OutlineButton = ({ label, className, onClick }) => {
  return (
    <div>
      <button
        className={`${className} text-sm rounded-lg px-[30px] py-3.5 border border-primary text-primary font-semibold`}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default OutlineButton;
