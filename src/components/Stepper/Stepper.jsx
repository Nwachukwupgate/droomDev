import { AiOutlineCheck } from 'react-icons/ai';

const Stepper = ({ step }) => {
  return (
    <div>
      <div className='flex items-center'>
        <div className='flex items-center text-teal-600 relative'>
          <div
            className={`${
              step === 0
                ? 'bg-[#F58800] text-white border-transparent'
                : 'text-[#B7B3B3]'
            } flex items-center justify-center rounded-full transition duration-500 ease-in-out h-12 w-12 border-2 border-[#B7B3B3]`}
          >
            {step === 0 ? <AiOutlineCheck /> : '1'}
          </div>
          <div
            className={`${
              step === 0 ? 'text-primary' : 'text-[#B7B3B3]'
            } text-sm sm:text-base absolute top-0 -ml-10 text-center mt-16 w-32 font-semibold uppercase`}
          >
            SELECT <br /> LEVEL
          </div>
        </div>
        <div
          className={`${
            step === 0 ? 'border-secondary' : 'border-[#bfb3b3]'
          } flex-auto border-t-2 transition duration-500 ease-in-out`}
        ></div>
        <div className='flex items-center text-white relative'>
          <div
            className={`${
              step === 1
                ? 'bg-[#F58800] text-white border-transparent'
                : 'text-[#B7B3B3]'
            } flex items-center justify-center rounded-full transition duration-500 ease-in-out h-12 w-12 border-2 border-[#B7B3B3]`}
          >
            {step === 1 ? <AiOutlineCheck /> : '2'}
          </div>
          <div
            className={`${
              step === 1 ? 'text-primary' : 'text-[#B7B3B3]'
            } text-sm sm:text-base absolute top-0 -ml-10 text-center mt-16 w-32 font-semibold uppercase`}
          >
            select <br /> language{' '}
          </div>
        </div>
        <div
          className={`${
            step === 1 ? 'border-secondary' : 'border-[#bfb3b3]'
          } flex-auto border-t-2 transition duration-500 ease-in-out`}
        ></div>
        <div className='flex items-center  relative'>
          <div
            className={`${
              step === 2
                ? 'bg-[#F58800] text-white border-transparent'
                : 'text-[#B7B3B3]'
            } flex items-center justify-center rounded-full transition duration-500 ease-in-out h-12 w-12 border-2 border-[#B7B3B3]`}
          >
            {step === 2 ? <AiOutlineCheck /> : '3'}
          </div>
          <div
            className={`${
              step === 2 ? 'text-primary' : 'text-[#B7B3B3]'
            } text-sm sm:text-base absolute top-0 -ml-10 text-center mt-16 w-32 font-semibold uppercase`}
          >
            select <br /> framework{' '}
          </div>
        </div>
        <div
          className={`${
            step === 2 ? 'border-secondary' : 'border-[#bfb3b3]'
          } flex-auto border-t-2 transition duration-500 ease-in-out`}
        ></div>
        <div className='flex items-center  relative'>
          <div
            className={`${
              step === 3
                ? 'bg-[#F58800] text-white border-transparent'
                : 'text-[#B7B3B3]'
            } flex items-center justify-center rounded-full transition duration-500 ease-in-out h-12 w-12 border-2 border-[#B7B3B3]`}
          >
            {step === 3 ? <AiOutlineCheck /> : '4'}
          </div>
          <div
            className={`${
              step === 3 ? 'text-primary' : 'text-[#B7B3B3]'
            } text-sm sm:text-base absolute top-0 -ml-10 text-center mt-16 w-32 font-semibold uppercase`}
          >
            personal <br /> detail
          </div>
        </div>
        <div
          className={`${
            step === 3 ? 'border-secondary' : 'border-[#bfb3b3]'
          } flex-auto border-t-2 transition duration-500 ease-in-out`}
        ></div>
        <div className='flex items-center  relative'>
          <div className='flex items-center justify-center rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300'>
            {step === 4 ? <AiOutlineCheck /> : '5'}
          </div>
          <div
            className={`${
              step === 4 ? 'text-primary' : 'text-[#B7B3B3]'
            } text-sm sm:text-base absolute top-0 -ml-10 text-center mt-16 w-32 font-semibold uppercase`}
          >
            success{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
