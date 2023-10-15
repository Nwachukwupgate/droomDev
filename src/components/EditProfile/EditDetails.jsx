import React, { useCallback, useState, useRef, useEffect } from 'react';
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
import TagInput from './EditSkills';
import SearchSelectOption from '../SearchBar/SearchSelectOption';
import FileUpload from '../Inputs/CustomFile';

const EditDetails = ({
  disabled = false,
  actionLabel,
  secondaryActionLabel,
  secondaryAction,
  onSubmit,
}) => {
  const fileRef = useRef(null);
  const [profilePictureFile, setProfilePictureFile] = useState(null); // State for profilePicture file
  const [cvFile, setCvFile] = useState(null); // State for cv file

  useEffect(() => {
    console.log("profie", profilePictureFile);
    console.log("cv", cvFile);
  }, [profilePictureFile, cvFile])
  

  const { getAll } = useCountries();

  const handleSubmit = useCallback(
    (formValues) => {
      console.log("frm values", formValues);
      formValues.language = 'english';
      // Attach the selected files to formValues
      // formValues.profilePicture = profilePictureFile;
      // formValues.cv = cvFile;

      if (disabled) {
        return;
      }
      onSubmit(formValues);
    },
    [onSubmit, disabled, profilePictureFile, cvFile]
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
                <FileUpload
                  name="profilePicture"
                  id="profilePicture"
                  formik={formik}
                  setFieldValue={setFieldValue}
                  label={'Upload Best Picture'}
                  isValid={values?.profilePicture && !errors.profilePicture}
                  // Set the profilePictureFile state when a file is selected
                  onChange={(file) => setProfilePictureFile(file)}
                />

                
                {/* <InputBox
                  placeholder={''}
                  type={'file'}
                  label={'Upload Best Picture'}
                  name='profilePicture'
                  id='profilePicture'
                  value={values?.profilePicture}
                  isValid={values?.profilePicture && !errors?.profilePicture}
                  setFieldTouched={setFieldTouched}
                /> */}

                {/* <FileUpload 
                  fileRef={fileRef} 
                  placeholder={''}
                  type={'file'}
                  label={'Upload Best Picture'}
                  name='profilePicture'
                  id='profilePicture'
                  value={values?.profilePicture}
                  isValid={values?.profilePicture && !errors?.profilePicture}
                  setFieldTouched={setFieldTouched}
                /> */}
                <InputBox
                  placeholder={'First Name'}
                  type={'text'}
                  name='firstname'
                  id='firstname'
                  value={values?.firstname}
                  isValid={values?.firstname && !errors?.firstname}
                  setFieldTouched={setFieldTouched}
                />
                <InputBox
                  placeholder={'Last Name'}
                  type={'text'}
                  name='lastname'
                  id='lastname'
                  value={values?.lastname}
                  isValid={values?.lastname && !errors?.lastname}
                  setFieldTouched={setFieldTouched}
                />
                {/* <InputBox
                  placeholder={'Enter skills e.g. git'}
                  type={'text'}
                  name='skills'
                  id='skills'
                  value={values?.skills}
                  isValid={values?.skills && !errors?.skills}
                  setFieldTouched={setFieldTouched}
                /> */}
                <TagInput />
                <InputBox
                  placeholder={'Phone Number'}
                  type={'text'}
                  name='phone'
                  id='phone'
                  value={values?.phone}
                  isValid={values?.phone && !errors?.phone}
                  setFieldTouched={setFieldTouched}
                />
                <SearchSelectOption
                  options={getAll()}
                  name='continent'
                  setFieldValue={setFieldValue}
                  label=''
                  placeholder='Anywhere'
                  // formik={formik}
                  // value={values?.search}
                />
                <FileUpload
                  name="cv"
                  id="cv"
                  formik={formik}
                  setFieldValue={setFieldValue}
                  label={'Upload Your Cv'}
                  isValid={values?.cv && !errors?.cv}
                  // Set the cvFile state when a file is selected
                  onChange={(file) => setCvFile(file)}
                />
                <TextArea
                  placeholder={'a short professional intro of yourself'}
                  name='short_bio'
                  id='short_bio'
                  value={values?.short_bio}
                  isValid={values?.short_bio && !errors?.short_bio}
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
