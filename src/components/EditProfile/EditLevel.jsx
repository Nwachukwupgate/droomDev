import React, { useCallback, useState } from 'react';
import Heading from './Heading';
import RadioInput from '../Inputs/RadioInput';
import CustomSelect from '../CustomSelect/CustomSelect';
import OutlineButton from '../Button/OutlineButton';
import Button from '../Button';

const stacks = [
  { key: 'react', value: 'React' },
  { key: 'vue', value: 'Vue' },
  { key: 'django', value: 'Django' },
  { key: 'flask', value: 'Flask' },
  { key: 'angular', value: 'Angular' },
];

const EditLevel = ({
  disabled,
  actionLabel,
  secondaryActionLabel,
  secondaryAction,
  onSubmit,
}) => {
  const [stackValue, setStackValue] = useState('');
  const [radioValue, setRadioValue] = useState('');

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit({ stackValue, radioValue });
  }, [onSubmit, disabled, stackValue, radioValue]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [secondaryAction, disabled]);

  return (
    <div className='flex flex-col gap-8'>
      <Heading
        title='Select Level'
        subtitle='Select your experience level & stack you 
work with'
      />
      <div className=''>
        <RadioInput onSelect={(e) => setRadioValue(e)} />
      </div>
      <div>
        <CustomSelect
          options={stacks}
          title={'Select your stack'}
          value={stackValue}
          setValue={(e) => setStackValue(e[1])}
        />
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

export default EditLevel;
