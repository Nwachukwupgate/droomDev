import React, { useEffect, useRef, useState } from 'react'


function StepperPage({steps, currentStep}) {

    const [newStep, setNewStep] = useState([]);
    const stepRef = useRef();
    const updateStep = ( stepNumber, steps ) => {
        const newSteps = [...steps]
        let count = 0;

        while(count < newSteps.length){
            //current step
            if(count === stepNumber){
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: true,
                    selected: true,
                    completed: true,
                };
                count++;
            }

            //step completed
            else if(count < stepNumber){
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: true,
                    completed: true,
                };
                count++;
            }
            //step is pending
            else{
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: false,
                    completed: false,
                };
                count++;
            }
        }
        return newSteps;
    };

    useEffect(() => {
        const stepsState  = steps.map((step, index)=>
            Object.assign({}, {
                description: step,
                completed: false,
                highlighted: index === 0 ? true : false,
                selected: index === 0 ? true : false,
            })
        )

        stepRef.current = stepsState;
        const current = updateStep(currentStep -1, stepRef.current)
        setNewStep(current)
    }, [steps, currentStep])

    const displaySteps = newStep.map((step, index) =>{
        return (
            <div key={index} className=
            {index !== newStep.length - 1 ? "w-full flex items-center" : "flex items-center "}>
                <div className="relative flex flex-col items-center text-gray-500">
                    <div className={`h-12 w-12 rounded-full transition duration-500 ease-in-out flex items-center justify-center border-2 border-gray-300 py-3
                    ${step.selected ? 
                        "bg-[#F49038]  text-white font-bold border border-[#F49038] "
                        :
                        ""
                    }`}>
                        {step.completed ? (
                            <span className="text-white font-bold text-xl">&#10003;</span>
                        ) : (index + 1)}
                    </div>
        
                    {/* description */}
                    <div className={`absolute top-0 mt-16 text-[0.6rem] md:text-xs text-center uppercase font-semibold 
                    ${step.highlighted ? "text-gray-900" : "text-gray-400" }`}>
                        {step.description}
                    </div>
                </div>
                {/* line */}
                <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
                    step.completed ? "border-[#F49038] " : "border-gray-300"
                }`}>
                </div>
            </div> 
        );
    });
    

  return (
    <>
        <div className="md:mx-4 p-2 md:p-4 flex justify-between items-center">

            {displaySteps }

        </div>
    </>
  )
}

export default StepperPage