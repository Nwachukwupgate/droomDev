import React, { useMemo, useState } from 'react';
import EditProfileContent from '../../components/EditProfile/EditProfileContent';
import Heading from '../../components/EditProfile/Heading';
import LanguageSelect from '../../components/Inputs/LanguageSelect';
import RadioInput from '../../components/Inputs/RadioInput';

const STEPS = {
  LEVEL: 0,
  LANGUAGE: 1,
  FRAMEWORK: 2,
  DETAILS: 3,
};

const EditProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(STEPS.LEVEL);

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const onSubmit = (data) => {
    if (step !== STEPS.DETAILS) {
      return onNext();
    }

    setIsLoading(true);
    console.log(data);
    setStep(STEPS.LEVEL);
    setIsLoading(false);
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return 'Create';
    }

    return 'Next';
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined;
    }

    return 'Back';
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
    </div>
  );

  if (step === STEPS.LANGUAGE) {
    bodyContent = (
      <div className='flex flex-col gap-8'>
        <Heading
          title='Where is your place located?'
          subtitle='Help guests find you!'
        />
        {/* <LanguageSelect /> */}
      </div>
    );
  }

  if (step === STEPS.FRAMEWORK) {
    bodyContent = (
      <div className='flex flex-col gap-8'>
        <Heading
          title='Where is your place located?'
          subtitle='Help guests find you!'
        />
        {/* <LanguageSelect /> */}
      </div>
    );
  }

  if (step === STEPS.DETAILS) {
    bodyContent = (
      <div className='flex flex-col gap-8'>
        <Heading
          title='Where is your place located?'
          subtitle='Help guests find you!'
        />
        {/* <LanguageSelect /> */}
      </div>
    );
  }

  return (
    <div>
      <EditProfileContent
        disabled={isLoading}
        title=''
        actionLabel={actionLabel}
        //   onSubmit={handleSubmit(onSubmit)}
        secondaryActionLabel={secondaryActionLabel}
        secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
        body={bodyContent}
      />
    </div>
  );
};

export default EditProfile;
