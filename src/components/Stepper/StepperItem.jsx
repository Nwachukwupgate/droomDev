import React, { useContext } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { ThemeContext } from '../../context/ThemeContext';

const StepperItem = ({ step, index, label }) => {
  const { theme } = useContext(ThemeContext);
  const isActive = step >= index;
  const isCurrentThemeLight = theme === 'light';

  return (
    <div className='flex items-center relative'>
      <div
        className={`${
          isActive
            ? 'bg-[#F58800] text-white border-transparent'
            : 'text-[#B7B3B3]'
        } flex items-center justify-center rounded-full transition duration-500 ease-in-out h-12 w-12 border-2 border-[#B7B3B3]`}
      >
        {isActive ? <AiOutlineCheck /> : index + 1}
      </div>
      <div
        className={`${
          isActive && isCurrentThemeLight
            ? 'text-primary'
            : isActive && !isCurrentThemeLight
            ? 'text-secondary'
            : 'text-[#B7B3B3]'
        } text-xs sm:text-base absolute top-0 -ml-10 text-center mt-16 w-[108px] font-semibold uppercase tracking-tighter`}
      >
        {label}
      </div>
    </div>
  );
};

export default StepperItem;
