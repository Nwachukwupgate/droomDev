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
  return (
    <ControlledModal open={open} closeModal={closeModalHandler}>
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
              Lorem ipsum dolor sit amet consectetur. Pharetra varius tristique
              mauris auctor mauris pellentesque odio accumsan eget. Nec at ut
              malesuada
            </p>
          </div>
          <div>
            <p className='text-primary mb-14 font-semibold'>
              Refer your friends & earn coupons for your self
            </p>
            <Copy fill='red' />
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
