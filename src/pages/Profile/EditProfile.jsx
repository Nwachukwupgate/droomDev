import React, { useMemo, useState } from 'react';
import EditProfileContent from '../../components/EditProfile/EditProfileContent';
import Heading from '../../components/EditProfile/Heading';
import RadioInput from '../../components/Inputs/RadioInput';
import CustomSelect from '../../components/CustomSelect/CustomSelect';
import SelectTag from '../../components/CustomSelect/SelectTag';
import PersonalDetailsForm from './PersonalDetailsForm';
import RetakeTestModal from '../../components/Modal/RetakeTestModal';
import { useNavigate } from 'react-router-dom';
import Stepper from '../../components/Stepper/Stepper';

const STEPS = {
  LEVEL: 0,
  LANGUAGE: 1,
  FRAMEWORK: 2,
  DETAILS: 3,
};

const stacks = [
  { key: 'react', value: 'React' },
  { key: 'vue', value: 'Vue' },
  { key: 'django', value: 'Django' },
  { key: 'flask', value: 'Flask' },
  { key: 'angular', value: 'Angular' },
];
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
  { key: 'django', value: '3 - 7 years' },
  { key: 'flask', value: '7+ years' },
];

const EditProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(STEPS.LEVEL);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {};

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = (data) => {
    setStep((value) => value + 1);
  };

  const onSubmit = (data) => {
    if (step !== STEPS.DETAILS) {
      return onNext();
    }

    setIsLoading(true);
    setShowModal(true);
    // console.log(isLoading);
    // setStep(STEPS.LEVEL);
    // console.log(step);
    setIsLoading(false);
  };

  // CONTROLS THE BACK AND NEXT LABELS
  const actionLabel = useMemo(() => {
    if (step === STEPS.DETAILS) {
      return 'Update';
    }

    return 'Next';
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.LEVEL) {
      return 'Cancel';
    }

    return 'Previous';
  }, [step]);

  let bodyContent = (
    <div className='flex flex-col gap-8'>
      <Heading
        title='Select Level'
        subtitle='Select your experience level & stack you 
work with'
      />
      <div className=''>
        <RadioInput />
      </div>
      <div>
        <CustomSelect options={stacks} title={'Select a stack'} />
      </div>
    </div>
  );

  if (step === STEPS.LANGUAGE) {
    bodyContent = (
      <div className='flex flex-col gap-8'>
        <Heading
          title='Select Language'
          subtitle='Choose the language that you work with'
        />
        <div>
          <SelectTag />
        </div>
      </div>
    );
  }

  if (step === STEPS.FRAMEWORK) {
    bodyContent = (
      <div className='flex flex-col gap-8'>
        <Heading
          title='Select Framework'
          subtitle='Choose the Framework you know'
        />
        <div>
          <SelectTag />
        </div>
      </div>
    );
  }

  if (step === STEPS.DETAILS) {
    bodyContent = (
      <div className='flex flex-col gap-8'>
        <Heading
          title='Personal Details'
          subtitle='Fill in the accurate details of your personal information'
        />
        <div>
          <PersonalDetailsForm />
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className='text-xl lg:text-2xl font-bold leading-8 mt-10 mb-12 md:mb-[53px] text-left'>
        Edit Profile
      </h1>
      <div>
        <RetakeTestModal open={showModal} />
      </div>
      <div className='mb-32'>
        <Stepper step={step} />
      </div>
      <div className=''>
        <EditProfileContent
          disabled={isLoading}
          title=''
          actionLabel={actionLabel}
          onSubmit={onSubmit}
          secondaryActionLabel={secondaryActionLabel}
          secondaryAction={step === STEPS.LEVEL ? undefined : onBack}
          body={bodyContent}
        />
      </div>
    </div>
  );
};

export default EditProfile;
