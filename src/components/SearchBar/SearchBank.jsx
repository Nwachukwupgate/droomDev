import React, { useState } from 'react';
import { useField } from 'formik';

const SearchBank = (
    {
        setValue,
        options,
        displayAttribute,
        label,
        placeholder,
        name,
        dependentOptions,
        ...props
      }
) => {
    const [, setSearchWord] = useState('');
  const [open, setOpen] = useState(false);
  const [field, meta, helpers] = useField(name);

  const { touched, error } = meta;

  const handleSearchInput = (value) => {
    setSearchWord(value);
  };
  
  const handleOpenOptions = () => {
    setOpen((current) => !current);
  };

  const handleSelectOptions = (selectedOption) => {
    helpers.setValue(selectedOption);
    setOpen(false);
  };


  return (
    <div className='inline-flex flex-col'>
      <div className='inline-flex flex-col' onClick={handleOpenOptions}>
        <label
          htmlFor='searchWord'
          className='mb-[3px] inline-block dark:text-neutral-200'
        >
          {label || ''}
        </label>
        <input
          name='search'
          type='text'
          placeholder={placeholder}
          {...field}
          onBlur={(e) => {
            handleSearchInput(e.target.value);
            field.onBlur(e);
          }}
          className={`border border-input rounded-md px-[13px] py-3 text-[#575555] outline-0 ${
            touched && error ? 'border-red-500' : ''
          }`}
        />
      </div>
      {touched && error && (
        <div className='text-xs text-red-600 text-left flex gap-1 mt-2 font-normal'>
          {error}
        </div>
      )}
      <div className='relative gap-[13px] bg-white '>
        {dependentOptions?.length !== 0 && open && (
          <div className='mt-2 max-h-52 overflow-y-scroll no-scrollbar border bg-white w-full rounded-md'>
            {dependentOptions?.map((option) => (
              <div
                key={option?.name} // Assuming `name.common` is a unique identifier
                className={`${
                  field?.value === option?.name && 'bg-[#e3e3e3]'
                } py-[8px] px-[21px] gap-1 cursor-pointer flex items-start w-full hover:bg-[#ededed]`}
                onClick={() => handleSelectOptions(option?.code)}
              >
                {option?.name}
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Display dependent options (banks) */}
      {/* {dependentOptions  && (
        <div>
          <label htmlFor='banks'>Select a bank:</label>
          <select
            id='banks'
            name='banks'
            onChange={(e) => setValue(e.target.value)}
            value={dependentOptions}
          >
            <option value=''>Select a bank</option>
            {dependentOptions.map((bank) => (
              <option key={bank.id} value={bank.code}>
                {bank?.name}
              </option>
            ))}
          </select>
        </div>
      )} */}
    </div>
  )
}

export default SearchBank