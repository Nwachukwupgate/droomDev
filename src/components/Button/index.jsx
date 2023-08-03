import React from 'react';

const Button = ({ label, className, onClick }) => {
  const onClickHandler = () => {
    if (typeof onClick === 'function') {
      onClick();
    }
  };
  return (
    <div>
      <button
        className={`${className} text-sm rounded-lg px-[30px] py-3.5 border border-transparent whitespace-nowrap`}
        onClick={onClickHandler}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
