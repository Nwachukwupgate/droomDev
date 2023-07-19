import React from 'react';

const Button = ({ label, className, onClick }) => {
  return (
    <div>
      <button
        className={`${className} text-sm rounded-lg  text-white px-[30px] py-3.5`}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
