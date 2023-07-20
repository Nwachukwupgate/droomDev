import React from 'react';

const RadioInput = () => {
  return (
    <div>
        <input type='radio' id='junior' name='level' value='junior' /> {' '}
      <label for='junior'>junior 0 - 3 yrs</label>
      <br />
        <input type='radio' id='mid' name='level' value='mid' /> {' '}
      <label for='mid'>mid 4 - 6 yrs</label>
      <br />
        <input type='radio' id='senior' name='level' value='senior' /> {' '}
      <label for='senior'>senior 7+ yrs</label>
    </div>
  );
};

export default RadioInput;
