import React from 'react';
import { AiOutlinePushpin } from 'react-icons/ai';
import MultiChoiceRadio from '../../components/MultiChoice.jsx/MultiChoiceRadio';
import Button from '../../components/Button';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import TestScoreModal from '../../components/Modal/TestScoreModal';
import { useState } from 'react';

const options = ['A', 'B', 'C', 'D'];
const paragraphs = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing el',
  'Lorem ipsum dolor sit amet, consectetur adipiscing el',
  'Lorem ipsum dolor sit amet, consectetur adipiscing el',
  'Lorem ipsum dolor sit amet, consectetur adipiscing el',
];

const TakeTest = () => {
  const [showModal, setShowModal] = useState(false);
  const { theme } = useContext(ThemeContext);

  const onSubmitHandler = (data) => {
    setShowModal(true);
  };
  const onCloseHandler = () => {
    setShowModal(false);
  };

  return (
    <div className='max-w-[802px] m-auto'>
      <TestScoreModal open={showModal} onClose={onCloseHandler} />
      <div className='flex flex-col gap-16'>
        <div className='flex items-center justify-between'>
          <div className='flex gap-7 items-center font-medium'>
            <AiOutlinePushpin size={21} />
            <p>20/20</p>
          </div>
          {/* COUNTDOWN */}
          <div className='bg-[#D0D5DA] text-primary px-3'>00:00</div>
        </div>
        {/* QUESTION */}
        <div>
          <h1 className='text-lg font-medium'>
            Why is Javascript the king of Language to the browser?{' '}
          </h1>
        </div>
        <div>
          <MultiChoiceRadio options={options} paragraphs={paragraphs} />
        </div>
        <div className='flex justify-between items-center'>
          <Button
            label={'Prev'}
            className={`
                bg-[#D0D5DA] text-primary
            `}
          />
          <Button
            label={'Submit'}
            className={`${
              theme === 'dark'
                ? 'text-white bg-secondary'
                : 'bg-primary text-white'
            }`}
            onClick={onSubmitHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default TakeTest;
