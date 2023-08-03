import React from 'react';

const RadioInput = () => {
  return (
    <div className='flex flex-col gap-5 mb-9'>
      <div className='flex gap-1.5 items-center'>
        <input type='radio' id='junior' name='level' value='junior' />
        <label htmlFor='junior'>junior 0 - 3 yrs</label>
      </div>
      <div className='flex gap-1.5 items-center'>
        <input type='radio' id='mid' name='level' value='mid' />
        <label htmlFor='mid'>mid 4 - 6 yrs</label>
      </div>
      <div className='flex gap-1.5 items-center'>
        <input type='radio' id='senior' name='level' value='senior' />
        <label htmlFor='senior'>senior 7+ yrs</label>
      </div>
    </div>
  );
};

export default RadioInput;
