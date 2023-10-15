import React, { useContext } from 'react';
import Popup from 'reactjs-popup';
import { BsChevronDown } from 'react-icons/bs';
import { ThemeContext } from '../../context/ThemeContext';


const CustomSelect = ({ value, setValue, options, title }) => {
  const { theme } = useContext(ThemeContext);


  return (
    <Popup
      trigger={
        <div
          className={`flex justify-between rounded-md bg-[#F0EEF1] text-grey-text cursor-pointer items-center gap-1 border border-grey-input p-4`}
        >
          <p className='text-sm text-[#A39F9F]'>{value || title}</p>
          <BsChevronDown
            className={`${theme === 'dark' && 'text-[#A39F9F]'} `}
          />
        </div>
      }
      on='click'
      closeOnDocumentClick
      arrow={false}
      mouseLeaveDelay={50}
      mouseEnterDelay={0}
      nested
      position='bottom left'
      contentStyle={{
        padding: '0px',
        marginTop: '6px',
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px',
        border: 0,
        width: 'fit-content',
        color: '#5E5BA7',
        overflow: 'hidden',
      }}
    >
      {(close) => (
        <div className='min-w-[250px] text-grey-text gap-[5px] bg-white'>
          {options.map(({ id, name, value }) => (
            <div
              key={id}
              className=' border-t py-[8px] px-[21px] gap-1 cursor-pointer flex items-start w-full'
              onClick={() => {
                setValue([id, name || value]);
                close();
              }}
            >
              {name || value}
            </div>
          ))}
        </div>
      )}
    </Popup>
  );
};

export default CustomSelect;
