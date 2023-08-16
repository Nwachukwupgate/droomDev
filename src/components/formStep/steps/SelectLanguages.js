import React, {useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrands, faHtml5 } from '@fortawesome/free-solid-svg-icons'
import "@fortawesome/fontawesome-svg-core/styles.css"
import styles from "../../../../styles/check.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EasyHTTP from '../../../../helpers/easyHttp'
const simpleHttp =  new EasyHTTP()
const initLanguagesArray=[]


function SelectLanguages({handleClick, steps, currentStep}) {
  const [userLanguagess,setUserLanguagess] = useState([])
  const [selectedLanguagess,setSelectedLanguagess] = useState([])
  // const[show, setShow] = useState(true)
  const[show, setShow] = useState({})
  const[value, setValue] = useState()
  const[mainValue, setMainValue]  = useState([])
  const [saveAction, setSaveAction] = useState({})

  useEffect(() =>{

    async function fetchData() {
    if (typeof window !== "undefined"){
      var userToken = JSON.parse(localStorage.getItem("userToken"))
      var userStack = JSON.parse(localStorage.getItem("userStack"))
    }
   
    
    const res = await simpleHttp.get(`/api/v1/dev/getLanguagesBasedOnStacks/${userStack}`,userToken)
    if(res.status == true){setUserLanguagess(res.data)}else{toast.error(res.error.message)}
    
    }
    fetchData();
}, [])

const handleSelectLanguages = async(e)=>{
  const singleId = e.target.id
  //max number is 6
  function checkIfClicked(single) {return single == singleId}
  const checked = initLanguagesArray.find(checkIfClicked)
  if (checked !== undefined) {// has been checked before, remove id from state
   
  var selectedLanguagess = JSON.parse(localStorage.getItem("userLanguagess"))
  let updatedLanguagess = selectedLanguagess.filter((id) => 
  {return id !== parseInt(singleId)})
  window.localStorage.setItem('userLanguagess', JSON.stringify(updatedLanguagess))
//after filtering, i need to update initLanguageArray

  //unchooseFramwork
  var userToken = JSON.parse(localStorage.getItem("userToken"))
  const res = await simpleHttp.put(`/api/v1/dev/UnchooseMyLanguages/${singleId}`,userToken)
  if(res.status == true){}else{toast.error(res.error.message)}
  }else{

    initLanguagesArray.push(parseInt(singleId))
    localStorage.setItem('userLanguagess', JSON.stringify(initLanguagesArray))

    var userToken = JSON.parse(localStorage.getItem("userToken"))
    const res = await simpleHttp.put(`/api/v1/dev/chooseMyLanguages/${singleId}`,userToken)
    if(res.status === true ){

      }else{toast.error(res.message)}
  }
  

}

  const showSelect = (index) => (e) => {
    setShow(state => ({
      ...state, // <-- copy previous state
      [index]: !state[index] // <-- update value by index key
    }));

    setSaveAction(state => ({
      ...state, // <-- copy previous state
      [index]: !state[index] // <-- update value by index key
    }));
  };

  const saveShow = (index, value) => (e) => {
    e.preventDefault()

    const i = mainValue.findIndex(_item => _item.id === value.id);
    if (i > -1) {
      mainValue[i] = value
    } else {
      setMainValue(current =>
        [...current, value]
      )
    };

    // setMainValue(current =>
    //   [...current, value]
    // )
    
    setSaveAction(state => ({
      ...state, // <-- copy previous state
      [index]: !state[index] // <-- update value by index key

    }));
  };

  const cancelShow = (index) => (e) => {
    e.preventDefault()
    setShow(state => ({
      ...state, // <-- copy previous state
      [index]: !state[index] // <-- update value by index key
    }));
    setSaveAction(state => ({
      ...state, // <-- copy previous state
      [index]: !state[index] // <-- update value by index key
    }));
  };

  const emptyFields = (index, value) => (e) => {
    e.preventDefault()
    
    setShow(state => ({
      ...state, // <-- copy previous state
      [index]: state[index] // <-- update value by index key
    }));
    setSaveAction(state => ({
      ...state, // <-- copy previous state
      [index]: !state[index] // <-- update value by index key
    }));

    const newObjs = mainValue.filter(item => item.id !== index)
    setMainValue(newObjs)

    // setMainValue(mainValue.fiter(item => item.id !== index))
    // const newObjs = Object.values(mainValue).filter(product => product !== value)
    // const newObjs = Object.values(mainValue)
    // console.log("this is the filtered abeg work", newObjs)
    // setMainValue(newObjs)


    const newObj = Object.values(mainValue);
    
  }

  
const handleSubmitLanguagess = async(e)=>{
  e.preventDefault()
  if (typeof window !== "undefined") {window.localStorage.setItem('userLanguagess', JSON.stringify(mainValue))}
  if(mainValue.length == 0){return toast.error('You did not select any Languages')}else{
  var userToken = JSON.parse(localStorage.getItem("userToken"))

  const langId1 =  mainValue[0] !==undefined? mainValue[0].id:'undefined'
  const langId2 =  mainValue[1] !==undefined? mainValue[1].id:'undefined'
  const langId3 =  mainValue[2] !==undefined? mainValue[2].id:'undefined'
  const langId4 =  mainValue[3] !==undefined? mainValue[3].id:'undefined'
  const langId5 =  mainValue[4] !==undefined? mainValue[4].id:'undefined'
  const langId6 =  mainValue[5] !==undefined? mainValue[5].id:'undefined'
  const langId7 =  mainValue[6] !==undefined? mainValue[6].id:'undefined'
  const langId8 =  mainValue[7] !==undefined? mainValue[7].id:'undefined'

  const langExp1 =  mainValue[0] !==undefined? parseInt(mainValue[0].value):'undefined'
  const langExp2 =  mainValue[1] !==undefined? parseInt(mainValue[1].value):'undefined'
  const langExp3 =  mainValue[2] !==undefined? parseInt(mainValue[2].value):'undefined'
  const langExp4 =  mainValue[3] !==undefined? parseInt(mainValue[3].value):'undefined'
  const langExp5 =  mainValue[4] !==undefined? parseInt(mainValue[4].value):'undefined'
  const langExp6 =  mainValue[5] !==undefined? parseInt(mainValue[5].value):'undefined'
  const langExp7 =  mainValue[6] !==undefined? parseInt(mainValue[6].value):'undefined'
  const langExp8 =  mainValue[7] !==undefined? parseInt(mainValue[7].value):'undefined'
  
  const res = await simpleHttp.put(`/api/v1/dev/chooseMyLanguages/${langId1}/${langId2}/${langId3}/${langId4}/${langId5}/${langId6}/${langId7}/${langId8}`,userToken)

  if(res.status === true ){}else{toast.error(res.error.message)}

  const ress = await simpleHttp.put(`/api/v1/dev/enterMyLanguageExperience/${langExp1}/${langExp2}/${langExp3}/${langExp4}/${langExp5}/${langExp6}/${langExp7}/${langExp8}`,userToken)
  
  if(ress.status === true ){}else{toast.error(ress.message)}
  handleClick("next")
  }
  

 
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
      <form onSubmit={handleSubmitLanguagess}>
      <div className="flex justify-center">
        <div className="space-y-8">

          <div className="flex flex-col text-center">
            <span className="text-2xl font-semibold">Choose Languages You Work With</span>
          </div>

          <div className={styles.main_container}>

            <ul className={styles.main_list}>
              {userLanguagess.map((single => (
                <li className={styles.single_list} key={single.id}>
                  <label className={styles.list_label}>

                    <div className={`${show[single.id] ? styles.checked_butt : styles.icon_box}`} onClick={showSelect(single.id)}> 

                    {/* <input type="checkbox" name="" className={styles.inputType} id={single.id} onChange={handleSelectLanguages} /> */}
                    {/* <div className={styles.icon_box}> */}

                      {show[single.id] ?
                        <span>
                          
  
                          <span className={styles.fa} aria-hidden="true"> {single.name} </span>
                          <span onClick={emptyFields(single.id, value)} className={"mr-2"}> x </span>
                        </span>
                        :
                        <span>
                          <span className={styles.fa} aria-hidden="true"> {single.name} </span>

                          <span onClick={showSelect(single.id)} className={"ml-2"}> + </span>
                        </span>
                      }

                      {/* <span onClick={showSelect(single.id)} className={`${show[single.id] ? "hidden" : "block"} ml-2`}> + </span>
 
                      <span className={styles.fa} aria-hidden="true"> {single.name} </span>

                      <span onClick={emptyFields(single.id, value)} className={`${show[single.id] ? "block" : "hidden"} ml-4`}> x </span> */}
                    </div>
                  </label>

                  <div className={`${saveAction[single.id] ? "block" : "hidden"} absolute z-10 left-[-20%]`}>
                    <div className='flex gap-y-4 min-w-[18rem] md:min-w-[20rem] bg-white z-10 shadow-2xl flex-col p-2'>
                      <p>Years of professional experience</p>

                      <select onChange={(e)=> {setValue(
                         { id: single.id, value: e.target.value } 
                        )
                        }} id={single.id} name="experience">
                        <option value = '0'>select years</option>
                        <option value = '1'>1 year</option>
                        <option value = '2'>2 years</option>
                        <option value = '3'>3 years</option>
                        <option value = '4'>4 years</option>
                        <option value = '5'>5 years</option>
                        <option value = '6'>6 years</option>
                        <option value = '7'>7 years</option>
                      </select>

                      <div className='flex justify-around gap-2'>
                        <button className="inline-flex w-full lg:w-fit justify-center px-2 py-1 font-semibold bg-white text-[#001935] border-2 border-solid border-[#001935] hover:text-gray-100 transition-colors duration-200 transform hover:bg-[#001935] rounded-md " onClick={cancelShow(single.id)}>cancel</button>
                        <button className="inline-flex w-full lg:w-fit justify-center px-2 py-1 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] border-2 border-solid border-[#001935]" onClick={saveShow(single.id, value)}>save</button>    
                      </div>
                    </div>
                  
                  

                  </div>
                </li>
              )))}
            </ul>

          </div>

          

          <div className="container mt-4 mb-8">
            <div className="flex flex-col items-center gap-y-4 w-2/4 mx-auto">
            
            {/*  Next button */}
            
            <button 
            type='submit'
            className="bg-[#001935] text-white w-full  uppercase py-2 px-32 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transiion duration-200 ease-in-out inline-flex
            items-center
            justify-center">
                {currentStep === steps.length - 1 ? "Confirm" : "Next"}
            </button>
            

            {/* Back button */}
            
            <button 
              onClick={()=>handleClick("")}
              className={`bg-white text-slate-400 inline-flex items-center justify-center w-full uppercase text-center py-2 px-32 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transiion duration-200 ease-in-out ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : "" }`} style={{color: "gray"}}>
                Previous
            </button>
            
            </div>

          </div>

        </div>
      </div>
      </form>
    </>
  )
}

export default SelectLanguages