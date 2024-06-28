import { Dispatch, FC, useState } from "react";
import React from "react";

export default function PersonalDialog() {
  const [step, setStep] = useState(1);
  return (<>
    {step === 1 ? <PersonalStep1 setStep={setStep} /> : <PersonalStep2 setStep={setStep} />}
  </>);
}
type personalD1 = {
  setStep: Dispatch<React.SetStateAction<number>>;
}
const PersonalStep1: FC<personalD1> = () => {

  return (
    <>
      <div className="flex flex-col justify-center items-center">

      </div>
    </>
  )
}

type personalD2 = {
  setStep: Dispatch<React.SetStateAction<number>>;
}
const PersonalStep2: FC<personalD2> = () => {

  return (
    <>

    </>
  )
}
