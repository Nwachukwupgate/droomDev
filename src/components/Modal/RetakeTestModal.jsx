import React from 'react';
import ControlledModal from './ControlledModal';
import Button from '../Button';
import Logo from '../../assets/images/logo.png';

const RetakeTestModal = () => {
  return (
    <div>
      <ControlledModal>
        <div className='m-auto p-16'>
          <div className='w-12 mb-5'>
            <img src={Logo} alt='droomwork brand logo' />
          </div>
          <p className='text-xl bg-primary mb-5'>Retake CBT Test</p>
          <p className='text-sm mb-20 leading-5'>
            You have successfully updated your profile. You will be required to
            Retake Talent’s Test
          </p>
          <Button label={'Retake Test'} className={'bg-primary text-white'} />
        </div>
      </ControlledModal>
    </div>
  );
};

export default RetakeTestModal;
