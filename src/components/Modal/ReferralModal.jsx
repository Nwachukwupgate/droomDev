import { IoLogoWhatsapp } from 'react-icons/io';
import Logo from '../../assets/images/logo.png';
import ControlledModal from './ControlledModal';
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import Instagram from '../../assets/svgs/instagram.svg';
import { ReactComponent as Copy } from '../../assets/svgs/copy.svg';

const ReferralModal = ({ open, closeModal }) => {
  const closeModalHandler = () => {
    closeModal();
  };

  let contentStyle = {
    maxHeight: '90%',
    borderRadius: '12px',
    backgroundColor: 'white',
    width: 'fit-content',
    boxShadow: 'none',
    overflow: 'hidden',
    margin: 'auto',
    maxWidth: '530px',
  };
  return (
    <ControlledModal
      open={open}
      closeModal={closeModalHandler}
      contentStyle={contentStyle}
    >
      <div className='relative text-center'>
        <div className='absolute right-4 top-4'>
          <AiOutlineClose size={24} onClick={closeModal} fill='#575555' />
        </div>
        <div className='m-auto p-6 lg:p-9'>
          <div className='w-12 mb-5 m-auto'>
            <img src={Logo} alt='droomwork brand logo' />
          </div>
          <div>
            <p className='text-2xl text-primary mb-4 font-semibold'>
              Earn 30% Cash Back on each Referral{' '}
            </p>
            <p className='mb-9 text-[#575555]'>
              Refer your friends & earn coupons for your self{' '}
            </p>
          </div>
          <div className='flex justify-between items-center p-6 bg-[#D0D5DA] flex-wrap gap-11'>
            <span className='text-primary'>
              http://www.droomwork.io/email/userid
            </span>
            <span>
              <Copy />
            </span>
          </div>
        </div>
        <div>
          <p></p>
        </div>
        {/* SOCIALS */}
        <div className='flex justify-center items-center gap-7 pb-[49px]'>
          <a href='droomwork.io'>
            <BsLinkedin size={32} color='#0076B2' />
          </a>
          <a href='droomwork.io'>
            <BsTwitter size={32} color='#1D9BF0' />
          </a>
          <a href='droomwork.io'>
            <IoLogoWhatsapp size={32} color='#60D669' />
          </a>
          <a href='droomwork.io'>
            <BsFacebook size={32} color='#1877F2' />
          </a>
          <a href='droomwork.io' className='w-8 h-8'>
            <img src={Instagram} alt='instagram' />
          </a>
        </div>
      </div>
    </ControlledModal>
  );
};

export default ReferralModal;
