import React from 'react';

const Button = ({ label, className, onClick }) => {
  return (
    <div>
      <button
        className={`${className} text-sm rounded-lg px-[30px] py-3.5 border border-transparent whitespace-nowrap`}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
