import React from 'react';

const Icon = ({ width, height, name, ...rest }) => {
  console.log(name);
  const iconPath = `/svgs/${name}.svg`; // Replace with the path to your SVG icons
  return (
    <>
      {name && (
        <svg width={width} height={height} {...rest} color='black' fill='black'>
          <use xlinkHref='/svgs/dashboard.svg' color='black' fill='black' />
          {/* <use xlinkHref={iconPath} /> */}
        </svg>
      )}
    </>
  );
};

export default Icon;
