import React from 'react'
import Step1 from './Steps/Step1'
import Step2 from './Steps/Step2'
import Step3 from './Steps/Step3'
import Step4 from './Steps/Step4'
import Step5 from './Steps/Step5'
import {useDB} from '../context/DbContext'

const FormBackThigs = () => {
  const { step } = useDB();
  const getStep = () => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2: return <Step2 />;
      case 3: return <Step3 />;
      case 4: return <Step4 />;
      default: return <Step5 />;
    }
  }
  return (
   <>
    {getStep()}
   </>
  )
}

export default FormBackThigs