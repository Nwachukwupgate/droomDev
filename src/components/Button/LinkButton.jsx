import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineAdd } from 'react-icons/md';
import { BsArrowUpRight } from 'react-icons/bs';

const LinkButton = ({ label, href, className, onClick, icon }) => {
  const handleClick = () => {
    if (typeof onClick === 'function') {
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
      <Link
        to={`/${href ? href : ''}`}
        className={`${className} whitespace-nowrap text-sm rounded-lg  text-white px-[30px] py-3.5 inline-flex justify-center items-center gap-2.5`}
        onClick={handleClick}
      >
        {label}
        {renderIcon()}
      </Link>
    </div>
  );
};

export default LinkButton;
