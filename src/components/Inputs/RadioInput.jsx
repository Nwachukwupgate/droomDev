import React from 'react';
import { useGetAllLevelsQuery } from '../../features/api/apiSlice';

const RadioInput = ({ onSelect }) => {
  const {data: level} = useGetAllLevelsQuery()
  const { data=[] } = level ?? {} ;
  const handleChange = (e) => {
    onSelect(e.target.value);
  };

  return (
    <div className='flex flex-col gap-5 mb-9'>
      {data.map((single)=> (
        <div className='flex gap-1.5 items-center' key={single.id}>
          <input
            type='radio'
            id='junior'
            name='level'
            onChange={handleChange}
            value={single.id}
          />
          <label htmlFor={single.name}>{single.name} {single.id === 1 ? '0 - 3 yrs' : (single.id === 2 ? '4 - 6 yrs' : (single.id ===3 ? '7+ yrs' : ''))}</label>
        </div>
      ))}
      
    </div>
  );
};

export default RadioInput;
