import React from 'react';

const Icon = ({ width, height, name, rest }) => {
  const iconPath = `/svgs/${name}`; // Replace with the path to your SVG icons
  return (
    <svg width={width} height={height} {...rest}>
      <use xlinkHref={`/svgs/icon-sprite.svg#${name}`} />
      <use xlinkHref={iconPath} />
    </svg>
  );
};

export default Icon;

// const Icon = ({ name, width, height, className, ...props }) => {
//   const iconPath = `/public/svgs/${name}.svg`; // Replace with the path to your SVG icons

//   return (
//     <svg
//       xmlns='http://www.w3.org/2000/svg'
//       width={width}
//       height={height}
//       className={className}
//       {...props}
//     >
//       <use xlinkHref={iconPath} />
//     </svg>
//   );
// };

// export default Icon;
