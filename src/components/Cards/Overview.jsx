import { IoEye, IoEyeOff } from 'react-icons/io5';

const Overview = ({ title, description, buttonLabel }) => {
  return (
    <div className='mt-[72px]'>
      <h2>Earnings</h2>
      <div>
        <span>$8,690.62</span>
        <IoEye />
        <IoEyeOff />
      </div>
      <div>
        <span>14</span>
        <span>completed projects</span>
      </div>
      <div>
        <button>See offer</button>
      </div>
    </div>
  );
};

export default Overview;
