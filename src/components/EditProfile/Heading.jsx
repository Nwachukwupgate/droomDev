'use client';

const Heading = ({ title, subtitle, center }) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
      <div className='text-2xl font-bold mb-10'>{title}</div>
      <div className='font-light'>{subtitle}</div>
    </div>
  );
};

export default Heading;
