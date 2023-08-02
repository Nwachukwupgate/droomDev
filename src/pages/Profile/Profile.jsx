import Badge from '../../components/Badge/Badge';
import LinkButton from '../../components/Button/LinkButton';
import AvatarCard from '../../components/Cards/AvatarCard';
import { MdLocationOn } from 'react-icons/md';
import OverallRating from '../../components/Rating/OverallRating';

const Profile = () => {
  const skills = [
    { title: 'Backend developer', experience: '4yrs' },
    { title: 'Laravel', experience: '4yrs' },
  ];

  const languages = [
    { title: 'Javascript', experience: '4yrs' },
    { title: 'PHP', experience: '4yrs' },
  ];

  return (
    <>
      <div className=''>
        <AvatarCard bigSize />
        <div className='pb-[44px] mt-9'>
          <h1 className='text-xl lg:text-2xl font-bold leading-8 mb-2.5 md:mb-6 text-left'>
            About
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Pharetra varius tristique
            mauris auctor mauris pellentesque odio accumsan eget. Nec at ut
            malesuada elit elementum non nunc. Tellus vel purus consectetur elit
            tempus molestie ut tellus dignissim. Egestas elit eu aliquet euismod
            faucibus suspendisse scelerisque orci pulvinar.
          </p>
        </div>
        <div className='mb-11 flex gap-4'>
          <LinkButton
            label={'Retake Test'}
            className={'bg-primary text-white'}
            href={'profile/edit'}
          />
          <LinkButton
            href={'profile/edit'}
            label={'Edit profile'}
            className={'bg-[#F58800] text-white'}
          />
        </div>
        {/* LOCATION, SKILLS, RATINGS */}
        <div className='lg:flex lg:items-start lg:gap-14 2xl:gap-[75px]'>
          <div className='inline-flex flex-col gap-5 lg:gap-11'>
            {/* LOCATION & EXPERIENCE */}
            <div className='flex justify-between items-center'>
              <div>
                <div className='inline-flex items-center gap-4'>
                  <h2 className='text-base lg:text-2xl font-semibold'>
                    Location
                  </h2>
                  <MdLocationOn width={14} height={20} color='#E27D03' />
                </div>
                <p className='leading-8'>Lagos, Nigeria</p>
              </div>
              <div>
                <h2 className='text-base lg:text-2xl font-semibold'>
                  Experience
                </h2>
                <p className='leading-8'>4 years</p>
              </div>
            </div>

            {/* SKILLS, LANGUAGES */}
            <div className='flex flex-col gap-7 lg:grid lg:grid-cols-2 '>
              <div>
                <h2 className='text-base lg:text-2xl font-semibold mb-2 '>
                  Skills
                </h2>
                <div className='flex gap-4 flex-wrap'>
                  {skills.map(({ title, experience }) => (
                    <Badge label={title} period={experience} key={title} />
                  ))}
                </div>
              </div>
              <div>
                <h2 className='text-base lg:text-2xl font-semibold mb-2'>
                  Languages
                </h2>
                <div className='flex gap-4 flex-wrap'>
                  {languages.map(({ title, experience }) => (
                    <Badge label={title} period={experience} key={title} />
                  ))}
                </div>
              </div>
              <div>
                <h2 className='text-base lg:text-2xl font-semibold mb-2'>
                  Framework
                </h2>
                <div className='flex gap-4 flex-wrap'>
                  {languages.map(({ title, experience }) => (
                    <Badge label={title} period={experience} key={title} />
                  ))}
                </div>
              </div>
              <div>
                <h2 className='text-base lg:text-2xl font-semibold mb-2'>
                  Stack
                </h2>
                <div className='flex gap-4 flex-wrap'>
                  {languages.map(({ title, experience }) => (
                    <Badge label={title} period={experience} key={title} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RATINGS */}
          <div className='hidden lg:block'>
            <OverallRating />
          </div>
        </div>

        {/* HR RESULT & TEST SCORES */}
        <div className='grid gap-11 lg:grid-cols-2 lg:gap-14 2xl:gap-[75px] mt-20'>
          {/* TEST SCORES, RUSUME AND INTERVIEW LINK */}
          <div className='flex flex-wrap justify-between gap-5'>
            <div className='flex gap-4 w-full lg:w-auto'>
              <h2 className='text-base lg:text-2xl font-semibold mb-2'>
                CBT Test score
              </h2>
              <p className='text-base lg:text-2xl'>42</p>
            </div>
            <div className='w-full lg:w-auto'>
              <h2 className='text-base lg:text-2xl font-semibold mb-2'>
                Interview video link
              </h2>
              <a href='wwww.facebook.com' className='text-blue-500 underline'>
                www.facebook.com
              </a>
            </div>
            <div className='w-full lg:w-auto'>
              <h2 className='text-base lg:text-2xl font-semibold mb-2'>
                Your Resume
              </h2>
              <a href='wwww.facebook.com' className='text-blue-500 underline'>
                www.facebook.com
              </a>
            </div>
          </div>

          {/* HR RESULTS */}
          <div>
            <h2 className='text-base lg:text-2xl font-semibold mb-2'>
              HR Result
            </h2>
            <div className='grid grid-cols-2 gap-4'>
              <div className='flex gap-2'>
                <p>Communication: </p>
                <p>20</p>
              </div>
              <div className='flex gap-2'>
                <p>Communication: </p>
                <p>20</p>
              </div>
              <div className='flex gap-2'>
                <p>Communication: </p>
                <p>20</p>
              </div>
              <div className='flex gap-2'>
                <p>Communication: </p>
                <p>20</p>
              </div>
              <div className='flex gap-2'>
                <p>Communication: </p>
                <p>20</p>
              </div>
              <div className='flex gap-2'>
                <p>Communication: </p>
                <p>20</p>
              </div>
              <div className='flex gap-2'>
                <p>Communication: </p>
                <p>20</p>
              </div>
              <div className='flex gap-2'>
                <p>Communication: </p>
                <p>20</p>
              </div>
              <div className='flex gap-2'>
                <p>Communication: </p>
                <p>20</p>
              </div>
              <div className='flex gap-2'>
                <p>Communication: </p>
                <p>20</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
