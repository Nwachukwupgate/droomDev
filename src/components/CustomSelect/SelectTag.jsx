import React, { useState } from 'react';
import CustomSelect from './CustomSelect';
import OutlineButton from '../Button/OutlineButton';
import Button from '../Button';

const stacks = [
  { key: 'react', value: 'React' },
  { key: 'vue', value: 'Vue' },
  { key: 'django', value: 'Django' },
  { key: 'flask', value: 'Flask' },
  { key: 'angular', value: 'Angular' },
];

const yearsOfExperience = [
  { key: '0', value: 'Less than a year' },
  { key: '1', value: '1 - 3 years' },
  { key: 'django', value: '3 - 7 years' },
  { key: 'flask', value: '7+ years' },
];

const SelectTag = () => {
  const [showEditCard, setShowEditCard] = useState(false);

  const editCardHandler = () => {
    setShowEditCard((o) => !o);
  };
  return (
    <div className='mb-2.5 '>
      <div
        className='cursor-pointer gap-2.5 bg-[#d7b1eb] inline-flex py-2.5 px-5 rounded-md mb-2.5'
        onClick={editCardHandler}
      >
        <span>React</span>
        <span>+</span>
      </div>
      {/* EDIT CARD */}
      {showEditCard && (
        <div className='px-[18px] py-4 shadow-card border-[0.2px] rounded-lg'>
          <p className='mb-5'>Years of professional experience</p>
          <CustomSelect title={'Select years'} options={yearsOfExperience} />
          <div className='flex justify-between mt-5'>
            <OutlineButton label={'Cancel'} />
            <Button label={'Save'} className={'bg-primary text-white'} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectTag;
