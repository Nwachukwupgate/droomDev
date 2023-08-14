import React from 'react';
import Select from 'react-select';

const SelectOptions = ({
  value,
  onChange,
  options,
  label,
  placeholder,
  id,
}) => {
  const styles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: (state.isFocused || state.hover) && '',
      outlineColor: (state.isFocused || state.hover) && '',
      padding: '12px',
    }),
    input: (baseStyles, state) => ({
      ...baseStyles,
      margin: '0px',
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      color: '#575555',
      outline: 0,
      borderColor: 'transparent',
    }),
    placeholder: (baseStyles, state) => ({
      ...baseStyles,
      color: '#999',
    }),
  };

  return (
    <div className='inline-flex flex-col'>
      <div className='mb-[3px] inline-block  dark:text-neutral-200'>
        {label}
      </div>
      <Select
        placeholder={placeholder}
        isClearable
        options={options}
        value={value}
        onChange={(value) => onChange(value)}
        classNames={{
          // control: () => 'p-3 border-2',
          input: () => 'text-lg m-0',
          option: () => 'text-lg',
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          border: 0,
          colors: {
            ...theme.colors,
            primary: '#e3e3e3',
            primary25: '#ededed',
          },
        })}
        styles={styles}
      />
    </div>
  );
};
export default SelectOptions;
