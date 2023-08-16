import React, { useCallback, useState } from 'react';
import { Formik } from 'formik';
import Heading from './Heading';
import OutlineButton from '../Button/OutlineButton';
import Button from '../Button';
import TextArea from '../Inputs/TextArea';
import InputBox from '../Inputs/InputBox';
import {
  TalentProfileSchema,
  initialTalentProfileValues,
} from '../../schema/personal-details.schema';
import SearchSelectOptions from '../SearchBar/SearchSelectOptions';
import useCountries from '../../hooks/useCountries';

const EditDetails = ({
  disabled,
  actionLabel,
  secondaryActionLabel,
  secondaryAction,
  onSubmit,
}) => {
  const [value, setValue] = useState();
  const { getAll } = useCountries();

  const handleSubmit = useCallback(
    (formValues) => {
      if (disabled) {
        return;
      }
      onSubmit(formValues);
    },
    [onSubmit, disabled]
  );

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
          title='Personal Details'
          subtitle='Fill in the accurate details of your personal information'
        />
        <div>
          {/* DETAILS FORM */}
          <Formik
            onSubmit={handleSubmit}
            validationSchema={TalentProfileSchema}
            enableReinitialize
            initialValues={initialTalentProfileValues}
          >
            {({
              values,
              setFieldTouched,
              isValid,
              setFieldValue,
              errors,
              handleSubmit,
              ...formik
            }) => (
              <div className='flex flex-col gap-7'>
                <InputBox
                  placeholder={''}
                  type={'file'}
                  label={'Upload Best Picture'}
                  name='image'
                  id='image'
                  value={values?.image}
                  isValid={values?.image && !errors?.image}
                  setFieldTouched={setFieldTouched}
                />
                <InputBox
                  placeholder={'First Name'}
                  type={'text'}
                  name='first_name'
                  id='first_name'
                  value={values?.first_name}
                  isValid={values?.first_name && !errors?.first_name}
                  setFieldTouched={setFieldTouched}
                />
                <InputBox
                  placeholder={'Last Name'}
                  type={'text'}
                  name='last_name'
                  id='last_name'
                  value={values?.last_name}
                  isValid={values?.last_name && !errors?.last_name}
                  setFieldTouched={setFieldTouched}
                />
                <InputBox
                  placeholder={'Enter skills e.g. git'}
                  type={'text'}
                  name='skills'
                  id='skills'
                  value={values?.skills}
                  isValid={values?.skills && !errors?.skills}
                  setFieldTouched={setFieldTouched}
                />
                <InputBox
                  placeholder={'Phone Number'}
                  type={'text'}
                  name='phone_number'
                  id='phone_number'
                  value={values?.phone_number}
                  isValid={values?.phone_number && !errors?.phone_number}
                  setFieldTouched={setFieldTouched}
                />
                <SearchSelectOptions
                  options={getAll()}
                  name='location'
                  setFieldValue={setFieldValue}
                  label=''
                  placeholder='Anywhere'
                  // formik={formik}
                  // value={values?.search}
                />
                <TextArea
                  placeholder={'a short professional intro of yourself'}
                  name='introduction'
                  id='introduction'
                  value={values?.introduction}
                  isValid={values?.introduction && !errors?.introduction}
                  setFieldTouched={setFieldTouched}
                />
                <div className='flex justify-between lg:justify-end lg:gap-6 items-center w-full pb-20'>
                  <OutlineButton
                    label={secondaryActionLabel}
                    className={'border border-primary text-primary'}
                    onClick={handleSecondaryAction}
                  />
                  <Button
                    type={'submit'}
                    label={actionLabel}
                    className={
                      'bg-primary text-white border border-transparent'
                    }
                    onClick={handleSubmit}
                  />
                </div>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default EditDetails;
