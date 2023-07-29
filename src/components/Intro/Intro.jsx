import React from 'react';

const Intro = ({ title, description, id }) => {
  return (
    <section id={id}>
      <h2 className='text-xl mb-[30px] lg:text-[1.75rem] font-bold'>{title}</h2>
      <p className='text-sm sm:text-base'>{description}</p>
    </section>
  );
};

export default Intro;
