import React, { useMemo, useState } from 'react';

import RetakeTestModal from '../../components/Modal/RetakeTestModal';
import Stepper from '../../components/Stepper/Stepper';
import EditLevel from '../../components/EditProfile/EditLevel';
import EditLanguage from '../../components/EditProfile/EditLanguage';
import EditFramework from '../../components/EditProfile/EditFramework';
import EditDetails from '../../components/EditProfile/EditDetails';
import LoadingSpinner from '../../components/Loader/LoadingSpinner';

const STEPS = {
  LEVEL: 0,
  LANGUAGE: 1,
  FRAMEWORK: 2,
  DETAILS: 3,
};

const EditProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(STEPS.LEVEL);
  const [showModal, setShowModal] = useState(false);

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = (data) => {
    setStep((value) => value + 1);
  };

  const onSubmit = (data) => {
    // Call the individual APIs for each step
    if (step === STEPS.LEVEL) {
      // API for Select Level
      console.log(data);

      return onNext();
    } else if (step === STEPS.LANGUAGE) {
      // API for Language
      console.log(data);

      return onNext();
    } else if (step === STEPS.FRAMEWORK) {
      // API for Framework
      console.log(data);

      return onNext();
    } else {
      // API for details

      console.log(data);
      setShowModal(true);
    }

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
    <EditLevel
      disabled={isLoading}
      actionLabel={actionLabel}
      onSubmit={onSubmit}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.LEVEL ? undefined : onBack}
    />
  );

  if (step === STEPS.LANGUAGE) {
    bodyContent = (
      <EditLanguage
        disabled={isLoading}
        actionLabel={actionLabel}
        onSubmit={onSubmit}
        secondaryActionLabel={secondaryActionLabel}
        secondaryAction={step === STEPS.LEVEL ? undefined : onBack}
      />
    );
  }

  if (step === STEPS.FRAMEWORK) {
    bodyContent = (
      <EditFramework
        disabled={isLoading}
        actionLabel={actionLabel}
        onSubmit={onSubmit}
        secondaryActionLabel={secondaryActionLabel}
        secondaryAction={step === STEPS.LEVEL ? undefined : onBack}
      />
    );
  }

  if (step === STEPS.DETAILS) {
    bodyContent = (
      <EditDetails
        disabled={isLoading}
        actionLabel={actionLabel}
        onSubmit={onSubmit}
        secondaryActionLabel={secondaryActionLabel}
        secondaryAction={step === STEPS.LEVEL ? undefined : onBack}
      />
    );
  }

  if (isLoading) {
    return <LoadingSpinner />;
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
        <section className='px-4 mt-12 mb-32 sm:w-3/4 m-auto'>
          <div className='flex flex-col justify-between gap-11'>
            <div>{bodyContent}</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EditProfile;
