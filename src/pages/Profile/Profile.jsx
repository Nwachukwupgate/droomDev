import { useMemo } from 'react';
import Badge from '../../components/Badge/Badge';
import LinkButton from '../../components/Button/LinkButton';
import AvatarCard from '../../components/Cards/AvatarCard';
import { MdLocationOn } from 'react-icons/md';
import OverallRating from '../../components/Rating/OverallRating';
import { useGetAllMyCbtDetailsQuery } from '../../features/api/apiSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageLoader from '../../components/Loader/PageLoader';


const Profile = () => {
  const {data, isLoading, error} = useGetAllMyCbtDetailsQuery()
  const {short_bio = "...", userCbtSoftSkill = {}, cv="", continent= "", userCbtLevel={}} = data?.data ?? {}
  const skills = [
    { title: 'Backend developer', experience: '4yrs' },
    { title: 'Laravel', experience: '4yrs' },
  ];

  const languages = [
    { title: 'Javascript', experience: '4yrs' },
    { title: 'PHP', experience: '4yrs' },
  ];

  console.log("the errror", error);

  useMemo( () => {
    if(error?.status === "FETCH_ERROR") {
      toast.error(`Check Internet Connection: ${error.error}`)
    } else {
      toast.error(error?.message)
    }
  }, [error])

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      <div className=''>
        <AvatarCard bigSize />
         
        <div>
          <div className='pb-[44px] mt-9'>
            <h1 className='text-xl lg:text-2xl font-bold leading-8 mb-2.5 md:mb-6 text-left'>
              About
            </h1>
            <p>
              {short_bio ? short_bio : "No bio available"}
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
              <div className='flex lg:inline-grid grid-cols-2 gap-7 justify-between items-center'>
                <div>
                  <div className='inline-flex items-center gap-4'>
                    <h2 className='text-base lg:text-2xl font-semibold'>
                      Location
                    </h2>
                    <MdLocationOn width={14} height={20} color='#E27D03' />
                  </div>
                  <p className='leading-8'>{continent}</p>
                </div>
                <div>
                  <h2 className='text-base lg:text-2xl font-semibold'>
                    Experience
                  </h2>
                  <p className='leading-8'>{userCbtLevel.level_name} Level</p>
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
                  {userCbtSoftSkill?.interview_link}
                </a>
              </div>
              <div className='w-full lg:w-auto'>
                <h2 className='text-base lg:text-2xl font-semibold mb-2'>
                  Your Resume
                </h2>
                <a href={cv} download className='text-blue-500 underline'>
                  {cv.substring(cv.lastIndexOf("/") + 1)}
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
                  <p>{userCbtSoftSkill?.communication}</p>
                </div>
                <div className='flex gap-2'>
                  <p>Productivity: </p>
                  <p>{userCbtSoftSkill?.productivity}</p>
                </div>
                <div className='flex gap-2'>
                  <p>Motivation: </p>
                  <p>{userCbtSoftSkill?.motivation}</p>
                </div>
                <div className='flex gap-2'>
                  <p>Learning Velocity: </p>
                  <p>{userCbtSoftSkill?.learning_velocity}</p>
                </div>
                <div className='flex gap-2'>
                  <p>Consistency: </p>
                  <p>{userCbtSoftSkill?.consistency_reliability}</p>
                </div>
                <div className='flex gap-2'>
                  <p>Creativity: </p>
                  <p>{userCbtSoftSkill?.creativity}</p>
                </div>
                <div className='flex gap-2'>
                  <p>Self-driven: </p>
                  <p>{userCbtSoftSkill?.self_driven}</p>
                </div>
                <div className='flex gap-2'>
                  <p>Leadership: </p>
                  <p>{userCbtSoftSkill?.leadership}</p>
                </div>
                <div className='flex gap-2'>
                  <p>Past Work Depth: </p>
                  <p>{userCbtSoftSkill?.depth_of_past_work}</p>
                </div>
                <div className='flex gap-2'>
                  <p>Value alignment: </p>
                  <p>{userCbtSoftSkill?.value_alignment}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
      </div>
    </>
  );
};

export default Profile;
