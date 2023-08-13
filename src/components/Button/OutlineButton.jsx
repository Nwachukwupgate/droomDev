import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const OutlineButton = ({ label, className, onClick, isLoading }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <button
        className={`${className} ${
              theme === 'dark' ? 'border-white text-white ' : 'border-primary text-primary '
            } text-sm rounded-lg px-[30px] py-3.5 border font-semibold`}
        onClick={onClick}
      >
        {isLoading ? (
          <div className="animate-spin rounded-full border-t-2 border-b-2 border-primary h-3 w-3 mx-1"></div>
        ) : (
          label
        )}
      </button>
    </div>
  );
};

export default OutlineButton;
