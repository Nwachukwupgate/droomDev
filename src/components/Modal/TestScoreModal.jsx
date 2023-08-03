import React from 'react';
import ControlledModal from './ControlledModal';
import Logo from '../../assets/images/logo.png';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

const TestScoreModal = ({ open, onClose }) => {
  const navigate = useNavigate();

  const seeResultHandler = () => {
    onClose();
    navigate('/test');
  };
  return (
    <div>
      <ControlledModal open={open} closeOnDocumentClick={false}>
        <div className='m-auto p-16 text-center'>
          <div className='w-16 mb-5 m-auto'>
            <img src={Logo} alt='droomwork brand logo' />
          </div>
          <p className='text-2xl text-primary font-semibold mb-[84px]'>
            You Scored
          </p>
          <p className='text-[2rem] leading-5 m-auto font-semibold text-primary mb-32'>
            600
          </p>
          <Button
            label={'See full result'}
            className={'bg-primary text-white'}
            href={'test/retake'}
            onClick={seeResultHandler}
          />
        </div>
      </ControlledModal>
    </div>
  );
};

export default TestScoreModal;
