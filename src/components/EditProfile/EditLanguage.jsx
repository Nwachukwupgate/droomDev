import React, { useCallback, useState } from 'react';
import Heading from './Heading';
import SelectTag from '../CustomSelect/SelectTag';
import OutlineButton from '../Button/OutlineButton';
import Button from '../Button';
import { useSelector } from 'react-redux';
import { useGetLanguagesQuery } from '../../features/api/apiSlice';


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
  { key: '1', value: '1 year' },
  { key: '2', value: '2 years' },
  { key: '3', value: '3 years' },
  { key: '4', value: '4 years' },
  { key: '5', value: '5 years' },
  { key: '6', value: '6 years' },
  { key: '7', value: '7 years' }
];

const EditLanguage = ({
  disabled,
  actionLabel,
  secondaryActionLabel,
  secondaryAction,
  onSubmit,
}) => {
  const [value, setValue] = useState([]);
  const { stackId } = useSelector((store) => store.user);
  const {data} = useGetLanguagesQuery(stackId)

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
          <SelectTag options={yearsOfExperience} onSelect={handleSelect} userLanguages={data} />
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
