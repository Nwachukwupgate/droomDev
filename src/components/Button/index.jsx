import React from 'react';

const Button = ({ label, className, onClick, type }) => {
  const onClickHandler = (e) => {
    if (typeof onClick === 'function') {
      e.preventDefault();
      onClick();
    }
  };
  return (
    <div>
      <button
        type={type}
        className={`${className} text-sm rounded-lg px-[30px] py-3.5 border border-transparent whitespace-nowrap`}
        onClick={onClickHandler}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
