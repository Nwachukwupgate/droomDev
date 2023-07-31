import React from 'react';
import InputBox from '../../components/Inputs/InputBox';
import TextArea from '../../components/Inputs/TextArea';

const PersonalDetailsForm = () => {
  return (
    <div className='flex flex-col gap-7'>
      <InputBox placeholder={''} type={'file'} label={'Upload Best Picture'} />
      <InputBox placeholder={'First Name'} type={'text'} />
      <InputBox placeholder={'Last Name'} type={'text'} />
      <InputBox placeholder={'Enter skills e.g. git'} type={'text'} />
      <InputBox placeholder={'Phone Number'} type={'number'} />
      <TextArea placeholder={'a short professional intro of yourself'} />
    </div>
  );
};

export default PersonalDetailsForm;
