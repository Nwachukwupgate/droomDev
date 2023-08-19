import React, { useState } from 'react';
import CustomSelect from './CustomSelect';
import OutlineButton from '../Button/OutlineButton';
import Button from '../Button';

const SelectTag = ({ options, onSelect }) => {
  const [showEditCard, setShowEditCard] = useState(false);
  const [value, setValue] = useState('');

  const handleSelectedValue = (e) => {
    setValue(e[1]);
  };

  const handleSetValue = () => {
    onSelect(value);
    setShowEditCard(false);
  };

  const editCardHandler = () => {
    setShowEditCard((o) => !o);
  };
  return (
    <div className='mb-2.5 '>
      <div
        className='cursor-pointer gap-2.5 bg-[#B7D3F2] inline-flex py-2.5 px-5 rounded-md mb-2.5 text-primary'
        onClick={editCardHandler}
      >
        <span>React</span>
        <span>+</span>
      </div>
      {/* EDIT CARD */}
      {showEditCard && (
        <div className='px-[18px] py-4 shadow-card border-[0.2px] rounded-lg'>
          <p className='mb-5'>Years of professional experience</p>
          <CustomSelect
            title={'Select years'}
            options={options}
            value={value}
            setValue={handleSelectedValue}
          />
          <div className='flex justify-between mt-5'>
            <OutlineButton label={'Cancel'} />
            <Button
              label={'Save'}
              className={'bg-primary text-white'}
              onClick={handleSetValue}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectTag;
