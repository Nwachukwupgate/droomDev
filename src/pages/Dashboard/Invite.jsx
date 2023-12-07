import React, {useMemo, useEffect, useState} from 'react';
import Badge from '../../components/Badge/Badge';
import ClientDetails from '../../components/Cards/ClientDetails';
import InvitationDetails from '../../components/Cards/InvitationDetails';
import Divider from '../../components/Divider';
import { useGetAllInvitesQuery } from '../../features/api/apiSlice';
import PageLoader from '../../components/Loader/PageLoader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VariableNames from '../../features/api/variableName';


const Invite = () => {

  const {data, isLoading, error} = useGetAllInvitesQuery()
  const [variableNames, setVariableNames] = useState([]);

  useEffect(() => {

    // Use Promise.all to fetch variable names for all job languages
    const fetchVariableNames = data?.data?.data?.map((invites) => {
      // Fetch variable names for jobLanguage1, jobLanguage2, and jobLanguage3
      console.log("the invites", invites?.inviteJobDetail?.framework1)
      console.log("the invites", invites?.inviteJobDetail?.framework2)
      console.log("the invites", invites?.inviteJobDetail?.framework3)
      return Promise.all([
        VariableNames(invites?.inviteJobDetail?.framework1),
        VariableNames(invites?.inviteJobDetail?.framework2),
        VariableNames(invites?.inviteJobDetail?.framework3),
      ]);
    });
    console.log("varable names", fetchVariableNames)
    Promise.all(fetchVariableNames)
      .then((namesArray) => {
        setVariableNames(namesArray);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }, [data]);

  console.log("the map", variableNames);

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
    <div>
      {data && data?.data?.data?.map((invites, index) => (
        <div className='text-left flex flex-col gap-[25px]'>
          <div className='pb-[30px] border-b border-divider-grey'>
            <h1 className='text-xl lg:text-2xl font-semibold leading-8 mb-[30px] md:mb-6 text-left'>
              Client's Request
            </h1>
            <p>
              {invites?.inviteJobDetail?.jobDetails}
            </p>
          </div>
          {/* REQUIREMENTS */}
          <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7 pb-[30px] border-b border-divider-grey'>
            <div>
              <h3 className='font-semibold leading-8  mb-3'>Skills</h3>
              <div className='flex gap-4 flex-wrap'>
                <Badge label={()=>variableNames(invites?.inviteJobDetail?.framework1)} period={null}/>               
                <Badge label={()=>variableNames(invites?.inviteJobDetail?.framework2)} period={null}/>
                <Badge label={()=>variableNames(invites?.inviteJobDetail?.framework3)} period={null}/>
              </div>
            </div>
            <div>
              <h3 className='font-semibold leading-8  mb-3'>Stack</h3>
              <Badge label={invites?.inviteJobDetail?.stack} period={null}/>
            </div>
            <div>
              <h3 className='font-semibold leading-8 mb-3'>Framework</h3>
              <Badge period={null}/>
            </div>
            <div>
              <h3 className='font-semibold leading-8'>Role</h3>
              <p className=''>{invites?.inviteJobDetail?.jobTitle}</p>
            </div>
          </div>
          {/* CLIENT DETAILS */}
          <ClientDetails showAmount={true} amount={invites?.inviteJobDetail?.salary_range} companyLocation={invites?.inviteJobDetail?.jobLocation1} companyName={invites?.inviteJobDetail?.companyName} companyLogo={invites?.inviteJobDetail?.companyLogo}/>
          <Divider />
          {/* INVITATION DETAILS */}
          <InvitationDetails invites={invites} />
        </div>
      ))}
      
    </div>
  );
};

export default Invite;
