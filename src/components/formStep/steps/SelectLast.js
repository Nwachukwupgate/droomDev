import React,{useState,useRef} from 'react'
import styles from "../../../../styles/check.module.css"
import EasyHTTP from '../../../../helpers/easyHttp'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
const simpleHttp =  new EasyHTTP()



if(process.env.NEXT_PUBLIC_NODE_ENV ==='development'){
  var api_origin = 'https://test.droomwork.io'
}else{
  var api_origin = 'https://test.droomwork.io'
}
let file = null
let cvFile = null

function SelectLast({handleClick, steps, currentStep}) {
  const router = useRouter()
  const imgref = useRef('')
  const [tags, setTags] = React.useState([]);
  const [cvName, setCvName] = useState('')
  const [profileName, setProfileName] = useState('')
  const [files, setFile] = useState(null);
  const [spinner, setSpinner] = useState(false)
  const [uploadState,setuploadState]  = useState(true)
  const[value, setValue] = useState("")
  const[suggest, setSuggest] = useState([])

  
  const hiddenFileInput = React.useRef(null);






const handleSubmitDevsRegistration = async(e)=>{
  e.preventDefault()
  setSpinner(true)
  var formData = new FormData()
  formData.append('cv', cvFile)
  formData.append('profilePicture', file)
  formData.append('firstname',e.target.firstName.value)
  formData.append('phone',e.target.phoneNumber.value)
  formData.append('lastname',e.target.lastName.value)
  formData.append('short_bio',e.target.shortBio.value)
  formData.append('continent',e.target.continent.value)
  formData.append('language','english')

  // console.log('cv', cvFile)
  // console.log('profilePicture', file)
  // console.log('firstname',e.target.firstName.value)
  // console.log('phone',e.target.phoneNumber.value)
  // console.log('lastname',e.target.lastName.value)
  // console.log('short_bio',e.target.shortBio.value)
  // console.log('continent',e.target.continent.value)
  // console.log('language','english')

  var userToken = JSON.parse(localStorage.getItem("userToken"))

  fetch(`${api_origin}/api/v1/dev/enterBasicInfo `, {
      method: 'PUT',
      headers: {
        'Authorization':`Bearer ${userToken}`
      },
      body: formData
    }).then(
      response => response.json()
    ).then((result)=>{
        if(result.status==true){
          handleClick("next")
          localStorage.removeItem("userStack")
          localStorage.removeItem("userFrameworks")
          localStorage.removeItem("userLanguagess")
        
        }else{
          setSpinner(false)
          toast.error(result.message)
        }
    })
}
const handleChange=(e)=>{
  setFile(e.target.files[0])
  file = e.target.files[0]
  // hiddenFileInput.current.click()
  
  var ext = file.name.split('.').pop()
 
  if(ext=="png" || ext=="jpeg" || ext=="jpg" || ext=="JPG"){
  if(file.size >20000000){return toast.error('picture size is too large')}
  
  }else{return toast.error('Image type not supported')}

  return file
}

const handleCVChange =(e)=>{
  setFile(e.target.files[0])
  setCvName(e.target.files[0].name)
  cvFile = e.target.files[0]
  // hiddenFileInput.current.click()
  
  var ext = cvFile.name.split('.').pop()
  if(ext=="docx" || ext=="doc" || ext=="pdf"){
  if(cvFile.size >2000000){
    return toast.error('CV size is too large')}
    
  }else{return toast.error('Kindly upload your CV')}

  return cvFile
}




const handleGetSkills = async(e) => {
setValue(e.target.value)
var userToken = JSON.parse(localStorage.getItem("userToken"))
const name = e.target.value
const data = {name}
const res = await simpleHttp.post(`/api/v1/dev/searchForMySkills`,data,userToken)
if(res.status == true){
setSuggest(res.data)
}else{
  toast.error(res.message)
}
  }

  const handleSelectSkill = async(searchedSkill,searchedSkillId) => {
    setValue(searchedSkill)
    tags.push({id:searchedSkillId,name:searchedSkill})
    var userToken = JSON.parse(localStorage.getItem("userToken"))
    const res = await simpleHttp.put(`/api/v1/dev/chooseMySkill/${searchedSkillId}`,userToken)
    if(res.status === true ){}else{toast.error(res.message)}
  }




  const removeTags = async(indexToRemove,skillId) => {
		setTags([...tags.filter((_, index) => index !== indexToRemove)])
    var userToken = JSON.parse(localStorage.getItem("userToken"))
    const res = await simpleHttp.put(`/api/v1/dev/UnchooseMySkill/${skillId}`,userToken)
    if(res.status === true ){}else{toast.error(res.message)}
	};

  const addTags = event => {
		if (event.target.value !== "") {
    // if (event.key === "Enter" && event.target.value !== "") {
			setTags([...tags, event.target.value]);
			event.target.value = "";
		}
	};
 

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
    <form onSubmit={handleSubmitDevsRegistration}>
      <div className="flex justify-center">
        <div className="space-y-8">

          <div className="flex flex-col text-center">
            <span className="text-2xl font-semibold">Personal Details</span>
          </div>
          
          <div className="space-y-8">

            <div>
                <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="file_input">Upload Best Picture</label>
                <input 
                  type="file" 
                  required
                  placeholder='Select profile pics'
                  className="w-full py-3 px-4 border border-solid border-gray-400  outline-0 rounded-lg placeholder:text-[#001935]  placeholder:font-bold bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none" id="myFile"
                  onChange={handleChange} 
                />
                 {/* ref={hiddenFileInput} */}
                  {/* <button className={styles.file_upload__button} type="button" onClick={handleClick}>Choose File(s)</button> */}
                <div>
                  {profileName}
                </div>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">PNG, JPG(MAX. 1mb).</p>
            </div>

            <div>
                <input 
                  type="text" 
                  placeholder="First Name"
                  name="firstName"
                  required
                  className="w-full py-3 px-4 border border-solid border-gray-400  outline-0 rounded-lg placeholder:text-[#001935]  placeholder:font-bold bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                />
            </div>

            <div>
                <input 
                  type="text" 
                  placeholder="Last Name"
                  name="lastName"
                  required
                  className="w-full py-3 px-4 border border-solid border-gray-400  outline-0 rounded-lg placeholder:text-[#001935]  placeholder:font-bold bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                />
            </div>

            <div className="relative">
              <div className={styles.tags_input}>
                <ul className={styles.tags}>
                  {tags.map((tag, index) => (
                    <li key={index} className={styles.tag}>
                      <span className={styles.tag_title}>{tag.name}</span>
                      <span className={styles.tag_closes_icon} id ={index}
                        onClick={()=>{ removeTags(index,tag.id)}}
                      >
                        x
                      </span>
                    </li>
                  ))}
                </ul>
                <input
                  className={styles.textInput}
                  type="text"
                  onKeyDown={event => event.key === "Enter" ? addTags(event) : null}
                  // onKeyUpCapture={showKeys}
                  placeholder="enter skills eg:git"
                  onChange={handleGetSkills}
                />
              </div>

              <div className="absolute left-0 z-20 w-full max-h-52 overflow-y-auto py-1 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800"> 
              {suggest
            
                .map((item) => (
                               
                    <p className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
                    onClick={() => handleSelectSkill(item.name,item.id)}
                    key={item.id}>
                        {item.name}
                    </p>
                
                ))
              }
              </div>
            </div>

            <div>
                <input 
                  type="number" 
                  placeholder="Phone Number"
                  name="phoneNumber"
                  required
                  className="w-full py-3 px-4 border border-solid border-gray-400  outline-0 rounded-lg placeholder:text-[#001935]  placeholder:font-bold bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                />
            </div>

            <div>
                <select 
                  placeholder="Location"
                  name="continent"
                  required
                  className="w-full py-3 px-4 border border-solid border-gray-400  outline-0 rounded-lg bg-white transition"
                >
                  <option disabled selected hidden >Location</option>
                  <option value="Africa">Africa</option>
                  <option value="Asia">Asia</option>
                  <option value="Europe">Europe</option>
                  <option value="North America">North America</option>
                  <option value="South America">South America</option>
                  <option value="Oceania/Australia">Australia/Oceania</option>
                  <option value="Antarctica">Antarctica</option>
                  
                </select>
            </div>

            <div className="">
                <textarea
                    className="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Write a short professional intro of yourself"
                    name="shortBio"
                    required
                ></textarea>
            </div>

            <div className="">
            <label className="block text-base font-base text-gray-700">File</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                    <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                    >
                        <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                    </svg>
                    <div className="flex text-sm text-gray-600">
               
                        <label
                        htmlFor="cvFile"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-[#f49038] hover:text-[#f49038] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#f49038]"
                        >
                        <span>Upload CV</span>
              <input id="cvFile" name="cvFile" type="file" onChange={handleCVChange} className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">.pdf only less than 1MB</p>
                    </div>
                </div>
                <div>
                    <p className="font-bold text-center">
                       <span >{cvName}</span>  
                    </p>
                </div>
            
            </div>

            </div>
            </div>       
      </div>
      <div className="container mt-4 mb-8">
            <div className="flex flex-col items-center gap-y-4 w-2/4 mx-auto">
             {/*  Submit button */}
            <button 
                type="submit"
                className="bg-[#001935] inline-flex items-center justify-center  text-center text-white w-fit py-2 px-24 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transiion duration-200 
                ease-in-out">
                {spinner && <svg class="inline  w-6 h-6 text-white animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>}
                {!spinner && currentStep === steps.length - 1 ? "Submit"
    :"  submitting.."}
                </button>
            {/* Back button */}
            <button 
              onClick={()=>handleClick("")}
              className={`bg-white inline-flex items-center justify-center w-fit  text-center text-white py-2 px-28 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transiion duration-200 ease-in-out ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : "" }`} style={{color: "gray"}}>
                Previous
            </button>
 
            </div>

      </div>
      </form>
    </>
  )
}

export default SelectLast