import React, {useState,useEffect, useCallback, Suspense} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import EasyHTTP from '../../../../helpers/easyHttp'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardBtn from 'components/mainPage/dashboardBtn';
const simpleHttp =  new EasyHTTP()



//http://localhost:3000/register?applyUrl=https://jobs.forem.com/o/senior-full-stack-engineer-new-york-city/c/new
function SuccessPage() {
const router = useRouter()
const [applyEmail, setApplyEmail] = useState('')
const [myLevel, setMyLevel] = useState('')
const [showContinueButton, setShowContinueButton] = useState(false);
    useEffect(() =>{
    async function fetchData() {
   
        var useLevel = JSON.parse(localStorage.getItem("userLevel"))
        if(useLevel){setMyLevel(useLevel)}
        if (typeof window !== "undefined"){var checkApplyUrl = localStorage.getItem("applyUrl")}
        if(checkApplyUrl !=="undefined" && checkApplyUrl !==null ){
        var applyUrl = JSON.parse(localStorage.getItem("applyUrl"))
        if(applyUrl.startsWith("mailto")){
        var regex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi // The actual regex
        var matches = regex.exec(applyUrl)
        setApplyEmail(matches[1])
        localStorage.removeItem("applyUrl")
                
        }else{
        const timer = setTimeout(() => {
        window.open (applyUrl, '_ blank')
        // router.push(applyUrl)
        localStorage.removeItem("applyUrl")
        }, 5000);
         return () => clearTimeout(timer)
        }
         
        }
    }

    fetchData()
    
    }, [])
  
    const handleScheduleInterview =(e)=>{
        e.preventDefault()
        window.open(process.env.NEXT_PUBLIC_CALENDLY_LINK, '_ blank')
    }
    
    useEffect(() => {
        const timer = setTimeout(() => {
          setShowContinueButton(true);
        }, 3000); // 30 seconds timeout
    
        return () => clearTimeout(timer);
    }, []);

    const handleContinueToDashboard = useCallback(() => {
        const itUrl = "http://localhost:3001/"
        var encodedProfile = JSON.parse(localStorage.getItem("userToken"))
        // const itUrl = "https://procurement.gmhluxur/y.app/"
        window.location.href = `${itUrl}?user-profile=${encodedProfile}`
        localStorage.removeItem("userToken")
    }, []);
  
  return (
    
    <>
     <ToastContainer
      position="top-right"
      autoClose={10000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
   
        <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-x-3">
            <div className="mx-auto lg:basis-3/6">
                <img src="images/athlete-training-outdoors.svg" />
                {/* <img src="images/watch.svg" class="w-full" alt="wath illustration" loading="lazy" width="320" height="280" /> */}
            </div>

            <div className="mx-auto lg:basis-3/6">
                <div className="flex flex-col space-y-4">
                    <p className="text-center text-[#001935] font-extrabold drop-shadow-lg shadow-black text-4xl lg:text-left ">Success!</p>
                    {applyEmail !== '' && (
                    <p className="text-md"> Kindly send your CV to <span className="font-bold flex">{applyEmail}</span> to apply for the job</p> 
                    )}
                    {applyEmail == '' && myLevel =='junior'?
                    <>
                     <p className="font-bold text-lg"> Your Details have been taken, you will be contacted for an interview session by our team not too long.</p>
                    <p className="text-gray-500">Upon completion of the next stage, you would have no need to search for contract jobs.Companies will rather apply to you. Thank you!</p>
                    <Link href='/'>
                        <a className="inline-flex justify-center w-fit px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] hover:border-2 hover:border-solid hover:border-[#001935]">Home</a>
                    </Link>
                     </>:null}
                     {applyEmail == '' && myLevel !=='junior'?
                    <>
                     <p className="font-bold text-lg"> Proceed by booking a fun interview chat with us now. </p>
                    <p className="text-gray-500">Upon completion of the next stage, you would have no need to search for contract jobs.Companies will rather apply to you. Thank you!</p>
                    
                        <a  className="inline-flex justify-center w-fit px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] hover:border-2 hover:border-solid hover:border-[#001935] cursor-pointer"  onClick={handleScheduleInterview}>Schedule Interview</a>
                   
                     </>:null}
                   
                     {showContinueButton && (                     
                        <DashboardBtn handleClick={handleContinueToDashboard} /> 
                    )}
                  
                </div>
            </div>

        </div>
    </>
  )
}

export default SuccessPage