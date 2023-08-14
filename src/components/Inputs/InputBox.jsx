import { ErrorMessage, Field } from 'formik';
import React from 'react';

const InputBox = ({
  label,
  type,
  name,
  id,
  placeholder,
  value,
  setFieldTouched,
  handleSubmit,
  isValid,
}) => {
  return (
    <div className='inline-flex flex-col'>
      <label
        htmlFor={id}
        className='mb-[3px] inline-block  dark:text-neutral-200'
      >
        {label || ''}
      </label>
      <Field
        className='border border-input rounded-md px-[13px] py-3 outline-0'
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value || ''}
        onKeyUp={(e) => {
          setFieldTouched(name, true);
          e.key === 'Enter' && handleSubmit();
        }}
      />
      <ErrorMessage
        name={name}
        render={(msg) => (
          <div className='text-[12px] text-red-600 text-left flex gap-1 mt-2 font-normal'>
            {/* <Icon id="danger-icon" width="16" height="13" /> */}
            {msg}
          </div>
        )}
      />{' '}
    </div>
  );
};

export default InputBox;
