import React from 'react';

const InputBox = ({ label, type, name, id, placeholder }) => {
  return (
    <div className='inline-flex flex-col'>
      <label
        htmlFor='formFile'
        className='mb-[3px] inline-block  dark:text-neutral-200'
      >
        {label || ''}
      </label>
      <input
        className='border border-input rounded-md px-[13px] py-3'
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputBox;
