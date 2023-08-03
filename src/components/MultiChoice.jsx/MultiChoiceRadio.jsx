import React, { useState } from 'react';

const MultiChoiceRadio = ({ options, paragraphs }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      {options.map((option, index) => (
        <div key={option} className='flex gap-4 items-center'>
          <input
            type='radio'
            name='options'
            value={option}
            checked={selectedOption === option}
            onChange={handleChange}
          />
          <label className='flex gap-5 items-center'>
            <p>{option}:</p>
            <p>{paragraphs[index]}</p>
          </label>
        </div>
      ))}
    </>
  );
};

export default MultiChoiceRadio;
