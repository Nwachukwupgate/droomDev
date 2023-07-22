import React, { useCallback } from 'react';
import Button from '../Button';

const EditProfileContent = ({
  body,
  disabled,
  actionLabel,
  secondaryActionLabel,
  secondaryAction,
  onSubmit,
}) => {
  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [secondaryAction, disabled]);

  return (
    <section className='px-4 mt-11 mb-32'>
      <div className='flex flex-col justify-between gap-11'>
        <div>{body}</div>
        <div className='flex justify-between items-center w-full pb-20'>
          <Button
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
    </section>
  );
};

export default EditProfileContent;
