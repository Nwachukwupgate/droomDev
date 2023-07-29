import Logo from '../../assets/images/logo.png';
import Button from '../Button';
import ControlledModal from './ControlledModal';

const SuccessModal = () => {
  return (
    <ControlledModal>
      <div className='m-auto p-16'>
        <div className='w-12 mb-5'>
          <img src={Logo} alt='droomwork brand logo' />
        </div>
        <p className='text-xl bg-primary mb-[61px]'>Success</p>
        <Button label={'Done'} className={'bg-primary text-white'} />
      </div>
    </ControlledModal>
  );
};

export default SuccessModal;
