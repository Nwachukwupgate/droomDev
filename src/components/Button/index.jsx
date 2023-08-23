import React from 'react';
import { MdOutlineAdd } from 'react-icons/md';
import { BsArrowUpRight } from 'react-icons/bs';

const Button = ({ label, className, onClick, disableButton, isLoading, type, icon  }) => {

  const onClickHandler = (e) => {
    if (typeof onClick === 'function') {
      e.preventDefault();
      onClick();
    }
  };

  const renderIcon = () => {
    if (icon === 'add') {
      return <MdOutlineAdd color='white' fill='white' />;
    } else if (icon === 'arrow-upright') {
      return <BsArrowUpRight color='white' fill='white' />;
    }
    // Add more conditions for other icons if needed
    return null;
  };

  return (
    <div>
      <button
        type={type}
        className={`${className} text-sm rounded-lg px-[30px] py-3.5 border border-transparent whitespace-nowrap`}
        onClick={onClickHandler}
        disabled={disableButton}
      >
        {isLoading ? (
          <div className="animate-spin rounded-full border-t-2 border-b-2 border-white h-3 w-3 mx-1"></div>
        ) : (
          <>
            {label}
            {renderIcon()}
          </>
        )}      
      </button>
    </div>
  );
};

export default Button;
