import { useMemo } from 'react';
import Badge from '../../components/Badge/Badge';
import LinkButton from '../../components/Button/LinkButton';
import AvatarCard from '../../components/Cards/AvatarCard';
import { MdLocationOn } from 'react-icons/md';
import OverallRating from '../../components/Rating/OverallRating';
import { useGetAllMyCbtDetailsQuery, useGetCbtParamsQuery } from '../../features/api/apiSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageLoader from '../../components/Loader/PageLoader';


const Profile = () => {
  const {data, isLoading, error} = useGetAllMyCbtDetailsQuery()
  const {short_bio = "...", userCbtSoftSkill = {}, cv="", continent= "", userCbtLevel={}, userCbtSkill
  = {}, userCbtLanguage = {}, userCbtFramework={}, userCbtStack = {}} = data?.data ?? {}

  const skillIdsObject = { skill1: userCbtSkill?.skill1, skill2: userCbtSkill?.skill2, skill3: userCbtSkill?.skill1, skill4: userCbtSkill?.skill4, skill5: userCbtSkill?.skill5, skill6: userCbtSkill?.skill6, skill7: userCbtSkill?.skill7, skill8: userCbtSkill?.skill8 };

  const languageIdsObject = { skill1: userCbtLanguage?.language1, skill2: userCbtLanguage?.language2, skill3: userCbtLanguage?.language3, skill4: userCbtLanguage?.language4, skill5: userCbtLanguage?.language5, skill6: userCbtLanguage?.language6, skill7: userCbtLanguage?.language7, skill8: userCbtLanguage?.language8 };

  const frameworkIdsObject = { skill1: userCbtFramework?.framework1, skill2: userCbtFramework?.framework2, skill3: userCbtFramework?.framework3, skill4: userCbtFramework?.framework4, skill5: userCbtFramework?.framework5, skill6: userCbtFramework?.framework6 };

  const stackIdsObject = { skill1: userCbtStack?.stack1, skill2: userCbtStack?.stack2, skill3: userCbtStack?.stack1 }

  // const skillIdsArray = Object.values(skillIdsObject);
  // const { data: skillNames } = skillIdsArray.map((skillId) => {
  //   return useGetCbtParamsQuery(skillId);
  // });
  console.log("sKill", skillIdsObject);
  console.log("language", languageIdsObject);
  console.log("framework", frameworkIdsObject);
  console.log("stackIds", stackIdsObject);

  const skillsQuery1 = useGetCbtParamsQuery(skillIdsObject.skill1);
  const skillsQuery2 = useGetCbtParamsQuery(skillIdsObject.skill2);
  const skillsQuery3 = useGetCbtParamsQuery(skillIdsObject.skill3);
  const skillsQuery4 = useGetCbtParamsQuery(skillIdsObject.skill4);
  const skillsQuery5 = useGetCbtParamsQuery(skillIdsObject.skill5);
  const skillsQuery6 = useGetCbtParamsQuery(skillIdsObject.skill6);
  const skillsQuery7 = useGetCbtParamsQuery(skillIdsObject.skill7);
  const skillsQuery8 = useGetCbtParamsQuery(skillIdsObject.skill8);

  const languageQuery1 = useGetCbtParamsQuery(languageIdsObject.skill1);
  const languageQuery2 = useGetCbtParamsQuery(languageIdsObject.skill2);
  const languageQuery3 = useGetCbtParamsQuery(languageIdsObject.skill3);
  const languageQuery4 = useGetCbtParamsQuery(languageIdsObject.skill4);
  const languageQuery5 = useGetCbtParamsQuery(languageIdsObject.skill5);
  const languageQuery6 = useGetCbtParamsQuery(languageIdsObject.skill6);
  const languageQuery7 = useGetCbtParamsQuery(languageIdsObject.skill7);
  const languageQuery8 = useGetCbtParamsQuery(languageIdsObject.skill8);

  const frameworkQuery1 = useGetCbtParamsQuery(frameworkIdsObject.skill1);
  const frameworkQuery2 = useGetCbtParamsQuery(frameworkIdsObject.skill2);
  const frameworkQuery3 = useGetCbtParamsQuery(frameworkIdsObject.skill3);
  const frameworkQuery4 = useGetCbtParamsQuery(frameworkIdsObject.skill4);
  const frameworkQuery5 = useGetCbtParamsQuery(frameworkIdsObject.skill5);
  const frameworkQuery6 = useGetCbtParamsQuery(frameworkIdsObject.skill6);

  const stackQuery1 = useGetCbtParamsQuery(stackIdsObject.skill1);
  const stackQuery2 = useGetCbtParamsQuery(stackIdsObject.skill2);
  const stackQuery3 = useGetCbtParamsQuery(stackIdsObject.skill3);
  

  const skills = [
    { title: skillsQuery1?.data?.data, experience: userCbtSkill?.experience1 },
    { title: skillsQuery2?.data?.data, experience: userCbtSkill?.experience2 },
    { title: skillsQuery3?.data?.data, experience: userCbtSkill?.experience3 },
    { title: skillsQuery4?.data?.data, experience: userCbtSkill?.experience4 },
    { title: skillsQuery5?.data?.data, experience: userCbtSkill?.experience5 },
    { title: skillsQuery6?.data?.data, experience: userCbtSkill?.experience6 },
    { title: skillsQuery7?.data?.data, experience: userCbtSkill?.experience7 },
    { title: skillsQuery8?.data?.data, experience: userCbtSkill?.experience8 },
  ];

  const languages = [
    { title: languageQuery1?.data?.data, experience: userCbtLanguage?.experience1 },
    { title: languageQuery2?.data?.data, experience: userCbtLanguage?.experience2 },
    { title: languageQuery3?.data?.data, experience: userCbtLanguage?.experience3 },
    { title: languageQuery4?.data?.data, experience: userCbtLanguage?.experience4 },
    { title: languageQuery5?.data?.data, experience: userCbtLanguage?.experience5 },
    { title: languageQuery6?.data?.data, experience: userCbtLanguage?.experience6 },
    { title: languageQuery7?.data?.data, experience: userCbtLanguage?.experience7 },
    { title: languageQuery8?.data?.data, experience: userCbtLanguage?.experience8 },
  ];

  const frameworks = [
    { title: frameworkQuery1?.data?.data, experience: userCbtFramework?.experience1 },
    { title: frameworkQuery2?.data?.data, experience: userCbtFramework?.experience2 },
    { title: frameworkQuery3?.data?.data, experience: userCbtFramework?.experience3 },
    { title: frameworkQuery4?.data?.data, experience: userCbtFramework?.experience4 },
    { title: frameworkQuery5?.data?.data, experience: userCbtFramework?.experience5 },
    { title: frameworkQuery6?.data?.data, experience: userCbtFramework?.experience6 },
  ];

  const stack = [
    { title: stackQuery1?.data?.data, experience: userCbtStack?.experience1 },
    { title: stackQuery2?.data?.data, experience: userCbtStack?.experience2 },
    { title: stackQuery3?.data?.data, experience: userCbtStack?.experience3 },
  ];

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
                    {frameworks.map(({ title, experience }) => (
                      <Badge label={title} period={experience} key={title} />
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className='text-base lg:text-2xl font-semibold mb-2'>
                    Stack
                  </h2>
                  <div className='flex gap-4 flex-wrap'>
                    {stack.map(({ title, experience }) => (
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
