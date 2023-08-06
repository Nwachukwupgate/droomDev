import React from 'react';

const PageIntro = ({ title, description }) => {
  return (
    <div>
      <h1 className='text-xl lg:text-[1.75rem] mb-5 font-bold'>{title}</h1>
      <p className='lg:text-xl'>{description}</p>
    </div>
  );
};

export default PageIntro;
