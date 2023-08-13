import React from 'react';

const Button = ({ label, className, onClick, disableButton, isLoading }) => {
  const onClickHandler = (e) => {
    if (typeof onClick === 'function') {
      e.preventDefault();
      onClick();
    }
  };
  return (
    <div>
      <button
        className={`${className} text-sm rounded-lg px-[30px] py-3.5 border border-transparent whitespace-nowrap`}
        onClick={onClickHandler}
        disabled={disableButton}
      >
        {isLoading ? (
          <div className="animate-spin rounded-full border-t-2 border-b-2 border-white h-3 w-3 mx-1"></div>
        ) : (
          label
        )}
      </button>
    </div>
  );
};

export default Button;
