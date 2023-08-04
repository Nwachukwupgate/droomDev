import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import Button from '../Button';
import ControlledModal from './ControlledModal';

const SuccessModal = ({ open, closeModal }) => {
  const navigate = useNavigate();
  const withdrawalDetailsHandler = () => {
    closeModal();
    if (!open) {
      navigate('details');
    }
  };

  return (
    <ControlledModal open={open} closeOnDocumentClick={false}>
      <div className='m-auto px-[74px] text-center pb-24 pt-16'>
        <div className='w-12 mb-5 m-auto'>
          <img src={Logo} alt='droomwork brand logo' />
        </div>
        <p className='text-xl mb-[61px]'>Success</p>
        <Button
          label={'Done'}
          className={'bg-primary text-white'}
          onClick={withdrawalDetailsHandler}
        />
      </div>
    </ControlledModal>
  );
};

export default SuccessModal;
