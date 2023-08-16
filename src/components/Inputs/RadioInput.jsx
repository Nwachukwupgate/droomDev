import React from 'react';

const RadioInput = ({ onSelect }) => {
  const handleChange = (e) => {
    onSelect(e.target.value);
  };

  return (
    <div className='flex flex-col gap-5 mb-9'>
      <div className='flex gap-1.5 items-center'>
        <input
          type='radio'
          id='junior'
          name='level'
          value='junior'
          onChange={handleChange}
        />
        <label htmlFor='junior'>junior 0 - 3 yrs</label>
      </div>
      <div className='flex gap-1.5 items-center'>
        <input
          type='radio'
          id='mid'
          name='level'
          value='mid'
          onChange={handleChange}
        />
        <label htmlFor='mid'>mid 4 - 6 yrs</label>
      </div>
      <div className='flex gap-1.5 items-center'>
        <input
          type='radio'
          id='senior'
          name='level'
          value='senior'
          onChange={handleChange}
        />
        <label htmlFor='senior'>senior 7+ yrs</label>
      </div>
    </div>
  );
};

export default RadioInput;
