import React, { useCallback, useState } from 'react';
import Heading from './Heading';
import SelectTag from '../CustomSelect/SelectTag';
import OutlineButton from '../Button/OutlineButton';
import Button from '../Button';

const framework = [
  { key: 'react', value: 'React' },
  { key: 'vue', value: 'Vue' },
  { key: 'django', value: 'Django' },
  { key: 'flask', value: 'Flask' },
  { key: 'angular', value: 'Angular' },
];

const EditFramework = ({
  disabled,
  actionLabel,
  secondaryActionLabel,
  secondaryAction,
  onSubmit,
}) => {
  const [value, setValue] = useState([]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit(value);
  }, [onSubmit, disabled, value]);

  const handleSelect = (data) => {
    setValue((current) => [...current, data]);
  };

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [secondaryAction, disabled]);

  return (
    <div className='flex flex-col gap-8'>
      <Heading
        title='Select Framework'
        subtitle='Choose the Framework you know'
      />
      <div>
        <SelectTag options={framework} onSelect={handleSelect} />
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

export default EditFramework;
