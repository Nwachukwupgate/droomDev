import React from 'react';

const ToggleSwitch = () => {
  return (
    <div>
      <label class='flex items-center relative w-max cursor-pointer select-none'>
        <input
          type='checkbox'
          class='toggle-switch appearance-none transition-colors cursor-pointer w-[88px] h-11 rounded-full focus:outline-none  focus:ring-[#8D8989] bg-[#8D8989] p-5'
        />
        <span class='absolute font-medium text-xs uppercase right-2 text-primary'>
          Dark
        </span>
        <span class='absolute font-medium text-xs uppercase left-2 text-primary'>
          Light
        </span>
        <span class='w-11 h-11 right-12 absolute rounded-full transform transition-transform bg-primary' />
      </label>
    </div>
  );
};

export default ToggleSwitch;
