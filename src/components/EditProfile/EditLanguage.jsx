import React, { useCallback, useState } from 'react';
import Heading from './Heading';
import SelectTag from '../CustomSelect/SelectTag';
import OutlineButton from '../Button/OutlineButton';
import Button from '../Button';

const languages = [
  'Javascript',
  'HTML',
  'CSS',
  'Typescript',
  'Python',
  'Golang',
];

const yearsOfExperience = [
  { key: '0', value: 'Less than a year' },
  { key: '1', value: '1 - 3 years' },
  { key: '2', value: '3 - 7 years' },
  { key: '3', value: '7+ years' },
];

const EditLanguage = ({
  disabled,
  actionLabel,
  secondaryActionLabel,
  secondaryAction,
  onSubmit,
}) => {
  const [value, setValue] = useState([]);

  const handleSelect = (data) => {
    setValue((current) => [...current, data]);
  };

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit(value);
  }, [onSubmit, disabled, value]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [secondaryAction, disabled]);

  return (
    <div>
      <div className='flex flex-col gap-8'>
        <Heading
          title='Select Language'
          subtitle='Choose the language that you work with'
        />
        <div>
          <SelectTag options={yearsOfExperience} onSelect={handleSelect} />
        </div>
      </div>
      <div className='flex justify-between lg:justify-end lg:gap-6 items-center w-full pb-20'>
        <OutlineButton
          label={secondaryActionLabel}
          className={'border border-primary text-primary'}
          onClick={handleSecondaryAction}
        />
        <Button
          label={actionLabel}
          className={'bg-primary text-white border border-transparent'}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default EditLanguage;
