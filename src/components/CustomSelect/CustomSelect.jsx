import React from 'react';
import Popup from 'reactjs-popup';

const CustomSelect = ({ value, setValue, options, title }) => {
  return (
    <Popup
      trigger={
        <div className='flex justify-between rounded-md bg-[#F0EEF1] text-grey-text cursor-pointer items-center gap-1 border border-grey-input p-4'>
          {/* {value[1]} */}
          <p className='text-sm text-[#A39F9F]'>Lorem Ipsum</p>
          <p>djdjdk</p>
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
          <div className=' gap-[13px] bg-grey-bg px-[36px] py-[8px] cursor-pointer'>
            {title ? title : ''}
          </div>
          {options.map(({ key, value }) => (
            <div
              key={key}
              className=' border-t border-t-grey-input py-[8px] px-[21px] gap-1 cursor-pointer flex items-start w-full'
              onClick={() => {
                setValue([key, value]);
                close();
              }}
            >
              {value}
            </div>
          ))}
        </div>
      )}
    </Popup>
  );
};

export default CustomSelect;
