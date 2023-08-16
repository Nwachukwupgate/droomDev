import React,{useState,useEffect} from 'react'
import EasyHTTP from '../../../../helpers/easyHttp'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'

const simpleHttp =  new EasyHTTP()

function SelectLevel({handleClick, steps, currentStep}) {
  const router = useRouter()
  const [myStack, setMyStack] = useState('');
  const [myLevel, setMylevel] = useState("")
  const [userLevels, setUserLevels] = useState([])
  const [userStacks, setUserStacks] = useState([])
  const [radio, setRadio] = useState(null)
  const [isLevelSelected,setIsLevelSelected] = useState(false)
  


  function onChangeValue(event) {
    setIsLevelSelected(true)
    setMylevel(event.target.value);
    
  }

 
   useEffect(() =>{
 
    async function fetchData() {

      var userToken = JSON.parse(localStorage.getItem("userToken"))
    console.log(userToken,'Do i have ny token')
    const res = await simpleHttp.get(`/api/v1/dev/getLevels`,userToken)
    const resStack = await simpleHttp.get(`/api/v1/dev/getStacks`,userToken)
  
    if(res.status == true){setUserLevels(res.data)}else{toast.error(res.error.message)}
    if(resStack.status == true){setUserStacks(resStack.data)}else{toast.error(resStack.error.message)}
    }
    fetchData();
}, [])

const handleChooseLevelAndStack = async(e)=>{
e.preventDefault()
if(isLevelSelected == true && myStack !== ''){
  
  localStorage.setItem('userStack', JSON.stringify(myStack))
  var userToken = JSON.parse(localStorage.getItem("userToken"))
  const res = await simpleHttp.put(`/api/v1/dev/chooseMyStacks/${myStack}`,userToken)
  const response = await simpleHttp.put(`/api/v1/dev/chooseMyLevel/${radio}`,userToken)
  console.log(radio)
  console.log(typeof(radio),'hello')
  if(res.status === true && response.status === true ){
    if(radio == '1'){ localStorage.setItem('userLevel', JSON.stringify('junior'))}
    if(radio == '2'){ localStorage.setItem('userLevel', JSON.stringify('mid'))}
    if(radio == '3'){ localStorage.setItem('userLevel', JSON.stringify('senior'))}
    handleClick("next")
  }else{
    
    toast.error(res.message)
  }
}else{ toast.error('Select Level & Stack')}


}



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
      <form onSubmit={handleChooseLevelAndStack}>
      <div className="flex justify-center">
        <div className="space-y-8">

          <div className="flex flex-col text-center">
            <span className="text-2xl font-semibold">Welcome</span>
            <span className="text-lg" >Select your experience level & stack you work with</span>
          </div>

          <div onChange={onChangeValue}>
        {userLevels.map((single)=>{
           return <>
            <div className="flex items-center" key={single.id}>
              <input id="orange-radio" type="radio" value={single.id} name="colored-radio" className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={(e)=> setRadio(e.target.value)} />
              <label for="orange-radio" className="ml-2 text-lg text-gray-900 dark:text-gray-300">
                {single.name} {single.id === 1 ? '0 - 3 yrs' : (single.id === 2 ? '4 - 6 yrs' : (single.id ===3 ? '7+ yrs' : ''))}
                </label>
            </div>
            </>
          })}
          </div>

          <div className="flex flex-wrap -mx-4">
            <div className="w-full">
                <div className="">
                  <div className="relative">
               
                   <select className="
                        w-full
                        border-[1.5px] border-form-stroke
                        rounded-lg
                        py-3
                        px-5
                        font-normal
                        text-medium
                        text-body-color
                        outline-none
                        focus:border-primary
                        active:border-primary
                        transition
                        disabled:bg-[#F5F7FD] disabled:cursor-default
                        appearance-none
                        "
                       
                        onChange={(e)=> setMyStack(e.target.value)}>
                        <option disabled selected hidden>Select Stack</option>
                       {userStacks.map((single)=>{
                         return <>
                         <option value={single.id} key={single.id}>{single.name}</option>
                         </>
                       })}
                        
                      </select>
                 
                    
                      <span className="
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        mt-[-2px]
                        w-[10px]
                        h-[10px]
                        border-r-2 border-b-2 border-body-color
                        rotate-45
                        bg-gray-400
                        ">
                      </span>
                  </div>
                </div>
            </div>
          </div>

          
        </div>
      </div>

      <div className="container mt-4 mb-8">
            <div className="flex flex-col items-center gap-y-4 w-2/4 mx-auto">
            {/* Back button */}

            {/* <button 
              onClick={()=>handleClick("")}
              className={`bg-[#001935] inline-flex items-center justify-center w-full uppercase text-center text-white py-2 px-32 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transiion duration-200 ease-in-out ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : "" }`} style={{color: "gray"}}>
                Previous
            </button> */}
            

            {/*  Next button */}
            
            <button 
            type='submit'
            className="bg-[#001935] w-full text-slate-400 uppercase py-2 px-32 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transiion duration-200 ease-in-out inline-flex
            items-center
            justify-center">
                {currentStep === steps.length - 1 ? "Confirm" : "Next"}
            </button>
            
            </div>

      </div>

      </form>
    </>
  )
}

export default SelectLevel