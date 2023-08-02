import React from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

const ToggleSwitch = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <label className='flex items-center relative w-max cursor-pointer select-none'>
        <input
          type='checkbox'
          className='toggle-switch appearance-none transition-colors cursor-pointer w-[77px] h-8 rounded-full focus:outline-none  bg-[#8D8989] p-5 border border-[8D8989]'
          onClick={() => toggleTheme()}
        />
        <span className='absolute font-medium text-xs uppercase right-2 text-primary tracking-[-0.1em] '>
          Dark
        </span>
        <span className='absolute font-medium text-xs uppercase left-1.5 text-primary tracking-[-0.1em]'>
          Light
        </span>
        <span className='w-8 h-8 right-10 absolute rounded-full transform transition-transform bg-primary' />
      </label>
    </div>
  );
};

export default ToggleSwitch;
