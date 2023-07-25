import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ label, href, className, onClick }) => {
  const handleClick = () => {
    if (typeof onClick === 'function') {
      onClick();
    }
  };

  return (
    <div>
      <Link
        to={`/${href ? href : ''}`}
        className={`${className} whitespace-nowrap text-sm rounded-lg  text-white px-[30px] py-3.5`}
        // onClick={handleClick}
      >
        {label}
      </Link>
    </div>
  );
};

export default LinkButton;
