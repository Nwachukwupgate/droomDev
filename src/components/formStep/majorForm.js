import React,{useState,useEffect} from 'react'
import StepperPage from './stepper'
import StepperControl from './StepperControl'
import SelectLanguage from './steps/SelectFrameworks';
import SelectLast from './steps/SelectLast';
import SelectLevel from './steps/SelectLevel';
import SelectLanguages from './steps/SelectLanguages';
import SuccessPage from './steps/success';
import { useRouter } from 'next/router'

function MajorForm() {

const [currentStep, setCurrentStep] = useState(0)
const router = useRouter()
///stepForm/?welcome=${res.token.token}&isFullyReg=1
    useEffect(() =>{
        const userRegData = router.asPath.slice(10)
        if(userRegData.startsWith('welcome')){
         const parameters = new URLSearchParams(userRegData)
         var userToken = parameters.get('welcome')
         var checkFullReg = parameters.get('isFullyReg')//
        if(checkFullReg == 1){setCurrentStep(1)}
        if(checkFullReg == 2){setCurrentStep(2)}
        if(checkFullReg == 3){setCurrentStep(3)}
        if(checkFullReg == 4){setCurrentStep(4)}
        if(checkFullReg == 5){setCurrentStep(5)}
        
        }
        if (typeof window !== "undefined") {
            window.localStorage.setItem('userToken', JSON.stringify(userToken))
            var checkToken = localStorage.getItem("userToken")
        }
       history.replaceState(null, "", location.href.split("?")[0])
       if(checkToken == 'undefined' || checkToken == null || checkToken == ''){
         router.push(`/`)
       }
  
    }, [])


    const steps = [
        "Select Level",
        "Select Language",
        "Select Framework",
        "Personal Detail",
        "Success"
    ];

    const displayStep = (step) => {
        switch(step) {
            case 1: 
            return <SelectLevel 
                currentStep = {currentStep}
                steps={steps}
                handleClick = {handleClick}
                />
            case 2: 
            return <SelectLanguages 
            currentStep = 
                {currentStep}
                steps={steps}
                handleClick = {handleClick}
                />
            case 3: 
            return <SelectLanguage 
            currentStep = 
                {currentStep}
                steps={steps}
                handleClick = {handleClick}
                />
            case 4: 
            return <SelectLast 
                currentStep = {currentStep}
                steps={steps}
                handleClick = {handleClick}
                />
            case 5: 
            return <SuccessPage 
                currentStep = {currentStep}
                steps={steps}
                handleClick = {handleClick}
                />
            default:
        }
    }

    const handleClick =(direction) => {
        let newStep = currentStep;

        direction === "next" ? newStep++ : newStep--;
        // steps are within bounds

        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep)
    }
  return (
    <>
        <div className="md:w-3/5 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
            {/* Stepper */}
            <div className="container horizontal mt-5">
                <StepperPage 
                steps={steps}
                currentStep = {currentStep} 
                />
            </div>

            {/* display component */}
            <div className="mt-10 p-10">
                {displayStep(currentStep)}
            </div>

            {/* Navigation controls */}
            {/* {currentStep !== steps.length && 
                <StepperControl 
                currentStep = {currentStep}
                steps={steps}
                handleClick = {handleClick}
                />
            } */}
        </div>
    </>
  )
}

export default MajorForm