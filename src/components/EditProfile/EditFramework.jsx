import React, { useCallback, useState, useEffect, useMemo } from 'react';
import Heading from './Heading';
import SelectTag from '../CustomSelect/SelectTag';
import OutlineButton from '../Button/OutlineButton';
import Button from '../Button';
import { useSelector } from 'react-redux';
import { useGetFrameworksQuery } from '../../features/api/apiSlice';
import SelectFramework from '../CustomSelect/SelectFramework';

const framework = [
  { key: 'react', value: 'React' },
  { key: 'vue', value: 'Vue' },
  { key: 'django', value: 'Django' },
  { key: 'flask', value: 'Flask' },
  { key: 'angular', value: 'Angular' },
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

const EditFramework = ({
  disabled,
  actionLabel,
  secondaryActionLabel,
  secondaryAction,
  onSubmit,
}) => {
  const { languageIds } = useSelector((store) => store.user);
  const [value, setValue] = useState([]);
  const [allLanguages, setAllLanguages] = useState({
    lang1: undefined,
    lang2: undefined,
    lang3: undefined,
    lang4: undefined,
    lang5: undefined,
    lang6: undefined,
    lang7: undefined,
    lang8: undefined,
  });

  // Calculate newLanguages using useMemo
  const newLanguages = useMemo(() => {
    const languages = {};
    if (languageIds) {
      languageIds.slice(0, 8).forEach((languageId, index) => {
        languages[`lang${index + 1}`] = languageId.id;
      });
    }
    return languages;
  }, [languageIds]);

  // Update allLanguages when newLanguages changes
  useEffect(() => {
    setAllLanguages((prevLanguages) => ({
      ...prevLanguages, // Copy the old fields
      ...newLanguages, // Spread the newLanguages object
    }));
  }, [newLanguages]);

  

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

  

  // Use this useEffect to log the updated allLanguages
  useEffect(() => {
    console.log("allLanguages:", allLanguages);
  }, [allLanguages]);


  return (
    <div className='flex flex-col gap-8'>
      <Heading
        title='Select Framework'
        subtitle='Choose the Framework you know'
      />
      <div>
        <SelectFramework options={yearsOfExperience} allLanguages={allLanguages} onSelect={handleSelect}/>
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
