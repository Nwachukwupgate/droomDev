import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const OutlineButton = ({ label, className, onClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <button
        className={`${className} ${
              theme === 'dark' ? 'border-white text-white ' : 'border-primary text-primary '
            } text-sm rounded-lg px-[30px] py-3.5 border font-semibold`}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default OutlineButton;
