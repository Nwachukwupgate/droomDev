import { IoLogoWhatsapp } from 'react-icons/io';
import Logo from '../../assets/images/logo.png';
import ControlledModal from './ControlledModal';
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import Instagram from '../../assets/svgs/instagram.svg';

const CongratulationsModal = ({ open, closeModal }) => {
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
              Congratulations
            </p>
            <p className='text-primary mb-[37px] font-semibold'>
              1 New offer from Droomwork
            </p>
            <p className='mb-9 text-[#575555]'>
              Lorem ipsum dolor sit amet consectetur. Pharetra varius tristique
              mauris auctor mauris pellentesque odio accumsan eget. Nec at ut
              malesuada
            </p>
          </div>
          <p className='text-primary mb-14 font-semibold'>
            Get 30% Cash back when you share on your social media handles
          </p>
        </div>

        {/* SOCIALS */}
        <div className='flex justify-center items-center gap-7 pb-[49px]'>
          <a href="https://www.linkedin.com/shareArticle?url=https://droomwork.io" target="_blank" rel="noopener noreferrer">
            <BsLinkedin size={32} color='#0076B2' />
          </a>
          <a href="https://twitter.com/intent/tweet?url=https://droomwork.io" target="_blank" rel="noopener noreferrer">
            <BsTwitter size={32} color='#1D9BF0' />
          </a>
          <a href={`https://api.whatsapp.com/send?text=Check%20out%20this%20link:%20https://droomwork.io`} target="_blank" rel="noopener noreferrer">
            <IoLogoWhatsapp size={32} color='#60D669' />
          </a>
          <a href='https://www.facebook.com/sharer.php?u=https://droomwork.io' target="_blank" rel="noopener noreferrer">
            <BsFacebook size={32} color='#1877F2' />
          </a>
          <a href='https://www.instagram.com' className='w-8 h-8' target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt='instagram' />
          </a>
        </div>

      </div>
    </ControlledModal>
  );
};

export default CongratulationsModal;
