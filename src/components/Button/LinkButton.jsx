import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ label, href, className, onClick }) => {
  return (
    <div>
      <Link
        to={`/${href}`}
        className={`${className} text-sm rounded-lg  text-white px-[30px] py-3.5`}
        onClick={onClick()}
      >
        {label}
      </Link>
    </div>
  );
};

export default LinkButton;
