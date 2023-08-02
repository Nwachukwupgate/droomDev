import React from 'react';
import NotFound1 from '../../assets/images/notfound-light.svg';
import NotFound2 from '../../assets/images/notfound-dark.svg';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const NotFound = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <div className='text-center'>
        <h1 className='text-4xl font-bold '>404</h1>
        <p className='lg:text-xl uppercase font-thin'>Sorry! Page not found</p>
      </div>
      <div className='w-[320px] m-auto'>
        {theme === 'light' ? (
          <img src={NotFound1} alt='not-found' />
        ) : (
          <img src={NotFound2} alt='not-found' />
        )}
      </div>
    </div>
  );
};

export default NotFound;
