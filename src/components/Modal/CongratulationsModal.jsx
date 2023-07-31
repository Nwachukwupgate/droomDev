import { IoLogoWhatsapp } from 'react-icons/io';
import Logo from '../../assets/images/logo.png';
import ControlledModal from './ControlledModal';
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';
import Instagram from '../../assets/svgs/instagram.svg';

const CongratulationsModal = ({ open, closeModal }) => {
  return (
    <ControlledModal open={open} closeModal={closeModal}>
      <div className='m-auto p-16'>
        <div className='w-12 mb-5'>
          <img src={Logo} alt='droomwork brand logo' />
        </div>
        <div>
          <p className='text-xl bg-primary mb-[61px]'>Congratulations</p>
          <p className='text-xl bg-primary mb-[61px]'>
            1 New offer from Droomwork
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Pharetra varius tristique
            mauris auctor mauris pellentesque odio accumsan eget. Nec at ut
            malesuada{' '}
          </p>
        </div>
        <p>Get 30% Cash back when you share on your social media handles</p>
      </div>

      {/* SOCIALS */}
      <div>
        <a href='droomwork.io'>
          <BsLinkedin />
        </a>
        <a href='droomwork.io'>
          <BsTwitter />
        </a>
        <a href='droomwork.io'>
          <IoLogoWhatsapp />
        </a>
        <a href='droomwork.io'>
          <BsFacebook />
        </a>
        <a href='droomwork.io'>
          <img src={Instagram} alt='instagram' />
        </a>
      </div>
    </ControlledModal>
  );
};

export default CongratulationsModal;
